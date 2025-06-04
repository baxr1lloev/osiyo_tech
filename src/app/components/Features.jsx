"use client"
import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Fast & Reliable",
      description: "Lightning-fast solutions with 99.9% uptime guarantee",
    },
    {
      icon: "🛡️",
      title: "Secure & Safe",
      description: "Enterprise-grade security with advanced encryption",
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
    },
    {
      icon: "🚀",
      title: "Scalable Solutions",
      description: "Solutions that grow with your business needs",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="solutions" className="py-20 bg-blue-600 dark:bg-blue-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl font-bold text-white dark:text-gray-100 mb-4"
          >
            Why Choose OsiyoTech?
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg sm:text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto"
          >
            We deliver exceptional value through innovative technology solutions
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="bg-white bg-opacity-10 dark:bg-white dark:bg-opacity-20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 dark:group-hover:bg-opacity-30 transition-all duration-300 relative overflow-hidden"
                whileHover={{
                  rotateY: 15,
                  rotateX: 10,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="text-4xl transform transition-transform duration-300 group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {feature.icon}
                </div>
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%)",
                  }}
                />
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-white dark:text-gray-100 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-blue-100 dark:text-blue-200 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
