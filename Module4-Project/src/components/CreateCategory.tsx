// src/CreateCategory.tsx
import React, { useState } from 'react';

const CreateCategory: React.FC = () => {
  const [categoryName, setCategoryName] = useState<string>('');
  const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY4NjY3MzQzOSwiZXhwIjoxNjg2Njk1MDM5fQ.IKZrgbPGEYULE_G7E8vopOMDmnCLxZaFKuArnXkcL6U'; // Gantilah dengan token yang sesuai

  const handleCreateCategory = async () => {
    try {
      const response = await fetch(
        'https://mock-api.arikmpt.com/api/category/create',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: categoryName }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log('Category created successfully:', responseData);

        // Simpan token dalam localStorage setelah berhasil membuat kategori
        localStorage.setItem('token', accessToken);

        // Tambahkan logika lain yang diperlukan setelah membuat kategori
      } else {
        console.error(
          'Failed to create category:',
          response.status,
          response.statusText
        );
        // Tambahkan logika lain yang diperlukan jika terjadi kesalahan
      }
    } catch (error) {
      console.error('Error creating category:', error);
      // Tambahkan logika lain yang diperlukan jika terjadi kesalahan
    }
  };

  return (
    <div>
      <h2>Create Category</h2>
      <div>
        <label htmlFor="categoryName">Category Name:</label>
        <input
          type="text"
          id="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </div>
      <button onClick={handleCreateCategory}>Create Category</button>
    </div>
  );
};

export default CreateCategory;
