import React from "react";
import './style.css';

function Hom({ setSelectedCategory }) {
    const categories = [
        "All Category",
        "Milk & Dairy",
        "Coffee & Teas",
        "Pet Food",
        "Meats",
        "Vegetables",
        "Fruits"
    ];

    return (
        <>
            <div className="container">
                <div className="d-flex align-items-center cursor">
                    <h2 className="hd"> Products </h2>
                    <ul className="list list-inline ml-auto filterTab">
                        {categories.map((category, index) => (
                            <li className="list-inline-item" key={index}>
                                <a className="cursor" onClick={() => setSelectedCategory(category)}>
                                    {category}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Hom;
