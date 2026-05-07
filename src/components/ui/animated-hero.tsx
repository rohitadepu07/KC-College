import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, PhoneCall, GraduationCap } from "lucide-react";
import { Button } from "@/src/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Innovative", "Global", "Technical", "Future-Ready", "Excellence"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-blue/5 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="secondary" size="sm" className="gap-4 font-bold uppercase tracking-widest text-[10px]">
              <GraduationCap className="w-4 h-4" /> Admissions Open 2024-25 <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>
          
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl max-w-4xl tracking-tight text-center font-serif text-brand-blue leading-[0.9]">
              <span>K.C. Institute is</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.1em] md:h-[1.2em]">
                &nbsp;
                <AnimatePresence mode="wait">
                  {titles.map((title, index) => (
                    titleNumber === index && (
                      <motion.span
                        key={index}
                        className="absolute italic text-brand-amber"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 100,
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

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-500 max-w-2xl text-center font-sans mt-8"
            >
              Empowering the next generation of engineers with industry-aligned 
              skills, cutting-edge research, and a legacy of academic brilliance.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button size="lg" className="gap-4" variant="secondary">
              Explore Programs <MoveRight className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4" variant="outline">
              Contact Admissions <PhoneCall className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
