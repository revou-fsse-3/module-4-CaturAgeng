// src/CreateCategory.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCategory: React.FC = () => {
  const navigate = useNavigate()
  const [categoryName, setCategoryName] = useState<string>('');
  const accessToken =
  localStorage.getItem('Bebas') || ''; 

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

        
        localStorage.setItem('token', accessToken);

        
      } else {
        console.error(
          'Failed to create category:',
          response.status,
          response.statusText
        );
       
      }
    } catch (error) {
      console.error('Error creating category:', error);
      
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Category</h2>
      <div className="mb-4">
        <label htmlFor="categoryName" className="block text-sm font-medium text-gray-600">Category Name:</label>
        <input
          type="text"
          id="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button onClick={handleCreateCategory} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2">Create Category</button>
      <button onClick={() => navigate('/list')} className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
              List Category
      </button>
    </div>
  );
};

export default CreateCategory;
