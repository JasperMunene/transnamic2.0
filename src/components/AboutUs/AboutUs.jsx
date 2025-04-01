"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Trophy, Users2, Building } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "25+",
    label: "Years Experience",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-900/20"
  },
  {
    icon: Users2,
    value: "200+",
    label: "Team Members",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    icon: Building,
    value: "500+",
    label: "Projects Completed",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20"
  }
];

const features = [
  "Industry-leading safety standards",
  "Innovative construction techniques",
  "Sustainable building practices",
  "Expert project management"
];

export default function AboutUs() {
  return (
    <section className="w-full py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-[0.02] dark:opacity-[0.05]">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-purple-500 to-cyan-400" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-red-600 to-purple-400" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                alt="Construction team"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent" />
            </div>

            {/* Stats */}
            <div className="absolute -bottom-8 left-8 right-8 grid grid-cols-3 gap-4 z-20">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
                >
                  <div className={`${stat.bgColor} p-2 rounded-lg w-fit mb-3`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className=" text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 w-72 h-72 border-2 border-red-100 dark:border-red-800/30 rounded-2xl" />
            <div className="absolute -left-4 -bottom-4 w-72 h-72 border-2 border-red-100 dark:border-red-800/30 rounded-2xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:pl-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-red-600" />
              <p className="text-red-600 font-semibold tracking-wider">
                [ ABOUT US ]
              </p>
            </div>

            <h2 className="text-5xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Building Excellence Through Innovation
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Since our establishment, we've been at the forefront of construction innovation, 
              delivering exceptional results through a combination of technical expertise, 
              dedicated teamwork, and unwavering commitment to quality.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-gray-700 dark:text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-lg h-12 px-8"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}