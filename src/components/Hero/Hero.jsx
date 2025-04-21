"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "24/7 Support Available",
  "Nationwide Coverage",
  "Licensed & Insured",
];

export default function Hero() {
  return (
    <section className="w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full">
                <p className="text-red-600 dark:text-red-400 font-semibold tracking-wider text-sm">
                  INTEGRATED SOLUTIONS
                </p>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100"
            >
              Unparalleled Service Delivery in
              <span className="text-red-600 dark:text-red-500"> Equipment Leasing, Logistics & Construction</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Our vision is to make Transnamic Logistics a key partner in integrated logistics and infrastructure in East and Central Africa, offering a higher quality of goods & service.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg h-12 px-8">
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-red-200 dark:border-red-800/30 hover:bg-red-50 dark:hover:bg-red-900/20 text-lg h-12"
              >
                Learn more 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
            >
              {features.map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-500" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative w-full h-full min-h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 w-full max-w-[600px]"
            >
              <Image
                src="/truck1.png"
                alt="Construction site"
                width={800}
                height={600}
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                    <svg className="w-8 h-8 text-red-600 dark:text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Project Delivery</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">98% On-Time</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                    <svg className="w-8 h-8 text-red-600 dark:text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Service Range</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">50+ Projects</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute inset-0 z-0"
            >
              <div className="absolute right-0 top-0 w-[80%] h-[90%] border-2 border-red-100 dark:border-red-800/30 rounded-2xl transform translate-x-8 translate-y-8" />
              <div className="absolute left-0 bottom-0 w-[80%] h-[90%] border-2 border-red-100 dark:border-red-800/30 rounded-2xl transform -translate-x-8 -translate-y-8" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}