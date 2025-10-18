'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    // Hero animations
    const ctx = gsap.context(() => {
      // Hero title animation
      gsap.from('.hero-title', {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.2
      })

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      })

      gsap.from('.hero-cta', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 1,
        ease: 'back.out(1.7)'
      })

      // Parallax effect for hero background
      gsap.to('.hero-bg', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: 300,
        ease: 'none'
      })

      // About section heading animation
      gsap.from('.about-heading', {
        scrollTrigger: {
          trigger: '.about-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
      })

      // About paragraphs animation
      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      })

      // Social icons animation
      gsap.from('.social-icon', {
        scrollTrigger: {
          trigger: '.social-icons',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(2)'
      })

      // Projects heading animation
      gsap.from('.projects-heading', {
        scrollTrigger: {
          trigger: '.projects-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)'
      })

      // Project cards animation
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })

      // Project card images animation
      gsap.from('.project-image', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      })

      // Project titles animation
      gsap.from('.project-title', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      })

      // Project descriptions animation
      gsap.from('.project-description', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.2,
        ease: 'power2.out'
      })

      // Project tags animation
      gsap.from('.project-tag', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(2)'
      })

      // Project buttons animation
      gsap.from('.project-button', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      })

      // Skills heading animation
      gsap.from('.skills-heading', {
        scrollTrigger: {
          trigger: '.skills-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        rotationY: 90,
        duration: 1,
        ease: 'power3.out'
      })

      // Skills cards animation
      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.5,
        rotation: -15,
        duration: 0.7,
        stagger: 0.12,
        ease: 'back.out(2)'
      })

      // Skill icons animation
      gsap.from('.skill-icon', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        rotation: 180,
        scale: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'back.out(2)'
      })

      // Skill names animation
      gsap.from('.skill-name', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.3,
        ease: 'power2.out'
      })

      // Contact heading animation
      gsap.from('.contact-heading', {
        scrollTrigger: {
          trigger: '.contact-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: 'back.out(1.7)'
      })

      // Contact form animation
      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      })

      // Form fields animation
      gsap.from('.form-field', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      })

      // Submit button animation
      gsap.from('.submit-button', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 0.6,
        ease: 'back.out(2)'
      })

      // Footer animation
      gsap.from('.footer-text', {
        scrollTrigger: {
          trigger: '.footer-text',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      })

      // Continuous scroll animations - parallax elements
      gsap.to('.project-image', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: -30,
        ease: 'none'
      })

      // Hover animations for project cards
      document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })

      // Hover animations for skill cards
      document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card.querySelector('.skill-icon'), {
            rotation: 360,
            scale: 1.2,
            duration: 0.5,
            ease: 'back.out(2)'
          })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card.querySelector('.skill-icon'), {
            rotation: 0,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(2)'
          })
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

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
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
      tags: ['Next.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses and sentiment analysis',
      tags: ['React', 'Node.js', 'OpenAI'],
      link: '#'
    },
    {
      title: 'Portfolio Generator',
      description: 'Dynamic portfolio website generator with customizable themes and animations',
      tags: ['Next.js', 'GSAP', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and notifications',
      tags: ['React', 'Firebase', 'Material-UI'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with forecasts, maps, and historical data',
      tags: ['Vue.js', 'Chart.js', 'API'],
      link: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics platform for social media insights with data visualization',
      tags: ['React', 'D3.js', 'Express'],
      link: '#'
    }
  ]

  const skills = [
    { name: 'Frontend Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI/UX Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Performance Optimization', icon: Zap, color: 'from-orange-500 to-yellow-500' },
    { name: 'API Development', icon: Code, color: 'from-green-500 to-emerald-500' },
    { name: 'Database Design', icon: Code, color: 'from-red-500 to-rose-500' },
    { name: 'Animation & Motion', icon: Zap, color: 'from-indigo-500 to-purple-500' }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="hero-bg absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              Creative Developer
            </h1>
            <h2 className="hero-title text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              & Digital Designer
            </h2>
            <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8">
              Crafting beautiful, performant web experiences with modern technologies
            </p>
            <div className="hero-cta flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="about-content max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I bring ideas to life through clean code and stunning animations.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              My approach combines technical excellence with creative problem-solving, ensuring every project not only functions flawlessly but also delights users with smooth, engaging interactions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="project-card p-6 hover:shadow-xl transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Code className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card key={index} className="skill-card p-8 text-center hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{skill.name}</h3>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h2>
            <Card className="contact-form p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea name="message" placeholder="Your message..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6">
          <p className="text-center text-muted-foreground">
            © 2024 Portfolio. Built with Next.js, GSAP & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}
