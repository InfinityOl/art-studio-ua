import React from 'react';
import { motion } from 'framer-motion';
import { Award, Camera, Heart, Star, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Camera, number: '500+', label: 'Успішних проектів' },
    { icon: Heart, number: '100%', label: 'Задоволених клієнтів' },
    { icon: Award, number: '5', label: 'Нагород у галузі' },
    { icon: Star, number: '4.9', label: 'Рейтинг у Google' }
  ];

  const features = [
    'Професійне обладнання високої якості',
    'Досвідчена команда фотографів',
    'Індивідуальний підхід до кожного клієнта',
    'Швидка обробка та доставка матеріалів',
    'Гнучкі пакети послуг',
    'Безкоштовна консультація'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">
              Про нашу студію
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                <strong className="text-gray-800">PixelArt Studio</strong> — це сучасна фотостудія, 
                яка спеціалізується на створенні неперевершених візуальних історій. Ми поєднуємо 
                технічну майстерність з творчим баченням, щоб зафіксувати найважливіші моменти 
                вашого життя.
              </p>
              
              <p className="text-lg leading-relaxed">
                Наша команда складається з досвідчених фотографів, які працюють з професійним 
                обладнанням та завжди слідкують за останніми трендами у світі фотографії. 
                Ми віримо, що кожен кадр має розповідати унікальну історію.
              </p>
              
              <p className="text-lg leading-relaxed">
                Від інтимних портретів до масштабних весільних церемоній — ми готові втілити 
                будь-яку вашу ідею в життя з максимальною увагою до деталей та професіоналізмом.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-pink-500 to-violet-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            >
              Зв'язатися з нами
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Наша студія"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Наша студія</h3>
                  <p className="text-white/90">Сучасне обладнання та затишна атмосфера</p>
                </div>
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Працюємо щодня</p>
                    <p className="text-sm text-gray-600">9:00 - 21:00</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;