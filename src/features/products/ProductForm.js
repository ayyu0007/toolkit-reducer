import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './productsSlice';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Perform validation here

    // Dispatch addProduct action
    dispatch(addProduct({
      id: Math.random().toString(36).substr(2, 9), // generate unique id
      title,
      price: parseFloat(price),
      oldPrice: parseFloat(oldPrice),
      image,
      description,
    }));

    // Reset form fields
    setTitle('');
    setPrice('');
    setOldPrice('');
    setImage('');
    setDescription('');
  };

  return (
    <div className="container mt-4">
    
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" placeholder="Title" />
        </div>
        <div className="form-group">
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-control" placeholder="Price" />
        </div>
        <div className="form-group">
          <input type="number" value={oldPrice} onChange={e => setOldPrice(e.target.value)} className="form-control" placeholder="Old Price" />
        </div>
        <div className="form-group">
          <input type="text" value={image} onChange={e => setImage(e.target.value)} className="form-control" placeholder="Image URL" />
        </div>
        <div className="form-group">
          <textarea value={description} onChange={e => setDescription(e.target.value)} className="form-control" placeholder="Description"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
