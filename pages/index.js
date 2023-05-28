import React, { useEffect } from 'react';
function HomePage() {
    useEffect(() => {
      fetch('/api/makanan') // Mengambil data dari endpoint /api/makanan
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Menampilkan data makanan di konsol
        });
    }, []);
  
    return (
      <div>
        <h1>Hello, Next.js!</h1>
        <p>Server is running.</p>
      </div>
    );
  }
  
  export default HomePage;
  