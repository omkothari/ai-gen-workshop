import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award } from "lucide-react";

const outcomes = [
  "Understand the core principles and working mechanisms of LLMs and Generative AI models",
  "Develop basic LLM-based applications using Python",
  "Apply prompt engineering and retrieval-based techniques effectively",
  "Identify suitable healthcare use cases for generative AI",
  "Critically analyze limitations such as bias, hallucination, and data privacy risks",
];

const OutcomesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="outcomes" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Expected Learning Outcomes
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Skills You'll <span className="gradient-text">Master</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Upon completion of this AI Karyashala, participants will be equipped with practical skills 
              and theoretical knowledge to excel in AI-driven research and development.
            </p>

            {/* Visual accent */}
            <div className="glass-card p-4 inline-flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium">Certificate of Completion Awarded</span>
            </div>
          </motion.div>

          {/* Right - Outcomes list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-5 flex gap-4 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">{outcome}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;