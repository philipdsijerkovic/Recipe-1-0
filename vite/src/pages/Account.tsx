import React, { useState } from 'react';
import App from '../App';

const Account = () => {
  const user = {
    avatarUrl: 'https://via.placeholder.com/150',
    username: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate cook and recipe creator.',
  };

  const recipes = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
      datePosted: '2023-01-15',
    },
    {
      id: 2,
      title: 'Chicken Tikka Masala',
      description: 'Grilled marinated chicken chunks in a spicy curry sauce.',
      datePosted: '2023-02-20',
    },
    {
      id: 3,
      title: 'Beef Bourguignon',
      description: 'A French stew made with beef braised in red wine, often red Burgundy, and beef broth, typically flavored with carrots, onions, garlic, and a bouquet garni, and garnished with pearl onions, mushrooms, and bacon.',
      datePosted: '2023-03-05',
    },
  ];

  const [activeTab, setActiveTab] = useState('recipes');

  return (
    <div className="min-h-screen bg-gray-100">
      {App()}
      <div className="max-w-2xl mx-auto my-10 bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
            <img src={user.avatarUrl} alt="User Avatar" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-semibold mt-4 text-gray-900">{user.username}</h1>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-center text-gray-700 mt-2">{user.bio}</p>
          <div className="mt-4">
            <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-200 ease-in-out">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ul className="flex justify-center gap-5 text-sm font-medium">
          <li className="text-xl font-semibold leading-relaxed pb-4">Recipes</li>
        </ul>
        {activeTab === 'recipes' && (
          <div className="overflow-x-auto relative mt-6">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 px-6 text-left">Recipe Name</th>
                  <th scope="col" className="py-3 px-6 text-left">Description</th>
                  <th scope="col" className="py-3 px-6 text-center">Date Posted</th>
                </tr>
              </thead>
              <tbody>
                {recipes.map((recipe) => (
                  <tr key={recipe.id} className="border-b">
                    <td className="py-4 px-6 text-left font-medium text-gray-900">{recipe.title}</td>
                    <td className="py-4 px-6 text-left">{recipe.description}</td>
                    <td className="py-4 px-6 text-center">{recipe.datePosted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;