import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function CollapsibleFilter({ title, options = [], showUnselect = false, defaultCollapsed = true }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleUnselectAll = () => setSelectedOptions([]);

  return (
    <div className="mb-3 border-bottom pb-3">
      <div
        className="d-flex justify-content-between align-items-center mb-1"
        role="button"
        onClick={() => setCollapsed(!collapsed)}
      >
        <span className="fw-bold text-uppercase small">{title}</span>
        {collapsed ? <FaChevronDown size={12} /> : <FaChevronUp size={12} />}
      </div>

      <div className="text-muted small mb-1">All</div>
      {showUnselect && (
        <div
          className="text-primary small mb-2"
          role="button"
          onClick={handleUnselectAll}
          style={{ cursor: 'pointer' }}
        >
          Unselect all
        </div>
      )}

      {!collapsed &&
        options.map((option, index) => (
          <div className="form-check mb-1" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              id={`${title}-${index}`}
              checked={selectedOptions.includes(option)}
              onChange={() => toggleOption(option)}
            />
            <label className="form-check-label" htmlFor={`${title}-${index}`}>
              {option}
            </label>
          </div>
        ))}
    </div>
  );
}

export default CollapsibleFilter;
