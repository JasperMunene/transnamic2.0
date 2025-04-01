"use client";

import { motion } from "framer-motion";
import { Building2, Truck, Users2, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    icon: Building2,
    title: "Construction Management",
    description: "Expert oversight of construction projects from planning to completion, ensuring quality and efficiency.",
    color: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-100 dark:border-blue-800/30",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
  },
  {
    icon: Truck,
    title: "Logistics Solutions",
    description: "Comprehensive logistics services including transportation, warehousing, and supply chain management.",
    color: "bg-red-50 dark:bg-red-900/20",
    textColor: "text-red-600 dark:text-red-400",
    borderColor: "border-red-100 dark:border-red-800/30",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
  },
  {
    icon: Wrench,
    title: "Equipment Management",
    description: "Full-service equipment maintenance, repair, and optimization for maximum operational efficiency.",
    color: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-600 dark:text-green-400",
    borderColor: "border-green-100 dark:border-green-800/30",
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2070"
  },
  {
    icon: Users2,
    title: "Consulting Services",
    description: "Strategic consulting to help businesses optimize their construction and logistics operations.",
    color: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-100 dark:border-purple-800/30",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function WhatWeDo() {
  return (
    <section className="w-full py-24 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-[0.02] dark:opacity-[0.05]">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-red-500 to-purple-400" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-red-600" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-red-600 dark:text-red-400 font-semibold tracking-wider mb-4"
          >
            [ OUR SERVICES ]
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl text-gray-600 dark:text-gray-300"
          >
            We provide comprehensive solutions for construction and logistics needs,
            delivering excellence through innovation and expertise.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`relative group p-8 rounded-2xl border-2 ${service.borderColor} hover:border-opacity-50 transition-all duration-300`}
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${service.color} mix-blend-multiply opacity-40`} />
              </div>
              <div className={`${service.color} p-3 rounded-xl w-fit -mt-16 relative z-10 shadow-lg`}>
                <service.icon className={`w-8 h-8 ${service.textColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-6 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {service.description}
              </p>
              <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                <Button
                  variant="ghost"
                  className={`${service.textColor} hover:bg-transparent p-0 h-auto font-semibold`}
                >
                  Learn more →
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-lg h-12 px-8"
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}