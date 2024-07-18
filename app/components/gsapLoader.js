import { gsap, Power3 } from "gsap";
import { useRef, useEffect } from 'react';
export default function GsapFun({homeClass}) {

  let tl = gsap.timeline();
  let ease = Power3.easeOut;
  let item = useRef(null);
  let itemvalue1 = useRef(null);
  let itemvalue2 = useRef(null);
  let itemvalue3 = useRef(null);

  const style = {
    display:'none'
  }

  useEffect(() => {
    const stopGsap = () => {
      const btn = homeClass;  // Assuming homeClass is the button or element
      const loader = document.querySelector('.loader')
  
      if (btn && typeof btn.addEventListener === 'function') {
        btn.addEventListener('click', () => {
          loader.classList.toggle("style")
        });
      }
    }
  
    stopGsap();
  }, [homeClass]);

  const gsapAnimation = () => {
    tl.to(itemvalue1.current, {
      x: 0,
      opacity: 1,
      stagger: {
        amount: 0.1,
      },
      duration: 0.9,
      ease: ease,
    }).to(itemvalue2.current, {
      x: 0,
      opacity: 1,
      stagger: {
        amount: 0.1,
      },
      duration: 0.9,
      ease: ease,
    }).to(itemvalue3.current, {
      x: 0,
      opacity: 1,
      stagger: {
        amount: 0.1,
      },
      duration: 0.9,
      ease: ease,
    }).from([itemvalue1.current, itemvalue2.current, itemvalue3.current], {
      x: -400,
      stagger: {
        amount: 0.1,
      },
      opacity: 0,
      duration: 0.6,
      ease: ease,
  
    }).to(item.current, {
      opacity: 1,
      height: 0,
      delay :-0.5,
      display: 'none',
      duration: 0.9,
      ease: ease,
    });
  };

  useEffect(() => {
  
  gsapAnimation()
    
  }, []);


  return (
    <>
      <div className="loader" ref={item}>
        <p ref={itemvalue1}>Simple</p>
        <p ref={itemvalue2}>Smarter</p>
        <p ref={itemvalue3}>Faster</p>
      </div>
    </>
  );
}
