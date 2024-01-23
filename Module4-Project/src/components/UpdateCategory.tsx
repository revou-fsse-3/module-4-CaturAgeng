// src/UpdateCategory.tsx
import React, { useState } from 'react';

const UpdateCategory: React.FC = () => {
  const [categoryId, setCategoryId] = useState<string>('');
  const [newCategoryName, setNewCategoryName] = useState<string>('');
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY4NjY3MzQzOSwiZXhwIjoxNjg2Njk1MDM5fQ.IKZrgbPGEYULE_G7E8vopOMDmnCLxZaFKuArnXkcL6U'; // Gantilah dengan token yang sesuai

  const handleUpdateCategory = async () => {
    try {
      const response = await fetch(
        'https://mock-api.arikmpt.com/api/category/update',
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: categoryId,
            newName: newCategoryName,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log('Category updated successfully:', responseData);
        // Tambahkan logika lain yang diperlukan setelah memperbarui kategori
      } else {
        console.error(
          'Failed to update category:',
          response.status,
          response.statusText
        );
        // Tambahkan logika lain yang diperlukan jika terjadi kesalahan
      }
    } catch (error) {
      console.error('Error updating category:', error);
      // Tambahkan logika lain yang diperlukan jika terjadi kesalahan
    }
  };

  return (
    <div>
      <h2>Update Category</h2>
      <div>
        <label htmlFor="categoryId">Category ID:</label>
        <input
          type="text"
          id="categoryId"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="newCategoryName">New Category Name:</label>
        <input
          type="text"
          id="newCategoryName"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
      </div>
      <button onClick={handleUpdateCategory}>Update Category</button>
    </div>
  );
};

export default UpdateCategory;
