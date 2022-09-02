import React from 'react'
import { motion, useScroll } from "framer-motion"

function Scroll() {
    const { scrollYProgress } = useScroll()
    return (
        <div>
            <motion.div className='barra' style={{ scaleX: scrollYProgress }} />
        </div>
    )
}

export default Scroll