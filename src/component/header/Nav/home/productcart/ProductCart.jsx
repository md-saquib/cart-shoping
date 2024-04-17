import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../../../../data provider/DataProvider';



function ProductCard({ el }) {
    const ProductData = useContext(DataContext);
    const { data, setData } = ProductData;

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <NavLink to={`/home/${el.id}`}>
                <img className="w-full h-[18rem]" src={el.image} alt={el.title} />
            </NavLink>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{el.title.slice(0, 15)}...</div>
                <p className="text-gray-700 text-base">{el.description.slice(0, 20)}...</p>
                <p className="text-gray-900 text-base font-bold mt-2">${el.price}</p>
                <div className="flex items-center mt-4">
                    <svg className="fill-current text-gray-600 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-.5-11a.5.5 0 0 0-1 0v4.797l-1.85-1.85a.5.5 0 1 0-.707.707l2.606 2.606a.5.5 0 0 0 .707 0l5.353-5.353a.5.5 0 1 0-.707-.707l-4.646 4.646v-4.097a.5.5 0 0 0-1 0z" />
                    </svg>
                    <p className="text-gray-600">{el.rating.rate} ({el.rating.count} reviews)</p>
                </div>
            </div>
            {data.includes(el) ?
                <button onClick={() => setData(data.filter(val => val.id !== el.id))} className="bg-red-500 w-full hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Remove from Cart
                </button> :
                <button onClick={() => setData([...data, el])} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 w-full">
                    Add to Cart
                </button>}
        </div>
    );
}

export default ProductCard;
