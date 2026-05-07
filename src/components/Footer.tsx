import { motion } from 'motion/react';
import { GraduationCap, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/circle-logo.png"
                alt="KC College Logo"
                className="w-16 h-16 object-contain"
                referrerPolicy="no-referrer"
              />
              <img
                src="/naac-a-grade.png"
                alt="NAAC A Grade"
                className="w-20 h-20 object-contain ml-2"
                referrerPolicy="no-referrer"
              />
              <div>
                <h2 className="text-2xl font-serif leading-none">K.C. Institute</h2>
                <p className="text-[10px] uppercase tracking-widest text-blue-300 font-bold">Of Technology & Research</p>
              </div>
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed mb-8">
              Empowering global citizens through excellence in technical education and research since 2001. A premier institute affiliated with the University of Mumbai.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-full bg-white/5 hover:bg-brand-amber transition-colors group">
                  <Icon className="w-5 h-5 text-blue-100 group-hover:text-brand-blue" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-serif">Quick Links</h4>
            <ul className="space-y-4 text-blue-100/70 text-sm">
              <li><a href="#" className="hover:text-brand-amber transition-colors">Apply for Admission</a></li>
              <li><a href="#" className="hover:text-brand-amber transition-colors">Examination Portal</a></li>
              <li><a href="#" className="hover:text-brand-amber transition-colors">Student Grievance Cell</a></li>
              <li><a href="#" className="hover:text-brand-amber transition-colors">Placement Cell</a></li>
              <li><a href="#" className="hover:text-brand-amber transition-colors">R&D Activities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-serif">Contact Info</h4>
            <div className="space-y-6 text-sm text-blue-100/70">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-brand-amber shrink-0" />
                <p>K.C. Educational Campus, Near Mith Bunder, Thane (E), Mumbai - 400603</p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-brand-amber shrink-0" />
                <p>+91 22 2540 3103 / 2542 3444</p>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-brand-amber shrink-0" />
                <p>info@kccemsr.edu.in</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <h4 className="text-lg font-bold mb-8 font-serif">Newsletter</h4>
            <p className="text-sm text-blue-100/70 mb-6">Receive updates on events and admissions.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-amber w-full"
              />
              <button className="bg-brand-amber text-brand-blue px-4 py-3 rounded-xl font-bold">
                Join
              </button>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-blue-300 font-bold">
          <p>© 2024 K.C. Institute of Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
