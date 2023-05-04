import React from "react";


function RecipeView ({recipe, deleteRecipe, index}) {
    return (
        <tr >
            <td >
                {recipe.name}
            </td>
            <td >
                {recipe.cuisine}
            </td>
            <td >
                <img alt={`Photo of ${recipe.name}`} src={recipe.photo} />
            </td>
            <td className="scroll">
                {recipe.ingredients}
            </td>
            <td className="scroll">
                {recipe.preparation}
            </td>
            <td >
                <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
            </td>
        </tr>
    )
};

export default RecipeView;