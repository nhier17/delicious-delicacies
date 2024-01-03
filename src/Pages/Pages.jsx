import Home from "./Home"
import Cuisine from "./Cuisine"
import SearchedRecipes from "./SearchedRecipes"
import Recipe from "./Recipe"
import {  Routes,Route,useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"


function Pages() {
  const location = useLocation();
  return (
    <div>
       <AnimatePresence mode="wait">
       <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>} />
        <Route path="/cuisine/:type" element={<Cuisine/>} />
        <Route path="/searched/:search"  element={<SearchedRecipes/>} />
        <Route path="/recipe/:name" element={<Recipe/>} />
        </Routes>
        </AnimatePresence>
        
    </div>
  )
}

export default Pages