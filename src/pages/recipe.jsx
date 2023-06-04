import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/preloader";

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);
    return (
        <>
        <button style={{marginBottom: "0.5rem" }} className="btn deep-orange lighten-5 deep-orange-text text-lighten-1" onClick={goBack}>
               Go Back
            </button>

            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <div className="recipeMain">
                        <img className="recipeImg" src={recipe.strMealThumb} alt = {recipe.strMeal} />
                        <div className="recipeText">
                            <h3 className="recipeH3 deep-orange-text text-lighten-1">{recipe.strMeal}</h3>
                            <h6>Category: {recipe.strCategory}</h6>
                            {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                        </div>
                        
                    </div>
                    <p>{recipe.strInstructions}</p>

                    <table className="striped highlight">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) =>  {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe['strMeasure' + key.slice(13)]}</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5 className="deep-orange-text text-lighten-1" style={{margin: "2rem 0 1.5rem" }}>Video Recipe</h5>
                            <iframe title={id} src={'https://www.youtube.com/embed/' + recipe.strYoutube.slice(-11)}
                            allowfullscreen />
                        </div>
                    ) : null}
                </div>
            )
            
        }
        </>
    );
}
export {Recipe};