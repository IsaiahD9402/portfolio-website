import { motion } from 'framer-motion'
import { useState } from 'react'

import './index.css'

function Home() {
  return (
    <div className="grid-container bg-gradient-to-br from-primary to-secondary text-white">
      <div>
        <div 
        className="relative box-content text-right text-7xl pt-10 overflow-hidden bg-gradient-black">
          <motion.h1 
           className="text-6xl"
           animate={{ x: 0, opacity: 1}}
           initial={{ x: "100%", opacity: 0}}
           transition={{ duration: 0.8 }}
          >
          Hello </motion.h1>
        </div> 
        <div className="relative block text-right pt-10 -mr-20 overflow-hidden box-content border-2 border-transparent" >
          <motion.h1 
            className="text-6xl"
            animate={{ y: 0, opacity: 1 }}                  
            initial={{ y: "100%", opacity: 0}}            
            transition={{ delay: 1, duration: 0.5 }}
          >
            My Name Is</motion.h1>
        </div> 
        <div className="relative block text-right pt-10 -mr-12 overflow-hidden  ">
          <motion.h1 
            className="text-8xl"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0}}
            transition={{ delay: 1.6, duration: 0.7 }}
          >
            Isaiah</motion.h1>
        </div> 
      </div>
      <div className="justify-center items-center flex h-screen w-full flex-col gap-20 p-0 m-0">
        <motion.button 
        className="border-2 border-white w-60 h-20 font-bold text-4xl rounded-lg"
        animate={{ y: 0, opacity: 1}}
        initial={{ y: "100%", opacity: 0}}
        transition={{ duration: 0.5, delay: 2.5 }}
        >
          About Me
        </motion.button>
        <motion.button 
        className="border-2 border-white w-60 h-20 font-bold text-4xl rounded-lg"
        animate={{ y: 0, opacity: 1}}
        initial={{ y: "100%", opacity: 0}}
        transition={{ duration: 0.5, delay: 2.75 }}
        
        >
          Projects
        </motion.button>
        <motion.button 
        className="border-2 border-white w-60 h-20 font-bold text-4xl rounded-lg"
        animate={{ y: 0, opacity: 1}}
        initial={{ y: "100%", opacity: 0}}
        transition={{ duration: 0.5, delay: 3 }}
        >
          Extra Fun
        </motion.button>
      </div>
      <div className="content-center flex justify-center items-center">
    
     
      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  );
}

export default Home;