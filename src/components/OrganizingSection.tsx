import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users } from "lucide-react";

// Committee member images - replace null with actual image imports
// Example: import chiefGuestImage from "@/assets/committee/chief-guest.jpg";

// const chiefGuest = {
//   role: "Chief Guest",
//   name: "XXX",
//   title: "XXX",
//   affiliation: "XXX",
//   image: null,
// };

const patrons = [
  {
    name: "Prof. D. Singh",
    title: "Director",
    affiliation: "IIIT Vadodara",
    image: "/organising/director.png",
  },
  {
    name: "Prof. R. Moona",
    title: "Director",
    affiliation: "IIT Gandhinagar",
    image: "/organising/rajatmoona.png",
  },
];

const convenor = {
  name: "Dr. J. S. Bhatt",
  title: "Dean RDP",
  affiliation: "IIIT Vadodara",
  image: "/organising/jignesh.png",
};

const coordinators = [
  {
    name: "Dr. Sanjay Saxena",
    affiliation: "IIIT Vadodara",
    image: "/organising/sanjay.png",
  },
  {
    name: "Dr. Pramit Mazumdar",
    affiliation: "IIIT Vadodara",
    image: "/organising/pramit.png",
  },
  // {
  //   name: "Dr. Jignesh Patel",
  //   affiliation: "IIIT Vadodara",
  //   image: "/organising/jigneshpatel.png",
  // },
];

interface MemberCardProps {
  name: string;
  title?: string;
  affiliation: string;
  image: string | null;
  size?: "large" | "medium" | "small";
}

const MemberCard = ({ name, title, affiliation, image, size = "medium" }: MemberCardProps) => {
  const sizeClasses = {
    large: "w-28 h-28 sm:w-32 sm:h-32",
    medium: "w-24 h-24 sm:w-28 sm:h-28",
    small: "w-20 h-20 sm:w-24 sm:h-24",
  };

  const textSizes = {
    large: "text-base sm:text-lg",
    medium: "text-sm sm:text-base",
    small: "text-sm",
  };

  return (
    <div className="flex flex-col items-center text-center group">
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform overflow-hidden border-2 border-primary/30`}>
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-xl sm:text-2xl font-bold text-primary">
            {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </span>
        )}
      </div>
      <h4 className={`font-display font-semibold ${textSizes[size]} text-foreground`}>{name}</h4>
      {title && <p className="text-xs sm:text-sm text-primary font-medium">{title}</p>}
      <p className="text-xs sm:text-sm text-muted-foreground">{affiliation}</p>
    </div>
  );
};

const OrganizingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="committee" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Leadership
            </span>
          </div>
        </motion.div>

        {/* Patrons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Award className="w-4 h-4" />
              Patrons
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-12">
            {patrons.map((patron) => (
              <MemberCard
                key={patron.name}
                name={patron.name}
                title={patron.title}
                affiliation={patron.affiliation}
                image={patron.image}
                size="large"
              />
            ))}
          </div>
        </motion.div>

        {/* Convenor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-wider px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Award className="w-4 h-4" />
              Convenor
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-12">
            <MemberCard
              name={convenor.name}
              title={convenor.title}
              affiliation={convenor.affiliation}
              image={convenor.image}
              size="large"
            />
          </div>
        </motion.div>

        {/* Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-secondary uppercase tracking-wider px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
              <Users className="w-4 h-4" />
              Coordinators
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-12">
            {coordinators.map((coordinator) => (
              <MemberCard
                key={coordinator.name}
                name={coordinator.name}
                affiliation={coordinator.affiliation}
                image={coordinator.image}
                size="medium"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizingSection;
