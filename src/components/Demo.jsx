import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://dhruvj02.pythonanywhere.com/api/product/5394efab-9533-415b-a920-4147d7d7893e'; // Replace with your API endpoint

const Demo = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Replace YOUR_AUTH_TOKEN with the actual authorized token
  const authToken = 'Token 543c793bba983edb993f167c8f01586cc4fbd49b';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/endpoint`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setData(response.data);
      } catch (error) {
        setError('Error fetching data. Please check your token and try again.');
      }
    };

    fetchData();
  }, []);
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.product_name}</div>
      ))}
    </div>
  );
};

export default Demo;
