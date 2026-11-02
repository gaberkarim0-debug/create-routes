import { Route, Routes } from "react-router";
import Mainlayout from "./layout/Mainlayout";
import Home from "./Pages/Home";
import Foodlayout from "./layout/Foodlayout";
import Burgers from "./Pages/Burgers";
import Pizza from "./Pages/Pizza";
import Salad from "./Pages/Salad";
import Drinkslayout from "./layout/Drinkslayout";
import Cocktails from "./Pages/Cocktails";
import Icedhalal from "./Pages/Icedhalal";
import Hotdrinkes from "./Pages/Hotdrinkes";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="food" element={<Foodlayout />}>
            <Route index element={<Burgers />} />
            <Route path="pizza" element={<Pizza />} />
            <Route path="salad" element={<Salad />} />
          </Route>
          <Route path="drinks" element={<Drinkslayout />}>
            <Route index element={<Cocktails />} />
            <Route path="icedrinks" element={<Icedhalal />} />
            <Route path="hotdrinks" element={<Hotdrinkes />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
