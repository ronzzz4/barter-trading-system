import React, { useState } from 'react';
import { Pinecone } from '@pinecone-database/pinecone';
import axios from 'axios';

const pc = new Pinecone({
  apiKey: '3339323d-d7b5-4d87-8d8d-fb4ce4b8596d'
});

function Landing() {
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    productPrice: ''
  });
  const [submissions, setSubmissions] = useState([]);

  const index = pc.index('products-test');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]);

    fetch(
      "http://localhost:8000/insert",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify({
          productName: formData.productName,
          productDescription: formData.productDescription,
          productPrice: formData.productPrice
        })
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);

          
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        
      });




    // try {
    //   // Call the Flask API to get the embeddings
    //   const data = {
    //     productName : formData.productName,
    //     productDescription : formData.productDescription,
    //     productPrice : formData.productPrice
    //   }
    //   const response = await axios.post('http://127.0.0.1:8000/insert', data);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Error: ', error);
    // }
  
    setFormData({
      productName: '',
      productDescription: '',
      productPrice: ''
    });
  };

  return (
    <div>
      <h1 id='header1'>Please provide some details about your product.</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          required
        />
        <label htmlFor="product-description">Product Description:</label>
        <input
          type="text"
          id="product-description"
          name="productDescription"
          value={formData.productDescription}
          onChange={handleChange}
          required
        />
        <label htmlFor="product-price">Product Price:</label>
        <input
          type="number"
          id="product-price"
          name="productPrice"
          value={formData.productPrice}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Submissions</h2>
        <ul>
          {submissions.map((submission, index) => (
            <li key={index}>
              {submission.productName} - {submission.productDescription} - ${submission.productPrice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Landing;