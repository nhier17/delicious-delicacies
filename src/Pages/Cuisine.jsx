import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"
import { Link, useParams } from 'react-router-dom'
import { api_key } from '../api'


function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    useEffect(()=>{
        getCuisine(params.type);
    }, [params.type])
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results)
    }
  return (
    <Grid>
        {cuisine.map(item => {
            return (
                <Card key={item.id}>
                <img src={item.image} alt={item.title}/>
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

export default Cuisine