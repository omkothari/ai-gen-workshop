import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Star, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Speaker images - replace these placeholders with actual image imports
// Example: import speakerImage from "@/assets/speakers/speaker-name.jpg";

const speakers = [
  {
    name: "Dr. Sanjay Saxena",
    affiliation: "Indian Institute of Information Technology, Vadodara, India",
    isKeynote: false,
    image: "/organising/sanjay.png", // Replace with: "/speakers/sanjay-saxena.jpg" or import
  },
  {
    name: "Dr. Jignesh S. Bhatt",
    affiliation: "Indian Institute of Information Technology, Vadodara, India",
    isKeynote: false,
    image: "/organising/jignesh.png",
  },
  {
    name: "Dr. Pramit Mazumdar",
    affiliation: "Indian Institute of Information Technology, Vadodara, India",
    isKeynote: false,
    image:"/organising/pramit.png"
  },
  {
    name: "Dr. Dhiraj Bhatia",
    affiliation: "Indian Institute of Technology, Gandhinagar, India",
    isKeynote: true,
    image: "/dhirajBhatia.png",
  },
  {
    name: "Prof. Uttama Lahiri",
    affiliation: "Indian Institute of Information Technology, Vadodara, India",
    isKeynote: true,
    image: "/prof-uttama.jpeg",
  },
  {
    name: "Dr. Jignesh Patel",
    affiliation: "Indian Institute of Information Technology, Vadodara, India",
    isKeynote: false,
    image: "/organising/jigneshpatel.png",
  },
  {
    name: "Dr. Prateek Prasanna",
    affiliation: "Stony Brook University, USA",
    isKeynote: true,
    image: "/prateekprasanna.jpeg",
  },
  
  {
    name: "Dr. Bhupendra Kumar",
    affiliation: "Indian Institute of Information Technology, Vadodara, India",
    isKeynote: false,
    image: "/organising/bhupendra.png",
  },
  // {
  //   name: "Dr. Hamed Akabari",
  //   affiliation: "Santa Clara University, USA",
  //   isKeynote: true,
  //   image: null,
  // },
  // {
  //   name: "Dr. Anahita Fathi Kazerooni",
  //   affiliation: "University of Pennsylvania, USA",
  //   isKeynote: true,
  //   image: null,
  // },
];

const keynoteSpeakers = speakers.filter(s => s.isKeynote);
const regularSpeakers = speakers.filter(s => !s.isKeynote);

const SpeakersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speakers" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-muted/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
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
              Distinguished Faculty
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Speakers & <span className="gradient-text">Keynotes</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from world-renowned experts in AI, machine learning, and healthcare informatics from leading institutions.
          </p>
        </motion.div>

        {/* Keynote Speakers */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <h3 className="font-display text-xl font-semibold">Keynote Speakers</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {keynoteSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 group hover:border-yellow-500/30 transition-all duration-300 relative"
              >
                {/* Keynote badge */}
                <div className="absolute -top-3 right-4">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-primary-foreground border-0">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Keynote
                  </Badge>
                </div>

                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform overflow-hidden">
                  {speaker.image ? (
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-yellow-500">
                      {speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  )}
                </div>

                <h4 className="font-display font-semibold text-lg text-center mb-2">
                  {speaker.name}
                </h4>

                <div className="flex items-start justify-center gap-2 text-muted-foreground text-sm text-center">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{speaker.affiliation}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Regular Speakers */}
        <div>
          <h3 className="font-display text-xl font-semibold text-center mb-8">Resourse Person</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {regularSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="glass-card p-4 group hover:border-primary/30 transition-all duration-300"
              >
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform overflow-hidden">
                  {speaker.image ? (
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-lg font-bold text-primary">
                      {speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  )}
                </div>

                <h4 className="font-semibold text-sm text-center mb-1">
                  {speaker.name}
                </h4>

                <p className="text-muted-foreground text-xs text-center leading-relaxed">
                  {speaker.affiliation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;