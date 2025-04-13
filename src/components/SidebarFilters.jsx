import React, { useState } from 'react';
import CollapsibleFilter from './CollapsibleFilter';

const filtersData = [
  { title: 'Ideal For', options: ['Men', 'Women', 'Baby & Kids'], showUnselect: true },
  { title: 'Occasion', options: ['Casual', 'Party', 'Formal'], showUnselect: true },
  { title: 'Work', options: ['WFH', 'Corporate', 'Field'], showUnselect: true },
  { title: 'Fabric', options: ['Cotton', 'Polyester'], showUnselect: true },
  { title: 'Segment', options: ['Men', 'Women'], showUnselect: true },
  { title: 'Suitable For', options: ['Summer', 'Winter'], showUnselect: true },
  { title: 'Raw Materials', options: ['Wool', 'Silk'], showUnselect: true },
  { title: 'Pattern', options: ['Solid', 'Printed'], showUnselect: true },
];

function SidebarFilters() {
  const [openFilterIndex, setOpenFilterIndex] = useState(0); // only first open
  const [selectedMap, setSelectedMap] = useState({}); // keeps track of selections

  const handleToggle = (index) => {
    setOpenFilterIndex(index); // make only one open at a time
  };

  const handleSelectChange = (index, options) => {
    setSelectedMap({ ...selectedMap, [index]: options });
  };

  return (
    <div className="col-md-3">
      {filtersData.map((filter, index) => (
        <CollapsibleFilter
          key={index}
          title={filter.title}
          options={filter.options}
          showUnselect={filter.showUnselect}
          isOpen={openFilterIndex === index}
          onToggle={() => handleToggle(index)}
          selectedOptions={selectedMap[index] || []}
          onSelectChange={(opts) => handleSelectChange(index, opts)}
        />
      ))}
    </div>
  );
}

export default SidebarFilters;
