'use client'
import {motion} from 'framer-motion'
const SectionDivider = ({delay}:{delay:number}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delay }}
     className="w-[2px] h-[100px]  my-10  hidden sm:block bg-gradient-to-b from-cyan-400 to-purple-200"/>
  )
}

export default SectionDivider