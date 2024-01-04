import React,{ useEffect, useState } from 'react'
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { api_key } from '../api';
import { Link } from 'react-router-dom';


function Veggie() {
    const [vegie, setVegie] = useState([]);
    useEffect(()=>{
        getVegie();
    }, []);

    const getVegie = async () => {
        const check = localStorage.getItem("veggie")
        if (check) {
            setVegie(JSON.parse(check))
        } else{

        const api =  await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=10&tags=vegetarian`);
        const data = await api.json();
        localStorage.setItem("veggie", JSON.stringify(data.recipes))
        setVegie(data.recipes)
        console.log(data.recipes)
        }
    }
  return (
    <div>
     <Wrapper>
    <h3>Vegetarian Picks</h3>
    <Splide options={{
        perPage: 4,
        pagination: false,
        drag: "free",
        gap: "2rem", 
        breakpoints: {
            768: {
                perPage: 2,
                gap: "1rem",
            }
        }
        
    }}>
    {vegie.map(recipe => {
        return (
            <SplideSlide key={recipe.id}>
            <Card>
                <Link to={"/recipe/" + recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
            <Gradient />
            </Link>
            </Card>
            </SplideSlide>
        )
    })}
    </Splide>
    </Wrapper>

</div>
)
}
const Wrapper = styled.div`
margin: 4rem 0rem;  

`
const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img {
border-radius: 2rem;
position: absolute;
left: 0;
width: 100%;
height: 80%;
object-fit: cover;
}
p {
position: absolute; 
z-index: 10;
left: 50%;
bottom: 0;
width: 100%;
height: 60%;
color: white;
transform: translate(-50%, 0%);
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
font-size: 1rem;
}
`
const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 80%;
border-radius: 2rem;
`
  


export default Veggie