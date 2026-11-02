import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar bg-amber-800">
     <div className="container flex justify-between py-5">
     <Link className="text-4xl font-bold" to={"/"}>iHerb</Link>
     <ul className="font-bold text-xl flex gap-10 ">
      <li><NavLink to={"/"} className="hover:text-amber-400 duration-300">Home</NavLink></li>
      <li><NavLink to={"food"} className="hover:text-amber-400 duration-300">Food</NavLink></li>
      <li><NavLink to={"drinks"} className="hover:text-amber-400 duration-300">Drinks</NavLink></li>
     </ul>
     </div>
    </nav>
  )
}
