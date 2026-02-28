import { motion } from 'framer-motion';

const posts = [
  {
    category: 'Herbal Wisdom',
    title: "The Art of the Bitter: Why Your Digestive Fire Needs Herbs You've Been Avoiding",
    excerpt: "An exploration of bitter herbs and their profound role in kindling digestion, reducing inflammation, and restoring gut integrity.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto text-forest/30">
        <path d="M40 15C40 15 25 30 25 45C25 55 32 60 40 62C48 60 55 55 55 45C55 30 40 15 40 15Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M40 30V55" stroke="currentColor" strokeWidth="0.8" />
        <path d="M35 38L40 42L45 36" stroke="currentColor" strokeWidth="0.6" fill="none" />
      </svg>
    ),
  },
  {
    category: 'TCM Principles',
    title: "Qi Stagnation: The Silent Culprit Behind Mood, Pain, and Fatigue",
    excerpt: "In Traditional Chinese Medicine, stagnant Qi is one of the most common patterns we see. Here's how to recognize it — and move it.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto text-forest/30">
        <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M40 20C40 20 30 30 30 40C30 50 40 60 40 60C40 60 50 50 50 40C50 30 40 20 40 20Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="40" cy="33" r="3" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="40" cy="47" r="3" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
  {
    category: 'Seasonal Living',
    title: 'Eating With the Seasons: A Spring Renewal Guide',
    excerpt: 'Spring is the time of the Liver and Gallbladder in TCM. Learn which foods and herbs support detoxification and renewal as the earth wakes up.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto text-forest/30">
        <path d="M40 65V35" stroke="currentColor" strokeWidth="1" />
        <path d="M40 35C35 30 30 25 30 20C35 22 38 28 40 35Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <path d="M40 35C45 30 50 25 50 20C45 22 42 28 40 35Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <path d="M40 45C36 40 32 38 28 38C32 42 36 43 40 45Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <path d="M40 45C44 40 48 38 52 38C48 42 44 43 40 45Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <ellipse cx="40" cy="65" rx="6" ry="2" fill="none" stroke="currentColor" strokeWidth="0.6" />
      </svg>
    ),
  },
];

const BlogSection = () => (
  <section id="blog" className="bg-cream py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">The Blog</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-forest">
          Inside the Tree House
        </h2>
        <p className="font-body font-light text-forest/60 mt-4">
          Musings on herbs, healing, and the art of living well.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {posts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="bg-parchment rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-500"
          >
            <div className="h-48 bg-sage-light flex items-center justify-center">
              {post.icon}
            </div>
            <div className="p-8">
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">
                {post.category}
              </p>
              <h3 className="font-display text-xl md:text-2xl italic text-forest mt-2 leading-snug">
                {post.title}
              </h3>
              <p className="font-body font-light text-forest/70 text-sm leading-relaxed mt-3">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mt-4 inline-block hover:text-forest transition-colors duration-500"
              >
                Read More →
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="#"
          className="font-body text-[11px] tracking-[0.2em] uppercase text-forest hover:text-gold transition-colors duration-500 relative after:content-[''] after:absolute after:w-full after:h-px after:bg-forest/30 after:bottom-0 after:left-0 after:scale-x-100 hover:after:bg-gold after:transition-colors after:duration-500"
        >
          View All Posts →
        </a>
      </div>
    </div>
  </section>
);

export default BlogSection;
