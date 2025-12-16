"use client";
import "./globals.css"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  
  Zap,
  
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
  {
    title: "Structural Design and Analysis",
    desc: "Safe, efficient, and sustainable structural solutions for buildings and infrastructure.",
    icon: Building2
  },
  {
    title: "Project Management and Coordination",
    desc: "End-to-end planning, scheduling, coordination, and risk control.",
    icon: Briefcase
  },
  {
    title: "Feasibility Studies and Due Diligence",
    desc: "Technical, financial, and regulatory feasibility evaluation.",
    icon: Search
  },
  {
    title: "Expert Witness Services",
    desc: "Independent engineering reports and litigation support.",
    icon: Users
  },
  {
    title: "Site Supervision and Engineering",
    desc: "On-site quality control, compliance, and safety supervision.",
    icon: CheckCircle
  },
  {
    title: "Consultancy",
    desc: "Professional civil & structural engineering advisory services.",
    icon: Zap
  }
]
function ServicesSection() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredServices, setFilteredServices] = useState(servicesData);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setFilteredServices(
        servicesData.filter(service =>
          service.title.toLowerCase().includes(search.toLowerCase()) ||
          service.desc.toLowerCase().includes(search.toLowerCase())
        )
      );
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);}

const projectsData = [
  {
    name: "Residential High-Rise",
    type: "Housing",
    images: [
      "/teams/Resd5.jpeg",
      "/teams/Resd7.jpeg",
      "/teams/Resdental1.jpeg",
      "/teams/Resdi21.jpeg",
    
      
     
    ],
  },
  {
    name: "Commercial Office Complex",
    type: "Commercial",
    images: [
      "/teams/commercial.jpeg",
    
   
    ],
  },
  {
    name: "Industrial Facility Upgrade",
    type: "Industrial",
    images: [
        "/teams/Sanaprt2.jpeg",
          "/teams/SanApart.jpeg",
    ],
  },
  

];
type AutoSliderProps = {
  images: string[];    // array of image URLs
  interval?: number;   // optional interval in ms
};

const AutoSlider = ({ images, interval = 5000 }: AutoSliderProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative h-40 w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Project"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
};

const teamData = [
  {
    name: "LORRIAN ANDWATI",
    role: "Founder / Principal Engineer",
    image: "/teams/lorian.jpg"
  },
  {
     name: "LORRIAN ANDWATI",
    role: "Founder / Principal Engineer",
    image: "/teams/evans.jpeg"
  },
  {
   name: "LORRIAN ANDWATI",
    role: "Founder / Principal Engineer",
    image: "/teams/lorian.jpg"
  }
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

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ================= DATA ================= */
const coreValues = [
  "Quality",
  "Innovation",
  "Safety",
  "Integrity",
  "Client Satisfaction",
];


  return (
    <main className="scroll-smooth font-sans bg-gray-50 text-gray-800">

      {/* Navbar */}
      {/* ================= TOP INFO BAR ================= */}
<div className="fixed top-0 w-full z-[60] bg-slate-900 text-gray-200 text-sm">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

    {/* Left: Contact Info */}
    <div className="flex items-center gap-6">
      <div className="hidden sm:flex items-center gap-2">
        <Mail size={14} className="text-teal-400" />
        <span>{company.email}</span>
      </div>

      <div className="flex items-center gap-2">
        <Phone size={14} className="text-teal-400" />
        <span>{company.phone}</span>
      </div>
    </div>

    {/* Right: Social Icons */}
    <div className="flex items-center gap-4">
      <a href="#" className="hover:text-teal-400 transition">
        <Instagram size={16} />
      </a>
      <a href="#" className="hover:text-teal-400 transition">
        <Twitter size={16} />
      </a>
      <a href="#" className="hover:text-teal-400 transition">
        <Linkedin size={16} />
      </a>
    </div>
  </div>
</div>

{/* ================= MAIN NAVBAR ================= */}
<nav className="fixed top-8 w-full bg-white/95 backdrop-blur z-50 border-b shadow-md">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

    {/* Logo */}
    <a
      href="#home"
      className="flex items-center gap-2 font-extrabold text-xl text-gray-800"
    >
      <img src="/teams/logo.jpeg" alt="Logo" className="h-9 w-9" />
      {company.shortName}
    </a>

    {/* Desktop Nav */}
    <ul className="hidden md:flex gap-8 text-sm font-semibold">
      {navLinks.map((link, i) => (
        <li
          key={i}
          className="relative"
          onMouseEnter={() => link.dropdown && setActiveDropdown(link.title)}
          onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
        >
          <a
            href={link.href}
            className="py-2 block cursor-pointer hover:text-teal-600 transition"
          >
            {link.title}
          </a>

          {/* Dropdown */}
          {link.dropdown && activeDropdown === link.title && (
            <div className="absolute top-full left-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-gray-200 space-y-2 p-3">
              {link.dropdown.map((sub, j) => (
                <a
                  key={j}
                  href={sub.href}
                  className="block px-2 py-1 rounded-md text-gray-700 hover:bg-teal-50 hover:text-teal-600 text-sm transition"
                >
                  {sub.name}
                </a>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-gray-800"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* ================= MOBILE MENU ================= */}
  {menuOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-2xl z-40 p-6 pt-28 md:hidden"
    >
      <ul className="flex flex-col gap-6 text-lg font-semibold">
        {navLinks.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 hover:text-teal-600 transition"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Contact */}
      <div className="mt-10 border-t pt-6 space-y-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-teal-500" />
          <span>{company.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-teal-500" />
          <span>{company.phone}</span>
        </div>

        <div className="flex gap-4 pt-4">
          <Instagram size={20} className="text-gray-500 hover:text-teal-500" />
          <Twitter size={20} className="text-gray-500 hover:text-teal-500" />
          <Linkedin size={20} className="text-gray-500 hover:text-teal-500" />
        </div>
      </div>
    </motion.div>
  )}
</nav>


     {/* Hero */}
<section
  id="home"
  className="pt-28 min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden text-white"
>
  {/* Background Image */}
  <img
    src="/teams/Home.jfif"
    alt="Structural Engineering Design"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-slate-900/80 to-gray-900/80" />

  {/* Content */}
  <motion.div
    className="relative z-10 max-w-4xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
      <span className="text-teal-400">{company.motto}</span>
    </h1>

    <p className="text-lg sm:text-xl text-teal-200 mb-8">
      {company.tagline}
    </p>

    <a
      href="#contact"
      className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-8 rounded-full transition"
    >
      Request a Consultation
    </a>
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

      <section id="services" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-teal-400">
          What We Do
        </h2>
        <p className="text-center text-slate-300 mb-12">
          Comprehensive civil & structural engineering services
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" />
          <input
            className="w-full pl-12 pr-4 py-3 rounded-xl
              bg-white text-gray-900
              placeholder-gray-500
              border border-teal-500/40
              focus:outline-none focus:ring-2 focus:ring-teal-500
              shadow-md"
            placeholder="Search our engineering services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-200 h-40 rounded-2xl"
              />
            ))
          ) : filteredServices.length > 0 ? (
            filteredServices.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <service.icon className="text-teal-600 mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.desc}
                </p>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-400">
              No services match your search.
            </p>
          )}
        </div>
      </div>
    </section>

     <section id="projects" className="py-24 bg-gray-50 px-6">
  <h2 className="text-3xl font-bold text-center mb-12 text-teal-700">
    Our Work Portfolio
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {projectsData.map((p, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-xl border-t-8 border-teal-600 overflow-hidden shadow-md"
      >
        <AutoSlider images={p.images} interval={5000} />

        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800">{p.name}</h3>
          <span className="text-xs text-gray-500">{p.type}</span>
        </div>
      </motion.div>
    ))}
  </div>
</section>
  {/* ================= ABOUT US ================= */}
      <section id="about" className="relative py-28 bg-white px-6 overflow-hidden">
        
        {/* Background Accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40" />

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mb-20 relative z-10"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm uppercase tracking-widest text-teal-600 font-semibold"
          >
            Who We Are
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-extrabold text-gray-900 mt-4"
          >
            BiLOR Civil & Structural Engineering Design Ltd
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-600 leading-relaxed"
          >
            We are a professional civil and structural engineering firm delivering
            end-to-end engineering solutions — from concept design to execution —
            across residential, commercial, and industrial developments.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">

          {/* Company Overview */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gray-50 rounded-2xl p-8 shadow-md border-l-4 border-teal-600"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Company Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">
              BiLOR Civil and Structural Engineers provide comprehensive structural
              engineering services including analysis, design, detailing, and
              project management. Our work is grounded in technical excellence,
              regulatory compliance, and sustainable engineering principles.
            </p>
          </motion.div>

          {/* Identity Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-teal-600 flex flex-col justify-center"
          >
            <p className="text-teal-700 font-semibold text-lg italic mb-2">
              “Structurally sound, sustainably designed.”
            </p>
            <span className="text-sm text-gray-500">
              Company Tagline
            </span>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To deliver innovative, safe, and sustainable structural engineering
              solutions that exceed client expectations while upholding quality,
              integrity, and collaborative teamwork.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be a leading and well-recognized structural engineering firm in
              Kenya, distinguished by excellence, creativity, and long-term
              contribution to the built environment.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Core Values</h3>
            <div className="flex flex-wrap gap-3">
              {coreValues.map((value, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm rounded-full bg-teal-100 text-teal-700 font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Motto */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 bg-teal-700 rounded-2xl p-10 text-center shadow-xl"
          >
            <p className="text-2xl font-semibold text-white">
              “Building trust, Designing the future.”
            </p>
          </motion.div>
        </div>
      </section>
 {/* Team */}
<section id="team" className="py-24 max-w-6xl mx-auto px-6">
  <h2 className="text-3xl font-bold text-center mb-12 text-teal-600">
    Our Core Team
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {teamData.map((t, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.03 }}
        className="bg-white border-t-4 border-teal-500 shadow-lg rounded-xl p-8 text-center"
      >
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-teal-500 shadow-md">
          <img
            src={t.image}
            alt={t.name}
            className="w-full h-full object-cover"
          />
        </div>

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
