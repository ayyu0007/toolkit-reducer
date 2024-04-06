import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import ProductsList from './features/products/ProductsList';
import ProductForm from './features/products/ProductForm';
import './App.css'; 

function App() {
  return (
    <Provider store={store}>
      <div className="gradient-background">
        <div className="container mt-4">
          <header className="text-center">
            <h1>Product Management</h1>
          </header>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Add Product</h2>
                  <ProductForm />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Product List</h2>
                  <ProductsList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
