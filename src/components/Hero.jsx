import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-scroll';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Hero() {
  return (
    <section id="home" className=" bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16 overflow-hidden">
      <div className="max-w-full min-h-screen flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-2/3 -right-1/3 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"
          />
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8 relative">
          <motion.div 
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="block text-sm font-semibold uppercase tracking-wide text-indigo-600 sm:text-base lg:text-sm xl:text-base">
                Welcome to Tech Dynamo
              </span>
              <h1 className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block gradient-text">Transform Your</span>
                <span className="gradient-text">Digital Presence</span>
              </h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              We craft stunning digital experiences that captivate your audience and drive results. Our team of experts combines creativity with technical excellence to bring your vision to life.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(79, 70, 229, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5 animate-pulse" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Code, title: "Clean Code", desc: "Optimized for performance" },
                { icon: Palette, title: "Design", desc: "Beautiful interfaces" },
                { icon: Zap, title: "Fast", desc: "Lightning quick load times" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    scale: 1.05
                  }}
                  className="glass-effect p-6 rounded-xl card-shadow floating-animation"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <item.icon className="h-8 w-8 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold gradient-text">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}