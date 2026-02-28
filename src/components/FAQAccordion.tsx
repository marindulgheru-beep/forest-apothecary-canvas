import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What should I expect from my first consultation?',
    a: "Your initial consultation is a comprehensive 2–3 hour session. We'll go deep into your health history, current symptoms, diet, lifestyle, sleep patterns, and emotional wellbeing. Jen uses this thorough picture to craft a personalized herbal and lifestyle protocol unique to you.",
  },
  {
    q: 'Do I need to stop my current medications?',
    a: "No — and please don't without speaking to your prescribing physician. Jen works alongside your conventional care and is experienced in researching herb-drug interactions for clients on prescription medications.",
  },
  {
    q: 'How long before I see results?',
    a: "It varies by individual and condition. Some clients notice shifts within the first few weeks; others with longstanding issues may take several months. Healing is a process, not a quick fix — Jen is in it for the long haul with you.",
  },
  {
    q: 'Do you work with children?',
    a: 'Yes! Jen has worked with many families and children of various ages. Children often respond beautifully to gentle herbal support.',
  },
  {
    q: 'Do you offer remote consultations?',
    a: 'Absolutely. Jen works with clients across the United States via phone and video. Many long-term client relationships are conducted entirely remotely.',
  },
  {
    q: 'Is herbal medicine safe?',
    a: 'When practiced by a trained, certified herbalist, herbal medicine is generally very safe. Jen is certified in her field and conducts thorough research for every client to ensure the herbs she recommends are appropriate for your specific situation, health history, and any medications you may take.',
  },
  {
    q: 'What conditions do you work with?',
    a: "Jen has worked with a wide range of conditions including hormonal imbalances, PCOS, endometriosis, Hashimoto's, Lyme disease, digestive disorders, anxiety, depression, migraines, chronic pain, fatigue, and more. Her approach is rooted in identifying and addressing root causes rather than managing isolated symptoms.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-sage-light py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl md:text-6xl italic text-forest text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-16">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="border-b border-forest/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="font-display text-lg md:text-xl text-forest pr-4">{faq.q}</span>
                <span className="text-gold text-2xl font-light shrink-0 w-6 text-center transition-transform duration-300">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="font-body font-light text-forest/80 leading-relaxed pb-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
