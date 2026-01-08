import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Send } from "lucide-react";

const contacts = [
  // {
  //   name: "Dr. Jignesh Bhatt",
  //   email: "jignesh.bhatt@iiitvadodara.ac.in",
  // },
  {
    name: "Dr. Sanjay Saxena",
    email: "genai_kshala2026@iiitvadodara.ac.in",
    phone:"+91 9839677691"
  },
  // {
  //   name: "Dr. Pramit Mazumdar",
  //   email: "pramit.mazumdar@iiitvadodara.ac.in",
  // },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-muted/5" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Get in Touch
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="gradient-text">Us</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about the workshop? Reach out to our organizing team.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.email}

              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/40 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {contact.name}
                  </h4>
                  <a href={`mailto:${contact.email}`} className="text-sm text-primary break-all hover:underline">
                    {contact.email}
                  </a>
                   <a href={`tel:${contact.phone}`} className="text-sm text-primary/90 break-all mt-3 block hover:underline">
                    {contact.phone}
                  </a>
                </div>
                <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
