import App from "../App";
import React, { useState } from 'react';

interface Recipe {
  id: number;
  name: string;
  description: string;
}

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const createNewRecipe = () => {
    const newRecipe: Recipe = {
      id: recipes.length + 1,
      name: `Recipe ${recipes.length + 1}`,
      description: `Description for Recipe ${recipes.length + 1}`
    };
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {App()}
      <h1 className="text-2xl font-bold mb-4">My Recipes</h1>
      <button
        onClick={createNewRecipe}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Create New Recipe
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td className="py-2 px-4 border-b">{recipe.id}</td>
              <td className="py-2 px-4 border-b">{recipe.name}</td>
              <td className="py-2 px-4 border-b">{recipe.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipes;