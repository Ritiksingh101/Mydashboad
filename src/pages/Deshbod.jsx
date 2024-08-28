import React from 'react';
import Layout from '../components/Layout';
import dashboardData from '../dashboardData';
import Widget from '../component/Widget';

const Dashboard = () => {
  return (
    <Layout>
      {dashboardData.categories.map((category) => (
        <div key={category.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-3 gap-4">
            {category.widgets.map((widget) => (
              <div key={widget.id} className="p-4 bg-white shadow rounded">
                <h3 className="text-xl font-bold mb-2">{widget.name}</h3>
                <p>{widget.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default Dashboard;