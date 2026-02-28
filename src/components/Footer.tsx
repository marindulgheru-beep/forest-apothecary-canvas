const navLinks = ['Home', 'Services', 'Testimonials', 'Blog', 'FAQ', 'Contact'];

const Footer = () => (
  <footer className="bg-forest-deep py-16 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <p className="font-display text-2xl text-parchment">World Tree Herbals®</p>
      <p className="font-body font-light text-parchment/50 text-sm mt-1">
        Rooted in Nature. Guided by Wisdom.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-body text-[10px] tracking-[0.2em] uppercase text-parchment/50 hover:text-gold transition-colors duration-500"
          >
            {link}
          </a>
        ))}
      </div>

      <p className="font-body text-parchment/40 text-xs leading-relaxed max-w-3xl mx-auto mt-8">
        The statements on this website have not been evaluated by the Food and Drug Administration.
        The products and information on this website are not intended to diagnose, treat, cure or
        prevent any disease. The information on this website is for informational &amp; educational
        purposes only and is not intended as a substitute for advice from your licensed physician or
        other healthcare professionals. Only a licensed physician can diagnose, treat, and prescribe
        medicines for illness or disease. An Herbalist is not a licensed physician and neither
        diagnoses nor treats disease. If you have a pre-existing medical condition, take prescription
        or over the counter medications, or are pregnant or nursing, please speak with your
        healthcare provider before making any herbal, diet or lifestyle changes.
      </p>

      <p className="font-body text-parchment/30 text-xs mt-6">
        © 2024 World Tree Herbals® · All Rights Reserved · Minneapolis, MN
      </p>
    </div>
  </footer>
);

export default Footer;
