import { useState, useEffect } from 'react';
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  orderBy, 
  query 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase/config';
import { PortfolioItem } from '../types/portfolio';

export const usePortfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPortfolio = async () => {
    try {
      const q = query(collection(db, 'portfolio'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const items: PortfolioItem[] = [];
      
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate(),
          updatedAt: doc.data().updatedAt?.toDate(),
        } as PortfolioItem);
      });
      
      setPortfolioItems(items);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `portfolio/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  };

  const addPortfolioItem = async (item: Omit<PortfolioItem, 'id' | 'createdAt' | 'updatedAt'>, file: File) => {
    try {
      const imageUrl = await uploadImage(file);
      const docRef = await addDoc(collection(db, 'portfolio'), {
        ...item,
        imageUrl,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      
      await fetchPortfolio();
      return docRef.id;
    } catch (error) {
      console.error('Error adding portfolio item:', error);
      throw error;
    }
  };

  const updatePortfolioItem = async (id: string, updates: Partial<PortfolioItem>, file?: File) => {
    try {
      let updateData = { ...updates, updatedAt: new Date() };
      
      if (file) {
        const imageUrl = await uploadImage(file);
        updateData.imageUrl = imageUrl;
      }
      
      await updateDoc(doc(db, 'portfolio', id), updateData);
      await fetchPortfolio();
    } catch (error) {
      console.error('Error updating portfolio item:', error);
      throw error;
    }
  };

  const deletePortfolioItem = async (id: string, imageUrl: string) => {
    try {
      // Delete image from storage
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
      
      // Delete document from Firestore
      await deleteDoc(doc(db, 'portfolio', id));
      await fetchPortfolio();
    } catch (error) {
      console.error('Error deleting portfolio item:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return {
    portfolioItems,
    loading,
    addPortfolioItem,
    updatePortfolioItem,
    deletePortfolioItem,
    refreshPortfolio: fetchPortfolio
  };
};