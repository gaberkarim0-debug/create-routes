import { Outlet } from "react-router";
import DrinksSidebar from "../components/DrinksSidebar";

export default function Drinkslayout() {
  return (
    <div className="flex gap-5 ">
    <DrinksSidebar/>
   <div className="grow">
     <Outlet/>
   </div>
    </div>
  )
}
