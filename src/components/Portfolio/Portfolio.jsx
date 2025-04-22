"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Dagoretti Corner Project",
    location: "Dagoretti, Nairobi",
    scope: "Urban Infrastructure Upgrade",
    description: "A strategic project enhancing connectivity, drainage, and road networks around Dagoretti to support urban growth.",
    image: "https://imgs.search.brave.com/TD83rwOJpos4CqtoHID_JEF7K88DQ86AYFyvgKrHCj0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29uc3RydWN0aW9u/a2VueWEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA5/L2NvbnN0cnVjdGlv/bi5qcGc_eDg5OTE2"
  },
  {
    id: "02",
    title: "Eastern Bypass Construction",
    location: "Nairobi Eastern Corridor",
    scope: "Major Road Development",
    description: "This high-capacity bypass connects key industrial zones with the city, easing traffic congestion and promoting logistics.",
    image: ""
  },
  {
    id: "03",
    title: "Dongo Kundu Project",
    location: "Mombasa",
    scope: "Transport & Economic Hub",
    description: "A multi-modal transport corridor designed to open up Mombasa’s south coast for trade and tourism with modern infrastructure.",
    image: "/Dongo.jpeg"
  },
  {
    id: "04",
    title: "Kwa Jomvu A109 Construction",
    location: "Jomvu, Mombasa County",
    scope: "Highway Expansion Project",
    description: "A critical upgrade to the A109 highway facilitating efficient cargo movement between Mombasa port and inland destinations.",
    image: "https://imgs.search.brave.com/PgxuIva2m6bNXDVyKhkLcKGPTaxhUTRHtamAbnWCr4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb25z/dHJ1Y3Rpb25yZXZp/ZXdvbmxpbmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzAxL0t3YS1Kb212/dS1NYXJpYWthbmkt/Um9hZC1Qcm9qZWN0/LmpwZw"
  }
];

export default function Portfolio() {
  return (
    <section className="w-full py-24 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-[0.02] dark:opacity-[0.05]">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-500 to-purple-400" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-red-400 to-yellow-600" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-1 w-12 bg-red-600" />
            <p className="text-red-600 font-semibold tracking-wider text-sm">
              LATEST PROJECTS
            </p>
            <div className="h-1 w-12 bg-red-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Featured Portfolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Explore our latest projects showcasing innovation, precision, and excellence in construction.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative z-10 bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-bold text-red-600 dark:text-red-400 opacity-50">[{project.id}]</span>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                      <span className="inline-block px-3 py-1 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-full">
                        {project.scope}
                      </span>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                      {project.description}
                    </p>

                    <Button
                      size="lg"
                      className="group bg-red-600 hover:bg-red-700"
                    >
                      See Details
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
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
  );
}
