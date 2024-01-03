import React, { useEffect, useState } from 'react'
import { api_key } from '../api';
import styled from "styled-components"
import { useParams,Link } from 'react-router-dom';

function SearchedRecipes() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&query=${name}`)
        const recipes = await data.json();
        setSearchedRecipes(recipes.results)
    }
    useEffect(() =>{
        getSearched(params.search);
    },[params.search])
  return (
    <Grid>
        {searchedRecipes.map(item => {
            return (
                <Card key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap: 3rem;
`
const Card = styled.div`
a {
    text-decoration: none;
}

img {
    border-radius: 2rem;
    width: 100%;
    
}
h4 {
    padding: 1rem;
    text-align: center;
  
}
`

export default SearchedRecipes