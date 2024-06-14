import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface Props {
    children: React.ReactNode,
    width? : "fit-content" | "full"
    colour? : string
}

export function Reveal( { children, colour = "#8C52FF"} : Props ) {
    const ref = useRef(null); 
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation() 

    useEffect(() => {
        if (isInView) {
            // Fire animation
            mainControls.start("visible")
        }
    }, [isInView, mainControls])

    return (
        <div
            ref={ref} 
            style={{ position : "relative"  }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}
