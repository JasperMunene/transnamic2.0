"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users2, ArrowRight, CheckCircle2 } from "lucide-react";

const projects = {
  "01": {
    id: "01",
    title: "Greenwood Estates",
    location: "Downtown City Center",
    scope: "Office Complex Development",
    description: "Nestled in a tranquil, tree-lined setting, this estate offers elegant homes crafted with sustainability and comfort in mind.",
    completionDate: "2023",
    clientName: "Greenwood Development Corp",
    value: "$45M",
    duration: "18 months",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      "https://images.unsplash.com/photo-1517581177684-8fc44a388ee7?q=80&w=2070",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071"
    ],
    features: [
      "Sustainable Design",
      "Energy Efficient Systems",
      "Smart Building Technology",
      "Green Spaces",
      "Premium Finishes",
      "24/7 Security"
    ],
    challenges: [
      {
        title: "Site Constraints",
        description: "Limited access in urban location required careful logistics planning."
      },
      {
        title: "Environmental Compliance",
        description: "Met strict environmental standards while maintaining project timeline."
      },
      {
        title: "Technical Complexity",
        description: "Integration of advanced building systems required specialized expertise."
      }
    ]
  },
  "02": {
    id: "02",
    title: "Harbor View Condominiums",
    location: "Coastal Area",
    scope: "Luxury Condominium Development",
    description: "These luxury condominiums blend architectural design with comfort and convenience. Featuring spacious layouts and high-end finishes.",
    completionDate: "2024",
    clientName: "Coastal Living Developers",
    value: "$65M",
    duration: "24 months",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071"
    ],
    features: [
      "Ocean Views",
      "Premium Amenities",
      "Luxury Finishes",
      "Smart Home Integration",
      "Private Balconies",
      "Concierge Service"
    ],
    challenges: [
      {
        title: "Coastal Regulations",
        description: "Navigated complex coastal development regulations and permits."
      },
      {
        title: "Weather Conditions",
        description: "Implemented strategies to manage construction in coastal weather."
      },
      {
        title: "Material Selection",
        description: "Chose materials and finishes resistant to marine environment."
      }
    ]
  },
  "03": {
    id: "03",
    title: "Healthcare Innovation Center",
    location: "Medical District",
    scope: "Healthcare Infrastructure",
    description: "Cutting-edge medical facility with specialized treatment centers, research laboratories, and advanced medical equipment installation.",
    completionDate: "2023",
    clientName: "Metropolitan Healthcare",
    value: "$85M",
    duration: "30 months",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2070",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032"
    ],
    features: [
      "State-of-the-art Equipment",
      "Clean Room Facilities",
      "Advanced HVAC Systems",
      "Specialized Labs",
      "Patient Care Units",
      "Research Facilities"
    ],
    challenges: [
      {
        title: "Medical Standards",
        description: "Met stringent healthcare facility construction standards."
      },
      {
        title: "Equipment Integration",
        description: "Coordinated complex medical equipment installation."
      },
      {
        title: "Operational Continuity",
        description: "Maintained adjacent facility operations during construction."
      }
    ]
  },
  "04": {
  "id": "04",
  "title": "Harbor View Logistics Hub",
  "location": "Coastal Area",
  "scope": "Integrated Coastal Logistics Infrastructure",
  "description": "A state-of-the-art logistics hub designed to streamline coastal import/export operations. It includes smart warehousing, efficient container handling systems, and real-time inventory management.",
  "completionDate": "2024",
  "clientName": "Coastal Freight Solutions",
  "value": "$65M",
  "duration": "24 months",
  "image": "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070&auto=format",
  "gallery": [
    "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070&auto=format",  // warehouse and logistics
    "https://images.unsplash.com/photo-1581090700227-1e8e109d79f5?q=80&w=2070&auto=format",  // shipping containers
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92b2b?q=80&w=2070&auto=format"   // container terminal with cranes
  ],
  "features": [
    "Smart Inventory Tracking",
    "Automated Container Handling",
    "Cold Storage Facilities",
    "Real-Time Freight Monitoring",
    "Secure Perimeter Access",
    "Customs Clearance Integration"
  ],
  "challenges": [
    {
      "title": "Regulatory Compliance",
      "description": "Worked closely with port and maritime authorities to ensure compliance with international shipping standards."
    },
    {
      "title": "Unpredictable Coastal Weather",
      "description": "Developed resilient infrastructure to handle operational disruptions due to weather."
    },
    {
      "title": "Technology Integration",
      "description": "Integrated multiple logistics systems including ERP, GPS tracking, and customs software into one unified platform."
    }
  ]
}

};

export default function ProjectPage({ params }) {
  const project = projects[params.id];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
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
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-red-600 opacity-75">[{project.id}]</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                {project.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                {project.location}
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-2" />
                Completed {project.completionDate}
              </div>
              <div className="flex items-center text-gray-300">
                <Users2 className="w-5 h-5 mr-2" />
                {project.clientName}
              </div>
            </div>

            <p className="text-xl text-gray-200 mb-8">
              {project.description}
            </p>

            <div className="flex gap-4">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-lg h-12 px-8"
              >
                View Gallery
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-black hover:bg-white/10 text-lg h-12 px-8"
              >
                Project Details
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Project Value
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {project.value}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Duration
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {project.duration}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Completion
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {project.completionDate}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore the various aspects and stages of this remarkable project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover what makes this project unique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <CheckCircle2 className="w-6 h-6 text-red-600 dark:text-red-400" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Project Challenges
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              How we overcame key challenges to deliver excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {project.challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your Project Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can bring your vision to life with the same level of excellence
            </p>
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-lg h-12 px-8 group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}