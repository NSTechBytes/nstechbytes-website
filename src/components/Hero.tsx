
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding relative gradient-bg"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background animate-pulse" />
      
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading mb-6">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary/60">
              NS Tech Bytes
            </span>
          </h1>
          <div className="subheading max-w-2xl mx-auto mb-12 h-20">
            <Typewriter
              options={{
                strings: [
                  "Crafting elegant solutions through code.",
                  "Specializing in VS Code extensions.",
                  "Building powerful Electron apps.",
                  "Creating seamless web experiences."
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors cursor-pointer group"
          >
            Explore More{" "}
            <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
