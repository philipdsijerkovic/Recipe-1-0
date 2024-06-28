const AnimatedButton = () => {
  return (
    <button className='inline-flex items-center justify-center h-10 px-10 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-700 to-blue-300 bg-[length:200%_100%] rounded-full border border-transparent transition-all duration-300 ease-in-out hover:bg-[position:100%_50%] hover:shadow-lg hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 focus:ring-offset-gray-800'>
  Go
</button>
  );
};

export default AnimatedButton;