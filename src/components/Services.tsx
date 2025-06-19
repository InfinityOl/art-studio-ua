import React from 'react';
import { Camera, Heart, Briefcase, Users, Baby, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'Портретна фотосесія',
      description: 'Індивідуальні та групові портрети з професійним освітленням',
      price: 'від 1500 грн',
      features: ['30+ оброблених фото', '2 години зйомки', 'Різні образи'],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Heart,
      title: 'Весільна фотосесія',
      description: 'Незабутні моменти вашого найважливішого дня',
      price: 'від 8000 грн',
      features: ['Повний день зйомки', '300+ фото', 'Відеосупровід'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Briefcase,
      title: 'Корпоративна зйомка',
      description: 'Професійні фото для бізнесу та соціальних мереж',
      price: 'від 2500 грн',
      features: ['Бізнес-портрети', 'Командні фото', 'Брендинг'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Сімейна фотосесія',
      description: 'Теплі сімейні моменти в затишній атмосфері',
      price: 'від 2000 грн',
      features: ['Всі члени родини', '50+ фото', 'Домашня атмосфера'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Baby,
      title: 'Дитяча фотосесія',
      description: 'Милі та природні знімки ваших малюків',
      price: 'від 1800 грн',
      features: ['Ігрова форма', 'Батьки в кадрі', 'Безпечно для дітей'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Fashion фотосесія',
      description: 'Стильні та креативні fashion-зйомки',
      price: 'від 3000 грн',
      features: ['Стиліст включено', 'Різні локації', 'Ретуш високої якості'],
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">
            Наші послуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Пропонуємо широкий спектр фотографічних послуг для будь-якої події та потреби. 
            Кожна зйомка - це унікальна історія, розказана через об'єктив.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="mb-6">
                <p className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                  {service.price}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all`}
              >
                Замовити зйомку
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;