import { motion } from "framer-motion";
import { Calendar, Clock, BookOpen, Brain, AlertCircle, ExternalLink, Users, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const REGISTRATION_DEADLINE = new Date("2026-02-20T23:59:59");
const WORKSHOP_START = "28th February 2026";
const WORKSHOP_END = "1st March 2026";
const REGISTRATION_LINK = "https://forms.gle/3aaYBVuKuBgTzHmS9";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = REGISTRATION_DEADLINE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Glowing orbs - enhanced */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-8 mb-8"
          >
            {/* Logo 1 Placeholder */}
            <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-xl flex items-center justify-center p-3">
              <div className="w-full h-full bg-muted/30 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                Logo 1
              </div>
            </div>
            {/* Logo 2 Placeholder */}
            <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-xl flex items-center justify-center p-3">
              <div className="w-full h-full bg-muted/30 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                Logo 2
              </div>
            </div>
            {/* Logo 3 Placeholder */}
            <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-xl flex items-center justify-center p-3">
              <div className="w-full h-full bg-muted/30 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                Logo 3
              </div>
            </div>
          </motion.div>

          {/* Badge with Workshop Dates */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {WORKSHOP_START} – {WORKSHOP_END}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Karyashala on</span>
            <br />
            <span className="gradient-text">Large Language Models</span>
            <br />
            <span className="text-foreground">& Generative AI</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
          >
            Foundations, Python Implementation, and Healthcare Applications
          </motion.p>

          {/* Limited Seats + Registration Deadline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mb-8"
          >
            {/* Limited Seats Banner */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/40">
                <Users className="w-4 h-4 text-destructive" />
                <span className="text-sm font-bold text-destructive">
                  Limited Seats Available
                </span>
                <Sparkles className="w-4 h-4 text-destructive animate-pulse" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
                <AlertCircle className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-foreground">
                  Registration Closes: <span className="text-primary">20th February 2026</span>
                </span>
              </div>
            </div>

            {/* Countdown Timer - Enhanced */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="glass-card px-3 py-3 sm:px-5 sm:py-4 min-w-[65px] sm:min-w-[80px] border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold font-display gradient-text">{timeLeft.days}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium">Days</div>
              </div>
              <span className="text-2xl text-primary font-bold">:</span>
              <div className="glass-card px-3 py-3 sm:px-5 sm:py-4 min-w-[65px] sm:min-w-[80px] border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold font-display gradient-text">{timeLeft.hours}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium">Hours</div>
              </div>
              <span className="text-2xl text-primary font-bold">:</span>
              <div className="glass-card px-3 py-3 sm:px-5 sm:py-4 min-w-[65px] sm:min-w-[80px] border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold font-display gradient-text">{timeLeft.minutes}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium">Mins</div>
              </div>
              <span className="text-2xl text-primary font-bold">:</span>
              <div className="glass-card px-3 py-3 sm:px-5 sm:py-4 min-w-[65px] sm:min-w-[80px] border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold font-display gradient-text">{timeLeft.seconds}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium">Secs</div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto"
          >
            <div className="glass-card p-5 text-center group hover:border-primary/40 transition-all duration-300">
              <Calendar className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold font-display gradient-text">2</div>
              <div className="text-sm text-muted-foreground">Days</div>
            </div>
            <div className="glass-card p-5 text-center group hover:border-primary/40 transition-all duration-300">
              <Clock className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold font-display gradient-text">16</div>
              <div className="text-sm text-muted-foreground">Total Hours</div>
            </div>
            <div className="glass-card p-5 text-center group hover:border-primary/40 transition-all duration-300">
              <BookOpen className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold font-display gradient-text">10</div>
              <div className="text-sm text-muted-foreground">Lecture Hours</div>
            </div>
            <div className="glass-card p-5 text-center group hover:border-primary/40 transition-all duration-300">
              <Brain className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold font-display gradient-text">6</div>
              <div className="text-sm text-muted-foreground">Hands-on Hours</div>
            </div>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">5 Keynote Speakers</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Hands-on Labs</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
              <Brain className="w-4 h-4 text-secondary" />
              <span className="text-sm text-muted-foreground">Healthcare AI Focus</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Expert Instructors</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 font-semibold px-10 py-7 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
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
              className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold px-10 py-7 text-lg"
              onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Schedule
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
