import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, BookOpen, Code, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const day1Lectures = [
  {
    title: "Introduction to Large Language Models and Healthcare",
    topics: [
      "Evolution from traditional NLP to foundation models",
      "Transformer architecture and self-attention mechanisms",
      "Pre-training, fine-tuning, and instruction alignment",
    ],
  },
  {
    title: "Fundamentals of Generative AI",
    topics: [
      "Overview of generative modeling concepts",
      "Variational Autoencoders (VAEs), Generative Adversarial Networks (GANs), and Diffusion Models",
      "Text and image generation paradigms",
    ],
  },
  {
    title: "Practical Aspects of LLMs",
    topics: [
      "Prompt engineering strategies",
      "Zero-shot, few-shot, and chain-of-thought prompting",
      "Common challenges: hallucination, bias, and robustness",
    ],
  },
  {
    title: "Python Ecosystem for LLMs and Generative AI",
    topics: [
      "Python tools and libraries for generative AI",
      "Working with open-source LLM frameworks",
      "API-based and local model deployment concepts",
    ],
  },
];

const day1Hands = [
  "Python refresher for AI workflows",
  "Building simple LLM pipelines using Python",
  "Prompt engineering experiments for text generation",
  "Text summarization and question-answering tasks",
  "Introduction to retrieval-based generation",
];

const day2Lectures = [
  {
    title: "Role of LLMs and Generative AI in Healthcare",
    topics: [
      "Clinical text analysis and summarization",
      "Medical report generation",
      "Overview of multimodal AI in healthcare",
    ],
  },
  {
    title: "Generative AI for Medical Data",
    topics: [
      "Synthetic medical text and data generation",
      "Data augmentation and privacy-preserving learning",
      "Challenges of limited and imbalanced healthcare datasets",
    ],
  },
  {
    title: "LLM-Based Clinical Decision Support Systems",
    topics: [
      "Retrieval-Augmented Generation (RAG) in healthcare",
      "Knowledge grounding using clinical guidelines",
      "Human-in-the-loop AI systems",
    ],
  },
  {
    title: "Trustworthy and Responsible Healthcare AI",
    topics: [
      "Bias, fairness, and explainability",
      "Data privacy, security, and regulatory considerations",
      "Deployment challenges in real-world clinical environments",
    ],
  },
];

const day2Hands = [
  "Clinical text summarization using LLMs",
  "Retrieval-based medical question answering",
  "Synthetic healthcare data generation",
  "Case study: LLM-assisted clinical documentation or decision support prototype",
];

const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDay, setActiveDay] = useState("day1");

  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Workshop Schedule
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Detailed <span className="gradient-text">Agenda</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each day features 5 hours of lectures and 3 hours of hands-on tutorial sessions.
          </p>
        </motion.div>

        <Tabs defaultValue="day1" className="max-w-5xl mx-auto" onValueChange={setActiveDay}>
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/30 p-1 rounded-xl">
            <TabsTrigger 
              value="day1" 
              className="font-display font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground rounded-lg py-3"
            >
              Day 1: Foundations
            </TabsTrigger>
            <TabsTrigger 
              value="day2" 
              className="font-display font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-primary data-[state=active]:text-accent-foreground rounded-lg py-3"
            >
              Day 2: Healthcare
            </TabsTrigger>
          </TabsList>

          <TabsContent value="day1" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Day 1 Header */}
              <div className="glass-card p-6 mb-8 border-l-4 border-l-primary">
                <h3 className="font-display text-xl font-bold mb-2">
                  Day 1: Foundations of LLMs, Generative AI, and Python
                </h3>
                <p className="text-muted-foreground">
                  General Focus — Building strong fundamentals without domain-specific bias
                </p>
              </div>

              {/* Lectures */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h4 className="font-display font-semibold text-lg">Lecture Sessions (5 Hours)</h4>
                </div>

                <div className="space-y-4">
                  {day1Lectures.map((lecture, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card p-5 group hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-sm">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold mb-3">{lecture.title}</h5>
                          <ul className="space-y-2">
                            {lecture.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hands-on */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-5 h-5 text-secondary" />
                  <h4 className="font-display font-semibold text-lg">Hands-on Tutorial Sessions (3 Hours)</h4>
                </div>

                <div className="glass-card p-6 border-l-4 border-l-secondary">
                  <ul className="space-y-3">
                    {day1Hands.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="day2" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Day 2 Header */}
              <div className="glass-card p-6 mb-8 border-l-4 border-l-accent">
                <h3 className="font-display text-xl font-bold mb-2">
                  Day 2: LLMs and Generative AI for Healthcare Applications
                </h3>
                <p className="text-muted-foreground">
                  Healthcare Focus — Applying foundations to real-world medical scenarios
                </p>
              </div>

              {/* Lectures */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <h4 className="font-display font-semibold text-lg">Lecture Sessions (5 Hours)</h4>
                </div>

                <div className="space-y-4">
                  {day2Lectures.map((lecture, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card p-5 group hover:border-accent/30 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-accent font-bold text-sm">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold mb-3">{lecture.title}</h5>
                          <ul className="space-y-2">
                            {lecture.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hands-on */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-5 h-5 text-primary" />
                  <h4 className="font-display font-semibold text-lg">Hands-on Tutorial Sessions (3 Hours)</h4>
                </div>

                <div className="glass-card p-6 border-l-4 border-l-primary">
                  <ul className="space-y-3">
                    {day2Hands.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ScheduleSection;