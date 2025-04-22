"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Trophy, Users2, Building, Target, Eye, BarChart2, Heart, Shield, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent z-0" />
        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full mb-6"
            >
              <p className="text-red-600 dark:text-red-400 font-semibold tracking-wider">
                ABOUT US
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Commitment to <span className="text-red-600 dark:text-red-500">Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Delivering innovative logistics and construction solutions through experience and dedication.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="/peaky.jpeg"
                alt="Transnamic Team"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-red-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <Building className="w-10 h-10 mb-3" />
                <p className="text-2xl font-bold">3+</p>
                <p className="text-sm">Years in Operation</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-red-600" />
                <p className="text-red-600 font-semibold tracking-wider">
                  OUR STORY
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Transnamic
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Established in October 2020, Transnamic Limited leverages our founders' experience in the transport and logistics industry and construction material. We combine the service and goods offered with technological innovation to provide flexible, timely and unique solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                    <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Innovative Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                    <BarChart2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Industry Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                    <Users2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Client Focused</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Quality Assurance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-red-600" />
              <p className="text-red-600 font-semibold tracking-wider">
                VISION & MISSION
              </p>
              <div className="h-1 w-12 bg-red-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Purpose
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To make Transnamic Logistics a key partner in integrated logistics and infrastructure in East and Central Africa, offering a higher quality of goods & service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Combining our service and goods with technological innovation to offer flexible, timely and unique solutions to our clients across East and Central Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Aim & Objectives */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-red-600" />
              <p className="text-red-600 font-semibold tracking-wider">
                OUR AIM & OBJECTIVE
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Goals
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our aim is to exceed the expectations of our customers through total quality management.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Primary Objective</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To provide cost effective and reliable solutions to help our customers realize their goals.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Focus Areas</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Delivering innovative solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Maintaining professional standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Ensuring customer satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-red-600" />
              <p className="text-red-600 font-semibold tracking-wider">
                CORE VALUES
              </p>
              <div className="h-1 w-12 bg-red-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Guides Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The fundamental principles that shape our company culture and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Purpose & Growth",
                description: "Our foundation is built on our purpose and provides a place for our team's passion."
              },
              {
                icon: Trophy,
                title: "Professional Standards",
                description: "To work in accordance with the code of conduct and to be professional in all our actions to our clients, partners, and colleagues."
              },
              {
                icon: Shield,
                title: "Health & Safety",
                description: "Ensuring our employees work in a safe environment and are in good health."
              },
              {
                icon: Users2,
                title: "Customer Commitment",
                description: "Working hard to meet customer expectations in all our projects."
              },
              {
                icon: CheckCircle2,
                title: "Accountability",
                description: "To have honesty and respect for all individuals."
              },
              {
                icon: Handshake,
                title: "Good Business Relations",
                description: "To promote lasting business relationships with partners, clients, and members of society by conducting business with integrity."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-red-100 dark:bg-red-900/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold mb-6"
          >
            Partner With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Discover how Transnamic's innovative solutions can benefit your next project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/10 border-white text-white hover:text-white text-lg h-12 px-8"
            >
              Contact Our Team
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}