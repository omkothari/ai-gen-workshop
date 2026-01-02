import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, GraduationCap, Briefcase, Stethoscope, Building2 } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Faculty & Researchers",
    description: "Faculty members and researchers in Computer Science, Artificial Intelligence, and Data Science",
    color: "primary",
  },
  {
    icon: Users,
    title: "Students",
    description: "PhD scholars, MTech students, and senior BTech students pursuing advanced studies",
    color: "secondary",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Professionals",
    description: "Healthcare professionals interested in AI-enabled solutions and digital health",
    color: "accent",
  },
  {
    icon: Building2,
    title: "Industry Professionals",
    description: "Industry professionals working in AI, data science, and health-tech sectors",
    color: "primary",
  },
];

const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="audience" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Target Audience
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Who Should <span className="gradient-text">Attend</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            This Karyashala is designed for a diverse audience spanning academia, healthcare, and industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 flex gap-4 group hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-${audience.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <audience.icon className={`w-7 h-7 text-${audience.color}`} />
              </div>
              
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;