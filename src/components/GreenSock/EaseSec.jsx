
import { gsap } from "gsap";
import { useEffect } from "react";
const EaseSec = () => {
    useEffect( () => {
        gsap.set("svg", { opacity: 1 });
        gsap.to(".ball", {
        keyframes: {
            "0%": { yPercent: 0, scaleX: 1, scaleY: 1 },
            "7%": { yPercent: 5, scaleY: 0.9, scaleX: 1.1, ease: "sine.in" },
            "25%": { yPercent: 100, scaleY: 1.15, scaleX: 0.9, ease: "sine.in" },
            "50%": { yPercent: 500, scaleX: 1, scaleY: 1, ease: "none" },
            "60%": { scaleX: 1.6, scaleY: 0.4, ease: "none" },
            "65%": { yPercent: 500, scaleX: 1, scaleY: 1 },
            "100%": { yPercent: 0, scaleX: 1, scaleY: 1 },
            easeEach: "sine.out"
        },
        duration: 0.8,
        repeat: -1,
        transformOrigin: "center bottom"
        });

        gsap.to(".shadow", {
        scale: 0.7,
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center"
        });
    }, [])
    return (
        <div className="easeSec">
            <svg viewBox="0 0 100 200">
            <ellipse className="shadow" cx="50" cy="188" rx="15" ry="5" />
            <circle className="ball" cx="50" cy="22" r="15" />
            </svg>
        </div>
    );
}
export default EaseSec;
