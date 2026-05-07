import { motion } from 'motion/react';

const moments = [
  {
    title: "Global Labs",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    span: "col-span-2 row-span-2"
  },
  {
    title: "Annual Tech-Fest",
    category: "Events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600",
    span: "col-span-1 row-span-1"
  },
  {
    title: "Sports Arena",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=600",
    span: "col-span-1 row-span-2"
  },
  {
    title: "Digital Library",
    category: "Knowledge",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=600",
    span: "col-span-1 row-span-1"
  }
];

export default function CampusSection() {
  return (
    <section id="campus" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-blue leading-[0.9] mb-6">
              Experience <br /> 
              <span className="italic text-brand-amber font-accent">Campus Life.</span>
            </h2>
            <p className="text-gray-500 font-sans">
              Beyond classrooms, we provide an environment that fosters creativity, sportsmanship, and lifelong friendships.
            </p>
          </div>
          <button className="text-brand-blue font-bold uppercase tracking-widest text-xs border-b-2 border-brand-amber pb-1 hover:text-brand-amber transition-colors">
            View Lifestyle Gallery
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-[32px] group cursor-pointer ${moment.span}`}
            >
              <img 
                src={moment.image} 
                alt={moment.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-amber mb-2 block">{moment.category}</span>
                <h4 className="text-xl font-serif font-bold">{moment.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
