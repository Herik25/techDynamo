import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Smartphone, Megaphone, BarChart } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love to interact with.',
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Comprehensive digital solutions to grow your online presence.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Results-driven marketing campaigns that deliver ROI.',
  },
  {
    icon: BarChart,
    title: 'Analytics & SEO',
    description: 'Data-driven optimization for maximum visibility.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold gradient-text sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="relative p-8 bg-white rounded-xl card-shadow glass-effect"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                className="absolute -top-6 left-[44%] -translate-x-1/4"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-4 shadow-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </motion.div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-500 text-center">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}