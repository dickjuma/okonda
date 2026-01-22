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
  Trophy,
  Plus
} from "lucide-react";

// ==================== ENTERPRISE CONSTANTS ====================
const COMPANY = {
  name: "BiLOR CIVIL & STRUCTURAL ENGINEERING DESIGN LTD.",
  shortName: "BiLOR ENGINEERING",
  overview: "BiLOR civil and structural engineers provide comprehensive structural engineering services from design to project management, for residential, commercial, and industrial projects.",
  mission: "Delivering innovative, safe, and sustainable structural engineering solutions that meets the client's expectations while prioritizing quality, integrity, and team work.",
  vision: "To be a well-recognized structural engineering firm in Kenya, renowned for excellence, creativity, and commitment to shaping the built environment.",
  coreValues: ["Quality", "Innovation", "Safety", "Integrity", "Client Satisfaction"],
  email: "lorianandwati@gmail.com",
  phone: "0799236234",
  whatsapp: "0799236234",
  tagline: "Structurally sound, sustainably designed.",
  motto: "Building trust, Designing future.",
  location: "Hill Side Estate, Opposite Kenya Creameries Company, Kapsoya Eldoret, Uasin Gishu County, Kenya",
  founded: "2013",
  certifications: ["Structural Design", "Project Management", "Engineering Consultancy"]
};

const NAV_LINKS = [
  { title: "Home", href: "#home" },
  {
    title: "About Us",
    href: "#about",
    dropdown: [
      { name: "Our Story", href: "#about" },
      { name: "Our Team", href: "#team" }
    ]
  },
  {
    title: "Services",
    href: "#services",
    dropdown: [
      { name: "View All Services", href: "#services" }
    ]
  },
  { title: "Projects", href: "#projects" },
  { title: "Why Choose Us", href: "#why-us" },
  { title: "Safety", href: "#safety" },
  { title: "Contact", href: "#contact" }
];

const SERVICES = [
  {
    title: "Structural Design & Analysis",
    description: "Comprehensive structural design and analysis for residential, commercial, and industrial projects.",
    icon: Building2,
    features: ["CAD Design", "FEA Analysis", "Code Compliance", "Safety Certification"]
  },
  {
    title: "Project Management & Coordination",
    description: "Professional project oversight and coordination from concept through completion.",
    icon: Briefcase,
    features: ["Timeline Management", "Budget Control", "Quality Assurance", "Stakeholder Coordination"]
  },
  {
    title: "Feasibility Studies & Due Diligence",
    description: "Detailed feasibility assessments and technical due diligence for informed decisions.",
    icon: TrendingUp,
    features: ["Site Assessment", "Technical Review", "Risk Analysis", "Recommendations"]
  },
  {
    title: "Expert Witness Services",
    description: "Professional expert witness testimony for legal and dispute resolution matters.",
    icon: Award,
    features: ["Technical Analysis", "Legal Testimony", "Documentation", "Report Writing"]
  },
  {
    title: "Site Supervision & Engineering",
    description: "On-site professional supervision ensuring construction meets specifications and standards.",
    icon: HardHat,
    features: ["Daily Inspection", "Quality Control", "Safety Monitoring", "Progress Reports"]
  },
  {
    title: "Engineering Consultancy",
    description: "Expert consulting services for structural engineering challenges and solutions.",
    icon: Globe,
    features: ["Technical Guidance", "Problem Solving", "Optimization", "Innovation"]
  }
];

const PROJECTS = [
  {
    name: "Commercial Plaza",
    location: "Eldoret, Kenya",
    scope: "15-Story Office & Retail Complex",
    type: "Commercial",
    image:"/teams/Commercial.jpeg",
    completed: "2024",
    size: "25,000 sqm"
  },
  {
    name: "Commercial Plaza",
    location: "Eldoret, Kenya",
    scope: "26-Story Office & Retail Complex",
    type: "Commercial",
    image: "/teams/SanApart.jpeg",
    completed: "2025",
    size: "250000 sqm"
  },
  {
    name: "San Apartments",
    location: "Nairobi, Kenya",
    scope: "Residential apartments",
    type: "Residential",
    image: "/teams/Sanaprt2.jpeg",
    completed: "2025",
    size: "10,000 sqm"
  },
  {
     name: "Personal Residence",
    location: "Eldoret, Kenya",
    scope: "1 Unit Resdential ",
    type: "Resdential",
    image: "/teams/Resdi21.jpeg",
    completed: "2024",
    size: "5,000 sqm"
  },
  {
    name: "Personal Residence",
    location: "Eldoret, Kenya",
    scope: "1 Unit Resdential ",
    type: "Resdential",
    image: "/teams/Resdi21.jpeg",
    completed: "2025",
    size: "5,000 sqm"
  },
  {
    name: " 2 Personal Residence",
    location: "Eldoret, Kenya",
    scope: "2 Unit Resdential ",
    type: "Resdential",
    image: "/teams/Resdi21.jpeg",
    completed: "2025",
    size: "5,000 sqm"
  }
];

const TEAM_MEMBERS = [
  {
    name: "Kemboi Kosgei Esau ",
    position: "Engineer",
    qualifications: "Structural Engineer",
    experience: "2+ years",
    expertise: ["Strategic Planning", "Project Finance", "International Standards"],
    image: "/teams/member2.jpg",
    linkedin: "#",
    email: "."
  },
  {
    name: "Eng. Lorraine Okonda ",
    position: "CEO & Founder",
    qualifications: "Civil  Engineering, PMP",
    experience: "2+ years",
    expertise: ["Operations Management", "Quality Control", "Archtectual design"],
    image: "/teams/lorian.jpg",
    linkedin: "#",
    email: ".."
  },
  {
    name: "Evans Kiprotich Kibet ",
    position: "Civil Engineer ",
    qualifications: "BSc Civil Engineering, NCA Level 8",
    experience: "4+ years",
    expertise: ["Project Management", "Site Supervision", "Budget Control"],
    image: "/teams/evans.jpeg",
    linkedin: "#",
    email: ""
  },
  {
    name: "Praisefaith Sikuku ",
    position: "Constructional Manager ",
    qualifications: "MArch, RIBA Certified",
    experience: "12+ years",
    expertise: ["Architectural Design", "Sustainable Building", "3D Modeling"],
    image: "/teams/member3.jpg",
    linkedin: "#",
    email: "jane@bilorconstruction.com"
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
      className="group bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
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
      <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
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
    className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
  >
    <div className="h-64 md:h-72 bg-gray-300 relative overflow-hidden flex-shrink-0">
      <img 
        src={project.image} 
        alt={project.name}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute top-3 md:top-4 left-3 md:left-4">
        <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {project.type}
        </span>
      </div>
      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
        <h3 className="text-white font-bold text-base md:text-lg">{project.name}</h3>
        <p className="text-white/90 text-xs md:text-sm">{project.location}</p>
      </div>
    </div>
    <div className="p-4 md:p-6 flex-grow flex flex-col">
      <div className="flex justify-between items-start mb-4 gap-2">
        <div className="min-w-0">
          <p className="text-gray-700 font-medium text-sm md:text-base">{project.scope}</p>
          <p className="text-gray-500 text-xs md:text-sm mt-1">{project.size}</p>
        </div>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded flex-shrink-0">{project.completed}</span>
      </div>
      <motion.button 
        whileHover={{ x: 4 }}
        className="text-orange-600 text-xs md:text-sm font-semibold flex items-center hover:text-orange-700 group transition-colors mt-auto"
      >
        View Project Details 
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
      </motion.button>
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
        <img 
          src={member.image} 
          alt={member.name}
          className={`absolute inset-0 w-full h-full object-cover ${
            member.image.includes('lorian') ? 'object-center' : 'object-top'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
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
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: ""
  });

  useEffect(() => {
    // Simulate page load time (remove in production)
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

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

  // ==================== SKELETON LOADER COMPONENT ====================
  const SkeletonLoader = () => (
    <main className="scroll-smooth bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Header Skeleton */}
      <div className="h-16 md:h-20 bg-white border-b border-stone-200 sticky top-0 z-50 flex items-center px-4">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse" />
          <div className="hidden md:flex gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-20 h-4 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse" />
            ))}
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse" />
        </div>
      </div>

      {/* Hero Skeleton */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="h-8 md:h-16 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse mb-6" />
          <div className="h-6 md:h-10 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse mb-4 w-3/4" />
          <div className="h-4 md:h-6 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse mb-8 w-2/3" />
          <div className="h-12 w-40 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse" />
        </div>
      </section>

      {/* Services Grid Skeleton (2 columns mobile) */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="h-6 md:h-8 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse mb-4 w-32" />
          <div className="h-8 md:h-12 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse mb-12 w-48" />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-4 md:p-6 border border-stone-200">
                <div className="w-10 h-10 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse mb-4" />
                <div className="h-5 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse mb-2 w-2/3" />
                <div className="h-4 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse mb-4 w-full" />
                <div className="h-3 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse mb-2 w-full" />
                <div className="h-3 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Skeleton */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="h-6 md:h-8 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse mb-4 w-32" />
          <div className="h-8 md:h-12 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse mb-12 w-32" />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-stone-100 rounded-lg overflow-hidden">
                <div className="h-40 md:h-48 bg-gradient-to-r from-stone-200 to-stone-100 animate-pulse mb-4" />
                <div className="p-4">
                  <div className="h-4 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse mb-2 w-2/3" />
                  <div className="h-3 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid Skeleton */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="h-6 md:h-8 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse mb-4 w-40" />
          <div className="h-8 md:h-12 bg-gradient-to-r from-stone-200 to-stone-100 rounded-lg animate-pulse mb-12 w-48" />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-4 md:p-8 border border-stone-200">
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-3 h-3 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse" />
                  ))}
                </div>
                <div className="h-4 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse mb-4 w-full" />
                <div className="h-4 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse mb-6 w-5/6" />
                <div className="border-t border-stone-100 pt-3 md:pt-4">
                  <div className="h-3 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse mb-2 w-1/2" />
                  <div className="h-2 bg-gradient-to-r from-stone-200 to-stone-100 rounded animate-pulse w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <main className="scroll-smooth bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* ==================== ENTERPRISE NAVBAR ==================== */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-2xl border-b border-gray-100" : "bg-white border-b border-gray-100"
      }`}>
        {/* Top Info Bar - Professional Contact Information */}
        <div className="hidden lg:block bg-white py-3 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs">
            {/* Left Contact Info */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition cursor-pointer">
                <Phone size={13} className="text-orange-600" />
                <a href={`tel:${COMPANY.phone}`} className="font-medium">{COMPANY.phone}</a>
              </div>
              <div className="w-px h-4 bg-gray-200"></div>
              <div className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition cursor-pointer">
                <Mail size={13} className="text-orange-600" />
                <a href={`mailto:${COMPANY.email}`} className="font-medium">{COMPANY.email}</a>
              </div>
            </div>
            
            {/* Center Social Links */}
            <div className="flex items-center gap-5">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.15, color: "#f97316" }}
                className="text-gray-500 hover:text-orange-600 transition-colors duration-200" 
                title="Instagram"
              >
                <Instagram size={16} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.15, color: "#f97316" }}
                className="text-gray-500 hover:text-orange-600 transition-colors duration-200" 
                title="Twitter"
              >
                <Twitter size={16} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.15, color: "#f97316" }}
                className="text-gray-500 hover:text-orange-600 transition-colors duration-200" 
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </motion.a>
            </div>
            
            {/* Right Hours */}
            <div className="flex items-center gap-2 text-gray-600 ml-8">
              <Clock size={13} className="text-orange-600" />
              <span className="font-medium">Mon-Fri: 8AM-6PM • Sat: 9AM-1PM</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center gap-4">
            {/* Logo Section */}
            <motion.a 
              href="#home" 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 md:gap-3 flex-shrink-0 cursor-pointer"
            >
              <div className="w-10 md:w-11 h-10 md:h-11 bg-orange-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <Building2 className="text-white" size={20} />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-xs md:text-sm text-gray-900 leading-tight">{COMPANY.shortName}</span>
                <span className="text-xs text-gray-500">Est. {COMPANY.founded}</span>
              </div>
            </motion.a>

            {/* Center Social Links - Visible on Mobile & Desktop */}
            <div className="flex items-center gap-3 md:gap-4 flex-1 justify-center md:hidden lg:flex">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-gray-500 hover:text-orange-600 transition-colors" 
                title="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-gray-500 hover:text-orange-600 transition-colors" 
                title="Twitter"
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-gray-500 hover:text-orange-600 transition-colors" 
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.title}
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.title)}
                  onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ y: -2 }}
                    className={`px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 rounded-md inline-flex items-center gap-1 ${
                      activeSection === link.href?.replace('#', '') 
                        ? "text-orange-600" 
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    {link.title}
                    {link.dropdown && <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />}
                  </motion.a>

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                    >
                      {link.dropdown.map((sub) => (
                        <motion.a
                          key={sub.name}
                          href={sub.href}
                          whileHover={{ x: 4 }}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 text-sm font-medium transition-colors border-b border-gray-50 last:border-b-0"
                        >
                          {sub.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block bg-orange-600 text-white px-6 md:px-7 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wide hover:bg-orange-700 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0"
            >
              Get Quote
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden text-gray-700 hover:text-orange-600 transition-colors p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* ==================== PROFESSIONAL HERO SECTION ==================== */}
      <section id="home" className="relative w-full min-h-screen flex items-center pt-16 md:pt-20">
        {/* Full-Width Background Image with Subtle Overlay */}
        <div className="absolute inset-0 z-0">
          {/* High-Quality Construction Site Background */}
          <div className="absolute inset-0 bg-[url('/teams/HERO.jpg')] bg-cover bg-center" />
          
          {/* Professional Dark Overlay - Subtle but Effective */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content Container - Positioned Left */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left-Aligned Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-5 md:space-y-8"
            >
              {/* Primary Headline - Bold & Confident */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
              >
                Building Africa's Future with Quality, Integrity & Precision
              </motion.h1>

              {/* Supporting Sub-Headline - Clear & Reassuring */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm md:text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl font-light"
              >
                We deliver professional construction solutions across Kenya and Africa — from residential and commercial developments to large-scale infrastructure projects.
              </motion.p>

              {/* Trust Signals - Credibility Cues */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col gap-2 md:gap-3 pt-2 md:pt-4"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <span className="text-xs md:text-base font-medium text-white/90">NCA Registered Contractor</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <span className="text-xs md:text-base font-medium text-white/90">10+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <span className="text-xs md:text-base font-medium text-white/90">Projects Delivered Across East Africa</span>
                </div>
              </motion.div>

              {/* CTA Buttons - Primary & Secondary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6"
              >
                {/* Primary CTA - Orange Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
                >
                  Get Free Quote
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.a>

                {/* Secondary CTA - Outlined Button */}
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-2 border-2 border-white/70 hover:border-white text-white font-bold text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  View Projects
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Empty Space for Image/Design Balance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hidden lg:block"
            >
              {/* Subtle white accent box for visual balance */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Why Choose BI-LOR</h3>
                  <ul className="space-y-3 text-white/90 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Professional project management and execution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Certified safety and quality standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>On-time and on-budget delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Transparent communication & support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Subtle */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="text-white/60 text-center">
            <ChevronDown className="w-5 md:w-6 h-5 md:h-6 mx-auto" />
          </div>
        </motion.div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="text-orange-600 font-semibold tracking-wider text-sm">ABOUT OUR COMPANY</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 md:mt-4 mb-4 md:mb-6">
                Structural Engineering Excellence in Kenya
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                {COMPANY.overview}
              </p>
              <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                We combine innovation with proven engineering practices to deliver structurally sound, sustainably designed solutions for every project.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-orange-600 flex-shrink-0" size={18} />
                  <span className="font-medium text-black text-sm md:text-base">Structural Design & Analysis</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-orange-600 flex-shrink-0" size={18} />
                  <span className="font-medium text-black text-sm md:text-base">Project Management & Coordination</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-orange-600 flex-shrink-0" size={18} />
                  <span className="font-medium text-black text-sm md:text-base">Expert Consulting Services</span>
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
              <div className="bg-stone-100 rounded-xl md:rounded-2xl p-6 md:p-8 border border-stone-200">
                <div className="text-center mb-6 md:mb-8">
                  <Target className="text-orange-600 mx-auto mb-3 md:mb-4" size={40} />
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">Our Mission & Vision</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    <strong>Mission:</strong> {COMPANY.mission}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    <strong>Vision:</strong> {COMPANY.vision}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-3 md:gap-4 text-center mt-6 md:mt-8">
                  {[
                    { value: "Structural Design", label: "Expertise" },
                    { value: "100+", label: "Projects" },
                    { value: "10+", label: "Years" }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-3 md:p-4 rounded-lg border border-stone-200 cursor-pointer transition-all"
                    >
                      <div className="text-sm md:text-lg font-bold text-orange-600 mb-0.5 md:mb-1">{stat.value}</div>
                      <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== OUR TEAM SECTION ==================== */}
      <section id="team" className="py-12 md:py-20 lg:py-24 bg-stone-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-orange-600 font-semibold tracking-wider text-sm">MEET THE LEADERS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 md:mt-4 mb-3 md:mb-6">Our Executive Team</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed px-2">
              Led by industry veterans with decades of combined experience in construction, engineering, and project management across Africa.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            className="mt-12 md:mt-20 lg:mt-24 bg-black text-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
                    <div className="flex justify-center mb-2 md:mb-4">
                      <div className="p-2 md:p-3 bg-stone-800 rounded-full group-hover:bg-orange-600 transition-colors duration-300">
                        <Icon className="text-orange-600 group-hover:text-white transition-colors duration-300" size={20} />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-300 leading-tight">{stat.label}</div>
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
            className="mt-10 md:mt-16 text-center px-4"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white border border-stone-200 rounded-lg md:rounded-full p-4 md:px-8 md:py-4 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-left">
                <h4 className="font-bold text-black text-base md:text-lg">Join Our Growing Team</h4>
                <p className="text-xs md:text-sm text-gray-600">Career opportunities at BI-LOR Construction</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-full font-semibold hover:bg-orange-700 transition w-full sm:w-auto flex-shrink-0"
              >
                View Openings
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-orange-600 font-semibold tracking-wider text-sm">OUR EXPERTISE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 md:mt-4 mb-3 md:mb-6">Our Construction Services</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed px-2">
              Comprehensive construction solutions tailored to meet the unique demands of African infrastructure and development.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
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
      <section id="projects" className="py-12 md:py-20 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-10 md:mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-orange-600 font-semibold tracking-wider text-sm">OUR PORTFOLIO</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 md:mt-4">Our Work Speaks for Itself</h2>
              <p className="text-gray-600 text-sm md:text-base mt-2 md:mt-3">A selection of completed and ongoing projects across Kenya and Africa.</p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-orange-600 font-semibold flex items-center gap-2 hover:text-orange-700 transition text-sm md:text-base flex-shrink-0"
            >
              View All Projects <ArrowRight size={18} />
            </motion.button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
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
      <section id="why-us" className="py-12 md:py-20 lg:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-orange-600 font-semibold tracking-wider text-sm">THE BI-LOR DIFFERENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 md:mt-4 mb-3 md:mb-6">Why Clients Choose Us</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed px-2">
              We combine local expertise with international standards to deliver exceptional results across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
                  className="bg-stone-900 rounded-lg md:rounded-xl p-6 md:p-8 border border-stone-800 hover:border-orange-600/50 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div 
                      className="p-2 md:p-3 bg-stone-800 rounded-lg flex-shrink-0"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="text-orange-600" size={20} />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-grow">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== SAFETY & COMPLIANCE ==================== */}
      <section id="safety" className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="text-orange-600 font-semibold tracking-wider text-sm">SAFETY FIRST</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 md:mt-4 mb-4 md:mb-6">Safety, Quality & Compliance</h2>
              <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                We operate under strict safety policies to protect our workers, clients, and the public. All projects comply with Kenyan regulations, NCA standards, and international best practices.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <Shield className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-black text-base md:text-lg mb-1 md:mb-2">NCA Registered Contractor</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Level 8 certification for unlimited project value</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <Award className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-black text-base md:text-lg mb-1 md:mb-2">OSHA Compliance</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Full adherence to occupational safety standards</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <BookOpen className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-black text-base md:text-lg mb-1 md:mb-2">Environmental Standards</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Sustainable construction practices and waste management</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="bg-stone-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-stone-200"
            >
              <h3 className="text-xl md:text-2xl font-bold text-black mb-6 md:mb-8 text-center">Safety Statistics</h3>
              
              <div className="space-y-4 md:space-y-6">
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

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-4 md:p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-3 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <Star className="text-orange-500 fill-orange-500" size={14} />
                    </motion.div>
                  ))}
                </div>
                <Quote className="text-stone-300 mb-2 md:mb-4" size={24} />
                <p className="text-gray-700 mb-4 md:mb-6 italic text-xs md:text-base">"{testimonial.quote}"</p>
                <div className="pt-3 md:pt-6 border-t border-stone-100">
                  <h4 className="font-bold text-black text-xs md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="text-orange-600 font-semibold tracking-wider text-sm">GET IN TOUCH</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 md:mt-4 mb-6 md:mb-8">Start Your Project With Us</h2>
              
              <div className="space-y-5 md:space-y-8">
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
                      className="flex items-start gap-3 md:gap-4"
                    >
                      <div className="p-2 md:p-3 bg-black rounded-lg flex-shrink-0">
                        <Icon className="text-orange-600" size={20} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-black text-base md:text-lg mb-1 md:mb-2">{item.title}</h4>
                        {item.detail && <p className="text-gray-600 text-sm md:text-base break-words">{item.detail}</p>}
                        {item.sub && <p className="text-gray-500 text-xs md:text-sm">{item.sub}</p>}
                        {item.title === "Request Documents" && (
                          <button className="text-orange-600 font-semibold hover:text-orange-700 transition flex items-center mt-2 text-sm md:text-base">
                            {item.sub} <ArrowRight className="ml-2" size={14} />
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
              className="bg-stone-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-stone-200"
            >
              <h3 className="text-2xl md:text-2xl font-bold text-black mb-6">Send Your Project Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none bg-white"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none bg-white"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none bg-white"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Project Type *</label>
                  <select
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none bg-white"
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
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none bg-white resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your project requirements, timeline, budget, and any specific needs..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-orange-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Submit Project Inquiry <Send className="flex-shrink-0" size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-orange-600 font-semibold tracking-wider text-sm">CLIENT TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 md:mt-4 mb-3 md:mb-6">What Our Clients Say</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              Real feedback from satisfied clients across Kenya and Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "John Kariuki", role: "Business Owner", company: "Kariuki Enterprises", text: "Professional team, exceptional quality. BI-LOR delivered our commercial project on time and within budget. Highly recommended!" },
              { name: "Sarah Omondi", role: "Architect", company: "Design Studio Ltd", text: "Working with BI-LOR was seamless. Their attention to detail and adherence to specifications was impressive." },
              { name: "Moses Kipchoge", role: "CEO", company: "Real Estate Dev", text: "From concept to completion, the team demonstrated professionalism. Our residential complex is a testament to their expertise." }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-stone-50 rounded-lg p-6 md:p-8 border border-stone-200 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-stone-200 pt-4">
                  <p className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-gray-600 text-xs md:text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING SECTION ==================== */}
      <section id="pricing" className="py-12 md:py-20 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-orange-600 font-semibold tracking-wider text-sm">TRANSPARENT PRICING</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 md:mt-4 mb-3 md:mb-6">Service Packages</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              Flexible packages tailored to your project needs. All prices are estimates; final quotes depend on specific requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              { title: "Basic Consultation", price: "KES 5,000", desc: "Site assessment & design consultation", features: ["Site Visit", "Design Consultation", "Initial Report", "Budget Estimate"] },
              { title: "Simple Maps", price: "KES 25,000", desc: "Location mapping & site visualization", features: ["GPS Mapping", "Site Layout", "Digital Documentation", "Client Report"] },
              { title: "Small Projects", price: "From KES 500K", desc: "Residential & small commercial", features: ["Full Project Management", "Quality Materials", "Timeline Adherence", "Safety Compliance"] },
              { title: "Large-Scale", price: "Custom Quote", desc: "Commercial & infrastructure", features: ["Dedicated Project Manager", "Advanced Planning", "Progress Tracking", "Premium Support"] }
            ].map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-lg p-4 md:p-8 border-2 transition-all h-full flex flex-col ${
                  idx === 2 
                    ? "border-orange-600 bg-white shadow-lg md:scale-105" 
                    : "border-stone-200 bg-white"
                }`}
              >
                {idx === 2 && <span className="bg-orange-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold w-fit mb-3 md:mb-4">POPULAR</span>}
                <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{pkg.title}</h3>
                <p className="text-lg md:text-3xl font-bold text-orange-600 mb-1">{pkg.price}</p>
                <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-6">{pkg.desc}</p>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <Check className="text-orange-600 flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-xs md:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={`w-full py-2 md:py-3 rounded-lg font-semibold text-xs md:text-base transition-all ${
                    idx === 2
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "border-2 border-orange-600 text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section id="process" className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-orange-600 font-semibold tracking-wider text-sm">OUR PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 md:mt-4 mb-3 md:mb-6">How We Work</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              From consultation to completion, our proven process ensures success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We understand your vision, budget, and timeline" },
              { step: "02", title: "Planning", desc: "Detailed project plan with design and specifications" },
              { step: "03", title: "Execution", desc: "Professional construction with quality oversight" },
              { step: "04", title: "Completion", desc: "Final inspection and project handover" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-stone-50 rounded-lg p-3 md:p-8 border border-stone-200 text-center h-full">
                  <div className="text-2xl md:text-5xl font-bold text-orange-600/20 mb-1 md:mb-2">{item.step}</div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs md:text-base">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-orange-600" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section id="faq" className="py-12 md:py-20 lg:py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-orange-600 font-semibold tracking-wider text-sm">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-3 md:mt-4 mb-3 md:mb-6">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {[
              { q: "What is your payment structure?", a: "We typically require 30% upfront, 40% mid-project, and 30% upon completion. Flexible payment plans available for larger projects." },
              { q: "How long do projects typically take?", a: "Project duration varies. Small projects: 2-3 months. Commercial: 6-12 months. We provide detailed timelines during planning." },
              { q: "Do you offer warranties?", a: "Yes, all work comes with a 2-year structural warranty and 5-year foundation warranty. Additional warranty options available." },
              { q: "Are you licensed and insured?", a: "Absolutely. NCA Level 8 registered, fully insured, and all work complies with Kenyan regulations and international standards." }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-lg border border-stone-200 hover:border-orange-300 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-stone-50 transition-colors"
                  aria-expanded={expandedFAQ === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <h3 className="text-base md:text-lg font-bold text-gray-900 pr-4 flex-grow">{faq.q}</h3>
                  <motion.div
                    animate={{ rotate: expandedFAQ === idx ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-orange-600">
                      <Plus className="text-white" size={20} />
                    </div>
                  </motion.div>
                </button>
                
                <motion.div
                  id={`faq-answer-${idx}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedFAQ === idx ? "auto" : 0,
                    opacity: expandedFAQ === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-stone-200">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CERTIFICATIONS SECTION ==================== */}
      <section id="certifications" className="py-12 md:py-20 lg:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-orange-600 font-semibold tracking-wider text-sm">CERTIFICATIONS & ACCREDITATION</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 md:mt-4 mb-3 md:mb-6">Industry Standards & Compliance</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
            {[
              { title: "NCA Registered", desc: "Level 8 - Unlimited Project Value", icon: Award },
              { title: "ISO 9001:2015", desc: "Quality Management System", icon: CheckCircle },
              { title: "OSHA Compliance", desc: "Occupational Safety Standards", icon: Shield },
              { title: "ERB Certified", desc: "Environmental & Regulatory Body", icon: Zap }
            ].map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-stone-900 rounded-lg p-3 md:p-8 border border-stone-800 text-center hover:border-orange-600/50 transition-all"
                >
                  <Icon className="text-orange-600 mx-auto mb-2 md:mb-4" size={24} />
                  <h3 className="text-xs md:text-xl font-bold mb-1 md:mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-xs md:text-base">{cert.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== NEWSLETTER SECTION ==================== */}
      <section className="py-12 md:py-16 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Stay Updated</h2>
            <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">Subscribe to our newsletter for construction tips, project updates, and industry insights.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 md:px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 border border-stone-300 text-sm md:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== COOKIE CONSENT BANNER ==================== */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 2 }}
            className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 md:p-6 border-t border-stone-800 z-40"
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-gray-300">
                We use cookies to enhance your experience. By continuing, you consent to our use of cookies.
                <a href="#privacy" className="text-orange-500 hover:text-orange-400 ml-2 underline">Learn more</a>
              </p>
              <div className="flex gap-3 flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCookieBanner(false)}
                  className="px-4 md:px-6 py-2 border border-gray-600 rounded-lg text-xs md:text-sm hover:border-gray-400 transition"
                >
                  Decline
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCookieBanner(false)}
                  className="px-4 md:px-6 py-2 bg-orange-600 rounded-lg text-xs md:text-sm hover:bg-orange-700 transition"
                >
                  Accept
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================== ENTERPRISE FOOTER ==================== */}
      <footer className="bg-black text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Building2 size={22} />
                </motion.div>
                <div className="min-w-0">
                  <div className="font-bold text-base md:text-lg">{COMPANY.shortName}</div>
                  <div className="text-xs text-gray-400">Est. {COMPANY.founded}</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">{COMPANY.tagline}</p>
              <p className="text-gray-500 text-xs mb-4">{COMPANY.motto}</p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ y: -3 }}
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition"
                    title={["Instagram", "Twitter", "LinkedIn"][idx]}
                  >
                    <Icon size={18} />
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
              <h4 className="font-bold text-base md:text-lg mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.slice(0, 4).map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-gray-400 hover:text-orange-500 transition text-sm flex items-center gap-2">
                      <ChevronRight size={14} className="flex-shrink-0" />
                      <span className="truncate">{link.title}</span>
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
              <h4 className="font-bold text-base md:text-lg mb-4 text-white">Our Services</h4>
              <ul className="space-y-2">
                {SERVICES.slice(0, 5).map((service) => (
                  <li key={service.title}>
                    <a href="#services" className="text-gray-400 hover:text-orange-500 transition text-sm flex items-center gap-2">
                      <ChevronRight size={14} className="flex-shrink-0" />
                      <span className="truncate">{service.title}</span>
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
              <h4 className="font-bold text-base md:text-lg mb-4 text-white">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="text-orange-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-400 text-sm line-clamp-2">{COMPANY.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-orange-600 flex-shrink-0" size={16} />
                  <a href={`tel:${COMPANY.phone}`} className="text-gray-400 hover:text-orange-500 text-sm">{COMPANY.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-orange-600 flex-shrink-0" size={16} />
                  <a href={`mailto:${COMPANY.email}`} className="text-gray-400 hover:text-orange-500 text-sm truncate">{COMPANY.email}</a>
                </div>
                <div className="flex items-start gap-2">
                  <HelpCircle className="text-orange-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-400 text-xs">24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
              <p className="text-gray-500 text-xs md:text-sm text-center sm:text-left">
                © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-6 justify-center">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    href="#"
                    className="text-gray-500 hover:text-orange-500 text-xs md:text-sm"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-xs text-center leading-relaxed">
              Registered with National Construction Authority • ERB Certified • ISO 9001:2015 Certified • OSHA Compliant
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-screen w-80 max-w-[90vw] bg-white z-50 lg:hidden flex flex-col shadow-2xl"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="font-bold text-lg text-gray-900">Menu</h3>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 hover:text-orange-600 transition-colors p-1"
                onClick={() => setMenuOpen(false)}
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto">
              <ul className="space-y-1 p-6">
                {NAV_LINKS.map((link, idx) => (
                  <li key={link.title}>
                    <motion.a
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      href={link.href}
                      className="text-gray-700 text-base font-semibold hover:text-orange-600 block py-3 px-3 rounded-lg hover:bg-orange-50 transition-all"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.title}
                    </motion.a>
                    {link.dropdown && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 + 0.05 }}
                        className="pl-4 mt-1 space-y-1"
                      >
                        {link.dropdown.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="text-gray-600 text-sm hover:text-orange-600 block py-2 px-3 rounded-lg hover:bg-orange-50 transition-all"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu Footer */}
            <div className="p-6 border-t border-gray-100 space-y-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-orange-700 transition-all flex items-center justify-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <PhoneIcon size={18} />
                Get Quote
              </motion.a>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition cursor-pointer">
                  <Phone size={16} className="text-orange-600 flex-shrink-0" />
                  <a href={`tel:${COMPANY.phone}`} className="font-medium">{COMPANY.phone}</a>
                </div>
                <div className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition cursor-pointer">
                  <Mail size={16} className="text-orange-600 flex-shrink-0" />
                  <a href={`mailto:${COMPANY.email}`} className="font-medium truncate">{COMPANY.email}</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}