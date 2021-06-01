import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Recipe = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({});

    const getASingleRecipe = () => {
        // fetch(`http://localhost:8000/api/recipes/${id}`)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => err);
        axios.get(`http://localhost:8000/api/recipes/${id}`)
            .then(response => console.log(response))
            .catch(err => err);
    }

    useEffect(() => {
        getASingleRecipe();
    }, [])

    return (
        <div className="recipe-container">
            <h1>Mi receta</h1>
            {recipe.title && (
                <div className="card">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.serve}</p>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <p>{recipe.cook_time}</p>
                    <p>{recipe.steps}</p>
                </div>
            )}
        </div>
    )
}

export default Recipe;