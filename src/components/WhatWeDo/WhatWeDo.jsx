'use client';

import { motion } from "framer-motion";
import { Truck, Warehouse, Construction, Drill, LandPlot, HardHat, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Truck,
    title: "Transport & Logistics",
    description: "Transmatic Limited is a modern transport company focused on our customers' wishes and needs for large capacity and flexibility, as well as the secure storage, handling and transport of goods.",
    color: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-100 dark:border-blue-800/30",
    image: "/truck2.jpg",
    slug: "transport-logistics"
  },
  {
    icon: Wrench,
    title: "Equipment Leasing",
    description: "We have invested in modern equipment for use in earthworks (excavation, drilling, carting away, back filling, leveling and compaction) and construction aids.",
    color: "bg-red-50 dark:bg-red-900/20",
    textColor: "text-red-600 dark:text-red-400",
    borderColor: "border-red-100 dark:border-red-800/30",
    image: "https://images.unsplash.com/photo-1584192436700-b7edfb0ea88f?q=80&w=2070",
    slug: "equipment-leasing"
  },
  {
    icon: Users2,
    title: "Materials Supply",
    description: "Transmatic are leaders in the quarrying and manufacturing of aggregates for use in ready‑mix concrete, pre‑cast concrete and asphalt production. We produce high quality aggregates.",
    color: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-600 dark:text-green-400",
    borderColor: "border-green-100 dark:border-green-800/30",
    image: "https://images.unsplash.com/photo-1617707628145-8dfaf1678fa9?q=80&w=2070",
    slug: "materials-supply"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
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
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-red-600 dark:text-red-400 font-semibold tracking-wide mb-4 text-lg"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-6"
          >
            Transnamic Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-2xl text-gray-600 dark:text-gray-300"
          >
            We provide comprehensive solutions for construction and logistics needs, delivering excellence through innovation and expertise.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`
                relative group p-6 rounded-2xl border-2 ${service.borderColor}
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
              `}
            >
              <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`${service.color} mix-blend-multiply opacity-30`} />
              </div>

              <div className={`${service.color} p-3 rounded-full w-fit -mt-16 relative z-10 shadow-md`}>
                <service.icon className={`w-6 h-6 ${service.textColor}`} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-4 mb-3">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>

              <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={`/services/${service.slug}`}>
                  <Button
                    variant="ghost"
                    className={`${service.textColor} hover:bg-transparent p-0 h-auto font-semibold`}
                  >
                    Learn more →
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}
