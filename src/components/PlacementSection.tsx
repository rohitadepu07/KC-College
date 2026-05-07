import { Sparkles } from "@/src/components/ui/sparkles";
import { InfiniteSlider } from "@/src/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/src/components/ui/progressive-blur";
import { motion } from "framer-motion";

const logos = [
  {
    id: "infosys",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/960px-Infosys_logo.svg.png",
    className: "w-48"
  },
  {
    id: "tcs",
    src: "https://vectorseek.com/wp-content/uploads/2023/09/Tata-Consultancy-Services-TCS-Logo-Vector.svg-.png",
    className: "w-48"
  },
  {
    id: "jaro",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Jaro_Education_Logo.png",
    className: "w-48"
  },
  {
    id: "lti",
    src: "https://companieslogo.com/img/orig/LTI.BO-36240cc7.png?t=1720244492",
    className: "w-48"
  },
  {
    id: "neosoft",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVNLi31vk07ph46b2udwF39paaQ1Wf9MBYg&s",
    className: "w-48"
  },
  {
    id: "eclinicalworks",
    src: "https://5.imimg.com/data5/MQ/SQ/ZG/SELLER-11160368/opensource-database-support-providers-250x250.png",
    className: "w-48"
  },
  { name: "Sankey Solutions", color: "#000000" },
  { name: "Freestone Infotech", color: "#00AEEF" },
  { name: "Saffo", color: "#007CC3" },
];

export default function PlacementSection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading text-brand-blue mb-4"
          >
            Our students are placed with <br />
            <span className="text-brand-amber">the following companies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Join the ranks of our alumni working at world-class organizations across the globe.
          </motion.p>
        </div>

        <div className="relative mt-12 h-[160px] w-full">
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={40}
            gap={120}
          >
            {logos.map((logo) => (
              <div
                key={logo.id || logo.name}
                className={`flex items-center justify-center px-12 ${logo.className || ""}`}
              >
                {logo.src ? (
                  <img src={logo.src} alt={logo.id || logo.name} className="w-full h-auto object-contain transition-all opacity-100" />
                ) : (
                  <span
                    className="text-3xl md:text-4xl font-bold tracking-tighter opacity-100 transition-opacity cursor-default"
                    style={{ color: logo.color }}
                  >
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </InfiniteSlider>

          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[150px] z-10"
            direction="left"
            blurIntensity={1.5}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[150px] z-10"
            direction="right"
            blurIntensity={1.5}
          />
        </div>
      </div>

      {/* Animated Sparkles Background at the bottom of the section */}
      <div className="relative h-64 w-full mt-12 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent_85%)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--color-brand-amber),transparent_70%)] before:opacity-20" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-gray-100 bg-white" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full"
          color="#f59e0b"
          size={2.5}
          speed={0.5}
          opacity={0.7}
        />
      </div>
    </section>
  );
}
