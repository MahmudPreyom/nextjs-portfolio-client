"use client";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="flex space-x-2">
        <span className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-6 h-6 md:w-8 md:h-8 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-6 h-6 md:w-8 md:h-8 bg-blue-300 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default LoadingPage;
