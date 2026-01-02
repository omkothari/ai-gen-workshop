import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Background & Rationale
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Bridging Theory and{" "}
            <span className="gradient-text">Practice in AI</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              In recent years, <span className="text-foreground font-medium">Large Language Models (LLMs)</span> and{" "}
              <span className="text-foreground font-medium">Generative Artificial Intelligence (GenAI)</span> have emerged as 
              transformative technologies reshaping multiple domains including natural language processing, computer vision, 
              decision support systems, and intelligent automation.
            </p>

            <p>
              Models such as transformer-based LLMs and modern generative architectures enable machines to generate 
              human-like text, synthesize data, summarize information, and assist in complex reasoning tasks.
            </p>

            <div className="glass-card p-6 border-l-4 border-l-primary my-8">
              <p className="text-foreground italic">
                Despite their rapid advancement, a significant gap exists between theoretical understanding and practical 
                implementation of these models, especially when transitioning from general-purpose AI systems to sensitive 
                and high-impact domains such as healthcare.
              </p>
            </div>

            <p>
              There is a growing need for structured training programs that first establish a strong foundation in LLMs 
              and Generative AI, followed by their responsible adaptation to healthcare applications.
            </p>
          </div>

          {/* Structure highlight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            <div className="glass-card p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-display font-semibold text-lg">Day One</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                General concepts, architectures, and Python-based implementation of LLMs and Generative AI, 
                without any domain-specific bias.
              </p>
              <div className="flex items-center gap-2 mt-4 text-primary text-sm">
                <span>Foundation Building</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="glass-card p-6 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">2</span>
                </div>
                <h3 className="font-display font-semibold text-lg">Day Two</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Healthcare-oriented applications, challenges, and best practices building upon the foundation 
                established on Day One.
              </p>
              <div className="flex items-center gap-2 mt-4 text-accent text-sm">
                <span>Healthcare Applications</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          <p className="mt-8 text-center text-muted-foreground">
            This progressive structure ensures{" "}
            <span className="text-primary font-medium">conceptual clarity</span>,{" "}
            <span className="text-secondary font-medium">technical depth</span>, and{" "}
            <span className="text-accent font-medium">practical relevance</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;