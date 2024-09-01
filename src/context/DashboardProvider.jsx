import React, { createContext, useState } from 'react';
import dashboardData from '../assets/DashboardData';

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(dashboardData.categories);
  const [addwidget,setAddwidget]=useState(false)

  const addWidget = (categoryId, widget) => {
    // Logic to add a widget
  };

  const removeWidget = (categoryId, widgetId) => {
    // Logic to remove a widget
  };

  return (
    <DashboardContext.Provider value={{ categories, addWidget, removeWidget,addwidget,setAddwidget }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;