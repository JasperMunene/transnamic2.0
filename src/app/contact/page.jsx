// "use client";

// import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {z} from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import { 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Clock, 
//   Building,
//   CheckCircle2
// } from "lucide-react";

// const formSchema = z.object({
//   fullName: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().min(10, "Phone number must be at least 10 digits"),
//   company: z.string().optional(),
//   projectType: z.string().min(1, "Please select a project type"),
//   message: z.string().min(10, "Message must be at least 10 characters"),
//   terms: z.boolean().refine((val) => val === true, {
//     message: "You must agree to the terms and conditions",
//   }),
// });

// const contactInfo = [
//   {
//     icon: MapPin,
//     title: "Visit Us",
//     details: ["Construction Avenue", "Building City, ST 12345", "Nairobi"],
//   },
//   {
//     icon: Phone,
//     title: "Call Us",
//     details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
//   },
//   {
//     icon: Mail,
//     title: "Email Us",
//     details: ["info@transnamic.com", "support@transnamic.com"],
//   },
//   {
//     icon: Clock,
//     title: "Working Hours",
//     details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
//   },
// ];

// const projectTypes = [
//   "Commercial Construction",
//   "Residential Development",
//   "Industrial Construction",
//   "Infrastructure Project",
//   "Renovation",
//   "Other",
// ];

// const features = [
//   "24/7 Emergency Support",
//   "Free Initial Consultation",
//   "Expert Project Management",
//   "Transparent Pricing",
// ];

// export default function Contact() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       fullName: "",
//       email: "",
//       phone: "",
//       company: "",
//       projectType: "",
//       message: "",
//       terms: false,
//     },
//   });

//   function onSubmit(values) {
//     console.log(values);
//     // Handle form submission
//   }

//   return (
//     <main className="min-h-screen bg-white dark:bg-gray-900">
//       {/* Hero Section */}
//       <section className="relative py-24 lg:py-32 overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/50" />
//         </div>
        
//         <div className="container mx-auto px-4 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-3xl"
//           >
//             <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
//               Let's Build Something Amazing Together
//             </h1>
//             <p className="text-xl text-gray-200 mb-8">
//               Ready to start your project? Contact us today and let our experts help
//               bring your vision to life.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-24 bg-gray-50 dark:bg-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16">
//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="sticky top-8">
//                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
//                   Get in Touch
//                 </h2>
                
//                 <div className="grid gap-8 mb-12">
//                   {contactInfo.map((item) => (
//                     <div
//                       key={item.title}
//                       className="flex gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
//                     >
//                       <div className="bg-red-50 dark:bg-red-900/20 p-3 h-fit rounded-lg">
//                         <item.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                           {item.title}
//                         </h3>
//                         {item.details.map((detail, index) => (
//                           <p
//                             key={index}
//                             className="text-gray-600 dark:text-gray-300"
//                           >
//                             {detail}
//                           </p>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
//                     Why Choose Us
//                   </h3>
//                   <div className="space-y-4">
//                     {features.map((feature) => (
//                       <div key={feature} className="flex items-center gap-3">
//                         <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400" />
//                         <span className="text-gray-700 dark:text-gray-300">
//                           {feature}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="bg-white dark:bg-gray-900 p-8 lg:p-12 rounded-2xl shadow-xl">
//                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
//                   Send Us a Message
//                 </h2>

//                 <Form {...form}>
//                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <FormField
//                         control={form.control}
//                         name="fullName"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Full Name</FormLabel>
//                             <FormControl>
//                               <Input placeholder="John Doe" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Email Address</FormLabel>
//                             <FormControl>
//                               <Input placeholder="john@example.com" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-6">
//                       <FormField
//                         control={form.control}
//                         name="phone"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Phone Number</FormLabel>
//                             <FormControl>
//                               <Input placeholder="+1 (555) 000-0000" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <FormField
//                         control={form.control}
//                         name="company"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Company (Optional)</FormLabel>
//                             <FormControl>
//                               <Input placeholder="Your Company" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>

//                     <FormField
//                       control={form.control}
//                       name="projectType"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Project Type</FormLabel>
//                           <FormControl>
//                             <select
//                               className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                               {...field}
//                             >
//                               <option value="">Select a project type</option>
//                               {projectTypes.map((type) => (
//                                 <option key={type} value={type}>
//                                   {type}
//                                 </option>
//                               ))}
//                             </select>
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="message"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Message</FormLabel>
//                           <FormControl>
//                             <Textarea
//                               placeholder="Tell us about your project..."
//                               className="min-h-[150px]"
//                               {...field}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="terms"
//                       render={({ field }) => (
//                         <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                           <FormControl>
//                             <Checkbox
//                               checked={field.value}
//                               onCheckedChange={field.onChange}
//                             />
//                           </FormControl>
//                           <div className="space-y-1 leading-none">
//                             <FormLabel>
//                               I agree to the terms and conditions
//                             </FormLabel>
//                           </div>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <Button
//                       type="submit"
//                       size="lg"
//                       className="w-full bg-red-600 hover:bg-red-700"
//                     >
//                       Send Message
//                     </Button>
//                   </form>
//                 </Form>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-24">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
//               Visit Our Office
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300">
//               Come see us in person and discuss your project face-to-face.
//             </p>
//           </div>

//           <div className="relative h-[500px] rounded-2xl overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647906701911!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }