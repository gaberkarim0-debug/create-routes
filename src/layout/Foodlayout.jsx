import { Outlet } from "react-router";
import FoodSidebar from "../components/FoodSidebar";

export default function Foodlayout() {
  return (
    <div className="flex gap-2.5">
     <FoodSidebar/>
     <div className="pt-5 grow ">
          <Outlet/>
     </div>
    </div>
  )
}
