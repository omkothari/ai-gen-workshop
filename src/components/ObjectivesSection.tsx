import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, BookOpen, Code, Lightbulb, Heart, Shield } from "lucide-react";

const objectives = [
  {
    icon: BookOpen,
    title: "Foundational Understanding",
    description: "Provide a strong foundational understanding of Large Language Models and Generative AI architectures.",
  },
  {
    icon: Code,
    title: "Python Implementation",
    description: "Train participants in Python-based implementation of LLMs and generative models.",
  },
  {
    icon: Lightbulb,
    title: "Practical Techniques",
    description: "Introduce practical techniques such as prompt engineering and retrieval-based generation.",
  },
  {
    icon: Heart,
    title: "Healthcare Applications",
    description: "Demonstrate the application of LLMs and Generative AI in healthcare scenarios.",
  },
  {
    icon: Shield,
    title: "Ethical Awareness",
    description: "Sensitize participants to ethical, safety, privacy, and regulatory challenges associated with healthcare AI.",
  },
];

const ObjectivesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="objectives" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-muted/5" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Workshop Objectives
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What You'll <span className="gradient-text">Achieve</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            By the end of this intensive two-day Karyashala, participants will have gained comprehensive 
            knowledge and practical skills in LLMs and Generative AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <objective.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-display font-semibold text-lg mb-2">
                {objective.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {objective.description}
              </p>

              {/* Number indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                <span className="text-xs font-bold text-muted-foreground">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;