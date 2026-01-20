import { useEffect, useState } from 'react';
import { ArrowDown, Download, ExternalLink, MapPin, Calendar, Award, Code2, Database, Palette, Server, BookOpen, Trophy, CheckCircle, Mail, Instagram, Github, Linkedin, Phone, Sparkles, Zap } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';



export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
    frameworks: ['React.js', 'Django', 'Node.js', 'Angular', 'Ionic', 'Spring Boot'],
    databases: ['MongoDB', 'SQLite', 'Firebase'],
    tools: ['Git', 'GitLab', 'Eclipse', 'Canva', 'Bootstrap']
  };

  const projects = [
  {
    title: 'Eco India E-commerce Platform',
    description:
      'Revolutionary e-commerce platform for eco-friendly products with AI-powered help desk and 3D product visualization.',
    tech: ['React.js', 'Node.js', 'Python', 'AI', '3D Modeling'],
    features: [
      'AI Help Desk',
      '3D Product Visualization',
      'Eco-friendly Focus',
      'Interactive UI'
    ],
    gradient: 'from-green-400 to-blue-500',
    link: 'https://ecoindia.vercel.app/'
  },
  {
    title: 'Anava Computing – Corporate Website',
    description:
      'Professional corporate website designed for Anava Computing with focus on branding, performance, and clean UI.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Corporate UI Design',
      'Responsive Layout',
      'Performance Optimized',
      'Client-focused Design'
    ],
    gradient: 'from-cyan-400 to-blue-600',
    link: 'https://anavacomputing.com/'
  },
  {
    title: 'Cinnamon Kitchen – Shopify Store',
    description:
      'Modern Shopify-based e-commerce store designed and customized as a Shopify Developer with a premium food brand experience.',
    tech: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Shopify Theme Customization',
      'Product & Collection Pages',
      'Mobile Responsive Design',
      'Conversion-focused UI'
    ],
    gradient: 'from-rose-400 to-orange-500',
    link: 'https://cinnamon.kitchen/'
  },
  {
    title: 'Dynamic Mobile App (Internship Project)',
    description:
      'Comprehensive cross-platform mobile application developed during internship with focus on performance and modern UI.',
    tech: ['Angular', 'Ionic', 'TypeScript'],
    features: [
      'Cross-platform',
      'Dynamic UI',
      'Responsive Design',
      'User-centric Experience'
    ],
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Todo Management App',
    description:
      'Full-featured task management application with secure authentication and complete CRUD functionality.',
    tech: ['Python', 'Django', 'SQLite', 'HTML', 'CSS'],
    features: [
      'User Authentication',
      'Task CRUD Operations',
      'Responsive UI',
      'Data Persistence'
    ],
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'Blog Publishing Platform',
    description:
      'Dynamic blogging platform enabling content creation, editing, and publishing with a clean modern interface.',
    tech: ['Django', 'HTML', 'CSS', 'SQLite'],
    features: [
      'Content Management System',
      'Dynamic Rendering',
      'Publishing Workflow',
      'Modern UI'
    ],
    gradient: 'from-orange-400 to-red-500'
  }
];
  const experience = [
  {
    title: 'Associate Intern',
    company: 'Spundan Consultancy and IT Solutions Pvt. Ltd.',
    period: 'June 2023 – July 2023',
    description:
      'Developed dynamic mobile applications with a strong focus on innovative front-end design using Angular and Ionic framework.',
    achievements: [
      'Built responsive mobile application in an intensive internship program',
      'Demonstrated strong problem-solving skills and innovative thinking',
      'Collaborated effectively with cross-functional development teams',
      'Enhanced application performance and overall user experience'
    ]
  },
  {
    title: 'Shopify Executive',
    company: 'Cinnamon Kitchen',
    period: 'November 2025 – January 2026',
    description:
      'Worked as a Shopify Executive while independently managing complete e-commerce operations.',
    achievements: [
      'Designed, customized, and managed the complete Shopify e-commerce store',
      'Created and managed product listings including titles, descriptions, images, pricing, and variants',
      'Handled end-to-end e-commerce operations such as inventory, orders, and customer flow',
      'Managed Email and WhatsApp marketing campaigns for promotions and engagement',
      'Created and managed audience segments for targeted marketing campaigns',
      'Optimized store UI/UX to improve user experience and conversions',
      'Worked with Shopify Liquid, HTML, CSS, and JavaScript'
    ]
  }
];


  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'GLA University, Mathura',
      period: 'June 2025',
      type: 'degree'
    },
    {
      degree: 'Intermediate',
      institution: 'Modern Academy International, Mathura',
      period: 'May 2021',
      type: 'intermediate'
    },
    {
      degree: 'High School',
      institution: 'M.D Jain Public School, Mathura',
      period: 'May 2019',
      type: 'school'
    }
  ];

  const activities = [
    { name: 'React JS Course', org: 'Ducat (Southex Delhi)', year: '2023' },
    { name: 'Data Structure & Algorithms Course', org: 'Apna College', year: '2023' },
    { name: 'Smart India Hackathon Participant', org: 'SIH', year: '2023' },
    { name: 'Lead Designer', org: 'Shiksha Kayakalp (GLA)', year: 'March 2024' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://mocha-cdn.com/019841bb-8d45-7ca7-80cc-8e5726577fc4/tech-background.jpg')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-indigo-900/90"></div>
          <div className="absolute inset-0 opacity-20">
            {[...Array(150)].map((_, i) => (
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mb-8">
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-full overflow-hidden">
  <img 
    src="/nikhil-kh.png" 
    alt="Nikhil Khandelwal" 
    className="w-full h-full object-cover"
  />
</div>


                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Nikhil
              </span>
              <br />
              <span className="text-white">Khandelwal</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Computer Science Graduate & Full Stack Developer
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions through technology. 
              Specializing in web development, mobile apps, AI, and IoT systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>View My Work</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
  href="/resume.pdf"
  download
  className="group px-10 py-4 border-2 border-white/40 text-white rounded-full font-bold hover:bg-white/20 hover:scale-110 hover:border-white/60 transform transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
>
  <Download className="w-5 h-5 group-hover:animate-bounce" />
  <span>Download Resume</span>
</a>

            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/nikhilkhgla"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 hover:scale-110 transform transition-all duration-300"
              >
                <Github className="w-6 h-6 text-white group-hover:text-blue-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-khandelwal-3972a9217/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 hover:scale-110 transform transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-blue-300" />
              </a>
              <a
                href="https://www.instagram.com/nikhil_khandelwal_02/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:scale-110 transform transition-all duration-300"
              >
                <Instagram className="w-6 h-6 text-white group-hover:text-white" />
              </a>
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kosinikhilkhand@gmail.com&su=Hey%20Nikhil&body=Hyy%20Nikhil"
  className="group p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 hover:scale-110 transform transition-all duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  <Mail className="w-6 h-6 text-white group-hover:text-blue-300" />
</a>

            </div>
            
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Noida, Uttar Pradesh</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://mocha-cdn.com/019841bb-8d45-7ca7-80cc-8e5726577fc4/workspace.jpg" 
                  alt="Workspace" 
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">My Development Setup</h3>
                  <p className="text-gray-200">Where innovation happens daily</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="group text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <Trophy className="w-10 h-10 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 text-lg">Hackathon</h3>
                  <p className="text-gray-600">SIH Participant</p>
                </div>
                <div className="group text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <Award className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 text-lg">Lead Designer</h3>
                  <p className="text-gray-600">Shiksha Kayakalp</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25"></div>
                <div className="relative bg-white p-8 rounded-2xl">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
                    About Me
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    I'm a passionate Computer Science graduate with extensive hands-on development experience. 
                    My journey in technology spans across web development, mobile applications, artificial intelligence, 
                    and Internet of Things (IoT) systems.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With proficiency in multiple programming languages and frameworks, I focus on creating 
                    user-centric solutions that make a real impact. My experience includes building e-commerce 
                    platforms, AI-driven applications, and innovative mobile solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: 'Effective Communication', level: 95 },
                  { skill: 'Problem Solving', level: 90 },
                  { skill: 'Team Collaboration', level: 88 },
                  { skill: 'Innovation & Creativity', level: 92 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{item.skill}</span>
                      <span className="text-gray-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Languages', items: skills.languages, icon: Code2, color: 'blue', gradient: 'from-blue-400 to-blue-600' },
              { title: 'Frameworks', items: skills.frameworks, icon: Server, color: 'purple', gradient: 'from-purple-400 to-purple-600' },
              { title: 'Databases', items: skills.databases, icon: Database, color: 'green', gradient: 'from-green-400 to-green-600' },
              { title: 'Tools', items: skills.tools, icon: Palette, color: 'orange', gradient: 'from-orange-400 to-orange-600' }
            ].map((category, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}></div>
                <div className="relative bg-white rounded-2xl p-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3 group/item">
                        <CheckCircle className={`w-5 h-5 text-${category.color}-500 group-hover/item:scale-125 transition-transform`} />
                        <span className="text-gray-700 font-medium group-hover/item:text-gray-900">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
>
  <ExternalLink className="w-4 h-4" />
  <span>View Project</span>
</a>


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">{exp.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Training & Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{activity.name}</h4>
                      <p className="text-gray-600">{activity.org}</p>
                    </div>
                    <span className="text-blue-600 font-medium">{activity.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on exciting projects or discuss opportunities? 
              I'm always open to connecting with fellow developers and innovative companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:kosinikhilkhand@gmail.com" className="text-blue-400 hover:text-blue-300">
                    kosinikhilkhand@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <span className="text-gray-300">+91 8937879361</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Instagram</h3>
                  <a href="https://www.instagram.com/nikhil_khandelwal_02/" className="text-purple-400 hover:text-purple-300">
                    @nikhil_khandelwal_02
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <span className="text-gray-300">Noida, Uttar Pradesh, 201303</span>
                </div>
              </div>
            </div>
            
           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
  <form
    action="https://formspree.io/f/mrblkpne"
    method="POST"
    className="space-y-6"
  >
    <div>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400"
      />
    </div>
    <div>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400"
      />
    </div>
    <div>
      <textarea
        name="message"
        rows={4}
        placeholder="Your Message"
        required
        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300"
    >
      Send Message
    </button>
  </form>
</div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
