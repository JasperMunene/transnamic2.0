// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
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
// import { Instagram, Twitter, Facebook, Globe } from "lucide-react";

// const formSchema = z.object({
//   fullName: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().min(10, "Phone number must be at least 10 digits"),
//   message: z.string().min(10, "Message must be at least 10 characters"),
//   terms: z.boolean().refine((val) => val === true, {
//     message: "You must agree to the terms of service",
//   }),
// });

// export default function Contact() {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       fullName: "",
//       email: "",
//       phone: "",
//       message: "",
//       terms: false,
//     },
//   });

//   function onSubmit(values) {
//     console.log(values);
//     // Handle form submission
//   }

//   if (!isMounted) return null;

//   return (
//     <section className="w-full py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-[0.02] dark:opacity-[0.05]">
//         <div className="blur-[106px] h-56 bg-gradient-to-br from-purple-500 to-cyan-400" />
//         <div className="blur-[106px] h-32 bg-gradient-to-r from-red-600 to-purple-400" />
//       </div>

//       <div className="container mx-auto px-4 relative">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="relative"
//           >
//             <div className="max-w-xl">
//               <div className="flex items-center gap-4 mb-6">
//                 <p className="text-red-600 dark:text-red-400 font-semibold tracking-wider text-sm">
//                   CONTACT US
//                 </p>
//                 <div className="h-1 w-12 bg-red-600" />
//               </div>

//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
//                 Start Your <br />
//                 Project with Us.
//               </h2>

//               <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
//                 Ready to bring your vision to life? Let's discuss your construction needs and explore how our expertise can help turn your ideas into reality.
//               </p>

//               <div className="flex gap-6">
//                 <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors">
//                   <Instagram className="w-6 h-6" />
//                 </a>
//                 <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors">
//                   <Twitter className="w-6 h-6" />
//                 </a>
//                 <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors">
//                   <Facebook className="w-6 h-6" />
//                 </a>
//                 <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors">
//                   <Globe className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-2xl shadow-xl">
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
//                 Request a call back
//               </h3>

//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                   <FormField
//                     control={form.control}
//                     name="fullName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Full Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="John Doe" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email Address</FormLabel>
//                         <FormControl>
//                           <Input placeholder="john@example.com" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="phone"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Phone Number</FormLabel>
//                         <FormControl>
//                           <Input placeholder="+1 (555) 000-0000" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="message"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Message</FormLabel>
//                         <FormControl>
//                           <Textarea 
//                             placeholder="Tell us about your project..."
//                             className="min-h-[120px]"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="terms"
//                     render={({ field }) => (
//                       <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                         <FormControl>
//                           <Checkbox
//                             checked={field.value}
//                             onCheckedChange={field.onChange}
//                           />
//                         </FormControl>
//                         <div className="space-y-1 leading-none">
//                           <FormLabel>
//                             I agree to the terms of service.
//                           </FormLabel>
//                         </div>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <Button 
//                     type="submit"
//                     size="lg"
//                     className="w-full bg-red-600 hover:bg-red-700"
//                   >
//                     Submit
//                   </Button>
//                 </form>
//               </Form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }