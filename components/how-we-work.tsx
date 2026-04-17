"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Research & Strategy",
    description: "We uncover growth opportunities and define a clear roadmap for your success.",
    icon: <Search className="w-8 h-8" />,
    mockup: "discovery",
    gradient: "from-blue-500/20 to-blue-600/10",
  },
  {
    number: "02",
    title: "Build & Optimize",
    description: "We build powerful solutions and continuously optimize for performance and results.",
    icon: <Lightbulb className="w-8 h-8" />,
    mockup: "development",
    gradient: "from-purple-500/20 to-purple-600/10",
  },
  {
    number: "03",
    title: "Launch & Scale",
    description: "We launch your product and scale it with data-driven strategies and ongoing support.",
    icon: <Rocket className="w-8 h-8" />,
    mockup: "launch",
    gradient: "from-green-500/20 to-green-600/10",
  },
]

export default function HowWeWork() {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">How We Work</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A simple, effective approach to building your brand with excellence.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-[55%] left-0 right-0 z-0">
            <div className="max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-gradient-to-br ${step.gradient} border border-gray-700/70 rounded-3xl p-8 backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]`}
              >
                {/* Mockup Area */}
                <div className="aspect-video bg-gray-900 rounded-2xl mb-6 overflow-hidden relative border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                    {/* Discovery Mockup */}
                    {step.mockup === "discovery" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <div className="w-full max-w-[200px] space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                              <div className="w-3 h-3 bg-blue-500 rounded"></div>
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="bg-gray-700 h-2 w-full rounded"></div>
                              <div className="bg-gray-700 h-2 w-3/4 rounded"></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-700 h-12 rounded-lg"></div>
                            <div className="bg-gray-700 h-12 rounded-lg"></div>
                          </div>
                          <div className="bg-gray-700 h-8 w-full rounded"></div>
                        </div>
                      </motion.div>
                    )}

                    {/* Development Mockup */}
                    {step.mockup === "development" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <div className="w-full max-w-[200px] space-y-3">
                          <div className="bg-gray-800 rounded-lg p-3">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="space-y-2">
                              <div className="bg-gray-700 h-2 w-full rounded"></div>
                              <div className="bg-gray-700 h-2 w-2/3 rounded"></div>
                              <div className="bg-purple-500 h-2 w-1/2 rounded"></div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="bg-gray-700 h-8 flex-1 rounded"></div>
                            <div className="bg-purple-500 h-8 w-16 rounded"></div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Launch Mockup */}
                    {step.mockup === "launch" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <div className="w-full max-w-[200px] space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-400">Status</div>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full"
                            ></motion.div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <div className="text-xs text-gray-300">Security</div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <div className="text-xs text-gray-300">Efficiency</div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <div className="text-xs text-gray-300">Speed</div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                              <div className="text-xs text-gray-300">Updating...</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="h-px w-full bg-white/5 mb-4" />

                {/* Content */}
                <div className="space-y-4 mt-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="text-4xl font-bold text-gray-600"
                    >
                      {step.number}
                    </motion.div>
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="text-blue-400"
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Step {step.number}
                  </p>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
