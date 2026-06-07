import { useEffect, useState, useRef } from "react";
import { Camera, Film, Heart, MapPin, ChevronDown, ArrowUpRight, Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";

function FadeIn({ children, delay = 0, y = 20, className = "" }: { children: React.ReactNode, delay?: number, y?: number, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const galleryImages = [
    "https://cdn0.weddingwire.in/vendor/5594/3_2/960/jpg/abhinavsuyalphotography-1617348407-2542825202537899458-268068401_15_95594-169744150983807.jpeg",
    "https://cdn0.weddingwire.in/vendor/5594/3_2/960/jpg/abhinavsuyalphotography-1647320988-2794253433692957779-268068401_15_95594-169744418969501.jpeg",
    "https://cdn0.weddingwire.in/vendor/5594/3_2/960/jpg/abhinavsuyalphotography-1692785163-3175634577045512255-268068401_15_95594-169744138345918.jpeg",
    "https://cdn0.weddingwire.in/vendor/5594/3_2/960/jpg/abhinavsuyalphotography-1687531506-3131563711060096298-268068401_15_95594-169744139892262.jpeg",
    "https://cdn0.weddingwire.in/vendor/5594/3_2/960/jpg/abhinavsuyalphotography-1617348407-2542825202512731231-268068401_15_95594-169744151621439.jpeg",
    "https://cdn0.weddingwire.in/vendor/5594/3_2/960/jpg/abhinavsuyalphotography-1615103070-2523989946926087421-268068401_15_95594-169744154697675.jpeg",
    "https://cdn0.weddingwire.in/vendor/5594/3_2/960/jpg/abhinavsuyalphotography-1611799142-2496274589989423956-268068401_15_95594-169744157570524.jpeg",
    "https://cdn0.weddingwire.in/vendor/5594/3_2/960/jpg/abhinavsuyalphotography-1588317755-2299298443755397975-268068401_15_95594-169744161382730.jpeg",
    "https://cdn0.weddingwire.in/vendor/5594/3_2/960/jpg/abhinavsuyalphotography-1657160066-2876789607283265657-268068401_15_95594-169744441643028.jpeg",
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans selection:bg-brand-bronze selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-brand-border/0 ${
          scrolled ? "bg-brand-cream/95 backdrop-blur-md shadow-sm border-brand-border/100 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} data-testid="link-home">
            <span className="font-serif text-xl italic text-brand-charcoal leading-none">Abhinav Suyal</span>
            <span className="font-sans text-[9px] tracking-[4px] uppercase text-brand-bronze mt-1">Photography</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {["Portfolio", "Services", "Reviews", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="font-sans text-[11px] uppercase tracking-[2px] text-brand-charcoal hover:text-brand-bronze transition-colors"
                data-testid={`link-${item.toLowerCase()}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-charcoal">
            <img 
              // REPLACE WITH YOUR PHOTO
              src="https://cdn0.weddingwire.in/vendor/5594/3_2/1280/jpg/abhinavsuyalphotography-1617348407-2542825202537899458-268068401_15_95594-169744150983807.jpeg" 
              alt="Abhinav Suyal Photography Hero"
              className="w-full h-full object-cover opacity-80 animate-ken-burns origin-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,10,2,0.7)] to-[rgba(20,10,2,0.2)]" />
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}>
            <span className="font-sans text-[10px] tracking-[4px] uppercase text-[#D4A96A] block mb-6">Delhi NCR · Est. 2004</span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="font-serif text-5xl md:text-[68px] font-light text-white leading-tight mb-6">
            Timeless Moments,<br/><em className="italic">Beautifully Told</em>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }} className="font-sans text-[13px] tracking-[3px] text-white/70 mb-10 uppercase">
            Candid · Cinematic · Destination Weddings
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            onClick={() => scrollTo('portfolio')}
            className="border border-white/60 text-white font-sans text-[11px] tracking-[2px] uppercase py-3 px-8 hover:bg-brand-bronze hover:border-brand-bronze transition-all duration-300"
            data-testid="button-view-portfolio"
          >
            View Portfolio
          </motion.button>
        </div>

        <button 
          onClick={() => scrollTo('about')} 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-gentle-bounce p-4 z-20"
          data-testid="button-scroll-down"
        >
          <ChevronDown size={24} strokeWidth={1} />
        </button>
      </section>

      {/* 3. TRUST BAR */}
      <section className="w-full bg-brand-warm border-y border-brand-border py-7 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-x-0 md:divide-x divide-brand-border/50 text-center">
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif text-3xl md:text-4xl text-brand-bronze">20+</span>
              <span className="font-sans text-[10px] uppercase tracking-[2px] text-brand-muted mt-2">Years of Experience</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif text-3xl md:text-4xl text-brand-bronze">4.8★</span>
              <span className="font-sans text-[10px] uppercase tracking-[2px] text-brand-muted mt-2">Google Rating</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif text-3xl md:text-4xl text-brand-bronze">35+</span>
              <span className="font-sans text-[10px] uppercase tracking-[2px] text-brand-muted mt-2">Google Reviews</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif text-3xl md:text-4xl text-brand-bronze">500+</span>
              <span className="font-sans text-[10px] uppercase tracking-[2px] text-brand-muted mt-2">Weddings Captured</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex flex-col items-start">
                <span className="font-sans text-[10px] uppercase tracking-[3px] text-brand-bronze mb-4">About Abhinav</span>
                <h2 className="font-serif text-4xl md:text-[44px] font-light leading-tight text-brand-charcoal">
                  Two Decades of<br/><em className="italic">Capturing Love</em>
                </h2>
                <div className="h-px w-10 bg-brand-bronze my-6"></div>
                
                <p className="font-sans text-brand-muted leading-relaxed mb-6">
                  For over 20 years, Abhinav Suyal has been the quiet presence at weddings across Delhi NCR — blending into the background, watching for the real moments. The stolen glance between the couple. The mother's tear. The baraat that erupts into chaos. These are the frames he lives for.
                </p>
                <p className="font-sans text-brand-muted leading-relaxed mb-10">
                  Based in Rohini, working across North Delhi and beyond, Abhinav offers a complete wedding documentation service — from the mehendi evening to the bidaai — handled with professionalism, warmth, and an eye honed over two decades.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {["Candid Wedding", "Traditional Photography", "Videography", "Pre-Wedding", "Destination Wedding", "Studio Shoots"].map(tag => (
                    <span key={tag} className="bg-brand-warm border border-[#D4A96A] text-brand-rust font-sans text-[10px] tracking-[1.5px] uppercase rounded-full py-1.5 px-3.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative p-2 bg-brand-cream border border-brand-bronze rounded shadow-sm">
                <img 
                  // REPLACE WITH YOUR PHOTO
                  src="https://cdn0.weddingwire.in/vendor/5594/3_2/1280/jpg/abhinavsuyalphotography-1692785163-3175634577045512255-268068401_15_95594-169744138345918.jpeg" 
                  alt="Abhinav Suyal at work" 
                  className="w-full h-full object-cover rounded-sm aspect-[4/5] md:aspect-auto md:h-[600px]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section id="portfolio" className="py-24 px-6 bg-white/50">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="font-sans text-[10px] uppercase tracking-[3px] text-brand-bronze mb-4 block">Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-charcoal">Selected Work</h2>
          </FadeIn>
          
          <div className="masonry-grid">
            {galleryImages.map((src, index) => (
              <FadeIn key={index} delay={0.05 * index} className="masonry-item">
                <div className="group relative overflow-hidden bg-brand-warm cursor-pointer rounded-sm">
                  {/* REPLACE WITH YOUR PHOTO */}
                  <img 
                    src={src} 
                    alt={`Wedding Portfolio ${index + 1}`} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/40 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white backdrop-blur-sm bg-white/10">
                        <ArrowUpRight size={20} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section id="services" className="py-24 px-6 bg-brand-warm">
        <div className="container mx-auto max-w-6xl">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-charcoal">What We Offer</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 border-l-[3px] border-brand-bronze h-full hover:shadow-[0_4px_24px_rgba(184,115,51,0.12)] transition-shadow duration-300">
                <Camera className="text-brand-bronze mb-6" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-brand-charcoal mb-3">Wedding Photography</h3>
                <p className="font-sans text-brand-muted text-sm leading-relaxed">Full-day candid and traditional coverage, from mehendi to bidaai</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 border-l-[3px] border-brand-bronze h-full hover:shadow-[0_4px_24px_rgba(184,115,51,0.12)] transition-shadow duration-300">
                <Film className="text-brand-bronze mb-6" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-brand-charcoal mb-3">Cinematography & Video</h3>
                <p className="font-sans text-brand-muted text-sm leading-relaxed">Cinematic wedding films, highlight reels, and same-day edits</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 border-l-[3px] border-brand-bronze h-full hover:shadow-[0_4px_24px_rgba(184,115,51,0.12)] transition-shadow duration-300">
                <Heart className="text-brand-bronze mb-6" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-brand-charcoal mb-3">Pre-Wedding Shoots</h3>
                <p className="font-sans text-brand-muted text-sm leading-relaxed">Outdoor, studio, and destination pre-wedding sessions</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white p-8 border-l-[3px] border-brand-bronze h-full hover:shadow-[0_4px_24px_rgba(184,115,51,0.12)] transition-shadow duration-300">
                <MapPin className="text-brand-bronze mb-6" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-brand-charcoal mb-3">Destination Weddings</h3>
                <p className="font-sans text-brand-muted text-sm leading-relaxed">We travel across India and beyond for your special day</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. REVIEWS SECTION */}
      <section id="reviews" className="py-24 px-6 bg-brand-cream border-t border-brand-border">
        <div className="container mx-auto max-w-6xl">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-[40px] font-light text-brand-charcoal">Words From Couples We've Photographed</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {[
              "Good photography, good sense of location... lovely people!!",
              "The quality and variety of the photos Abhinav captures are excellent!!",
              "Will ask you next time as well for my shoots. Thanks for your services!"
            ].map((review, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="flex flex-col text-center items-center px-4">
                  <span className="font-serif text-[80px] text-[#D4A96A] opacity-40 leading-[0.6] block mb-4">"</span>
                  <p className="font-serif italic text-lg text-brand-charcoal mb-6">"{review}"</p>
                  <div className="flex gap-1 text-brand-bronze mb-3 text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="font-sans text-[11px] text-brand-muted uppercase tracking-wider">— Google Review</span>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4} className="text-center">
            <p className="font-sans text-xs text-brand-muted">4.8 stars · 35 Google reviews · Justdial 4.8/5 · 38 votes</p>
          </FadeIn>
        </div>
      </section>

      {/* 8. CONTACT / CTA SECTION */}
      <section id="contact" className="py-32 px-6 bg-brand-contact text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <span className="font-sans text-[11px] uppercase tracking-widest text-brand-bronze mb-6 block">Book Your Date</span>
            <h2 className="font-serif text-4xl md:text-[52px] font-light italic mb-4">Let's Tell Your Story</h2>
            <p className="font-sans text-[13px] text-white/60 mb-12">Limited slots available for the 2025–26 wedding season</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a 
                href="https://wa.me/919999762091" 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-bronze text-white font-sans text-xs tracking-wider uppercase px-8 py-3.5 hover:bg-brand-rust transition-colors w-full sm:w-auto"
                data-testid="link-whatsapp"
              >
                WhatsApp Us
              </a>
              <a 
                href="tel:+919999762091" 
                className="border border-white/30 text-white font-sans text-xs tracking-wider uppercase px-8 py-3.5 hover:bg-white/10 transition-colors w-full sm:w-auto"
                data-testid="link-call"
              >
                Call Now
              </a>
            </div>
            
            <p className="font-sans text-[11px] text-white/40 tracking-wide max-w-sm mx-auto leading-relaxed">
              Pkt-21, Shop No. 63, Sector 15, Block F, Rohini, New Delhi 110089
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-10 px-6 bg-brand-footer border-t border-white/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif italic text-white/50 text-lg">Abhinav Suyal Photography</div>
          <div className="font-sans text-[11px] text-white/40 uppercase tracking-widest">© 2025 · All rights reserved</div>
          <a 
            href="https://www.instagram.com/abhinavsuyalphotography" 
            target="_blank" 
            rel="noreferrer"
            className="text-white/40 hover:text-brand-bronze transition-colors"
            data-testid="link-instagram"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
        </div>
      </footer>
    </div>
  );
}
