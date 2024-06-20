
import { gsap } from "gsap";
import { useEffect } from "react";
const TimeLineFir = () => {
    let tl = gsap.timeline()
    tl.to(".green", { x: 600, duration: 2 });
    tl.to(".purple", { x: 600, duration: 1 });
    tl.to(".orange", { x: 600, duration: 1 });
    return (
        <div className="timeLineFir">
            1
        </div>
    );
}
export default TimeLineFir;

