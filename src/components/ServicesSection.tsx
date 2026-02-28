import { motion } from 'framer-motion';

const LeafIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-gold mb-4">
    <path d="M16 4C16 4 8 10 8 18C8 22 11 26 16 28C21 26 24 22 24 18C24 10 16 4 16 4Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M16 12V24" stroke="currentColor" strokeWidth="1" />
    <path d="M13 16L16 18L19 15" stroke="currentColor" strokeWidth="0.8" fill="none" />
  </svg>
);

const SproutIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-gold mb-4">
    <path d="M16 28V14" stroke="currentColor" strokeWidth="1.2" />
    <path d="M16 18C12 18 9 15 9 11C13 11 16 14 16 18Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M16 14C20 14 23 11 23 7C19 7 16 10 16 14Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <ellipse cx="16" cy="28" rx="3" ry="1" stroke="currentColor" strokeWidth="0.8" fill="none" />
  </svg>
);

const BranchDivider = () => (
  <svg viewBox="0 0 400 30" className="w-64 mx-auto mt-20 text-forest/20" fill="none">
    <path d="M0 15 Q100 5 200 15 Q300 25 400 15" stroke="currentColor" strokeWidth="1" />
    <path d="M180 15 Q185 8 195 6" stroke="currentColor" strokeWidth="0.8" />
    <path d="M220 15 Q215 8 205 6" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const services = [
  {
    icon: <LeafIcon />,
    title: 'Herbal Consultations',
    body: "Jen takes a whole-person approach to herbal care — a thorough 2–3 hour initial intake covering your health history, diet, emotional wellbeing, and lifestyle. Using Traditional Chinese Medicine principles and Western herbalism, she crafts a personalized herbal protocol unique to you.",
  },
  {
    icon: <SproutIcon />,
    title: 'Diet & Lifestyle Guidance',
    body: "Healing doesn't stop at herbs. Jen provides deep guidance on nutrition, seasonal eating, and lifestyle practices that support your body's natural ability to restore balance and vitality.",
  },
];

const ServicesSection = () => (
  <section id="services" className="bg-parchment py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div {...fadeInView} className="text-center">
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
          What We Offer
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-forest">
          The Path to Whole Health
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-parchment-dark border border-forest/10 rounded-2xl p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
          >
            {s.icon}
            <h3 className="font-display text-2xl md:text-3xl italic text-forest">{s.title}</h3>
            <p className="font-body font-light text-text-dark/80 leading-relaxed mt-4">{s.body}</p>
            <a
              href="#contact"
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mt-6 inline-block hover:text-forest transition-colors duration-500"
            >
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>

      <BranchDivider />
    </div>
  </section>
);

export default ServicesSection;
