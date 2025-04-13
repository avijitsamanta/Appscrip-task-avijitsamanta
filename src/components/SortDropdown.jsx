import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCheck } from 'react-icons/fa';

const sortOptions = [
  'Recommended',
  'Newest First',
  'Popular',
  'Price : High to Low',
  'Price : Low to High',
];

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Recommended');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="position-relative" style={{ width: '220px' }}>
      <div
        onClick={toggleDropdown}
        className="d-flex justify-content-between align-items-center border p-2 rounded"
        style={{ cursor: 'pointer', fontWeight: 'bold' }}
      >
        {selected}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isOpen && (
        <div className="position-absolute bg-white shadow rounded mt-2 w-100 z-3 p-2" style={{ zIndex: 1000 }}>
          {sortOptions.map((option) => (
            <div
              key={option}
              className="d-flex align-items-center justify-content-between px-2 py-1 rounded"
              style={{ cursor: 'pointer', fontWeight: option === selected ? 'bold' : 'normal' }}
              onClick={() => handleSelect(option)}
            >
              {option}
              {option === selected && <FaCheck size={12} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
