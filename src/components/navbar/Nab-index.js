import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
    const amount = useSelector((store)=> store.basket.amount)

  return (
    <div className=" flex flex-row  justify-evenly mt-2 pt-4 text-lg font-medium">
      <Link to={"/"}>Home</Link>
      <Link to={"/basket"}>
        Basket{" "}
        <span className=" text-xs  align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
          {amount}
        </span>
      </Link>
    </div>
  );
}
