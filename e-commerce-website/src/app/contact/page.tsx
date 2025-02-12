// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"

// export default function ContactPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 2000))
//     setIsSubmitting(false)
//     alert('Message sent successfully!')
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6">
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-5xl flex flex-col md:flex-row gap-12"
//       >
//         <div className="flex-1 space-y-8">
//           <div>
//             <h2 className="text-5xl font-extrabold text-gray-800 mb-2">
//               Contact <span className="text-indigo-600">Avion</span>
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Get in touch with us for any inquiries about our luxury furniture & home décor.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <Label htmlFor="name" className="text-gray-700 font-medium text-lg">Full Name</Label>
//               <Input
//                 id="name"
//                 placeholder="Enter your name"
//                 className="mt-1 bg-gray-50 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="email" className="text-gray-700 font-medium text-lg">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="mt-1 bg-gray-50 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="message" className="text-gray-700 font-medium text-lg">Message</Label>
//               <Textarea
//                 id="message"
//                 rows={4}
//                 placeholder="Your message..."
//                 className="mt-1 bg-gray-50 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>

//             <Button 
//               type="submit" 
//               className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <span className="flex items-center justify-center">
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Sending...
//                 </span>
//               ) : (
//                 <span className="flex items-center justify-center">
//                   <Send className="mr-2 h-6 w-6" /> Send Message
//                 </span>
//               )}
//             </Button>
//           </form>
//         </div>

//         <div className="flex-1 bg-gradient-to-br from-indigo-50 to-gray-50 rounded-2xl p-8 flex flex-col justify-between shadow-lg">
//           <div className="space-y-8">
//             <h3 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Showroom</h3>
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <MapPin className="h-8 w-8 text-indigo-600 mr-4 mt-1" />
//                 <div>
//                   <p className="font-semibold text-xl text-gray-800">Avion Luxury Furniture</p>
//                   <p className="text-gray-600">123 Elegance Avenue, Design District</p>
//                   <p className="text-gray-600">Furniture City, FC 12345, USA</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <Phone className="h-8 w-8 text-indigo-600 mr-4" />
//                 <p className="text-xl text-gray-800">+1 (234) 567-8900</p>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="h-8 w-8 text-indigo-600 mr-4" />
//                 <p className="text-xl text-gray-800">contact@avionluxury.com</p>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 bg-white p-6 rounded-xl shadow-inner">
//             <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
//               <Clock className="h-6 w-6 text-indigo-600 mr-2" /> Opening Hours
//             </h4>
//             <div className="space-y-2 text-lg">
//               <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
//               <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
//               <p className="text-gray-600">Sunday: Closed</p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }



'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert('Message sent successfully!')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-5xl flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-5xl font-extrabold text-gray-800 mb-2">
              Contact <span className="text-indigo-600">Avion</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Get in touch with us for any inquiries about our luxury furniture & home décor.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium text-lg">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="mt-1 bg-gray-50 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium text-lg">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 bg-gray-50 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-700 font-medium text-lg">Message</Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Your message..."
                className="mt-1 bg-gray-50 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="mr-2 h-6 w-6" /> Send Message
                </span>
              )}
            </Button>
          </form>
        </div>

        <div className="flex-1 bg-gradient-to-br from-indigo-50 to-gray-50 rounded-2xl p-8 flex flex-col justify-between shadow-lg">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Showroom</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-8 w-8 text-indigo-600 mr-4 mt-1" />
                <div>
                  <p className="font-semibold text-xl text-gray-800">Avion Luxury Furniture</p>
                  <p className="text-gray-600">123 Elegance Avenue, Design District</p>
                  <p className="text-gray-600">Furniture City, FC 12345, USA</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-8 w-8 text-indigo-600 mr-4" />
                <p className="text-xl text-gray-800">+1 (234) 567-8900</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-8 w-8 text-indigo-600 mr-4" />
                <p className="text-xl text-gray-800">contact@avionluxury.com</p>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-white p-6 rounded-xl shadow-inner">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <Clock className="h-6 w-6 text-indigo-600 mr-2" /> Opening Hours
            </h4>
            <div className="space-y-2 text-lg">
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
