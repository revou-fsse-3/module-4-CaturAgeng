// src/ListCategory.tsx
import React, { useEffect, useState } from 'react';

interface Category {
  id: string;
  name: string;
}

const ListCategory: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const accessToken = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY4NjY3MzQzOSwiZXhwIjoxNjg2Njk1MDM5fQ.IKZrgbPGEYULE_G7E8vopOMDmnCLxZaFKuArnXkcL6U') || ''; // Mengambil token dari localStorage atau menggunakan string kosong jika tidak ada

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://mock-api.arikmpt.com/api/category?page=1&name=mock category',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          setCategories(responseData.data);
        } else {
          console.error(
            'Failed to fetch categories:',
            response.status,
            response.statusText
          );
          // Tambahkan logika lain yang diperlukan jika terjadi kesalahan
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Tambahkan logika lain yang diperlukan jika terjadi kesalahan
      }
    };

    fetchCategories();
  }, [accessToken]); // useEffect akan dijalankan setiap kali accessToken berubah

  return (
    <div>
      <h2>List of Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListCategory;
