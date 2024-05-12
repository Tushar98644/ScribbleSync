'use client'
import { LottieFiles } from "./LottieFiles";

const Home_Page = () => {

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <div>
        <LottieFiles />
      </div>
      <button className="p-4 text-white px-16 rounded-lg shadow-xl hover:bg-blue-700 my-2 mb-8 bg-blue-600">
        Sign In
      </button>
    </div>
  );
}

export default Home_Page;