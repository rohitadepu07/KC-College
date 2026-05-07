import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PlayCircle, GraduationCap } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/src/components/ui/button';

const images = [
  "https://lh3.googleusercontent.com/p/AF1QipPln-VlgXUCl0iwF5qTyMT6Te699fOFwZ6Xb_KF=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEgf_CxUndASFKmlYDSsCWeUQN6zeteL1vbB4egORBgCWQXYVuHsq2r_O04mtvXSGTjsYhD3iLFDp9TnovTJTv_SdG_GFmytNsjt3PSfhGpJd2JAlMGIMGnt_Zuy3YOUUIMk4U=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOQ4fZH5dBw03lvscWHSC5sEYldHjBn1DFjOE9T=s1360-w1360-h1020-rw",
];

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => ["Simple", "Creative", "Developers", "Nerdy", "Innovative"],
    []
  );

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    const titleTimer = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => {
      clearInterval(imgTimer);
      clearInterval(titleTimer);
    };
  }, [titles.length]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900 min-h-[90vh] flex items-center">
      {/* Background Images with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={images[imgIndex]}
              alt="Campus Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/20 text-brand-amber text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-amber/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" />
              Admissions Open 2026-27
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.9]">
              We Are <br />
              <span className="relative flex w-full justify-center h-[1.1em] md:h-[1.2em]">
                <AnimatePresence mode="wait">
                  {titles.map((title, index) => (
                    titleNumber === index && (
                      <motion.span
                        key={index}
                        className="absolute text-brand-amber font-heading whitespace-nowrap px-4 underline underline-offset-8 decoration-4 decoration-brand-amber/30"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{
                          type: "spring",
                          stiffness: 150,
                          damping: 20
                        }}
                      >
                        {title}
                      </motion.span>
                    )
                  ))}
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-lg text-blue-50/80 mb-10 max-w-2xl leading-relaxed font-sans font-medium mx-auto">
              Empowering students with technical excellence, innovation-led learning, and values that define a successful global career.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" className="gap-2">
                Explore Programs <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-white border-white/20 hover:bg-white/10">
                <PlayCircle className="w-5 h-5" /> Watch Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
