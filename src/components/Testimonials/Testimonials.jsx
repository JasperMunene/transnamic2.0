"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Property Developer",
    company: "Urban Developments Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887",
    content: "Working with this team has been exceptional. Their attention to detail and commitment to quality has exceeded our expectations on every project.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    company: "Pacific Construction Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770",
    content: "Their innovative approach to construction challenges and ability to deliver on time has made them our go-to partner for all major developments.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Chief Architect",
    company: "Modern Spaces Architecture",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
    content: "The team's expertise in sustainable construction practices and their collaborative approach has been invaluable to our architectural projects.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-[0.02] dark:opacity-[0.05]">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-purple-500 to-cyan-400" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-red-600 to-purple-400" />
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
              TESTIMONIALS
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
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Discover why leading businesses trust us with their construction and logistics needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl relative"
            >
              <div className="absolute -top-4 -right-4 bg-red-600 p-3 rounded-xl shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current text-amber-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}