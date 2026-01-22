"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8 }
    })
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-6">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Terms & Conditions</h1>
          <p className="text-gray-300">Last updated: January 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
        {[
          {
            title: "1. Agreement to Terms",
            content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
          },
          {
            title: "2. Use License",
            content: "Permission is granted to temporarily download one copy of the materials (information or software) on BI-LOR Construction's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: Modify or copy the materials; Use the materials for any commercial purpose or for any public display; Attempt to decompile or reverse engineer any software contained on the website; Remove any copyright or other proprietary notations from the materials."
          },
          {
            title: "3. Disclaimer",
            content: "The materials on BI-LOR Construction's website are provided on an 'as is' basis. BI-LOR Construction makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
          },
          {
            title: "4. Limitations",
            content: "In no event shall BI-LOR Construction or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BI-LOR Construction's website."
          },
          {
            title: "5. Accuracy of Materials",
            content: "The materials appearing on BI-LOR Construction's website could include technical, typographical, or photographic errors. BI-LOR Construction does not warrant that any of the materials on the website are accurate, complete, or current. BI-LOR Construction may make changes to the materials contained on the website at any time without notice."
          },
          {
            title: "6. Links",
            content: "BI-LOR Construction has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BI-LOR Construction of the site. Use of any such linked website is at the user's own risk."
          },
          {
            title: "7. Modifications",
            content: "BI-LOR Construction may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
          },
          {
            title: "8. Governing Law",
            content: "These terms and conditions are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in Kenya."
          },
          {
            title: "9. Contact Information",
            content: "If you have any questions about these Terms & Conditions, please contact us at: BI-LOR Construction, Email: info@bilorconstruction.com, Phone: +254 (0) 123-456-789"
          }
        ].map((section, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textReveal}
            className="mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
