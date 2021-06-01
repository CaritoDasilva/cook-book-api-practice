import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
const Home = () => {
    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/recipes/');
            console.log("🚀 ~ file: Home.jsx ~ line 9 ~ getRecipes ~ response", response)
            response.data.recipes && setRecipes(response.data.recipes);

        } catch (err) {
            return err;
        }
    }

    useEffect(() => {
        getRecipes();
    }, [])



    return (
        <div className="container-home">
            <h1>Mis recetas</h1>
            {recipes.length > 0 ? recipes.map(recipe => {

                return (
                    <div key={recipe._id} className="card">
                        <Link to={`/recipe/${recipe._id}`}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.serve}</p>
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                            <p>{recipe.cook_time}</p>
                            <p>{recipe.steps}</p>
                        </Link>
                    </div>
                )
            }) : 'No hay recetas para mostrar'}
        </div>
    )
}

export default Home;