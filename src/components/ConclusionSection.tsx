import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, ExternalLink, Mail, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const REGISTRATION_LINK = "https://forms.gle/3aaYBVuKuBgTzHmS9";

const ConclusionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="conclusion" className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-20" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Join Us
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your AI Skills?
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            The proposed AI Karyashala offers a structured, intensive, and hands-on learning experience that 
            begins with foundational knowledge of LLMs and Generative AI and culminates in practical healthcare 
            applications. By integrating theory, implementation, and ethical considerations, the workshop aims 
            to equip participants with the skills required to design and deploy impactful AI solutions responsibly.
          </p>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto"
          >
            <div className="glass-card p-4 text-center">
              <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Workshop Dates</div>
              <div className="text-xs text-muted-foreground">28 Feb – 1 Mar 2025</div>
            </div>
            <div className="glass-card p-4 text-center">
              <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Venue</div>
              <div className="text-xs text-muted-foreground">IIIT Vadodara, India</div>
            </div>
            <div className="glass-card p-4 text-center">
              <Mail className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Registration Deadline</div>
              <div className="text-xs text-muted-foreground">20th February 2025</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 font-semibold px-8 py-6 text-lg group animate-pulse-glow"
              asChild
            >
              <a href={REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
                Register Now
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Us
            </Button>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex justify-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSection;