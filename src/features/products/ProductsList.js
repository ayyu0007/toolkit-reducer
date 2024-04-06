import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setCurrentPage, toggleSort } from './productsSlice';
import ProductCard from './ProductCard';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, searchQuery, currentPage, pageSize, sortDescending } = useSelector(state => state.products);

  // Handle search
  const handleSearch = event => {
    dispatch(setSearchQuery(event.target.value));
    dispatch(setCurrentPage(1)); // Reset current page on search
  };

  // Handle pagination
  const handlePageChange = page => {
    dispatch(setCurrentPage(page));
  };

  // Handle sorting
  const handleSort = () => {
    dispatch(toggleSort());
  };

  // Implement pagination logic

  // Filter products based on search query
  let filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort products
  if (sortDescending) {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  // Implement pagination
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredProducts.length);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="container mt-4">
      <input type="text" value={searchQuery} onChange={handleSearch} className="form-control mb-3" placeholder="Search products..." />

      <button onClick={handleSort} className="btn btn-primary mb-3">Sort</button>

      <div className="row">
        {paginatedProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <button onClick={() => handlePageChange(currentPage - 1)} className="btn btn-primary mr-2" disabled={currentPage === 1}>Previous</button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button 
            key={index + 1} 
            onClick={() => handlePageChange(index + 1)} 
            className={`btn btn-primary mr-2 ${currentPage === index + 1 ? 'font-weight-bold' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} className="btn btn-primary" disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default ProductsList;
