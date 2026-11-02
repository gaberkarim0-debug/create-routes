import { NavLink } from "react-router"

const DrinksSidebar = () => {
  return (
    <aside className="min-w-3xs   ">
     <ul className="p-3  bg-emerald-900  flex-col flex items-center gap-5 ">
          <li>
              <NavLink to={""} className={"p-3  w-30 text-center font-bold  block bg-amber-50 rounded-xl"}>Cocktails</NavLink>
          </li>
          <li>
              <NavLink to={"icedrinks"} className={"p-3  w-30 text-center font-bold  block bg-amber-50 rounded-xl"}>ice (halaaal)</NavLink>
          </li>
          <li>
              <NavLink to={"hotdrinks"} className={" p-3 w-30 text-center font-bold  block bg-amber-50 rounded-xl"}>Hot Drinks</NavLink>
          </li>
     </ul>
    </aside>
  )
}

export default DrinksSidebar