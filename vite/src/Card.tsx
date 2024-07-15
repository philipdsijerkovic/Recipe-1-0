import AnimatedButton from './AnimatedButton'

function Card() {
  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" style={{ marginTop: '-25px' }}>
      <img className="w-full h-48 object-cover object-center" src="./src/assets/Apple-Pie-Recipe-Video.jpg" alt="apple pie" />

      <div className="py-5 text-center">
        <a href="#" className="block text-3xl font-semibold text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out hover:text-indigo-500 mb-7">Apple Pie</a>
        <div className="mt-2 mx-4 p-4 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-md mb-10">
          <p className="text-sm text-gray-600 dark:text-gray-400">Savor the taste of tradition with our Apple Pie, featuring a golden, flaky crust and a sweet, cinnamon-spiced apple filling. Perfect for any gathering or a cozy night in.</p>
        </div>

        <ul className="flex flex-wrap justify-center items-center mt-4 ml-5">
          <li className="text-gray-700 dark:text-gray-300 text-sm font-medium mr-4 mb-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">Prep Time: 1hr</li>
          <li className="text-gray-700 dark:text-gray-300 text-sm font-medium mr-4 mb-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">Cook Time: 45min</li>
          <li className="text-gray-700 dark:text-gray-300 text-sm font-medium mr-4 mb-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">Cost: $$</li>
        </ul>

        <div className="mt-4">
          <div className="w-full flex justify-center">
            {AnimatedButton()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;