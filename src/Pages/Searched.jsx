import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { api_key } from '../api';
import styled from "styled-components"

function Searched() {
    const [searched, setSearched] = useState([]);
    let params = useParams();
   
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&query=${name}`)
        const recipes = await data.json();
        setSearched(recipes.results)
        
    }
    useEffect(()=> {
        getSearched(params.search);
    }, [params.search])

  return (
    <Grid>
        {searched.map(item=> {
            return (
                <Card key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>  
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

export default Searched