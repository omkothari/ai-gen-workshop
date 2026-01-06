import { Brain, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-muted/20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display font-bold text-lg block">
                GenAI-Health Karyashala 2025
              </span>
              <span className="text-xs text-muted-foreground">
                LLMs & Generative AI Workshop
              </span>
            </div>
          </div>

          {/* Center info */}
          <div className="text-center text-sm text-muted-foreground">
            <p>Organized by</p>
            <p className="font-medium text-foreground">
              Indian Institute of Information Technology, Vadodara
            </p>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>for AI Education</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          © 2025 GenAI-Health Karyashala. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;