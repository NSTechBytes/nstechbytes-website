
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Github, ExternalLink, Mail, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { MouseTrailEffect, ShapeDivider, BackgroundParticles, InteractiveSvgBackground } from "@/components/VisualEffects";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <main className="bg-background min-h-screen bg-grid relative overflow-hidden">
      <MouseTrailEffect />
      <BackgroundParticles />
      <InteractiveSvgBackground />
      <Navigation />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="min-h-screen section-padding relative">
        <ShapeDivider />
        <motion.div {...fadeInUp}>
          <h2 className="heading mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto glass p-8 rounded-lg animated-border glow sparkle">
            <p className="text-lg mb-6 text-foreground/80">
              I am a passionate developer with expertise in creating tools and applications 
              that enhance developer productivity. With a strong foundation in multiple 
              programming languages and frameworks, I specialize in building VS Code extensions, 
              Electron apps, and web applications.
            </p>
            <p className="text-lg text-foreground/80">
              My journey in software development has led me to work with various technologies, 
              allowing me to create innovative solutions that solve real-world problems. 
              I'm particularly interested in developer tools, code editors, and creating 
              efficient workflows for developers.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen section-padding gradient-bg relative">
        <ShapeDivider />
        <motion.div {...fadeInUp}>
          <h2 className="heading mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "HTML View",
                description: "Preview and View HTML files inside VS Code with ease!",
                tech: ["JavaScript", "VS Code API"],
                links: { github: "https://github.com/NSTechBytes/html-view", live: "https://marketplace.visualstudio.com/items?itemName=NSTechBytes.html-view" }
              },
              {
                title: "SimplePicker",
                description: "A lightweight Windows Forms application for picking colors from your screen, with magnifier, color utilities, and global hotkey support.",
                tech: ["C#", "NSIS"],
                links: { github: "https://github.com/NSTechBytes/simple-picker", live: "https://simple-picker.pages.dev/" }
              },
              {
                title: "WeatherX",
                description: "A powerful Rainmeter plugin that provides real-time weather data, 7-day forecasts, hourly predictions, and location information using the free Open-Meteo API.",
                tech: ["C#", "PowerShell"],
                links: { github: "https://github.com/NSTechBytes/WeatherX", live: "https://github.com/NSTechBytes/WeatherX" }
              },
              {
                title: "FinalShot",
                description: "A powerful Rainmeter plugin for capturing screenshots directly from your skins with beautiful themed notifications. Supports full-screen captures, predefined regions, custom selection, window capture, multi-monitor composition, and more.",
                tech: ["C#", "PowerShell"],
                links: { github: "https://github.com/NSTechBytes/FinalShot", live: "https://github.com/NSTechBytes/FinalShot" }
              },
              {
                title: "ShotCap",
                description: "A powerful command-line screenshot capture tool for Windows. Written in C++ using the Windows API and GDI+, supports capturing screenshots from various sources with advanced features like DPI awareness, mouse pointer capture, and more.",
                tech: ["C++", "C", "NSIS"],
                links: { github: "https://github.com/NSTechBytes/ShotCap", live: "https://shotcap.pages.dev/" }
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg animated-border group card-hover glow sparkle"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.links.github} className="text-foreground/60 hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.links.live} className="text-foreground/60 hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen section-padding relative">
        <ShapeDivider />
        <motion.div {...fadeInUp}>
          <h2 className="heading mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="glass p-6 rounded-lg animated-border glow card-hover"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["C", "C++", "C#", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "Lua", "PowerShell"].map((lang) => (
                  <span key={lang} className="text-sm px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="glass p-6 rounded-lg animated-border glow card-hover"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "VS Code API", "Git", "TailwindCSS", "Shadcn UI"].map((tool) => (
                  <span key={tool} className="text-sm px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="glass p-6 rounded-lg animated-border glow card-hover"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <div className="flex flex-wrap gap-2">
                {["VS Code Extensions", "Electron Apps", "Web Development", "Rainmeter Plugins", "Desktop Apps"].map((dev) => (
                  <span key={dev} className="text-sm px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    {dev}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen section-padding gradient-bg relative">
        <ShapeDivider />
        <motion.div {...fadeInUp}>
          <h2 className="heading mb-12">Contact</h2>
          <div className="max-w-xl mx-auto text-center glass p-8 rounded-lg animated-border glow sparkle">
            <p className="text-lg mb-8 text-foreground/80">
              Interested in collaborating or have a project in mind? Feel free to reach out!
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <motion.a 
                href="https://github.com/NSTechBytes" 
                className="text-foreground/60 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} className="floating" />
              </motion.a>
              <motion.a 
                href="https://youtube.com/@nstechbytes?si=dbN-RAz9DIwdvDue" 
                className="text-foreground/60 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube size={24} className="floating" />
              </motion.a>

              <motion.a 
                href="mailto:nstechbytes@gmail.com" 
                className="text-foreground/60 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} className="floating" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Index;
