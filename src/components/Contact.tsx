import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      details: ['+38 (067) 123-45-67', '+38 (063) 987-65-43'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@pixelart.studio', 'booking@pixelart.studio'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Адреса',
      details: ['вул. Хрещатик, 15', 'м. Київ, Україна'],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Робочі години',
      details: ['Пн-Нд: 9:00 - 21:00', 'Без вихідних'],
      gradient: 'from-purple-500 to-violet-500'
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
            Готові створити щось неймовірне разом? Напишіть нам або зателефонуйте, 
            і ми обговоримо всі деталі вашої майбутньої фотосесії.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold mb-8 text-white">Форма зворотного зв'язку</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Ім'я *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
                      placeholder="Введіть ваше ім'я"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
                      placeholder="+38 (067) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Тип послуги
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
                    >
                      <option value="" className="bg-gray-800">Оберіть послугу</option>
                      <option value="portrait" className="bg-gray-800">Портретна фотосесія</option>
                      <option value="wedding" className="bg-gray-800">Весільна фотосесія</option>
                      <option value="family" className="bg-gray-800">Сімейна фотосесія</option>
                      <option value="corporate" className="bg-gray-800">Корпоративна зйомка</option>
                      <option value="fashion" className="bg-gray-800">Fashion фотосесія</option>
                      <option value="children" className="bg-gray-800">Дитяча фотосесія</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Повідомлення
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all resize-none"
                    placeholder="Розкажіть про ваші побажання та ідеї для фотосесії..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-violet-600 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-2xl transition-all"
                >
                  <Send className="w-5 h-5" />
                  <span>Відправити повідомлення</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300">{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h4 className="text-2xl font-semibold text-white mb-6">Соціальні мережі</h4>
              <div className="flex space-x-4">
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
              <p className="text-gray-300 mt-4">
                Слідкуйте за нашими останніми роботами та новинами у соціальних мережах!
              </p>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10 overflow-hidden"
            >
              <div className="w-full h-64 bg-gradient-to-br from-pink-500/20 to-violet-600/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-white/60 mx-auto mb-4" />
                  <p className="text-white/80">Інтерактивна карта</p>
                  <p className="text-white/60 text-sm">вул. Хрещатик, 15, Київ</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;