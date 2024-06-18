import { useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState } from "react";
import { gsap } from "gsap";
import ReactDOM from "https://esm.sh/react-dom@18.3.1";
import { Flip } from "https://esm.sh/gsap/Flip";
import { useGSAP } from "https://esm.sh/@gsap/react?deps=react@18.3.1";

const EaseFir = () => {
    const comp = useRef(); // 先创建一个ref，我们后面会用到一个层级比较高的元素上
    const boxRef = useRef();
    useLayoutEffect(() => {
        // -- 动画代码写这里 --


        let eachTween = gsap.to(".elem", {
            keyframes: {
              x: [0, 100, 100, 0, 0],
              y: [0, 0, 100, 100, 0],
              easeEach: "power4.inOut" // <- customise the ease between each keyframe
            },
            duration: 5,
            paused: true,
          });
          
          let easeTween = gsap.to(".elem", {
            keyframes: {
              x: [0, 100, 100, 0, 0],
              y: [0, 0, 100, 100, 0],
              easeEach: 'none' // <- override the default keyframe ease
            },
            ease: "power4.inOut", // <- apply an ease to all the keyframes
            duration: 5,
            paused: true,
          });
          
          easeTween.play()
          
          
          let form = document.querySelector("form");
          let text = document.querySelector(".text");
          
          form.addEventListener("change", (e) => {
            let value = document.querySelector("input:checked").value;
          
            if (value === "ease") {
              eachTween.kill()
              easeTween.play(0)
              text.textContent = "ease the whole keyframe"
            } else {
              easeTween.kill()
              eachTween.play(0)
              text.textContent = "ease between keyframes"
            }
          });

        console.log(boxRef)
        gsap.to(boxRef.current, {
            rotation: "+=360"
          });
        return () => { 
          // 清楚代码（可选）
        }
    }, []); // <- 一个空数组作为依赖项，避免这个hook重复执行
    
    return(
        <div className="easeFir">
            <p className="text">Fine-tune your easing with ease and easeEach</p>
            <section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                <rect opacity="0.5" strokeWidth="0.3" x="25" y="25" width="100" height="100" fill="none" stroke="#fff" strokeMiterlimit="5" strokeDasharray="5" />
                <circle cx="25" cy="25" r="2" fill="#d5d5d5"/>
                <circle cx="125" cy="25" r="2" fill="#d5d5d5"/>
                <circle cx="125" cy="125" r="2" fill="#d5d5d5"/>
                <circle cx="25" cy="125" r="2" fill="#d5d5d5"/>
                <rect className="elem" x="10" y="10" width="30" height="30" rx="4" fill="#88ce02" />
                
            </svg>

            <form>
                <div className="pretty p-default p-curve">
                <input type="radio" name="eases" id="ease" value="ease" checked readOnly />
                <div className="state">
                    <label htmlFor="ease">ease</label>
                </div>
                </div>

                <div className="pretty p-default p-curve">
                <input type="radio" name="eases" id="each" value="each" />
                <div className="state">
                    <label htmlFor="each">easeEach</label>
                </div>
                </div>
            </form>

            </section>
            {/* <div className="box" style={{background: 'red'}} ref={boxRef}>Hello</div> */}
        </div>
    );
}
export default EaseFir;