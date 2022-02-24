import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Link as LinkScroll } from "react-scroll";

function BackTopBtn() {
    const [ displayBtn, setDisplayBtn ] = useState(false);

    useEffect(() => {
        let decideDisplay = () => {
            if (window.scrollY > 1000) {
                setDisplayBtn(true)
            } else {
                setDisplayBtn(false)
            }
        }

        window.addEventListener('scroll', decideDisplay);
    })

    // React Spring.
    const transition = useTransition(displayBtn, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });


    return (
        transition((style, displayBtn) => displayBtn ? (
            <animated.div style={style} className="btn-backTop"  >
                <LinkScroll to='navbar' smooth={true} duration={500} spy={true} exact='true' offset={-80} className="scroll-btn"><BsFillArrowUpSquareFill/></LinkScroll>
            </animated.div>
        ) : null)
    )
}

export default BackTopBtn;