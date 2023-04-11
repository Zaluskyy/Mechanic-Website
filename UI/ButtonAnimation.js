import { motion } from "framer-motion";

export default function ButtonAnimation({ children, onClick, className, tabIndex, variants, animate }){
    return(

        <motion.button
        onClick={onClick}
        className={className}
        tabIndex={tabIndex}

        whileHover={{
            scale: 1.1,
            border: '1px solid white',
        }}
        whileTap={{
            scale: .9,
        }}

        variants={variants}
        animate={animate}
        >
            {children}
        </motion.button>
    )
}