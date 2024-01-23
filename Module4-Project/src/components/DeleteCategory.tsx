// src/DeleteCategory.tsx
import React, { useState } from 'react';

const DeleteCategory: React.FC = () => {
  const [categoryId, setCategoryId] = useState<string>('');
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY4NjY3MzQzOSwiZXhwIjoxNjg2Njk1MDM5fQ.IKZrgbPGEYULE_G7E8vopOMDmnCLxZaFKuArnXkcL6U'; // Gantilah dengan token yang sesuai

  const handleDeleteCategory = async () => {
    try {
      const response = await fetch(
        `https://mock-api.arikmpt.com/api/category/${categoryId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json', // Sesuaikan dengan tipe konten yang diperlukan
          },
        }
      );

      if (response.ok) {
        console.log('Category deleted successfully');
        // Tambahkan logika lain yang diperlukan setelah menghapus kategori
      } else {
        console.error(
          'Failed to delete category:',
          response.status,
          response.statusText
        );
        // Tambahkan logika lain yang diperlukan jika terjadi kesalahan
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      // Tambahkan logika lain yang diperlukan jika terjadi kesalahan
    }
  };

  return (
    <div>
      <h2>Delete Category</h2>
      <div>
        <label htmlFor="categoryId">Category ID:</label>
        <input
          type="text"
          id="categoryId"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
      </div>
      <button onClick={handleDeleteCategory}>Delete Category</button>
    </div>
  );
};

export default DeleteCategory;
