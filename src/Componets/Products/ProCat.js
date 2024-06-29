
import React from "react";
import './ProCat.css';
import Cat  from '../Products/Cat.js'

const ProCat = ({ search, selectedCategory }) => {
  const filteredCats = Cat.filter(cat => {
    const matchesSearch = search.toLowerCase() === '' || cat.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All Category' || cat.category === selectedCategory; 
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredCats.map((cat, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img src={cat.imgSrc} className="card-img-top" alt={cat.title} />
              <div className="card-body">
                <h5 className="card-title">{cat.title}</h5>
                <span className="price text-g font-weight-bold ">{cat.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default ProCat;



