'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Briefcase } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const heroRef = useRef(null)
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Custom Cursor
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power3.out' })
      gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 })
    }

    window.addEventListener('mousemove', moveCursor)

    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-card')
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 2, duration: 0.3 }))
      el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, duration: 0.3 }))
    })

    // Scroll Progress
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)

    const ctx = gsap.context(() => {
      // Hero text split animation
      const heroTitle = document.querySelector('.hero-main-title')
      if (heroTitle) {
        const chars = heroTitle.textContent.split('')
        heroTitle.innerHTML = chars.map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`).join('')
        gsap.from('.char', { opacity: 0, y: 100, rotationX: -90, duration: 1, stagger: 0.03, ease: 'back.out(1.7)' })
      }

      gsap.from('.hero-subtitle-text', { opacity: 0, y: 50, duration: 1, delay: 0.8, ease: 'power3.out' })
      gsap.from('.hero-description', { opacity: 0, y: 30, duration: 1, delay: 1.2, ease: 'power3.out' })
      gsap.from('.hero-cta', { opacity: 0, scale: 0, rotation: 180, duration: 1, delay: 1.5, ease: 'back.out(2)' })

      // Animated gradient
      gsap.to('.hero-bg-gradient', { backgroundPosition: '200% center', duration: 20, repeat: -1, ease: 'none' })

      // Floating elements
      gsap.to('.float-element-1', { y: -30, x: 20, rotation: 15, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.float-element-2', { y: -40, x: -15, rotation: -10, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.float-element-3', { y: -25, x: 30, rotation: 20, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })

      // Parallax
      gsap.to('.hero-bg', { scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 }, y: 300, ease: 'none' })

      // About animations
      gsap.from('.about-heading', { scrollTrigger: { trigger: '.about-heading', start: 'top 85%', toggleActions: 'play none none reverse' }, opacity: 0, scale: 0.5, rotation: -10, duration: 1, ease: 'back.out(1.7)' })
      gsap.from('.about-paragraph', { scrollTrigger: { trigger: '.about-content', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, x: -100, duration: 1, stagger: 0.2, ease: 'power3.out' })
      gsap.from('.skill-item', { scrollTrigger: { trigger: '.skills-list', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, x: -50, duration: 0.6, stagger: 0.1, ease: 'power2.out' })
      gsap.from('.toolkit-item', { scrollTrigger: { trigger: '.toolkit-section', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, scale: 0, rotation: 360, duration: 0.8, stagger: 0.15, ease: 'back.out(2)' })

      // Social icons magnetic effect
      const socialIcons = document.querySelectorAll('.social-icon-btn')
      socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => gsap.to(icon, { scale: 1.3, rotation: 15, duration: 0.3 }))
        icon.addEventListener('mouseleave', () => gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3 }))
      })

      // Projects
      gsap.from('.projects-heading', { scrollTrigger: { trigger: '.projects-heading', start: 'top 85%', toggleActions: 'play none none reverse' }, opacity: 0, y: 100, duration: 1, ease: 'power4.out' })
      gsap.from('.project-card', { scrollTrigger: { trigger: '.projects-grid', start: 'top 75%', toggleActions: 'play none none reverse' }, opacity: 0, y: 100, rotationY: -45, duration: 1, stagger: 0.2, ease: 'power3.out' })
      gsap.to('.project-image', { scrollTrigger: { trigger: '.projects-grid', start: 'top bottom', end: 'bottom top', scrub: 1 }, y: -50, ease: 'none' })
      gsap.from('.project-tag', { scrollTrigger: { trigger: '.projects-grid', start: 'top 70%', toggleActions: 'play none none reverse' }, opacity: 0, scale: 0, rotation: 180, duration: 0.5, stagger: 0.05, ease: 'back.out(3)' })

      // Experience
      gsap.from('.experience-heading', { scrollTrigger: { trigger: '.experience-heading', start: 'top 85%', toggleActions: 'play none none reverse' }, opacity: 0, x: -100, duration: 1, ease: 'power3.out' })
      gsap.from('.experience-card', { scrollTrigger: { trigger: '.experience-section', start: 'top 75%', toggleActions: 'play none none reverse' }, opacity: 0, y: 80, duration: 1, stagger: 0.3, ease: 'power3.out' })

      // Skills
      gsap.from('.skills-heading', { scrollTrigger: { trigger: '.skills-heading', start: 'top 85%', toggleActions: 'play none none reverse' }, opacity: 0, scale: 0, rotation: 360, duration: 1.5, ease: 'back.out(1.7)' })
      gsap.from('.skill-card', { scrollTrigger: { trigger: '.skills-grid', start: 'top 75%', toggleActions: 'play none none reverse' }, opacity: 0, scale: 0.3, rotation: -180, y: 100, duration: 1, stagger: 0.15, ease: 'back.out(2)' })
      gsap.to('.skill-icon', { y: -10, duration: 2, stagger: 0.2, repeat: -1, yoyo: true, ease: 'sine.inOut' })

      // Contact
      gsap.from('.contact-heading', { scrollTrigger: { trigger: '.contact-heading', start: 'top 85%', toggleActions: 'play none none reverse' }, opacity: 0, scale: 0, duration: 1, ease: 'elastic.out(1, 0.5)' })
      gsap.from('.contact-form', { scrollTrigger: { trigger: '.contact-form', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 80, rotationX: -45, duration: 1.2, ease: 'power3.out' })
      gsap.from('.form-field', { scrollTrigger: { trigger: '.contact-form', start: 'top 75%', toggleActions: 'play none none reverse' }, opacity: 0, x: -60, duration: 0.8, stagger: 0.2, ease: 'power2.out' })
      gsap.from('.submit-button', { scrollTrigger: { trigger: '.contact-form', start: 'top 75%', toggleActions: 'play none none reverse' }, opacity: 0, scale: 0, rotation: 360, duration: 1, delay: 0.8, ease: 'back.out(2)' })

      // Footer
      gsap.from('.footer-content', { scrollTrigger: { trigger: '.footer-content', start: 'top 90%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50, duration: 1, ease: 'power2.out' })

      // Card hover effects
      const cards = document.querySelectorAll('.project-card, .skill-card, .experience-card')
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -15, scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)', duration: 0.4, ease: 'power2.out' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.4, ease: 'power2.out' })
        })
      })
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('scroll', updateScrollProgress)
      ctx.revert()
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = { name: formData.get('name'), email: formData.get('email'), message: formData.get('message') }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        alert('Message sent successfully!')
        e.target.reset()
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  const projects = [
    { title: 'Fashion Ecommerce', description: 'High-performance fashion e-commerce platform with responsive design and seamless shopping experience', tags: ['React.js', 'CSS3', 'REST API'], link: 'https://highstore.netlify.app/' },
    { title: 'React Admin Dashboard', description: 'Feature-rich admin dashboard with data visualization and comprehensive management tools', tags: ['React.js', 'Material UI', 'Charts'], link: 'https://glexadmindashboard.netlify.app/' },
    { title: 'Space Theme Portfolio', description: 'Creative portfolio website with stunning space theme and smooth animations', tags: ['Next.js', 'Tailwind CSS', 'Animations'], link: 'https://meeran-omega.vercel.app/' }
  ]

  const skills = [
    { name: 'Frontend Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI/UX Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Performance Optimization', icon: Zap, color: 'from-orange-500 to-yellow-500' },
    { name: 'API Development', icon: Code, color: 'from-green-500 to-emerald-500' },
    { name: 'Version Control', icon: Github, color: 'from-red-500 to-rose-500' },
    { name: 'Responsive Design', icon: Palette, color: 'from-indigo-500 to-purple-500' }
  ]

  const toolkit = ['React.js', 'Next.js', 'Redux', 'Context API', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'RESTful APIs', 'GraphQL', 'Git', 'GitHub', 'NPM', 'Yarn', 'Webpack', 'Backstage.io', 'Figma']

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Custom Cursor */}
      <div ref={cursorRef} className="hidden lg:block fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999] mix-blend-difference" style={{ transform: 'translate(-50%, -50%)' }} />
      <div ref={cursorDotRef} className="hidden lg:block fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]" style={{ transform: 'translate(-50%, -50%)' }} />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Meeran Mohideen</h1>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="hero-bg absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
        <div className="hero-bg-gradient absolute inset-0 opacity-30" style={{ background: 'linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%)', backgroundSize: '400% 400%' }} />
        <div className="float-element-1 absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="float-element-2 absolute bottom-40 right-40 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="float-element-3 absolute top-1/2 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="hero-main-title text-5xl md:text-8xl font-bold mb-6">Frontend Developer</h1>
            <h2 className="hero-subtitle-text text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Building Seamless Experiences</h2>
            <p className="hero-description text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">Specializing in React.js, Next.js, and modern web technologies to create responsive, high-performance applications</p>
            <div className="hero-cta flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"><a href="#projects">View Projects</a></Button>
              <Button size="lg" variant="outline"><a href="#contact">Get in Touch</a></Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="about-content max-w-5xl mx-auto">
            <h2 className="about-heading text-4xl md:text-6xl font-bold mb-12 text-center">About Me</h2>
            <div className="space-y-6 mb-12">
              <p className="about-paragraph text-lg text-muted-foreground">I'm a Frontend Developer passionate about building responsive, high-performance web applications that deliver seamless user experiences.</p>
              <p className="about-paragraph text-lg text-muted-foreground">I specialize in React.js, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap crafting clean, scalable, and maintainable frontends that bring ideas to life.</p>
            </div>

            <div className="toolkit-section mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">My Toolkit</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {toolkit.map((tool, index) => (
                  <div key={index} className="toolkit-item bg-card p-4 rounded-lg text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 border">
                    <p className="text-sm font-medium">{tool}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-list mb-12">
              <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="skill-item space-y-2"><h4 className="font-bold text-primary">Frontend Development</h4><p className="text-muted-foreground">React.js, Next.js, Redux, Context API</p></div>
                <div className="skill-item space-y-2"><h4 className="font-bold text-primary">UI & Styling</h4><p className="text-muted-foreground">Tailwind CSS, Bootstrap, Material UI</p></div>
                <div className="skill-item space-y-2"><h4 className="font-bold text-primary">API Integration</h4><p className="text-muted-foreground">RESTful APIs, GraphQL</p></div>
                <div className="skill-item space-y-2"><h4 className="font-bold text-primary">Version Control & Build Tools</h4><p className="text-muted-foreground">Git, GitHub, NPM, Yarn, Webpack</p></div>
                <div className="skill-item space-y-2"><h4 className="font-bold text-primary">Developer Platforms</h4><p className="text-muted-foreground">Backstage.io (IDP)</p></div>
                <div className="skill-item space-y-2"><h4 className="font-bold text-primary">Design & Networking</h4><p className="text-muted-foreground">Figma, CCNA-certified</p></div>
              </div>
            </div>

            <p className="about-paragraph text-lg text-muted-foreground text-center mb-8">I love staying curious constantly exploring new technologies, frameworks, and tools to keep improving and adapting in the fast-paced world of web development.</p>

            <div className="flex gap-4 justify-center">
              <a href="https://www.linkedin.com/in/meeran-mohideen-455505234/" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="icon" className="social-icon-btn"><Linkedin className="h-5 w-5" /></Button></a>
              <a href="https://github.com/Meeranmk" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="icon" className="social-icon-btn"><Github className="h-5 w-5" /></Button></a>
              <Button variant="outline" size="icon" className="social-icon-btn"><Mail className="h-5 w-5" /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="projects-heading text-4xl md:text-6xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card p-6 hover:shadow-2xl transition-shadow group overflow-hidden">
                <div className="project-image h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Code className="h-16 w-16 text-primary" />
                </div>
                <h3 className="project-title text-xl font-bold mb-2">{project.title}</h3>
                <p className="project-description text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => <span key={i} className="project-tag px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{tag}</span>)}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="project-button w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">View Project <ExternalLink className="ml-2 h-4 w-4" /></Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="experience-section py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="experience-heading text-4xl md:text-6xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="experience-card p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg"><Briefcase className="h-6 w-6 text-primary" /></div>
                <div>
                  <h3 className="text-2xl font-bold">Frontend Developer</h3>
                  <p className="text-xl text-primary">Prodapt Solutions</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-bold mb-3">Internal Developer Platform (Backstage IDP) - SYSCO</h4>
                  <p className="text-muted-foreground mb-4">Built Backstage IDP from scratch, providing a centralized developer portal to streamline engineering workflows and productivity. Implemented custom features including Leaderboard, SonarQube integration, GitHub Security plugin, and Jira/Confluence plugins.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-sm rounded-full">Backstage.io</span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-sm rounded-full">TypeScript</span>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold mb-3">MVNx - AT&T</h4>
                  <p className="text-muted-foreground mb-4">Developed a scalable Next.js application with TypeScript and Shadcn UI. Built comprehensive API documentation platform using Strapi.js and enhanced real-time API integrations for improved performance.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-sm rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-sm rounded-full">TypeScript</span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-sm rounded-full">Shadcn UI</span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-sm rounded-full">Strapi.js</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="skills-heading text-4xl md:text-6xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card key={index} className="skill-card p-8 text-center hover:shadow-2xl transition-shadow">
                  <div className={`skill-icon w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="skill-name text-lg font-bold">{skill.name}</h3>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="contact-heading text-4xl md:text-6xl font-bold mb-12 text-center">Get In Touch</h2>
            <Card className="contact-form p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="form-field"><label className="block text-sm font-medium mb-2">Name</label><Input name="name" placeholder="Your name" required /></div>
                  <div className="form-field"><label className="block text-sm font-medium mb-2">Email</label><Input name="email" type="email" placeholder="your.email@example.com" required /></div>
                  <div className="form-field"><label className="block text-sm font-medium mb-2">Message</label><Textarea name="message" placeholder="Your message..." rows={5} required /></div>
                  <Button type="submit" className="submit-button w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">Send Message</Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6">
          <div className="footer-content text-center space-y-4">
            <p className="text-muted-foreground">© 2024 Meeran Mohideen. Built with Next.js, GSAP & Tailwind CSS</p>
            <p className="text-sm text-muted-foreground">Let's connect and collaborate to build something meaningful through innovation and technology!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
