import React, { createContext, useState , useEffect } from 'react'

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  // State for data
  const [data, setData] = useState([]);
  const [login, setlogin] = useState(false);

  //Maintaing State 
  const [productData ,setProductData] = useState([]);

  //Maintaing State for userDetails

  const [userDetails , setUserDetails]=useState({ userName : '',password:''});


  
  //fetching data Api
  const fetchData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json();
    setProductData(products);
  }

  // Using side effect
  useEffect(() => {
    fetchData();

    return () => {
    console.log('component close...');
    }
  }, [])
  return (
    <>
      <DataContext.Provider value={{ data, setData, login, setlogin ,productData,setProductData , userDetails , setUserDetails }}>
        {children}
      </DataContext.Provider>
    </>
  )
}

export default DataProvider



// this is detail page  for each product, it will show the details of
//example : name, price, description etc.
// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { name: 'White', className: 'bg-white', selectedClassName: 'ring-gray-400' },
//     { name: 'Gray', className: 'bg-gray-200', selectedClassName: 'ring-gray-400' },
//     { name: 'Black', className: 'bg-gray-900', selectedClassName: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: false },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: '2XL', inStock: true },
//     { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
// const reviews = { href: '#', average: 4, totalCount: 117 }