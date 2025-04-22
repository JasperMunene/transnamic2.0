"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, HardHat } from "lucide-react";

const projects = [
  {
    title: "Dagoretti Corner Project",
    description: "Complete road construction and infrastructure development at Dagoretti Corner.",
    location: "Dagoretti Corner, Nairobi",
    date: "2022 - 2023",
    image: "https://images.unsplash.com/photo-1605296830685-7ecbd1aac9e9?w=800&auto=format&fit=crop",
    category: "Road Construction"
  },
  {
    title: "Eastern Bypass Construction",
    description: "Major highway construction project connecting eastern Nairobi suburbs.",
    location: "Eastern Bypass, Nairobi",
    date: "2021 - 2022",
    image: "https://images.unsplash.com/photo-1601878778617-1a5b29d93e1b?w=800&auto=format&fit=crop",
    category: "Highway Construction"
  },
  {
    title: "Dongo Kundu Project",
    description: "Large-scale bypass construction to ease Mombasa traffic congestion.",
    location: "Dongo Kundu, Mombasa",
    date: "2023",
    image: "/Dongo.jpeg",
    category: "Bypass Construction"
  },
  {
    title: "Kwa Jomvu A109 Construction",
    description: "Upgrading of the A109 highway section through Kwa Jomvu.",
    location: "Kwa Jomvu, Mombasa",
    date: "2022",
    image: "https://imgs.search.brave.com/PgxuIva2m6bNXDVyKhkLcKGPTaxhUTRHtamAbnWCr4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb25z/dHJ1Y3Rpb25yZXZp/ZXdvbmxpbmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzAxL0t3YS1Kb212/dS1NYXJpYWthbmkt/Um9hZC1Qcm9qZWN0/LmpwZw",
    category: "Highway Upgrade"
  },
  {
    title: "Nairobi Expressway Support",
    description: "Equipment leasing and logistics support for the Nairobi Expressway project.",
    location: "Nairobi Expressway",
    date: "2021 - 2023",
    image: "/Nairobi.jpeg",
    category: "Logistics Support"
  },
  {
    title: "Mombasa Port Access Roads",
    description: "Construction of access roads connecting to Mombasa Port.",
    location: "Mombasa Port",
    date: "2023",
    image: "https://images.unsplash.com/photo-1605296830685-7ecbd1aac9e9?w=800&auto=format&fit=crop",
    category: "Port Infrastructure"
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f1f6fc] dark:bg-gray-900 px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full mb-6 mx-auto"
          >
            <p className="text-red-600 dark:text-red-400 font-semibold tracking-wider">
              OUR PROJECTS
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#0e2a47] dark:text-white mb-4"
          >
            Infrastructure Development Portfolio
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-20 h-1.5 mx-auto bg-red-600 rounded-full mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Showcasing our major construction and logistics projects across Kenya's key infrastructure developments.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 text-red-600 dark:text-red-400" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-red-600 dark:text-red-400" />
                    {project.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-red-600 text-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:flex items-center">
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Project With Us</h2>
              <p className="text-lg mb-6">
                Our team is ready to deliver exceptional results for your next infrastructure project.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 border-white text-white hover:text-white"
              >
                Get a Project Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="hidden md:block md:w-1/3 relative h-full">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605296830685-7ecbd1aac9e9?w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
              <div className="relative z-10 flex items-center justify-center h-full p-8">
                <HardHat className="w-16 h-16 text-white opacity-90" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}