"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import {
    TrendingUp, Instagram, Facebook, Palette, Share2,
    Globe, Search, Youtube, Video, Sparkles,
    Mail, MousePointer, Linkedin, ArrowRight
} from "lucide-react"
import AnimatedButton from "./animated-button"

const services = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "Performance Marketing", description: "ROI-driven campaigns across search, social, and e-commerce channels.", gradient: "from-blue-500/20 to-cyan-600/10", border: "border-blue-500/30", hover: "hover:border-blue-400/50", icon_color: "text-blue-400" },
    { icon: <Globe className="w-6 h-6" />, title: "Website Development", description: "SEO-friendly, fully responsive websites for every industry.", gradient: "from-green-500/20 to-emerald-600/10", border: "border-green-500/30", hover: "hover:border-green-400/50", icon_color: "text-green-400" },
    { icon: <Search className="w-6 h-6" />, title: "Advance SEO", description: "Rank #1 on Google with quality backlinks and on/off-page optimization.", gradient: "from-red-500/20 to-rose-600/10", border: "border-red-500/30", hover: "hover:border-red-400/50", icon_color: "text-red-400" },
    { icon: <Share2 className="w-6 h-6" />, title: "Social Media Marketing", description: "Connect, promote, and convert across all major social platforms.", gradient: "from-purple-500/20 to-violet-600/10", border: "border-purple-500/30", hover: "hover:border-purple-400/50", icon_color: "text-purple-400" },
    { icon: <Video className="w-6 h-6" />, title: "2D Video Creations", description: "High-ROI explainer, promotional, and brand story videos.", gradient: "from-sky-500/20 to-blue-600/10", border: "border-sky-500/30", hover: "hover:border-sky-400/50", icon_color: "text-sky-400" },
    { icon: <Palette className="w-6 h-6" />, title: "Graphic Design", description: "Logos, brochures, creatives and everything visual for your brand.", gradient: "from-orange-500/20 to-amber-600/10", border: "border-orange-500/30", hover: "hover:border-orange-400/50", icon_color: "text-orange-400" },
    { icon: <Facebook className="w-6 h-6" />, title: "Meta / Facebook Ads", description: "Targeted campaigns with pixel setup, A/B testing, and real conversions.", gradient: "from-indigo-500/20 to-blue-600/10", border: "border-indigo-500/30", hover: "hover:border-indigo-400/50", icon_color: "text-indigo-400" },
    { icon: <Instagram className="w-6 h-6" />, title: "Instagram Marketing", description: "Organic & paid growth with hashtag research and competitor analysis.", gradient: "from-pink-500/20 to-rose-600/10", border: "border-pink-500/30", hover: "hover:border-pink-400/50", icon_color: "text-pink-400" },
    { icon: <Youtube className="w-6 h-6" />, title: "YouTube Marketing", description: "Grow views, subscribers, and watch hours on your channel.", gradient: "from-red-600/20 to-orange-600/10", border: "border-red-600/30", hover: "hover:border-red-500/50", icon_color: "text-red-500" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Animation & Mascot", description: "3D, whiteboard, stop-motion and custom mascot character creation.", gradient: "from-fuchsia-500/20 to-purple-600/10", border: "border-fuchsia-500/30", hover: "hover:border-fuchsia-400/50", icon_color: "text-fuchsia-400" },
    { icon: <Mail className="w-6 h-6" />, title: "Email Marketing", description: "Segmented affiliate campaigns with tracking and analytics reporting.", gradient: "from-teal-500/20 to-cyan-600/10", border: "border-teal-500/30", hover: "hover:border-teal-400/50", icon_color: "text-teal-400" },
    { icon: <MousePointer className="w-6 h-6" />, title: "Google Ads / PPC", description: "Pay-per-click strategies that turn ad spend into measurable revenue.", gradient: "from-blue-600/20 to-green-500/10", border: "border-blue-600/30", hover: "hover:border-blue-500/50", icon_color: "text-blue-500" },
    { icon: <Linkedin className="w-6 h-6" />, title: "LinkedIn Marketing", description: "B2B lead generation through professional network management.", gradient: "from-blue-700/20 to-blue-500/10", border: "border-blue-700/30", hover: "hover:border-blue-600/50", icon_color: "text-blue-600" },
]

export default function ServicesPreview() {
    const [hoveredService, setHoveredService] = useState<number | null>(null)

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-700/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-700/8 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                    <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm text-gray-300 mb-6">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2.5 animate-pulse" />
                        What We Do
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        13 Services.{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">One Partner.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        End-to-end digital solutions built to grow your brand — from first impression to final conversion.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            onHoverStart={() => setHoveredService(index)}
                            onHoverEnd={() => setHoveredService(null)}
                            className={`relative bg-gray-900/50 border ${service.border} ${service.hover} rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group overflow-hidden cursor-default`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            <div className="relative z-10">
                                <div className={`${service.icon_color} mb-4`}>{service.icon}</div>
                                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug">{service.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
                    <Link href="/services">
                        <AnimatedButton className="bg-white text-black hover:bg-gray-100">
                            <span className="flex items-center">Explore All Services<ArrowRight className="ml-2 h-4 w-4" /></span>
                        </AnimatedButton>
                    </Link>
                    <Link href="/contact">
                        <AnimatedButton variant="slim" className="bg-transparent border border-white/30 text-white hover:bg-white/10">Talk to Us</AnimatedButton>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}