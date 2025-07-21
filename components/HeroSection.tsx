
import React from 'react';
import Button from './ui/Button';

const HeroSection = () => {
  const scrollToParser = () => {
    document.getElementById('parser-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEmployer = () => {
    document.getElementById('employer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative text-center py-20 md:py-32 overflow-hidden rounded-lg bg-card border">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-primary/10 via-cyan-500/10 to-primary/10 bg-[length:200%_200%] animate-background-pan" />
       <div className="animate-fade-in-up">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          The New Standard in Talent Acquisition
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
          Stop manually filling out applications. Paste your resume and let our AI build your professional profile instantly, matching you with the perfect job opportunities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={scrollToParser} className="text-base px-8 py-3 w-full sm:w-auto h-auto shadow-custom-lg hover:shadow-primary/20">
            Get Started
          </Button>
          <Button onClick={scrollToEmployer} variant="secondary" className="text-base px-8 py-3 w-full sm:w-auto h-auto">
            I'm Hiring Talent
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
