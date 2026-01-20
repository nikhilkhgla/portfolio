import { Heart, Code, Github, Linkedin, Mail, MapPin, Instagram, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Nikhil Khandelwal</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Computer Science Graduate passionate about creating innovative solutions through technology. 
              Specializing in full-stack development, AI, and IoT systems.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>Noida, Uttar Pradesh, 201303</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Experience', id: 'experience' },
                { name: 'Education', id: 'education' },
                { name: 'Contact', id: 'contact' }
              ].map(({ name, id }) => (
                <button
                  key={id}
                  onClick={() => {
                    const element = document.getElementById(id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Let's Connect</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:kosinikhilkhand@gmail.com"
                className="group p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-khandelwal-3972a9217/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="https://github.com/nikhilkhgla"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-xl hover:bg-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/nikhil_khandelwal_02/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kosinikhilkhand@gmail.com&su=Hey%20Nikhil&body=Hyy%20Nikhil"
                  className="hover:text-blue-400 transition-colors"
                >
                  kosinikhilkhand@gmail.com
                </a>
              </div>
              <a href="tel:+918937879361" className="flex items-center space-x-2 hover:text-blue-500 transition">
  <Phone className="w-4 h-4" />
  <span>+91 8937879361</span>
</a>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Nikhil Khandelwal. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Inspired by Nikhil khandelwal design</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>Built with modern web technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
