
import { useContext } from "react";
import { DataContext } from "../../../data provider/DataProvider";
import ProductCard from "./productcart/ProductCart";


const Dashboard = () => {

  const productValue = useContext(DataContext);
  const {productData}  = productValue;


  return (
    <>
      <div className="w-full flex flex-wrap justify-center mx-auto">
        {productData.map(el => (
          <div key={el.id} to={`${el.id}`} className="w-full md:w-1/2 lg:w-1/4 p-4 ">
            <ProductCard el={el} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Dashboard