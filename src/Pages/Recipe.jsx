import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { api_key } from '../api';

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();

  const fetchDetails = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${api_key}`)
    const detailData = await api.json();
    setDetails(detailData);
  
  }
  useEffect(() => {
    fetchDetails();
  }, [params.name])
    
  return (
    <DetailWrapper>
<div>
  <h2>{details.title}</h2>
  <img src={details.image} alt={details.title} />
</div>
<Info>
  <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions</Button>
  <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
  {activeTab === "instructions" && (
  <div>
    <h3 dangerouslySetInnerHTML={{__html: details.summary }}></h3>
    <h3 dangerouslySetInnerHTML={{__html: details.instructions }}></h3>
  </div>
  )}
  {activeTab === "ingredients" && (
  <ul>
   {details.extendedIngredients.map((ingredient) => (
    <div  key={ingredient.id}>   
       <li>{ingredient.original}</li>
       </div>

   ))}
  </ul>
  )}
</Info>
    </DetailWrapper>
  )
}
const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;

h2 {
  margin-bottom: 2rem;
}
.active {
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
}
li {
  font-size: 1.2rem;
  line-height: 2.5rem;
}
ul {
  margin-top: 2rem;
}
@media (max-width: 768px) {
  display: block;
  
}
`
const Button = styled.button`
  padding: 1rem 3rem;
  color: #313131;
  background: white;
  margin-right: 2rem;
  border: 2px solid black;
  font-weight: 600;
  cursor: pointer;
  `
  const Info = styled.div`
    margin-left: 10rem;
    @media (max-width: 768px) {
      margin-left: 1rem;
    }
  `

export default Recipe