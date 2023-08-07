import { useDispatch } from "react-redux"; 
import { increaseAmount ,decreaseAmount  , removItem} from "../../features/basketSlice";

export default function Product({ name, price, image, amount }) {
    const disoatch = useDispatch()
  return (
    <div className=" flex  flex-row  items-center gap-8 px-10">
      <img className="w-1/2 px-10" src={image} alt={name + "glasses"} />
      <div>
        <p className=" text-xl font-medium">{name}</p>
        <p className="  text-lg tracking-wide">${price.toFixed(2)}</p>
        <button className=" text-red-500 tracking-wide pt-1 pb-3" onClick={()=>{
              disoatch(removItem({name}))
        }}>Remov</button>
      </div>
      <div className=" flex flex-col items-center">
        <p className=" text-lg font-medium">Amount</p>
        <div className=" flex flex-row gap-4 items-center  text-gray-600 font-medium">
          <button className=" text-xl " onClick={()=>{
             if(amount === 1 ){
                disoatch(removItem({name}))
                return
             }
              disoatch(decreaseAmount({name}))
          }} >-</button>
          <p>{amount}</p>
          <button className=" text-xl " onClick={()=>{
              disoatch(increaseAmount({name}))
          }}>+</button>
        </div>
      </div>
    </div>
  );
}
