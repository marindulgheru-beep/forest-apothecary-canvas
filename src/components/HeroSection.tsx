import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    style={{
      background: 'radial-gradient(ellipse at 50% 40%, #2D4A35 0%, #1C2B20 60%, #162218 100%)',
    }}
  >
    {/* Subtle botanical SVG pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 Q45 25 40 40 Q35 25 40 10Z' fill='none' stroke='%23F5EFE0' stroke-width='0.5'/%3E%3Cpath d='M20 50 Q30 45 40 50 Q30 55 20 50Z' fill='none' stroke='%23F5EFE0' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
      }}
    />

    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 text-center px-6 max-w-3xl mx-auto"
    >
      <motion.p
        variants={fadeUp}
        className="font-body text-[11px] tracking-[0.3em] uppercase text-sage mb-8"
      >
        Holistic Herbal Medicine · Minneapolis, MN
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="font-display text-5xl sm:text-6xl md:text-8xl italic text-parchment leading-[1.1]"
      >
        Rooted in Nature.
        <br />
        Guided by Wisdom.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="font-body font-light text-base md:text-lg text-parchment/70 max-w-lg mx-auto mt-8 leading-relaxed"
      >
        Personalized herbal consultations, diet, and lifestyle guidance —
        treating the whole person, not just the symptom.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-10">
        <a
          href="#contact"
          className="inline-block font-body text-[11px] tracking-[0.2em] uppercase border border-parchment text-parchment px-8 py-3.5 rounded-sm hover:bg-gold hover:border-gold hover:text-forest-dark transition-all duration-500"
        >
          Book a Consultation →
        </a>
      </motion.div>
    </motion.div>

    {/* Scroll indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <ChevronDown className="text-sage animate-pulse-gentle" size={24} />
    </div>
  </section>
);

export default HeroSection;
