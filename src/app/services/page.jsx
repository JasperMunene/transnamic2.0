"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Truck, Warehouse, Construction, LandPlot, Drill, HardHat, GraduationCap, Leaf, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Truck,
    title: "Transport & Logistics",
    description: "Modern transport solutions focused on large capacity, flexibility, and secure storage, handling and transport of goods.",
    image: "/Quester.jpeg",
    slug: "transport-logistics",
    features: [
      "Road freight services",
      "Water tank installation",
      "Warehousing solutions",
      "Timely and secure deliveries"
    ]
  },
  {
    icon: Construction,
    title: "Construction Services",
    description: "Comprehensive construction solutions including land development and infrastructure projects.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    slug: "construction-management",
    features: [
      "Grading and leveling",
      "Construction project management",
      "Land surveying",
      "Infrastructure development"
    ]
  },
  {
    icon: Drill,
    title: "Equipment Leasing",
    description: "Modern equipment for earthworks and construction projects with expert operators available.",
    image: "/leasing.jpeg",
    slug: "equipment-leasing",
    features: [
      "Excavators and bulldozers",
      "Tipper trucks and graders",
      "Loaders and compactors",
      "Dragline excavators"
    ]
  },
  {
    icon: Warehouse,
    title: "Material Supply",
    description: "High quality aggregates for construction projects from our quarries and manufacturing facilities.",
    image: "/sand.jpeg",
    slug: "materials-supply",
    features: [
      "Quarry and river sand",
      "Ballast and graded stones",
      "Gravel and murram",
      "Asphalt concrete"
    ]
  }
];

const specialties = [
  {
    icon: LandPlot,
    title: "Sinking Boreholes",
    description: "Professional borehole drilling and water solutions"
  },
  {
    icon: HardHat,
    title: "Earthworks",
    description: "Excavation, drilling, back filling, and compaction services"
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    description: "Investing 1.5% of profits in engineering education"
  },
  {
    icon: Leaf,
    title: "Environment",
    description: "1% of profits for tree planting and clean energy research"
  }
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070"
            alt="Transport and logistics"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Transport, Logistics & Construction Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transnamic Limited offers high-end products and services in transport and logistics, 
              ensuring timely delivery, quality and integrity for all project sizes.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-lg h-12 px-8"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Core Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              We serve clients ranging from small private businesses to large Government 
              and Non-Governmental projects with flexible operation systems.
            </motion.p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white dark:bg-gray-900 p-8 lg:p-12 rounded-2xl shadow-xl relative z-10">
                      <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-xl w-fit mb-6">
                        <service.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        {service.description}
                      </p>

                      <div className="space-y-4 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Link href={`/services/${service.slug}`}>
                      <Button
                        className="group bg-red-600 hover:bg-red-700"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                      </Link>
                    </div>
                  </div>

                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 inset-0 pointer-events-none">
                  <div className={`absolute ${index % 2 === 0 ? '-right-4' : '-left-4'} -top-4 w-72 h-72 border-2 border-red-100 dark:border-red-800/30 rounded-2xl`} />
                  <div className={`absolute ${index % 2 === 0 ? '-left-4' : '-right-4'} -bottom-4 w-72 h-72 border-2 border-red-100 dark:border-red-800/30 rounded-2xl`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Corporate Social Responsibility
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              We maintain mutually trustworthy relations with stakeholders and invest in education and environment.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As an employer, we want to increase the talent pool from which we recruit that would also broadly help the economy.
              </p>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                <p className="text-red-600 dark:text-red-400 font-semibold">
                  Our commitment: Invest 1.5% of profits before tax towards students in engineering, architecture and environmental faculties.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-xl">
                  <Leaf className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Environment
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As a consumer of fossil fuels, we are dedicated to conservation efforts and clean energy innovation.
              </p>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                <p className="text-red-600 dark:text-red-400 font-semibold">
                  Our commitment: 1% of profits for tree planting and 1% for clean energy vehicle research.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Additional Specialties
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Comprehensive solutions to meet all your transport, logistics and construction needs.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
              >
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-xl w-fit mb-6">
                  <specialty.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Partner With Transnamic Limited
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our unique and flexible operation systems ensure successful results for both service provider and client. 
                We promote partnership to achieve mutual goals.
              </p>
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-lg h-12 px-8"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}