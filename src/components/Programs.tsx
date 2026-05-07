import { motion } from 'motion/react';
import { Cpu, Globe, Laptop, Database, PenTool, Lightbulb, ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Computer Science",
    description: "Master the logic behind digital transformations and high-performance computing.",
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Science & AI",
    description: "Leverage big data and artificial intelligence to solve complex real-world challenges.",
    color: "bg-purple-50 text-purple-600 border-purple-100"
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Information Technology",
    description: "Build robust software infrastructures and modern web ecosystems.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Electronics & TC",
    description: "Learn high-speed data communications and precision electronic systems.",
    color: "bg-orange-50 text-orange-600 border-orange-100"
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Design Engineering",
    description: "Bridge the gap between aesthetics and functional mechanical superiority.",
    color: "bg-rose-50 text-rose-600 border-rose-100"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation Hub",
    description: "Incubate startups and transform visionary ideas into industry-ready prototypes.",
    color: "bg-amber-50 text-amber-600 border-amber-100"
  }
];

export default function Programs() {
  return (
    <section id="academics" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-brand-blue mb-4"
          >
            Academic Programs
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose from our diverse range of engineering disciplines designed to turn your passion into a profession.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[32px] border ${program.color} transition-all cursor-pointer group`}
            >
              <div className="mb-6 inline-block p-4 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-serif">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {program.description}
              </p>
              <button className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

