import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Presentation, Code2, Lightbulb, MessageSquare, Wrench, Database } from "lucide-react";

const pedagogyItems = [
  { icon: Presentation, label: "Concept-driven Lectures" },
  { icon: Code2, label: "Live Coding & Guided Tutorials" },
  { icon: Lightbulb, label: "Use-case-based Demonstrations" },
  { icon: MessageSquare, label: "Interactive Discussions & Problem-solving" },
];

const tools = [
  { icon: Code2, label: "Python Programming Language" },
  { icon: Wrench, label: "Open-source LLM Frameworks" },
  { icon: Lightbulb, label: "Generative AI Libraries" },
  { icon: Database, label: "De-identified Healthcare Datasets" },
];

const PedagogySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pedagogy" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Pedagogy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Pedagogy
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Learning <span className="gradient-text">Approach</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              The Karyashala adopts a mixed learning approach to ensure maximum engagement and knowledge retention.
            </p>

            <div className="space-y-4">
              {pedagogyItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 flex items-center gap-4 group hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Resources */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-6 h-6 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Tools & Resources
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Technical <span className="gradient-text">Stack</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Participants will work with industry-standard tools and real-world datasets during the hands-on sessions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-5 text-center group hover:border-accent/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <tool.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-sm font-medium">{tool.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PedagogySection;