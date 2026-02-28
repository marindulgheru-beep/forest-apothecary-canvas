import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const testimonials = [
  { quote: "At age 35, I was diagnosed unexplained infertility, with PCOS, and suspected endometriosis. After 20 cycles, 6 with letrozole, I was told my next option was IUI and/or IVF. I was frustrated with the siloed symptom-by-symptom approach and decided to explore more holistic options. I reached out to Jen and started working with her in early September, starting with a full diet revamp for the first month. In the second month, we introduced herbs and I had for the first time in my life a nearly pain-free period. In the third month, I saw more improvement and by month 4 I was pregnant. I also lost over 20 lbs and felt immensely physically healthier. What I valued about Jen is that she really dove deep into my individual symptoms and history and looked at my whole lifestyle, encompassing my emotional and physical health. She did not just prescribe some herbs, she was an accountability partner and cheerleader.", author: "Erin P.", location: "Mankato, MN" },
  { quote: "As a medical professional I was skeptical of using a herbalist to resolve longstanding medical issues. However I was disillusioned with the current medical practice of a cursory evaluation followed by a prescription for a costly medication. After a 3 hour evaluation — unheard of in the current health system — we devised a plan with frequent updates. In the end, my previous medical issues resolved despite the fact that they were longstanding and until her, unresolved. I would wholeheartedly endorse her to anyone seeking a new and different way to resolve their medical issues.", author: "Cynthia W.", location: "Minnetonka, MN" },
  { quote: "Jen is truly an incredible herbalist! She is so committed to helping her clients and provides in depth, thought out, specific guidance and always goes above and beyond to explain why she is recommending something. Her training is extensive and really shows in everything she does. Her intakes are thorough and I really felt heard — like I really had the chance to tell her my health story. I have sent family members to work with her, too!", author: "Kate T.", location: "Des Moines, IA" },
  { quote: "I don't know how to express how much she has changed my life! She didn't just throw some 'herbs' at me — she got to know me as a person. She needed to know my health history and what I ate, when I ate, if and how I exercised and mentally how was I handling life in general. She listened to my problems without judgment but she will be straight with you. I feel so comfortable talking to her and I can't believe how well I am doing because of her. She 100% changed my life and health and I am so grateful to have her in my corner!", author: "Kris O.", location: "White Bear Lake, MN" },
  { quote: "I came to Jen with a list of issues that my doctor wasn't interested in addressing. I didn't know where to turn and I am so glad I found her while searching for a local herbalist. She has been amazing and is very knowledgeable and thorough. She listened to all of my concerns and issues and has helped me immensely on my road to healing my body and my mind. I have learned so much from her. She is a true gem.", author: "Kim L.", location: "Faribault, MN" },
  { quote: "Working with Jen has given me the clarity I was seeking toward understanding and finding better health. She is a wealth of knowledge about Traditional Chinese Medicine, herbal remedies, diet and lifestyle, healing, and holistic health. Her level of care and attention to my case made me feel so seen and empowered toward working through my health issues to find true wellness. I consider myself very lucky to have received the opportunity to work with Jen — she is a gifted healer.", author: "Haley S.", location: "St. Paul, MN" },
  { quote: "I went to Jen for help with many issues that I had assumed were inevitable consequences of menopause — weight gain, mental fog, loss of stamina. She taught me that many of the 'healthy' foods I ate were actually very bad for me. I had to adjust to a radically different way of eating, but as a result, I lost considerable weight and was able to start running again. I highly recommend her.", author: "Karen B.", location: "St. Paul, MN" },
  { quote: "Partnering with Jen on my health, she skillfully diagnosed and solved the mystery of my headaches and migraines! Now I take zero medications and am living a happy, pain-free life. Jen is knowledgeable about herbal remedies, nutrition, holistic health, healing, and wellness. Savvy at getting to the root cause of issues. She is hard-working, thoughtful, and compassionate.", author: "Mike C.", location: "Minneapolis, MN" },
  { quote: "Jen has been an enormous help and bright light in helping me with different health issues. I came to her with digestive issues and anxiety/depression, and have gained help in those areas and many others. Through a holistic approach involving herbs, diet, and lifestyle changes we were able to integrate new energy into my routine. Through working with Jen I gained a framework for diet and lifestyle which has taken away many unknowns, and given me back trust in my choices. She is very professional and compassionate.", author: "Andrew S.", location: "Minneapolis, MN" },
  { quote: "My experience with Jen has been fantastic. She is extremely intelligent, knowledgeable, and skilled in her work. She has provided me with such excellent care. I have experienced an improvement in my symptoms quite quickly and attribute that so much to Jen's expertise and thorough assessment. I highly recommend working with Jen!", author: "Amy Y.", location: "Waconia, MN" },
  { quote: "Working with Jen was life-saving. When I first came to her I didn't even know where to start. Now, I have more energy and my PMS is almost gone. I really feel like Jen listens and understands me. I had such great results, I sent three of my children and my Mom to Jen. My whole family is healing because she makes it so easy to follow her advice and guidelines.", author: "Tressie T.", location: "Springfield, MO" },
  { quote: "It has been such a blessing working with Jen, she truly is amazing. What I love about her is the time she spent getting to know me and how my body was working. She started me on a couple of Chinese formulas, it took a little while but I am doing very well. I feel like a well-oiled machine.", author: "Barbara P.", location: "Salem, NY" },
  { quote: "Working with Jen was amazing. Her simple and straightforward approach made it easy to incorporate the individualized plan she came up with to help me manage my gluten intolerance and chronic leukemia. I feel better, have improved energy and have fewer digestive issues than before. Her care, empathy and personal attention to the details of my case are second to none.", author: "Mike B.", location: "Lake Forest, CA" },
  { quote: "From the moment I met Jen and until this day, I experienced her positive energy, authenticity, and compassion. Jen, you have found your life's calling as a healer — it is real and unwavering. You gave me light and helped me to holistically understand my body, my pain, and my ability to overcome. My body, mind, and spirit have been transformed thanks to your care and personalized service.", author: "Maria P.", location: "Mount Vernon, WA" },
  { quote: "Jen changed my life. Her initial consultation was 3 hours. We went over the time that we had discussed, but she took the extra time to learn all about my complexities and get to know me as a whole person — something rarely found in western medicine. I trust Jen so much that I referred two of the people I love most in this world to her for help.", author: "Jessica O.", location: "Springfield, MO" },
  { quote: "Jen is one of those people who you can tell is doing what they were meant to be doing. She is kind, relatable, and made me feel heard. It has been 2 months and my symptoms are nearly all gone. She gives you a bunch of tools to work with and will consistently work with you to ensure that it's not just a short-term fix. I feel very grateful that there are people like Jen who understand the mind, body & spirit approach.", author: "Emily R.", location: "Eden Prairie, MN" },
  { quote: "Working with Jen was an amazing experience! She is compassionate, caring, and easy to work with. The initial intake questionnaire she provides is detailed and thorough, and then she takes her time during the verbal consultation to ask any further questions until she is able to identify the root cause of health issues. Her dietary protocol and herbal protocol were very helpful.", author: "Jennifer S.", location: "Memphis, TN" },
  { quote: "I highly recommend Jen. When I came to her I was struggling with my health, both physically and mentally. After losing two pregnancies I was a little hopeless that I would be able to be healthy again. It has taken a lot of hard work to get to the point of gaining my health back and Jen was there every step of the way. She expertly understood what was happening with my body and engaged me in learning how to heal.", author: "Candice M.", location: "Fredericktown, OH" },
  { quote: "I've worked with Jen for 8 or 9 months. Mine has been a difficult case because of all the medications I take for diabetes, high cholesterol, and high BP. Jen was very diligent in her research to determine which herbs would help me without interfering with my meds. I made many recommended changes to my diet and was amazed at how much that changed my well-being.", author: "Anne S.", location: "Cheyenne, WY" },
  { quote: "Jen C. is down to earth, open-minded, approachable, warm, friendly, helpful, and a good listener. Not only is she a compassionate soul who truly cares about the folks she treats, she's also an outstanding herbalist with an intuition for both plants and people. We worked together for about 6 months to treat Qi Stagnation, Spleen Qi Deficiency, and depression.", author: "Rebecca K.", location: "Mt. Vernon, OH" },
  { quote: "There are three main qualities that I look for in a herbalist — solid clinical skills, a passion for continued learning, and a capacity to encourage and inspire. Jen has all three of these in abundance. I have a long history of complex and painful women's health issues, and Jen played a big part in helping me untangle what was going on. It's a joy to work with her.", author: "Cheryl E.", location: "Burlington, WA" },
  { quote: "I have been working with Jen now for almost 2 months with herbal and dietary suggestions in support of an enlarged prostate. Jen has worked very diligently and cautiously with me due to my warfarin treatment. I have seen improvements since we started and continue to experience progress using her guidance and herbal recommendations. Jen is not only knowledgeable and thorough but really cares about people.", author: "Clay S.", location: "Cheyenne, WY" },
  { quote: "My sleep, my metabolism, my mood have all increased tenfold. Her approach was both systematically complex, yet simple. I truly felt like she got a deep understanding of all aspects of my health while taking a tailored approach to my healing that was not a one-size-fits-all equation. I cannot say enough good things.", author: "Chris M.", location: "Minneapolis, MN" },
  { quote: "Jen is a compassionate listener. She is fully engaged and hears every detail about your health concerns. I couldn't have been happier with the results of my herbal program and lifestyle suggestions.", author: "Erica M.", location: "WI" },
  { quote: "Diagnosed with Hashimoto's at the age of 20, even with thyroid medication, life has been a roller coaster of symptoms I could never get under control. After almost a year of consulting with Jen on lifestyle, nutrition, and herbs, I am symptom free! Jen is abundantly knowledgeable and extremely thoughtful and compassionate. She takes her time to genuinely listen and care for her clients.", author: "Meredith C.", location: "Mountain Home, TX" },
  { quote: "My work with Jen was not only healing, but educational as well. I long struggled to manage my Lyme disease and with her guidance was able to take ownership back in my life. Her dedication to my wellbeing greatly surpassed my expectations. I now have a quality of life I once thought unfathomable. My gratitude to Jen is boundless.", author: "Miranda G.", location: "Stevens Point, WI" },
  { quote: "I probably am Jen's worst nightmare for a case. If it's green, my body will say it's blue. I love that Jen was not afraid to dive into the unknown with me and keep going until she could find ways to help. Her confidence gave me confidence. Her determination gave me determination. If you are looking for someone to see you through your journey, Jen is the one to have on your team.", author: "Holly B.", location: "Minneapolis, MN" },
  { quote: "My experience with Jen was completely positive. She is a grounded, positive, kind and caring person. She is passionate about Chinese herbalism and seeks only to find the best supports toward your health and wellbeing. Jen is a jewel — she is someone you want on your side in your pursuit of health and wellbeing. She shines!", author: "Lorraine B.", location: "Olympia, WA" },
  { quote: "Jen is an amazing herbalist. She truly listens and approaches healing from a holistic point of view with an emphasis on mind, body and soul. She is incredibly knowledgeable, has an empathetic heart, and is willing to go above and beyond to help you along your herbal journey. She is also wonderful with children — our family has been blessed to have Jen's wisdom and guidance.", author: "Stacie S.", location: "Corpus Christi, TX" },
  { quote: "I've been working with Jen over the phone for a year, and my general wellbeing has significantly improved, as have any digestive and muscular complaints that I had. I feel more balanced in terms of my energy, sleep patterns, and overall confidence that my body is performing properly for the first time in 40 years.", author: "Irene V.", location: "Memphis, TN" },
  { quote: "When I first started with Jen, I was skeptical. I had no real complaints but I had a history of injuries. Our first phone appointment told another story about my low functioning spleen and kidneys. Jen came up with a health plan that launched me into a healthier, happier life. Jen will always be a part of my health plan because of her integrity in her work.", author: "Susie C.", location: "Corpus Christi, TX" },
  { quote: "I had the privilege of consulting with Jen after having been inflicted with stubborn GI tract issues. The herbal combinations she recommended improved my digestive health dramatically. Jennifer is someone who is thoughtful in her interactions with clients and is amenable to tackling complex cases. I would recommend her to anyone struggling with health issues, even if you already feel like you've tried everything.", author: "Liz L.", location: "San Francisco, CA" },
];

const TestimonialsCarousel = () => {
  const isMobile = useIsMobile();
  const perPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const next = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prev = useCallback(() => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="bg-forest py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold/80 mb-4">
            Client Stories
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-parchment">
            Voices from the Journey
          </h2>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-2 md:-left-10 top-1/2 -translate-y-1/2 z-10 text-gold text-3xl font-light hover:text-gold-light transition-colors hidden md:block"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute -right-2 md:-right-10 top-1/2 -translate-y-1/2 z-10 text-gold text-3xl font-light hover:text-gold-light transition-colors hidden md:block"
            aria-label="Next"
          >
            ›
          </button>

          <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {visible.map((t, i) => (
              <motion.div
                key={page * perPage + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-parchment rounded-2xl p-8 md:p-10"
              >
                <span className="font-display text-7xl md:text-8xl text-gold/30 leading-none block -mb-6">
                  "
                </span>
                <p className="font-body font-light text-forest-dark/90 leading-relaxed text-[15px]">
                  {t.quote}
                </p>
                <p className="font-display italic text-sage text-lg mt-6">
                  — {t.author}, {t.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === page ? 'bg-gold' : 'bg-sage/40'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
