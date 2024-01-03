import Home from "./Home"
import Cuisine from "./Cuisine"
import SearchedRecipes from "./SearchedRecipes"
import Recipe from "./Recipe"
import {  Routes,Route } from "react-router-dom"


function Pages() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cuisine/:type" element={<Cuisine/>} />
        <Route path="/searched/:search"  element={<SearchedRecipes/>} />
        <Route path="/recipe/:name" element={<Recipe/>} />
        </Routes>
        
    </div>
  )
}

export default Pages