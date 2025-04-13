import React, { useState } from 'react';
import ProductGrid from './ProductCard/ProductGrid';
import CollapsibleFilter from './CollapsibleFilter';
import SortDropdown from './SortDropdown';

function MainContent() {
  const [showFilter, setShowFilter] = useState(true);
  let itemCount = 3425;

  const toggleFilter = () => setShowFilter(!showFilter);

  // Dummy product data
  const products = [
    { name: 'PPXOC Milkyway Dress', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: 'NEW PRODUCT', isOutOfStock: false, price: '$19.99' },
    { name: 'Stylish Toy Set', image: '/images/0bfe6fb1b00601aa092b3a2431565ab8.jpg', status: '', isOutOfStock: true, price: '$19.99' },
    { name: 'Blue Dino Toy', image: '/images/4cfac7091911ff82bc60e4986d2bc7d1.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'Leather Sling Bag', image: '/images/052a14d005f408ed5be74b2968bc6790.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'Kids Yellow Dino', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'Gray Backpack', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: 'NEW PRODUCT', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: 'NEW PRODUCT', isOutOfStock: true, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: 'NEW PRODUCT', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: 'NEW PRODUCT', isOutOfStock: true, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: 'NEW PRODUCT', isOutOfStock: false, price: '$19.99' },    
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: true, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: '', isOutOfStock: false, price: '$19.99' },
    { name: 'PRODUCT NAME', image: '/images/439325b3aa48e51703ab8fd15648b859.jpg', status: 'NEW PRODUCT', isOutOfStock: false, price: '$19.99' },
  
  ];
  itemCount = products.length

  const filters = [
    { title: 'Ideal For', options: ['Men', 'Women', 'Baby & Kids'], showUnselect: true },
    { title: 'Occasion', options: ['Casual', 'Party', 'Formal'] },
    { title: 'Work', options: ['WFH', 'Corporate', 'Field'] },
    { title: 'Segment', options: ['Men', 'Women'] },
    { title: 'Suitable For', options: ['Summer', 'Winter'] },
    { title: 'Raw Materials', options: ['Wool', 'Silk'] },
    { title: 'Pattern', options: ['Solid', 'Printed'] ,},
  ];
  

  return (
    <div className="container-fluid">
      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center py-3">
        <h6>
          {itemCount} ITEMS{' '}
          <span
            className="ms-3 text-decoration-underline text-muted"
            role="button"
            onClick={toggleFilter}
          >
            <i className={`bi me-1 ${showFilter ? 'bi-chevron-left' : 'bi-chevron-right'}`}></i>
            {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
          </span>
        </h6>
        <SortDropdown />
      </div>

      <div className="row">
        {/* Filter Sidebar */}
        {showFilter && (
          <div className="col-md-3">
            <div className="border-end pe-3">
              <div className="mb-3">
                <input type="checkbox" className="form-check-input me-2" />
                <label className="form-check-label">Customizable</label>
              </div>
              {filters.map((filter, index) => (
              <CollapsibleFilter
                key={index}
                title={filter.title}
                options={filter.options}
                showUnselect={filter.showUnselect}
                defaultCollapsed={index !== 0} // only first open
              />
            ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className={showFilter ? 'col-md-9' : 'col-md-12'}>
          <ProductGrid products={products} showFilter={showFilter} />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
