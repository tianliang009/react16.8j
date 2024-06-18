
import { gsap } from "gsap";
import { useEffect } from "react";
const EaseThi = () => {
    useEffect( () => {
        gsap.to(".box", {
            keyframes: {
              y: [0, 80, -10, 30, 0],
              ease: "none", // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
              easeEach: "power2.inOut" // <- ease between each keyframe (defaults to "power1.inOut")
            },
            rotate: 180,
            ease: "elastic", // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
            duration: 5,
            stagger: 0.2
        });
    }, [])
    return (
        <div className="easeThi">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
    );
}
export default EaseThi;
