import {motion} from "framer-motion";
import React from "react";

const Login = ()=>{
  return(
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-600 to-red-400">
      <motion.div
        initial={{opacity: 0, y:50}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 1}}
        className="flex flex-col justify-between bg-white shadow-lg rounded-lg p-8 max-w-[450px] min-h-[400px] h-full w-full text-center"
      >
        <h2 className="flex flex-col justify-between text-2x1 font-semibold text-gray-gradient">Welcome Back</h2>
        <p className="flex flex-col flex-grow justify-between text-gray-500 mb-6">Sign in to TaskTalk</p>
        <form className="flex flex-col flex-grow justify-between space-y-4">
          <motion.input
            whileFocus={{scale: 1.05}}
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 transition-all"
          />
          <motion.input
            whileFocus={{scale: 1.05}}
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 transition-all"
          />
          <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="w-full text-xl font-bold bg-red-800 text-white py-2 rounded-lg hover:bg-gray-400 transition-all"
          >
            Log in
          </motion.button>

        </form>
      </motion.div>
    </div>
  )
}

export default Login