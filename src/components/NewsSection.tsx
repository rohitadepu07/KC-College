import { motion } from 'motion/react';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "International Conference on Recent Advances in Engineering",
    date: "May 15, 2024",
    description: "Join us for a 3-day deep dive into the future of AI and Sustainable Engineering with global speakers.",
    category: "Academic"
  },
  {
    id: 2,
    title: "K.C. Institute Wins National Robotics Championship",
    date: "April 28, 2024",
    description: "Our Team 'RoboKnights' secured the first position at the Inter-College Tech Expo 2024.",
    category: "Achievement"
  },
  {
    id: 3,
    title: "Placement Drive 2024: Over 50+ New Recruiters Joined",
    date: "April 10, 2024",
    description: "New partnerships with leading tech giants to provide better opportunities for our final year students.",
    category: "Placement"
  }
];

export default function NewsSection() {
  return (
    <section id="news" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-brand-amber font-bold text-xs uppercase tracking-[0.2em] mb-3 block">Stay Updated</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-blue">Latest News & <br /> <span className="italic text-brand-amber">Announcements</span></h2>
          </div>
          <button className="flex items-center gap-2 text-brand-blue font-bold text-sm hover:gap-3 transition-all border-b-2 border-brand-blue/10 pb-1">
            View All News <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-blue-50 text-brand-blue p-3 rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Newspaper className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-brand-amber font-bold mb-4">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </div>
              
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors flex-grow">
                {item.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {item.description}
              </p>
              
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Read Full Story <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
