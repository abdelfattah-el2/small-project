import { useEffect } from "react";
import Product from "../product/Product";
import { useDispatch, useSelector } from "react-redux";
import { updateTotal } from "../../features/basketSlice";

export default function Basket() {


  const disoatch = useDispatch()
  // const [products, total, amount] = useSelector((store) => store.Basket);
  const products = useSelector((store) => store.basket.products);
  const total = useSelector((store) => store.basket.total);
  const amount = useSelector((store) => store.basket.amount);
  useEffect(()=>{ 
    disoatch(updateTotal())
  } , [products , disoatch])
  return (
    <div className=" py-4 max-w-2xl mx-auto">
      {amount > 0 ? (<><div>
        {products.map((p, i) => {
          return (
            <Product
              key={new Date().getTime + Math.random()}
              name={p.name}
              price={p.price}
              image={p.image}
              amount={p.amount}
            />
          );
        })}
      </div></>) : (<> <p className=" text-2xl text-gray-700 text-center"> Your Basket Is Empty :( </p></>)}
      
      <div className=" flex flex-row items-center justify-evenly py-8">
        <p className="text-2xl font-medium"> Total</p>
        <p className="text-2xl font-medium"> ${total}</p>
      </div>
    </div>
  );
}
