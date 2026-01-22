"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Instagram,
  X as Twitter,
  Linkedin,
  Menu,
  X,
  Phone,
  MapPin,
  ChevronRight,
  ChevronDown,
  Building2,
  HardHat,
  Truck,
  Hammer,
  Wrench,
  Briefcase,
  Check,
  Award,
  Shield,
  Clock,
  Users,
  Quote,
  Star,
  ArrowRight,
  Send,
  FileText,
  PhoneCall,
  Calendar,
  TrendingUp,
  Globe,
  Target,
  Zap,
  CheckCircle,
  DollarSign,
  BookOpen,
  HelpCircle,
  User,
  BriefcaseBusiness,
  GraduationCap,
  PhoneIcon,
  LinkedinIcon,
  Trophy
} from "lucide-react";

// ==================== ENTERPRISE CONSTANTS ====================
const COMPANY = {
  name: "BI-LOR CONSTRUCTION & ENGINEERING LTD.",
  shortName: "BI-LOR CONSTRUCTION",
  email: "contact@bilorconstruction.com",
  phone: "+254 799 236 234",
  whatsapp: "+254 799 236 234",
  tagline: "Building Africa's Future, One Project at a Time",
  motto: "Strong Foundations. Lasting Structures.",
  location: "Hill Side Estate, Kapsoya Eldoret, Uasin Gishu County, Kenya",
  founded: "2013",
  certifications: ["NCA Level 8", "ERB Registered", "ISO 9001:2015", "OSHA Certified"]
};

const NAV_LINKS = [
  { title: "Home", href: "#home" },
  {
    title: "About Us",
    dropdown: [
      { name: "Our Story", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Mission & Values", href: "#values" },
      { name: "Certifications", href: "#certifications" }
    ]
  },
  {
    title: "Services",
    href: "#services",
    dropdown: [
      { name: "Building Construction", href: "#building" },
      { name: "Civil & Structural", href: "#civil" },
      { name: "Road & Infrastructure", href: "#infrastructure" },
      { name: "Renovations", href: "#renovations" },
      { name: "Design & Build", href: "#design-build" },
      { name: "Project Management", href: "#project-management" }
    ]
  },
  { title: "Projects", href: "#projects" },
  { title: "Why Choose Us", href: "#why-us" },
  { title: "Safety & Compliance", href: "#safety" },
  { title: "Contact", href: "#contact" }
];

const SERVICES = [
  {
    title: "Building Construction",
    description: "Residential, commercial, and mixed-use developments built to international standards.",
    icon: Building2,
    features: ["Design-Build", "Quality Materials", "Timely Delivery", "Post-Construction Support"]
  },
  {
    title: "Civil & Structural Works",
    description: "Strong, reliable infrastructure including foundations, drainage, and structural frameworks.",
    icon: HardHat,
    features: ["Foundation Engineering", "Structural Analysis", "Concrete Solutions", "Steel Framing"]
  },
  {
    title: "Road & Infrastructure",
    description: "Roadworks, paving, and public infrastructure development across urban and rural areas.",
    icon: Truck,
    features: ["Road Construction", "Drainage Systems", "Site Development", "Utilities Installation"]
  },
  {
    title: "Renovations & Remodeling",
    description: "Modern upgrades, extensions, and refurbishments for homes and businesses.",
    icon: Hammer,
    features: ["Structural Upgrades", "Modernization", "Space Optimization", "Energy Efficiency"]
  },
  {
    title: "Design & Build",
    description: "End-to-end solutions from concept design to project completion.",
    icon: Wrench,
    features: ["Architectural Design", "Engineering", "Construction", "Interior Finishing"]
  },
  {
    title: "Project Management",
    description: "Professional planning, budgeting, and supervision to ensure on-time delivery.",
    icon: Briefcase,
    features: ["Planning & Scheduling", "Budget Management", "Quality Control", "Risk Management"]
  }
];

const PROJECTS = [
  {
    name: "Eldoret Commercial Plaza",
    location: "Eldoret, Kenya",
    scope: "15-Story Office & Retail Complex",
    type: "Commercial",
    image:"/teams/Resdental1.jpeg",
    completed: "2024",
    size: "25,000 sqm"
  },
  {
    name: "Kapsoya Residential Estate",
    location: "Eldoret, Kenya",
    scope: "50 Luxury Housing Units",
    type: "Residential",
    image: "/projects/residential-estate.jpg",
    completed: "2023",
    size: "8 Acres"
  },
  {
    name: "Nairobi Industrial Park",
    location: "Nairobi, Kenya",
    scope: "Industrial Warehouse Complex",
    type: "Industrial",
    image: "/projects/industrial-park.jpg",
    completed: "2023",
    size: "10,000 sqm"
  },
  {
    name: "Western Kenya Highway",
    location: "Western Kenya",
    scope: "50km Road Construction & Upgrade",
    type: "Infrastructure",
    image: "/teams/Resd7.jpeg",
    completed: "2022",
    size: "50km"
  },
  {
    name: "Kisumu Medical Center",
    location: "Kisumu, Kenya",
    scope: "Modern Healthcare Facility",
    type: "Institutional",
    image: "/teams/Resdi21.jpeg",
    completed: "2021",
    size: "5,000 sqm"
  },
  {
    name: "Mombasa Port Expansion",
    location: "Mombasa, Kenya",
    scope: "Port Infrastructure Development",
    type: "Infrastructure",
    image: 
      "/teams/Resd5.jpeg",
      
      completed: "2020",
    size: "15,000 sqm"
  }
];

const TEAM_MEMBERS = [
  {
    name: "Dr. Benjamin Kipkorir",
    position: "Founder & CEO",
    qualifications: "PhD Civil Engineering, MBA",
    experience: "25+ years",
    expertise: ["Strategic Planning", "Project Finance", "International Standards"],
    image: "/team/ceo.jpg",
    linkedin: "#",
    email: "benjamin@bilorconstruction.com"
  },
  {
    name: "Eng. Lorraine Chebet",
    position: "Chief Operations Officer",
    qualifications: "MSc Structural Engineering, PMP",
    experience: "18+ years",
    expertise: ["Operations Management", "Quality Control", "Supply Chain"],
    image: "/team/coo.jpg",
    linkedin: "#",
    email: "lorraine@bilorconstruction.com"
  },
  {
    name: "Eng. Samuel Otieno",
    position: "Head of Projects",
    qualifications: "BSc Civil Engineering, NCA Level 8",
    experience: "15+ years",
    expertise: ["Project Management", "Site Supervision", "Budget Control"],
    image: "/team/project-head.jpg",
    linkedin: "#",
    email: "samuel@bilorconstruction.com"
  },
  {
    name: "Arch. Jane Wambui",
    position: "Lead Architect",
    qualifications: "MArch, RIBA Certified",
    experience: "12+ years",
    expertise: ["Architectural Design", "Sustainable Building", "3D Modeling"],
    image: "/team/architect.jpg",
    linkedin: "#",
    email: "jane@bilorconstruction.com"
  },
  {
    name: "Eng. David Mwangi",
    position: "Safety Director",
    qualifications: "MSc Occupational Safety, OSHA Trainer",
    experience: "10+ years",
    expertise: ["Safety Compliance", "Risk Assessment", "Emergency Response"],
    image: "/team/safety-director.jpg",
    linkedin: "#",
    email: "david@bilorconstruction.com"
  },
  {
    name: "Ms. Grace Akinyi",
    position: "Finance Director",
    qualifications: "CPA(K), MBA Finance",
    experience: "14+ years",
    expertise: ["Financial Planning", "Cost Control", "Investment Analysis"],
    image: "/team/finance-director.jpg",
    linkedin: "#",
    email: "grace@bilorconstruction.com"
  }
];

const TESTIMONIALS = [
  {
    name: "David Kiprop",
    position: "CEO, Green Valley Developers",
    company: "Commercial Developer, Nairobi",
    quote: "BI-LOR delivered our commercial plaza on schedule and within budget. Their attention to detail and commitment to quality is exceptional.",
    rating: 5,
    project: "Eldoret Commercial Plaza"
  },
  {
    name: "Sarah Mwangi",
    position: "Director, Urban Living Properties",
    company: "Private Client, Kenya",
    quote: "From design to completion, the team demonstrated professionalism and expertise. Our residential project exceeded expectations.",
    rating: 5,
    project: "Kapsoya Residential Estate"
  },
  {
    name: "James Omondi",
    position: "Operations Manager",
    company: "Kenya Industrial Parks Ltd",
    quote: "The structural solutions provided were innovative and cost-effective. A reliable partner for industrial construction in Africa.",
    rating: 5,
    project: "Nairobi Industrial Park"
  }
];

// ==================== ENTERPRISE COMPONENTS ====================
const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="text-center p-6">
    <div className="flex justify-center mb-4">
      <div className="p-3 bg-black rounded-full">
        <Icon className="text-orange-500" size={24} />
      </div>
    </div>
    <h3 className="text-3xl font-bold text-black mb-2">{value}</h3>
    <p className="text-gray-600 text-sm uppercase tracking-wider font-medium">{label}</p>
  </div>
);

const ServiceCard = ({ service }: { service: typeof SERVICES[0] }) => {
  const Icon = service.icon;
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-black rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
          <Icon className="text-orange-500 group-hover:text-white transition-colors duration-300" size={28} />
        </div>
        <ChevronRight className="text-gray-400 group-hover:text-orange-500 transition-colors duration-300" size={20} />
      </div>
      <h3 className="text-xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <Check className="text-orange-500 mr-2" size={16} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="h-48 bg-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute top-4 left-4">
        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {project.type}
        </span>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white font-bold text-lg">{project.name}</h3>
        <p className="text-white/90 text-sm">{project.location}</p>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-700 font-medium">{project.scope}</p>
          <p className="text-gray-500 text-sm mt-1">{project.size}</p>
        </div>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{project.completed}</span>
      </div>
      <button className="text-orange-500 text-sm font-semibold flex items-center hover:text-orange-600 group">
        View Project Details 
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
      </button>
    </div>
  </motion.div>
);

const TeamMemberCard = ({ member, index }: { member: typeof TEAM_MEMBERS[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Team Member Image */}
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-stone-300" />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <motion.div
            initial={false}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="text-white"
          >
            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
            <p className="text-orange-400 font-semibold">{member.position}</p>
          </motion.div>
        </div>
        
        {/* Qualification Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
            <GraduationCap className="inline mr-2" size={16} />
            <span className="text-sm font-medium">{member.qualifications.split(',')[0]}</span>
          </div>
        </div>

        {/* Experience Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -100 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 bottom-20 bg-orange-500 text-white px-4 py-2 rounded-r-lg z-20"
        >
          <div className="flex items-center">
            <BriefcaseBusiness className="mr-2" size={16} />
            <span className="font-semibold">{member.experience}</span>
          </div>
        </motion.div>
      </div>

      {/* Team Member Details */}
      <div className="p-6">
        <div className="mb-6">
          <h4 className="text-gray-500 text-sm font-semibold mb-3 uppercase tracking-wider">Expertise Areas</h4>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, idx) => (
              <span
                key={idx}
                className="inline-block bg-stone-100 text-stone-800 text-xs font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${member.email}`}
                className="p-2 bg-stone-100 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
                title="Send Email"
              >
                <Mail size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={member.linkedin}
                className="p-2 bg-stone-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </motion.a>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={`tel:${COMPANY.phone}`}
              className="text-orange-500 text-sm font-semibold flex items-center hover:text-orange-600"
            >
              Contact <PhoneIcon className="ml-2" size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== MAIN ENTERPRISE PAGE ====================
export default function EnterpriseConstructionPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      const sections = ["home", "about", "team", "services", "projects", "why-us", "safety", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. Our team will contact you within 24 hours.");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="scroll-smooth bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* ==================== ENTERPRISE NAVBAR ==================== */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-2xl" : "bg-black/95 backdrop-blur-sm"
      }`}>
        {/* Top Info Bar */}
        <div className="hidden lg:block bg-stone-800 text-white text-sm">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-orange-500" />
                <span>{COMPANY.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-orange-500" />
                <span>{COMPANY.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-orange-500" />
                <span>Mon-Fri: 8AM-6PM • Sat: 9AM-1PM</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Building2 className="text-white" size={24} />
              </div>
              <div>
                <div className="font-bold text-xl text-white">{COMPANY.shortName}</div>
                <div className="text-xs text-gray-300">Building Since {COMPANY.founded}</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.title}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.title)}
                  onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={`font-semibold text-sm uppercase tracking-wider transition ${
                      activeSection === link.href?.replace('#', '') 
                        ? "text-orange-500" 
                        : "text-white hover:text-orange-500"
                    }`}
                  >
                    {link.title}
                    {link.dropdown && <ChevronDown className="inline ml-1" size={14} />}
                  </a>

                  {link.dropdown && activeDropdown === link.title && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-2xl border border-stone-200 py-2 z-50">
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 text-sm transition border-b border-stone-100 last:border-b-0"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition shadow-lg hover:shadow-xl">
                Request Quote
              </button>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 z-10" />
          <div className="absolute inset-0 bg-[url('/construction-site-africa.jpg')] bg-cover bg-center" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              CONSTRUCTION EXPERTS SINCE {COMPANY.founded}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Building Africa's <span className="text-orange-500">Future</span>
              <br />One Project at a Time
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              We deliver high-quality construction solutions across Kenya and Africa — safely, professionally, and on schedule.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition shadow-lg hover:shadow-xl">
                Request a Free Quote
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
                View Our Projects
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 bg-stone-800/90 backdrop-blur rounded-t-2xl p-6 shadow-2xl"
            >
              <StatCard icon={Building2} value="10+" label="Years Experience" />
              <StatCard icon={Award} value="250+" label="Projects Completed" />
              <StatCard icon={Globe} value="East & Central" label="Africa Regions Served" />
              <StatCard icon={Shield} value="100%" label="Safety Record" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="text-orange-500 font-semibold tracking-wider">ABOUT OUR COMPANY</span>
              <h2 className="text-4xl font-bold text-black mt-4 mb-6">
                Trusted Construction Experts in Kenya & Beyond
              </h2>
              <p className="text-gray-600 mb-6">
                We are a professional construction company delivering residential, commercial, and infrastructure projects across Kenya and the African region.
              </p>
              <p className="text-gray-600 mb-8">
                With a commitment to quality, safety, and timely delivery, we partner with clients to turn ideas into lasting structures.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-orange-500" size={20} />
                  <span className="font-medium text-black">NCA Registered Contractor</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-orange-500" size={20} />
                  <span className="font-medium text-black">ISO 9001:2015 Certified</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-orange-500" size={20} />
                  <span className="font-medium text-black">OSHA Compliance Certified</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="relative"
            >
              <div className="bg-stone-100 rounded-2xl p-8 border border-stone-200">
                <div className="text-center mb-8">
                  <Target className="text-orange-500 mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-black mb-4">Our Mission & Vision</h3>
                  <p className="text-gray-600 mb-6">
                    To be Africa's most trusted construction partner, delivering innovative and sustainable building solutions that shape communities.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "10+", label: "Years" },
                    { value: "250+", label: "Projects" },
                    { value: "50+", label: "Team Members" }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-4 rounded-lg border border-stone-200 cursor-pointer"
                    >
                      <div className="text-2xl font-bold text-orange-500 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== OUR TEAM SECTION ==================== */}
      <section id="team" className="py-24 bg-stone-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold tracking-wider">MEET THE LEADERS</span>
            <h2 className="text-4xl font-bold text-black mt-4 mb-6">Our Executive Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Led by industry veterans with decades of combined experience in construction, engineering, and project management across Africa.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 bg-black text-white rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "150+", label: "Combined Years Experience", icon: BriefcaseBusiness },
                { value: "25+", label: "Professional Certifications", icon: Award },
                { value: "98%", label: "Client Satisfaction Rate", icon: Users },
                { value: "50+", label: "Industry Awards", icon: Trophy }
              ].map((stat, idx) => {
                const Icon = stat.icon || Users;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-stone-800 rounded-full group-hover:bg-orange-500 transition-colors duration-300">
                        <Icon className="text-orange-500 group-hover:text-white transition-colors duration-300" size={24} />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Join Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-white border border-stone-200 rounded-full px-8 py-4 shadow-lg">
              <div className="text-left">
                <h4 className="font-bold text-black">Join Our Growing Team</h4>
                <p className="text-sm text-gray-600">Career opportunities at BI-LOR Construction</p>
              </div>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                View Openings
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold tracking-wider">OUR EXPERTISE</span>
            <h2 className="text-4xl font-bold text-black mt-4 mb-6">Our Construction Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet the unique demands of African infrastructure and development.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, index) => (
              <motion.div key={index} variants={fadeUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-orange-500 font-semibold tracking-wider">OUR PORTFOLIO</span>
              <h2 className="text-4xl font-bold text-black mt-4">Our Work Speaks for Itself</h2>
              <p className="text-gray-600 mt-2">A selection of completed and ongoing projects across Kenya and Africa.</p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-orange-500 font-semibold flex items-center hover:text-orange-600"
            >
              View All Projects <ArrowRight className="ml-2" size={20} />
            </motion.button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS.slice(0, 6).map((project, index) => (
              <motion.div key={index} variants={fadeUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section id="why-us" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold tracking-wider">THE BI-LOR DIFFERENCE</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-6">Why Clients Choose Us</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We combine local expertise with international standards to deliver exceptional results across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Proven African Experience",
                desc: "Deep understanding of local conditions, materials, and regulations across East & Central Africa."
              },
              {
                icon: Shield,
                title: "Strict Safety Standards",
                desc: "Zero-tolerance safety policy with OSHA compliance and regular training programs."
              },
              {
                icon: Users,
                title: "Skilled Professionals",
                desc: "Team of certified engineers, architects, and construction specialists."
              },
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                desc: "Detailed quotations with fixed pricing and no hidden costs."
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                desc: "95% on-time completion rate with efficient project management."
              },
              {
                icon: Zap,
                title: "Quality Commitment",
                desc: "Use of certified materials and adherence to international construction standards."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-stone-900 rounded-xl p-8 border border-stone-800 hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="p-3 bg-stone-800 rounded-lg"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="text-orange-500" size={24} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== SAFETY & COMPLIANCE ==================== */}
      <section id="safety" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="text-orange-500 font-semibold tracking-wider">SAFETY FIRST</span>
              <h2 className="text-4xl font-bold text-black mt-4 mb-6">Safety, Quality & Compliance</h2>
              <p className="text-gray-600 mb-6">
                We operate under strict safety policies to protect our workers, clients, and the public. All projects comply with Kenyan regulations, NCA standards, and international best practices.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <Shield className="text-orange-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-black mb-2">NCA Registered Contractor</h4>
                    <p className="text-gray-600 text-sm">Level 8 certification for unlimited project value</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <Award className="text-orange-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-black mb-2">OSHA Compliance</h4>
                    <p className="text-gray-600 text-sm">Full adherence to occupational safety standards</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <BookOpen className="text-orange-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-black mb-2">Environmental Standards</h4>
                    <p className="text-gray-600 text-sm">Sustainable construction practices and waste management</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-200"
            >
              <h3 className="text-2xl font-bold text-black mb-8 text-center">Safety Statistics</h3>
              
              <div className="space-y-6">
                {[
                  { label: "Safety Training Hours", value: "500+", width: "100%" },
                  { label: "Equipment Inspections", value: "100%", width: "100%" },
                  { label: "Safety Audits", value: "Monthly", width: "100%" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-black font-medium">{stat.label}</span>
                      <span className="text-orange-500 font-bold">{stat.value}</span>
                    </div>
                    <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.width }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + 0.3, duration: 1, ease: "easeOut" }}
                        className="h-full bg-orange-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200"
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="p-2 bg-orange-100 rounded-lg"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                  >
                    <CheckCircle className="text-orange-500" size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-black">Zero Accident Policy</h4>
                    <p className="text-gray-600 text-sm">Perfect safety record maintained across all projects</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold tracking-wider">CLIENT TESTIMONIALS</span>
            <h2 className="text-4xl font-bold text-black mt-4 mb-6">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients across Kenya and Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <Star className="text-orange-500 fill-orange-500" size={16} />
                    </motion.div>
                  ))}
                </div>
                <Quote className="text-stone-300 mb-4" size={32} />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="pt-6 border-t border-stone-100">
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="text-orange-500 font-semibold tracking-wider">GET IN TOUCH</span>
              <h2 className="text-4xl font-bold text-black mt-4 mb-8">Start Your Project With Us</h2>
              
              <div className="space-y-8">
                {[
                  { icon: PhoneCall, title: "Call Us", detail: COMPANY.phone, sub: "Mon-Fri: 8AM-6PM, Sat: 9AM-1PM" },
                  { icon: Mail, title: "Email Us", detail: COMPANY.email, sub: "Response within 24 hours" },
                  { icon: MapPin, title: "Visit Our Office", detail: COMPANY.location, sub: "" },
                  { icon: FileText, title: "Request Documents", detail: "", sub: "Download Company Profile" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="p-3 bg-black rounded-lg">
                        <Icon className="text-orange-500" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-lg mb-2">{item.title}</h4>
                        {item.detail && <p className="text-gray-600">{item.detail}</p>}
                        {item.sub && <p className="text-gray-500 text-sm">{item.sub}</p>}
                        {item.title === "Request Documents" && (
                          <button className="text-orange-500 font-semibold hover:text-orange-600 flex items-center mt-2">
                            {item.sub} <ArrowRight className="ml-2" size={16} />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-200"
            >
              <h3 className="text-2xl font-bold text-black mb-6">Send Your Project Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white"
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  >
                    <option value="">Select Project Type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="industrial">Industrial Construction</option>
                    <option value="infrastructure">Infrastructure Development</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="consultation">Consultation & Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your project requirements, timeline, budget, and any specific needs..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Submit Project Inquiry <Send className="ml-2" size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== ENTERPRISE FOOTER ==================== */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Building2 size={24} />
                </motion.div>
                <div>
                  <div className="font-bold text-xl">{COMPANY.shortName}</div>
                  <div className="text-xs text-gray-400">Building Since {COMPANY.founded}</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{COMPANY.tagline}</p>
              <p className="text-gray-500 text-sm mb-6">{COMPANY.motto}</p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ y: -3 }}
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.slice(0, 4).map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-gray-400 hover:text-orange-500 transition flex items-center">
                      <ChevronRight className="mr-2" size={14} />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {SERVICES.slice(0, 5).map((service) => (
                  <li key={service.title}>
                    <a href="#services" className="text-gray-400 hover:text-orange-500 transition flex items-center">
                      <ChevronRight className="mr-2" size={14} />
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold text-lg mb-6 text-white">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-orange-500 mt-1" size={18} />
                  <span className="text-gray-400 text-sm">{COMPANY.location}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-orange-500 mt-1" size={18} />
                  <span className="text-gray-400">{COMPANY.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-orange-500 mt-1" size={18} />
                  <span className="text-gray-400">{COMPANY.email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <HelpCircle className="text-orange-500 mt-1" size={18} />
                  <span className="text-gray-400 text-sm">24/7 Emergency Support Available</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-stone-800 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    href="#"
                    className="text-gray-500 hover:text-orange-500 text-sm"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-4 text-center">
              Registered with National Construction Authority • ERB Certified • ISO 9001:2015 Certified • OSHA Compliant
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 bg-black z-50 lg:hidden p-6 pt-20"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>

            <ul className="space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-white text-xl font-semibold hover:text-orange-500 block py-3 border-b border-stone-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                  {link.dropdown && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="text-gray-400 hover:text-orange-500 block py-2"
                          onClick={() => setMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-stone-800 space-y-6">
              <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold">
                Request Quote
              </button>
              <div className="text-gray-400 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>{COMPANY.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>{COMPANY.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}