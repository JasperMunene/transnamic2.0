"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Users2, Trophy, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Trophy,
    value: "25+",
    label: "Years of Excellence",
    description: "Delivering quality since 1998"
  },
  {
    icon: Users2,
    value: "500+",
    label: "Expert Team",
    description: "Dedicated professionals"
  },
  {
    icon: Target,
    value: "1000+",
    label: "Projects Completed",
    description: "Across the nation"
  }
];

const teamMembers = [
  {
    name: "Robert Smith",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887",
    description: "With over 20 years of experience in construction and project management."
  },
  {
    name: "Sarah Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=1888",
    description: "Expert in streamlining construction processes and operational efficiency."
  },
  {
    name: "David Miller",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1887",
    description: "Specializes in innovative construction technologies and methodologies."
  }
];

const milestones = [
  {
    year: "1998",
    title: "Company Founded",
    description: "Started with a vision to transform the construction industry."
  },
  {
    year: "2005",
    title: "National Expansion",
    description: "Expanded operations across multiple states."
  },
  {
    year: "2012",
    title: "Sustainability Initiative",
    description: "Launched green building program and sustainable practices."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Implemented cutting-edge construction technologies."
  }
];

const values = [
  "Excellence in Every Detail",
  "Sustainable Practices",
  "Innovation First",
  "Safety Above All",
  "Client Satisfaction",
  "Community Impact"
];

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
            alt="Construction site"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Building Tomorrow's World Today
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We're more than just a construction company. We're innovators, 
              problem-solvers, and community builders committed to creating 
              sustainable infrastructure for future generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
              >
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-xl w-fit mb-4">
                  <stat.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Since our founding in 1998, we've been driven by a singular vision: 
                to revolutionize the construction industry through innovation, 
                sustainability, and unwavering commitment to excellence.
              </p>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-24 shrink-0">
                      <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {milestone.year}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                alt="Construction progress"
                width={800}
                height={1000}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our success is driven by our exceptional team of industry veterans who bring 
              decades of combined experience and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-red-600 dark:text-red-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              These core principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
              >
                <CheckCircle2 className="w-6 h-6 text-red-600 dark:text-red-400" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2070"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in creating the future of construction. Let's discuss your next project.
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