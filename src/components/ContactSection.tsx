import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'bg-forest-dark/50 border border-parchment/20 rounded-lg px-4 py-3 text-parchment placeholder-parchment/40 font-body font-light focus:outline-none focus:border-gold transition-colors w-full';

  return (
    <section id="contact" className="bg-forest py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold/80 mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-parchment">
            Begin Your Journey
          </h2>
          <p className="font-body font-light text-parchment/70 mt-4 max-w-lg mx-auto">
            Jen offers a free 15-minute discovery call for new clients. Reach out to see if herbal
            medicine is right for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="border-b border-parchment/10 pb-4 mb-4 flex items-center gap-3">
              <MapPin size={18} className="text-gold" />
              <span className="font-body text-parchment/80">
                Minneapolis, MN · Serving clients nationwide
              </span>
            </div>
            <div className="border-b border-parchment/10 pb-4 mb-4 flex items-center gap-3">
              <Phone size={18} className="text-gold" />
              <a href="tel:6129106915" className="font-body text-parchment/80 hover:text-gold transition-colors">
                612-910-6915
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <p className="font-display italic text-gold text-xl text-center">
                  Thank you. Jen will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass + ' resize-none'}
                />
                <button
                  type="submit"
                  className="font-body text-[11px] tracking-[0.2em] uppercase bg-transparent border border-parchment text-parchment px-8 py-3.5 hover:bg-gold hover:border-gold hover:text-forest-dark transition-all duration-500 w-full mt-2 rounded-sm"
                >
                  Schedule a Free Call →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
