/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import PlacementSection from './components/PlacementSection';
import CampusSection from './components/CampusSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-amber z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header />

      <main>
        <Hero />
        <Stats />

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-[40px] overflow-hidden shadow-2xl relative z-10"
                >
                  <img
                    src=".\library.jpeg"
                    alt="Students in Library"
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue/5 rounded-full -z-0 blur-3xl" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-brand-amber p-8 rounded-3xl z-20 shadow-xl"
                >
                  <div className="text-brand-blue">
                    <p className="text-4xl font-serif font-black">23+</p>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Legacy</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-blue mb-8 leading-tight">
                  A legacy of <br />
                  <span className="italic text-brand-amber font-accent">Excellence.</span>
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Founded with a vision to revolutionize technical education, K.C. Institute has grown into a bastion of knowledge and innovation in the heart of Mumbai.
                  </p>
                  <p>
                    Our curriculum is meticulously designed to meet the demands of the 4th Industrial Revolution, ensuring every graduate is not just skilled, but future-ready.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10">
                  <div>
                    <h4 className="text-brand-blue font-bold mb-2">Vision</h4>
                    <p className="text-sm text-gray-500">To be a globally recognized center of technical excellence.</p>
                  </div>
                  <div>
                    <h4 className="text-brand-blue font-bold mb-2">Mission</h4>
                    <p className="text-sm text-gray-500">Cultivating innovation through research and practical application.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Programs />
        <PlacementSection />

        <NewsSection />

        <CampusSection />

        {/* CTA Section */}
        <section id="admission" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-amber rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif text-brand-blue mb-8">
                  Ready to start your <br />
                  <span className="italic font-accent">Journey?</span>
                </h2>
                <p className="text-brand-blue/70 max-w-xl mx-auto mb-10 font-bold uppercase tracking-widest text-xs">
                  Admissions are now open for the batch of 2026-27. Limited seats available in specialized streams.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-blue-900/20">
                    Apply Now
                  </button>
                  <button className="bg-white/20 text-brand-blue border border-brand-blue/20 px-10 py-4 rounded-full font-bold backdrop-blur-sm">
                    Download Prospectus
                  </button>
                </div>
              </div>

              {/* Background Graphics */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -mr-48 -mt-48 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full -ml-48 -mb-48 blur-3xl" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Action Button */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 bg-brand-blue text-white p-4 rounded-full shadow-2xl z-40"
      >
        <Mail className="w-6 h-6" />
      </motion.button>
    </div>
  );
}

function Mail({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
