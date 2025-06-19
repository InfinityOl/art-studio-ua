import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      details: ['+38 (067) 123-45-67', '+38 (063) 987-65-43'],
      gradient: 'from-green-500 to-teal-500'
    }    
  ];

  const socialLinks = [
    { icon: Instagram, url: '#', name: 'Instagram' },
    { icon: Facebook, url: '#', name: 'Facebook' },
    { icon: Youtube, url: '#', name: 'YouTube' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            Зв'яжіться з нами
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Готові створити щось неймовірне разом? Зателефонуйте нам або напишіть у соціальних мережах, 
            і ми обговоримо всі деталі вашої майбутньої фотосесії.
          </p>
        </motion.div>

        {/* Compact Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center max-w-lg mx-auto"
        >
          {/* Phone Section */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Телефон</h4>
            <p className="text-gray-300 mb-1">+38 (067) 123-45-67</p>
            <p className="text-gray-300 mb-1">+38 (063) 987-65-43</p>
          </div>

          {/* Social Links */}
          <div className="border-t border-white/10 pt-8">
            <h4 className="text-xl font-semibold text-white mb-4">Соціальні мережі</h4>
            <div className="flex justify-center space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.url}
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              Слідкуйте за нашими останніми роботами та новинами!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;