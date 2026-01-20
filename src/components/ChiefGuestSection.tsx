import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const chiefGuest = {
  role: "Chief Guest",
  name: "Prof. K. P. Singh",
  title: "Former Director IIT BHU",
  affiliation: "Varanasi",
  image: null,
};

const ChiefGuestSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="chief-guest" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-yellow-500 uppercase tracking-wider">
              Guest of Honor
            </span>
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
            Chief <span className="text-yellow-500">Guest</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 flex items-center justify-center mb-5 hover:scale-105 transition-transform overflow-hidden border-4 border-yellow-500/40 shadow-xl shadow-yellow-500/20">
              {chiefGuest.image ? (
                <img src={chiefGuest.image} alt={chiefGuest.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-3xl sm:text-4xl font-bold text-yellow-500">
                  {chiefGuest.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-1">
              {chiefGuest.name}
            </h3>
            <p className="text-base sm:text-lg text-yellow-500 font-medium mb-1">
              {chiefGuest.title}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              {chiefGuest.affiliation}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChiefGuestSection;
