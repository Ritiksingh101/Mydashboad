// src/components/AddWidgetForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddWidgetForm = () => {
  const [categoryId, setCategoryId] = useState('');
  const [widgetId, setWidgetId] = useState('');
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newWidget = { id: widgetId, name: widgetName, text: widgetText };

    try {
      const { data: categories } = await axios.get('http://localhost:5005/categories');
      const categoryToUpdate = categories.find(category => category.id === categoryId);

      if (categoryToUpdate) {
        categoryToUpdate.widgets.push(newWidget);
        await axios.put(`http://localhost:5005/categories/${categoryId}`, categoryToUpdate);
        setCategoryId('');
        setWidgetId('');
        setWidgetName('');
        setWidgetText('');
      } else {
        alert('Category not found');
      }
    } catch (error) {
      console.error('Error adding widget:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add a New Widget</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">Category ID:</label>
          <input
            id="categoryId"
            type="text"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="widgetId" className="block text-sm font-medium text-gray-700">Widget ID:</label>
          <input
            id="widgetId"
            type="text"
            value={widgetId}
            onChange={(e) => setWidgetId(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="widgetName" className="block text-sm font-medium text-gray-700">Widget Name:</label>
          <input
            id="widgetName"
            type="text"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="widgetText" className="block text-sm font-medium text-gray-700">Widget Text:</label>
          <input
            id="widgetText"
            type="text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Widget
        </button>
      </form>
    </div>
  );
};

export default AddWidgetForm;
