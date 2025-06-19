import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import { usePortfolio } from '../../hooks/usePortfolio';
import { PortfolioItem } from '../../types/portfolio';

interface PortfolioFormProps {
  item?: PortfolioItem | null;
  onClose: () => void;
  onSuccess: () => void;
}

const PortfolioForm: React.FC<PortfolioFormProps> = ({ item, onClose, onSuccess }) => {
  const { addPortfolioItem, updatePortfolioItem } = usePortfolio();
  const [formData, setFormData] = useState({
    title: item?.title || '',
    category: item?.category || 'Портрети',
    description: item?.description || ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(item?.imageUrl || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['Портрети', 'Весілля', 'Сім\'я', 'Fashion', 'Корпоратив'];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Файл занадто великий. Максимальний розмір: 5MB');
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        setError('Будь ласка, оберіть файл зображення');
        return;
      }

      setSelectedFile(file);
      setError('');
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!item && !selectedFile) {
      setError('Будь ласка, оберіть зображення');
      return;
    }

    if (!formData.title.trim()) {
      setError('Будь ласка, введіть назву роботи');
      return;
    }

    setLoading(true);
    setError('');

    try {
      if (item) {
        // Update existing item
        await updatePortfolioItem(item.id, formData, selectedFile || undefined);
      } else {
        // Add new item
        await addPortfolioItem(formData, selectedFile!);
      }
      
      onSuccess();
    } catch (error: any) {
      setError('Помилка при збереженні роботи');
      console.error('Error saving portfolio item:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-2xl border border-white/20 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">
            {item ? 'Редагувати роботу' : 'Додати нову роботу'}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Зображення {!item && '*'}
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center cursor-pointer hover:border-pink-500 transition-colors"
            >
              {previewUrl ? (
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                </div>
              ) : (
                <div>
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">Натисніть для вибору зображення</p>
                  <p className="text-sm text-gray-400">PNG, JPG до 5MB</p>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Назва роботи *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
              placeholder="Введіть назву роботи"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Категорія *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Опис (необов'язково)
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 resize-none"
              placeholder="Короткий опис роботи..."
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/20 border border-red-500/30 rounded-xl p-3 text-red-300 text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Buttons */}
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-pink-500 to-violet-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Збереження...' : (item ? 'Оновити' : 'Додати')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onClose}
              className="px-8 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              Скасувати
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PortfolioForm;