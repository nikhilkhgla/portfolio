import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Full-screen fixed WebGL cosmos that sits behind all page content.
 * - Layered starfields (depth + parallax on mouse / scroll)
 * - A slow-rotating wireframe "cosmic core"
 * - Drifting nebula dust
 * Renderer uses alpha:true so the CSS .cosmic-base gradient shows through.
 */
export default function CosmicBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Lighter-weight on small / low-core devices.
    const isSmall = window.innerWidth < 768;
    const lowPower =
      isSmall || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04030f, 0.014);

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !lowPower, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.25 : 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // ---- Starfield builder -------------------------------------------------
    const palette = [
      new THREE.Color('#ffffff'),
      new THREE.Color('#a5f3fc'),
      new THREE.Color('#c4b5fd'),
      new THREE.Color('#f5d0fe'),
      new THREE.Color('#93c5fd'),
    ];

    function makeStars(count: number, spread: number, size: number, opacity: number) {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
        const c = palette[Math.floor(Math.random() * palette.length)];
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const mat = new THREE.PointsMaterial({
        size,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      return new THREE.Points(geo, mat);
    }

    const starsFar = makeStars(lowPower ? 900 : 1500, 320, 0.7, 0.85);
    const starsNear = makeStars(lowPower ? 280 : 450, 180, 1.4, 0.95);
    const dust = makeStars(lowPower ? 120 : 250, 120, 0.45, 0.5);
    scene.add(starsFar, starsNear, dust);

    // ---- Cosmic core (wireframe) ------------------------------------------
    const coreGroup = new THREE.Group();
    const icoGeo = new THREE.IcosahedronGeometry(14, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    coreGroup.add(ico);

    const ringGeo = new THREE.TorusGeometry(24, 0.08, 12, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.35,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.4;
    coreGroup.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(30, 0.05, 12, 120),
      new THREE.MeshBasicMaterial({ color: 0xd946ef, transparent: true, opacity: 0.25 }),
    );
    ring2.rotation.x = Math.PI / 1.8;
    ring2.rotation.y = Math.PI / 6;
    coreGroup.add(ring2);

    coreGroup.position.set(26, 6, -10);
    scene.add(coreGroup);

    // ---- Interaction state -------------------------------------------------
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let scrollY = 0;

    const onMouse = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => {
      scrollY = window.scrollY || 0;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!reduceMotion && !raf) {
        clock.start();
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener('mousemove', onMouse);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    // ---- Animation loop ----------------------------------------------------
    let raf = 0;
    const clock = new THREE.Clock();

    const tick = () => {
      const t = clock.getElapsedTime();

      current.x += (target.x - current.x) * 0.04;
      current.y += (target.y - current.y) * 0.04;

      const driftScroll = scrollY * 0.0015;

      starsFar.rotation.y = t * 0.01 + current.x * 0.15;
      starsFar.rotation.x = current.y * 0.1;
      starsNear.rotation.y = t * 0.02 + current.x * 0.3;
      starsNear.rotation.x = current.y * 0.2 + driftScroll * 0.3;
      dust.rotation.y = -t * 0.015;

      coreGroup.rotation.y = t * 0.12;
      coreGroup.rotation.x = Math.sin(t * 0.2) * 0.15;
      ico.rotation.x = t * 0.1;
      coreGroup.position.y = 6 + Math.sin(t * 0.5) * 1.5 - driftScroll * 6;

      camera.position.x += (current.x * 6 - camera.position.x) * 0.05;
      camera.position.y += (-current.y * 4 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    if (reduceMotion) {
      renderer.render(scene, camera);
    } else {
      raf = requestAnimationFrame(tick);
    }

    // ---- Cleanup -----------------------------------------------------------
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh & { geometry?: THREE.BufferGeometry; material?: THREE.Material };
        mesh.geometry?.dispose?.();
        if (Array.isArray(mesh.material)) mesh.material.forEach((m) => m.dispose());
        else mesh.material?.dispose?.();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="cosmic-base fixed inset-0 -z-10 h-full w-full"
    />
  );
}
