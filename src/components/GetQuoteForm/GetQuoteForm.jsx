"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, User, Mail, Phone } from "lucide-react";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    details: "",
    timeline: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { value: "earthworks", label: "Earthworks & Excavation" },
    { value: "equipment", label: "Equipment Leasing" },
    { value: "materials", label: "Construction Materials" },
    { value: "transport", label: "Transport & Logistics" },
    { value: "construction", label: "General Construction" },
    { value: "other", label: "Other Services" },
  ];

  const timelines = [
    { value: "urgent", label: "Immediate Start (0-2 weeks)" },
    { value: "soon", label: "Within 1 Month" },
    { value: "flexible", label: "Flexible Timeline" },
    { value: "planning", label: "Planning Phase" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Quote request submitted!", {
        description: "Our team will contact you within 24 hours.",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        location: "",
        details: "",
        timeline: ""
      });

    } catch (error) {
      toast.error("Submission failed", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Request a <span className="text-red-600">Custom Quote</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Complete the form below and our team will prepare a tailored estimate for your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-red-600" />
              Project Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name "
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254 700 000000"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4" />
                    Service Needed
                  </Label>
                  <Select
                    name="service"
                    value={form.service}
                    onValueChange={(value) => setForm({...form, service: value})}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="location" className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" />
                    Project Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="e.g. Nairobi, Mombasa Road"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="timeline" className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    Project Timeline
                  </Label>
                  <Select
                    name="timeline"
                    value={form.timeline}
                    onValueChange={(value) => setForm({...form, timeline: value})}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="details">Project Details</Label>
                  <Textarea
                    id="details"
                    name="details"
                    rows={5}
                    value={form.details}
                    onChange={handleChange}
                    placeholder="Describe your project requirements, scope, materials needed, etc."
                    className="min-h-[120px]"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Get Your Custom Quote"}
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-red-600 text-white rounded-2xl shadow-lg p-8"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Request a Quote?</h2>
                <p className="text-red-100">
                  Get a detailed, no-obligation estimate tailored to your specific project requirements.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Competitive Pricing</h3>
                    <p className="text-red-100 text-sm">
                      We offer transparent, market-competitive rates for all our services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fast Response</h3>
                    <p className="text-red-100 text-sm">
                      Receive your customized quote within 24 hours of submission.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Quality Guarantee</h3>
                    <p className="text-red-100 text-sm">
                      All our quotes come with a commitment to quality and reliability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <h3 className="font-bold mb-3">Need Immediate Assistance?</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+254 721 150 988</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@transnamic.co.ke</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Add these missing icons at the top of your file
