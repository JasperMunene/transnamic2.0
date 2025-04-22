'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Truck,
  Warehouse,
  Construction,
  Drill,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Transport & Logistics',
    description:
      'Modern transport solutions focused on large capacity, flexibility, and secure storage, handling and transport of goods.',
    image:
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1970',
    slug: 'transport-logistics',
    features: [
      'Road freight services',
      'Water tank installation',
      'Warehousing solutions',
      'Timely and secure deliveries'
    ]
  },
  {
    icon: Construction,
    title: 'Construction Services',
    description:
      'Comprehensive construction solutions including land development and infrastructure projects.',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
    slug: 'construction-management',
    features: [
      'Grading and leveling',
      'Construction project management',
      'Land surveying',
      'Infrastructure development'
    ]
  },
  {
    icon: Drill,
    title: 'Equipment Leasing',
    description:
      'Modern equipment for earthworks and construction projects with expert operators available.',
    image:
      'https://images.unsplash.com/photo-1471513671800-b09c87e1497c?q=80&w=2070',
    slug: 'equipment-leasing',
    features: [
      'Excavators and bulldozers',
      'Tipper trucks and graders',
      'Loaders and compactors',
      'Dragline excavators'
    ]
  },
  {
    icon: Warehouse,
    title: 'Material Supply',
    description:
      'High quality aggregates for construction projects from our quarries and manufacturing facilities.',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070',
    slug: 'materials-supply',
    features: [
      'Quarry and river sand',
      'Ballast and graded stones',
      'Gravel and murram',
      'Asphalt concrete'
    ]
  }
];

export default function ServicePage({ params }) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const { icon: ServiceIcon, title, description, image, features } = service;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-xl">
                <ServiceIcon className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                {title}
              </h1>
            </div>
            <p className="text-xl text-gray-200 mb-8">
              {description}
            </p>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                ← Back to Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Key Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              What we offer in our <span className="font-semibold">{title}</span> service
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <CheckCircle2 className="w-6 h-6 text-red-600 dark:text-red-400" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feat}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Interested in our <strong>{title}</strong> service?
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Contact Us <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
