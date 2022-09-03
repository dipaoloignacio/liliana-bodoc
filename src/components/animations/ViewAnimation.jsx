import React, { useRef } from 'react'
import { useInView } from "framer-motion";

function ViewAnimation({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <div
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </div>
        </section>
    )
}

export default ViewAnimation