"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  X as Twitter,
  Linkedin,
  Menu,
  X,
  Search,
  Users,
  Briefcase,
  Building2,
  CheckCircle,
  Phone,
  MapPin,
  Zap
} from "lucide-react";

/* -------------------- DATA -------------------- */
const company = {
  name: "BiLOR CIVIL & STRUCTURAL ENGINEERING DESIGN LTD.",
  shortName: "BiLOR",
  email: "lorianandwati@gmail.com",
  phone: "0799 236 234",
  whatsapp: "0799 236 234",
  tagline: "Structurally sound, sustainably designed.",
  motto: "Building trust, Designing future.",
  location: "Hill Side Estate, Kapsoya Eldoret, Uasin Gishu County, Kenya"
};

const navLinks = [
  { title: "Home", href: "#home" },
  {
    title: "About Us",
    dropdown: [
      { name: "Our Profile", href: "#profile" },
      { name: "Mission & Vision", href: "#mission" },
      { name: "Core Values", href: "#values" },
      { name: "The Team", href: "#team" }
    ]
  },
  {
    title: "What We Do",
    href: "#services",
    dropdown: [
      { name: "Structural Design", href: "#design" },
      { name: "Project Management", href: "#pm" },
      { name: "Feasibility Studies", href: "#feasibility" },
      { name: "Site Supervision", href: "#site" },
      { name: "Consultancy", href: "#consultancy" }
    ]
  },
  { title: "Our Work", href: "#projects" },
  { title: "Blog", href: "#blog" },
  { title: "Contact Us", href: "#contact" }
];

const servicesData = [
  { title: "Structural Design & Analysis", desc: "Safe, efficient, and sustainable structural solutions.", icon: Building2 },
  { title: "Project Management & Coordination", desc: "End-to-end planning, risk mitigation, and seamless coordination.", icon: Briefcase },
  { title: "Feasibility Studies & Due Diligence", desc: "Technical, financial, and regulatory evaluation.", icon: Search },
  { title: "Expert Witness Services", desc: "Impartial technical reporting and litigation support.", icon: Users },
  { title: "Site Supervision & Engineering", desc: "Quality control, compliance, and safety assurance on site.", icon: CheckCircle },
  { title: "Consultancy", desc: "Professional civil & structural advisory for design and compliance.", icon: Zap }
];

const projectsData = [
  { name: "Residential High-Rise", type: "Housing" },
  { name: "Commercial Office Complex", type: "Commercial" },
  { name: "Industrial Facility Upgrade", type: "Industrial" },
  { name: "Institutional Building Audit", type: "Education" },
  { name: "Infrastructure Road Works", type: "Public Works" }
];

const teamData = [
  { name: "LORRIAN ANDWATI", role: "Founder / Principal Engineer" },
  { name: "Team Member 2", role: "Project Engineer" },
  { name: "Team Member 3", role: "Site Supervisor" }
];

/* -------------------- PAGE -------------------- */
export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredServices, setFilteredServices] = useState(servicesData);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setFilteredServices(
        servicesData.filter(s =>
          s.title.toLowerCase().includes(search.toLowerCase()) ||
          s.desc.toLowerCase().includes(search.toLowerCase())
        )
      );
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <main className="scroll-smooth font-sans bg-gray-50 text-gray-800">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-extrabold text-xl text-gray-800">
            <img src="/logo-placeholder.svg" alt="Logo" className="h-9 w-9" />
            {company.shortName}
          </a>

          <ul className="hidden md:flex gap-8 text-sm font-semibold">
            {navLinks.map((link, i) => (
              <li key={i} className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.title)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <a href={link.href} className="py-2 block cursor-pointer hover:text-gray-900">{link.title}</a>
                {link.dropdown && activeDropdown === link.title && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 space-y-2 p-3">
                    {link.dropdown.map((sub, j) => (
                      <a key={j} href={sub.href} className="block text-gray-700 hover:text-gray-900 text-sm">{sub.name}</a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <button className="md:hidden text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-2xl z-40 p-6 pt-24 md:hidden"
          >
            <ul className="flex flex-col gap-4 text-lg font-semibold">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-gray-900">{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="pt-28 min-h-[90vh] bg-gradient-to-r from-blue-900 via-slate-800 to-gray-900 text-white flex flex-col justify-center items-center text-center px-6 relative">
        <div className="absolute inset-0 bg-black/60" />
        <motion.div className="relative z-10 max-w-4xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="text-teal-400">{company.motto}</span>
          </h1>
          <p className="text-xl text-teal-200 mb-8">{company.tagline}</p>
          <a href="#contact" className="bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-8 rounded-full transition">Request a Consultation</a>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          <Stat icon={<Briefcase size={30} className="text-teal-500" />} label="Projects Delivered" value="120+" />
          <Stat icon={<Users size={30} className="text-teal-500" />} label="Satisfied Clients" value="80+" />
          <Stat icon={<Building2 size={30} className="text-teal-500" />} label="Years Expertise" value="10+" />
          <Stat icon={<CheckCircle size={30} className="text-teal-500" />} label="Compliance Rate" value="100%" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-teal-400">What We Do</h2>
          <p className="text-center text-slate-300 mb-12">Comprehensive services structurally sound, sustainably designed.</p>

          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              className="w-full pl-10 p-3 rounded-xl text-gray-900"
              placeholder="Search a service..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <div key={i} className="animate-pulse bg-gray-200 h-36 rounded-2xl" />)
              : filteredServices.map((s, i) => <ServiceCard key={i} service={s} />)
            }
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-700">Our Work Portfolio</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white rounded-xl border-t-8 border-teal-600 overflow-hidden shadow-md">
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                Project Image Placeholder
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{p.name}</h3>
                <span className="text-xs text-gray-500">{p.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-600">Our Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white border-t-4 border-teal-500 shadow-lg rounded-xl p-8 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-800">{t.name}</h4>
              <p className="text-sm text-gray-600">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-teal-600">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Get in touch for expert consultancy or project inquiries.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={24} className="text-teal-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Our Location</h4>
                <p className="text-gray-600">{company.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={24} className="text-teal-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Email Us</h4>
                <p className="text-gray-600">{company.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={24} className="text-teal-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Call Us</h4>
                <p className="text-gray-600">{company.phone} (Also WhatsApp)</p>
              </div>
            </div>
          </div>
        </div>

        <form className="grid gap-4 bg-white p-8 rounded-xl shadow-lg border">
          <h3 className="text-2xl font-bold mb-4 text-teal-600">Send an Inquiry</h3>
          <input className="p-3 border rounded-lg focus:ring-teal-500" placeholder="Your Full Name" />
          <input className="p-3 border rounded-lg focus:ring-teal-500" placeholder="Your Email" type="email" />
          <input className="p-3 border rounded-lg focus:ring-teal-500" placeholder="Subject / Project Title" />
          <textarea className="p-3 border rounded-lg h-32 focus:ring-teal-500" placeholder="Your Message" />
          <button type="submit" className="bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-500 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-3 text-teal-400">{company.shortName} Engineering</h4>
            <p className="text-gray-400 text-sm mb-4">{company.motto}</p>
            <p className="text-gray-500 text-xs">© 2025 {company.name}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-300">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {navLinks.map((link, i) => (
                <li key={i}><a href={link.href} className="hover:text-teal-400">{link.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-300">Contact</h4>
            <p className="text-sm text-gray-400">
              <span className="block">{company.phone}</span>
              <span className="block">{company.email}</span>
              <span className="block">{company.location.split(',')[0]}</span>
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-300">Connect</h4>
            <div className="flex gap-4 text-gray-400">
              <Instagram size={24} className="hover:text-teal-400" />
              <Twitter size={24} className="hover:text-teal-400" />
              <Linkedin size={24} className="hover:text-teal-400" />
            </div>
            <p className="text-gray-500 text-xs mt-4">Structurally sound, sustainably designed.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* -------------------- SERVICE CARD COMPONENT -------------------- */
function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <motion.div whileHover={{ y: -6 }} className="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:shadow-xl">
      {Icon && <Icon className="text-teal-600 mb-4" size={28} />}
      <h3 className="font-bold text-lg mb-2 text-gray-800">{service.title}</h3>
      <p className="text-sm text-gray-600">{service.desc}</p>
    </motion.div>
  );
}

/* -------------------- STAT COMPONENT -------------------- */
function Stat({ icon, label, value }) {
  return (
    <div className="text-center">
      <div className="flex justify-center text-teal-600 mb-2">{icon}</div>
      <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
