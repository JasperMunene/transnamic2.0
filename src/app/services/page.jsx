"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Building2, Truck, Wrench, Users2, HardHat, Ruler, Plane as Crane, Factory, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Full-service commercial construction including office buildings, retail spaces, and industrial facilities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    features: [
      "Project Planning & Management",
      "Design-Build Services",
      "Cost Estimation",
      "Quality Control"
    ]
  },
  {
    icon: Crane,
    title: "Residential Development",
    description: "Custom home construction and residential development projects with attention to detail and quality.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070",
    features: [
      "Custom Home Design",
      "Multi-Family Units",
      "Renovation Services",
      "Interior Finishing"
    ]
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    description: "Specialized construction services for manufacturing facilities, warehouses, and industrial complexes.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070",
    features: [
      "Facility Design",
      "Equipment Installation",
      "Safety Compliance",
      "Process Integration"
    ]
  },
  {
    icon: HardHat,
    title: "Infrastructure Development",
    description: "Critical infrastructure projects including roads, bridges, and public facilities.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    features: [
      "Transportation Systems",
      "Public Facilities",
      "Utility Networks",
      "Environmental Compliance"
    ]
  }
];

const specialties = [
  {
    icon: Ruler,
    title: "Pre-Construction Planning",
    description: "Comprehensive planning and analysis before breaking ground."
  },
  {
    icon: Users2,
    title: "Project Management",
    description: "Expert oversight throughout the entire construction process."
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Efficient material handling and supply chain management."
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    description: "Ongoing maintenance and facility management solutions."
  }
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071"
            alt="Construction site"
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
              Comprehensive Construction Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              From concept to completion, we deliver exceptional construction services 
              tailored to your specific needs and requirements.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-lg h-12 px-8"
            >
              Get Started
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
              We offer a wide range of construction services to meet your needs, 
              from commercial to residential projects.
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

                      <Button
                        className="group bg-red-600 hover:bg-red-700"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
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

      {/* Specialties Section */}
      <section className="py-24">
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
              Supporting services that ensure project success from start to finish.
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss your construction needs and learn how we can help bring your vision to life.
              </p>
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-lg h-12 px-8"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}