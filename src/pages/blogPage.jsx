import React from 'react'
import {motion} from "framer-motion"
import Footer from '../components/footer';

const blogPage = () => { 
  return (
    <motion.div 
    inital = {{opacity:0}}
    animate = {{opacity:1}}
    exit = {{opacity:0}}
    transition = {{duration:0.5}} >blogPage
    <Footer />
    </motion.div>
  )
}

export default blogPage