
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
}

const ListCategory: React.FC = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState<Category[]>([]);
  const [editCategoryName, setEditCategoryName] = useState('');
  const [editCategoryId, setEditCategoryId] = useState('');
  const accessToken = localStorage.getItem('Bebas') || '';

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://mock-api.arikmpt.com/api/category',
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
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [accessToken]);

  const handleDeleteCategory = async (categoryId: string) => {
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
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== categoryId)
        );
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

  const handleUpdateCategory = async () => {
    try {
      const response = await fetch(
        `https://mock-api.arikmpt.com/api/category/${editCategoryId}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: editCategoryName }),
        }
      );

      if (response.ok) {
        setCategories((prevCategories) =>
          prevCategories.map((category) =>
            category.id === editCategoryId
              ? { ...category, name: editCategoryName }
              : category
          )
        );

        setEditCategoryName('');
        setEditCategoryId('');
      } else {
        console.error(
          'Failed to update category:',
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleEditCategory = (categoryId: string, categoryName: string) => {
    setEditCategoryName(categoryName);
    setEditCategoryId(categoryId);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">List of Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="border-b border-gray-200 py-2 flex justify-between items-center">
            <span>{category.name}</span>
            <div className="flex">
              <button
                onClick={() => handleEditCategory(category.id, category.name)}
                className="text-blue-500 hover:text-blue-700 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Update Category</h3>
        <input
          type="text"
          id="categoryName"
          placeholder="Enter category name"
          value={editCategoryName}
          onChange={(e) => setEditCategoryName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mr-2"
        />
        <button
          onClick={handleUpdateCategory}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Update
        </button>
      </div>
      <button onClick={() => navigate('/create')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Add
      </button>

      <button onClick={() => navigate('/')} className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
              Log Out
      </button>
    </div>
  );
};

export default ListCategory;
