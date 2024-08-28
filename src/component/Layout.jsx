import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        Dashboard
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-200 p-4">
          {/* Sidebar Content */}
        </aside>
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;