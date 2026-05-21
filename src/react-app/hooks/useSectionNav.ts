import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router';

/**
 * Navigates to a section by id. If we're already on the home route it smooth
 * scrolls; otherwise it routes home and passes the target so Home can scroll
 * after it mounts.
 */
export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (id: string) => {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: id } });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [navigate, location.pathname],
  );
}
