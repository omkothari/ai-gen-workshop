import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation } from "lucide-react";

const VenueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="venue" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Workshop Venue
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">IIIT Vadodara</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Indian Institute of Information Technology, Vadodara - Gandhinagar Campus
          </p>
        </motion.div>

        {/* Venue Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {/* Main Venue Image */}
          <div className="md:col-span-3 glass-card rounded-2xl overflow-hidden group">
            <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
              <div className="text-center h-full w-full">
                {/* <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div> */}
                {/* <p className="text-muted-foreground text-sm">Main Venue Image</p> */}
                <img src="/GANDHINAGAR.png" className="h-full w-full object-cover" alt="" />
                {/* <p className="text-xs text-muted-foreground/60 mt-1">Upload your venue photo here</p> */}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Side Images */}
          {/* <div className="flex flex-col gap-6">
            <div className="flex-1 glass-card rounded-2xl overflow-hidden group">
              <div className="h-full min-h-[140px] bg-muted/50 flex items-center justify-center relative">
                <div className="text-center p-4">
                  <p className="text-muted-foreground text-xs">Venue Image 2</p>
                </div>
              </div>
            </div>
            <div className="flex-1 glass-card rounded-2xl overflow-hidden group">
              <div className="h-full min-h-[140px] bg-muted/50 flex items-center justify-center relative">
                <div className="text-center p-4">
                  <p className="text-muted-foreground text-xs">Venue Image 3</p>
                </div>
              </div>
            </div>
          </div> */}
        </motion.div>

        {/* Venue Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="glass-card p-5 text-center">
            <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
            <h4 className="font-semibold text-sm mb-1">Address</h4>
            <p className="text-xs text-muted-foreground">
              C/o Block No.9 (IC Department), Government Engineering College, Sector 28 GIDC, Gandhinagar, Gujarat 382028
            </p>
          </div>
          <div className="glass-card p-5 text-center">
            <Navigation className="w-5 h-5 text-primary mx-auto mb-2" />
            <h4 className="font-semibold text-sm mb-1">How to Reach</h4>
            <p className="text-xs text-muted-foreground">
              Well connected by road and rail from major cities
            </p>
          </div>
          <div className="glass-card p-5 text-center sm:col-span-2 lg:col-span-1">
            <div className="w-5 h-5 text-primary mx-auto mb-2 flex items-center justify-center font-bold">✈</div>
            <h4 className="font-semibold text-sm mb-1">Nearest Airport</h4>
            <p className="text-xs text-muted-foreground">
              Sardar Vallabhbhai Patel International Airport, Ahmedabad
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
