import { createContext } from "react";

const globalStore = createContext()

export default function Mainstore({children}) {
     values = {

     }
  return (
    <globalStore.Provider value={values}>{children}</globalStore.Provider>
  )
}
