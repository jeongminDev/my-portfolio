import React from 'react';

interface StyledListItemProps {
  children: React.ReactNode;
}

const StyledListItem: React.FC<StyledListItemProps> = ({ children }) => {
  return (
    <li className="flex items-start mb-3">
      <span className="flex-shrink-0 w-5 h-5 mr-3 mt-1">
        <svg
          className="w-full h-full text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </span>
      <span className="text-gray-700">{children}</span>
    </li>
  );
};

export default StyledListItem;
