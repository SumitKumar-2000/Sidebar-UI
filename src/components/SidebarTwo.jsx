// src/components/Sidebar.js
import React from 'react';

const SidebarTwo = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/4 p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Sidebar Title</h2>
        <ul>
          <li className="mb-2">Option 1</li>
          <li className="mb-2">Option 2</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Dropdown 1</h2>
        <select className="p-2 w-full">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-2">Dropdown 2</h2>
        <select className="p-2 w-full">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
    </div>
  );
};

export default SidebarTwo;
