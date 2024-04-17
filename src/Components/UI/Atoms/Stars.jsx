import { useEffect } from "react";
import { gsap } from 'gsap';

export const Stars = ({ count }) => {
  const blockClass = 'stars'

  useEffect(() => {
    const createStars = (i) => {
      for (let j = i; j; j--) {
        drawStars();
      }
    };

    const drawStars = () => {
      const tmpStar = document.createElement('figure');
      tmpStar.className = "star";
      tmpStar.style.top = `${100 * Math.random()}%`;
      tmpStar.style.left = `${100 * Math.random()}%`;
      document.getElementById('stars').appendChild(tmpStar);
    };

    const selectStars = () => {
      const stars = document.querySelectorAll(".star");
      animateStars(stars);
    };

    const animateStars = (stars) => {
      Array.prototype.forEach.call(stars, function (el, i) {
        gsap.to(el, Math.random() * 0.5 + 0.5, { opacity: Math.random(), onComplete: () => animateStars([el]) });
      });
    };

    createStars(count);
    selectStars();

    return () => {
      const stars = document.querySelectorAll(".star");
      stars.forEach(star => star.remove());
    };
  }, [count]);


  return <div id={`${blockClass}`}></div>
}