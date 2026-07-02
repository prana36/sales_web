/// <reference types="vite/client" />
import React, { useState } from "react";
import { MapPin, Mail, Phone, HelpCircle, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    formOfSelling: "",
    industryVertical: "",
    turnover: "",
    message: ""
  });

  const formOfSellingOptions = [
    "Channel of Distribution",
    "Modern Retail Trade",
    "Direct Selling",
    "Key Account Management",
    "Exports",
    "E-commerce"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, submit the data to an endpoint
    toast.success("Thank you! Your message has been sent successfully.");
    setFormData({
      fullName: "",
      email: "",
      formOfSelling: "",
      industryVertical: "",
      turnover: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">Have Any Questions?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us & Write a Message
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Please fill the following details to enable us to answer your questions better.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Contact Details (Left Column) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[10px] border border-gray-800 bg-gray-900 p-6 text-white shadow-2xl sm:p-8 md:p-10 lg:col-span-5">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/10 rounded-full blur-2xl"></div>

            <div className="space-y-8 relative z-10">
              <div>
                <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest block mb-2">Our Office</span>
                <h3 className="text-2xl font-bold mb-4">Strategic Concepts (India) Pvt. Ltd.</h3>
                
                <div className="flex gap-4 items-start text-gray-300">
                  <MapPin className="size-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">
                    1st Floor, Gokul Building, W.H.C. Road, Dharampeth, Nagpur - 440010
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-800">
                <div className="flex gap-4 items-center text-gray-300">
                  <Phone className="size-5 text-yellow-500 flex-shrink-0" />
                  <a href="tel:+919970506000" className="text-sm hover:text-white transition-colors">
                    +91-9970506000
                  </a>
                </div>
                
                <div className="flex gap-4 items-center text-gray-300">
                  <Mail className="size-5 text-yellow-500 flex-shrink-0" />
                  <a href="mailto:sanjay@consult4sales.com" className="text-sm hover:text-white transition-colors">
                    sanjay@consult4sales.com
                  </a>
                </div>
              </div>
            </div>

            {/* Helpline support card */}
            <div className="mt-12 bg-gray-800/80 p-6 rounded-[10px] border border-gray-700/50 space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <HelpCircle className="size-6 text-yellow-500" />
                <h4 className="font-bold text-white text-sm uppercase tracking-wider">Have a Query in Sales?</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Connect directly with our support helpdesk for urgent assistance with your sales training programs.
              </p>
              <a 
                href="tel:+919970506000" 
                className="inline-flex w-full items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-gray-900 py-2.5 rounded-[10px] text-xs font-bold transition-all"
              >
                Call Hotline Support
              </a>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="rounded-[10px] border border-gray-250 bg-gray-50 p-6 shadow-sm sm:p-8 md:p-10 lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    required 
                    value={formData.fullName} 
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    className="w-full bg-white border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all outline-none"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    className="w-full bg-white border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all outline-none"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Form of Selling dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="formOfSelling" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Form of Selling</label>
                  <select 
                    id="formOfSelling" 
                    name="formOfSelling" 
                    required 
                    value={formData.formOfSelling} 
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all outline-none"
                  >
                    <option value="" disabled>Select Form of Selling</option>
                    {formOfSellingOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Industry Vertical */}
                <div className="space-y-1.5">
                  <label htmlFor="industryVertical" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Industry Vertical</label>
                  <input 
                    type="text" 
                    id="industryVertical" 
                    name="industryVertical" 
                    required 
                    value={formData.industryVertical} 
                    onChange={handleChange}
                    placeholder="e.g., BFSI, Retail, Tech" 
                    className="w-full bg-white border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all outline-none"
                  />
                </div>

              </div>

              {/* Gross Annual Turnover */}
              <div className="space-y-1.5">
                <label htmlFor="turnover" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Gross Annual Turnover in INR</label>
                <input 
                  type="text" 
                  id="turnover" 
                  name="turnover" 
                  required 
                  value={formData.turnover} 
                  onChange={handleChange}
                  placeholder="e.g., 5 Crores" 
                  className="w-full bg-white border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all outline-none"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message / Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={4} 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Tell us about your sales requirements or challenges..." 
                  className="w-full bg-white border border-gray-200 rounded-[10px] px-4 py-3 text-sm focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-[10px] transition-all shadow-lg hover:shadow-blue-900/20 flex items-center justify-center gap-2"
              >
                <Send className="size-4" />
                <span>SEND MESSAGE</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
