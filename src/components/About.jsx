import { motion } from 'framer-motion';
import { Users, Award, Coffee } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Clients', value: '100+' },
  { icon: Award, label: 'Awards Won', value: '25+' },
  { icon: Coffee, label: 'Projects Completed', value: '500+' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About PixelPro
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We're a team of passionate designers, developers, and digital strategists who love creating amazing digital experiences. With over a decade of experience, we've helped businesses of all sizes achieve their digital goals.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our approach combines creativity with technical excellence, ensuring that every project we deliver not only looks beautiful but also performs exceptionally well.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 lg:mt-0"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center">
                    <stat.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <p className="mt-4 text-3xl font-extrabold text-indigo-600">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-base text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}