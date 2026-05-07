import { motion } from 'motion/react';
import { Target, Users, Award, Briefcase } from 'lucide-react';

const stats = [
  { icon: <Briefcase className="text-brand-amber" />, value: "350+", label: "Recruiters" },
  { icon: <Target className="text-brand-amber" />, value: "18 LPA", label: "Highest Package" },
  { icon: <Users className="text-brand-amber" />, value: "95%", label: "Placement %" },
  { icon: <Award className="text-brand-amber" />, value: "5000+", label: "Alumni Network" },
];

export default function Stats() {
  return (
    <div id="placements" className="bg-gray-50 py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-brand-blue mb-1 font-serif">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
