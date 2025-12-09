import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animate({
    children,
    direction = "up",
    distance = 60,
    duration = 1,
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const elem = ref.current;

        // Set initial x/y based on direction
        let fromVars = { opacity: 0 };
        if (direction === "up") fromVars.y = distance;
        else if (direction === "down") fromVars.y = -distance;
        else if (direction === "left") fromVars.x = -distance;
        else if (direction === "right") fromVars.x = distance;

        gsap.fromTo(
            elem,
            fromVars,
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: duration,
                ease: "power2.out",
                immediateRender: false,
                scrollTrigger: {
                    trigger: elem,
                    start: "top 90%",
                    toggleActions: "restart none none reset", // repeat on scroll
                },
            }
        );
    }, [direction, distance, duration]);

    return (
        <div ref={ref} className="opacity-0">
            {children}
        </div>
    );
}
