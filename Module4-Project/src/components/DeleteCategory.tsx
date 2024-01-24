// src/DeleteCategory.tsx
import React, { useState } from 'react';

const DeleteCategory: React.FC = () => {
  const [categoryId, setCategoryId] = useState<string>('');
  const accessToken = localStorage.getItem('Bebas') || ''; 

  const handleDeleteCategory = async () => {
    try {
      const response = await fetch(
        `https://mock-api.arikmpt.com/api/category/${categoryId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json', 
          },
        }
      );

      if (response.ok) {
        console.log('Category deleted successfully');
        
      } else {
        console.error(
          'Failed to delete category:',
          response.status,
          response.statusText
        );
       
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      
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
