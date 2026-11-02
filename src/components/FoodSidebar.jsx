import { NavLink } from "react-router";


export default function FoodSidebar() {
  return (
    <aside className="min-w-3xs   ">
     <ul className="p-3  bg-amber-400  flex-col flex items-center gap-5 ">
          <li>
              <NavLink to={""} className={"p-3 w-22 text-center font-bold  block bg-amber-50 rounded-xl"}>Burger</NavLink>
          </li>
          <li>
              <NavLink to={"pizza"} className={"p-3 w-22 text-center font-bold  block bg-amber-50 rounded-xl"}>Pizza</NavLink>
          </li>
          <li>
              <NavLink to={"salad"} className={" p-3 w-22 text-center font-bold  block bg-amber-50 rounded-xl"}>Salad</NavLink>
          </li>
     </ul>
    </aside>
  )
}
