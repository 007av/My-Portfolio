import { rgba } from "framer-motion";
import { useRef, useEffect } from "react";

const ParticleBaground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    //for drawing the the canvas

    let particles = [];
    const particlesCount = 50;
    const colors = ["rgba(255,255,255,0.7)"];

    //class for particles color,length,speed
    class Particle {
      constructor() {
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.radius = Math.random()*2+1;
        this.color = colors[Math.floor(Math.random()*colors.length)];
        this.speedX = (Math.random()-0.5)*0.5;
        this.speedY = (Math.random()-0.5)*0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x , this.y , this.radius , 0 , Math.PI*2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        this.x += this.speedX; //to move in X axis
        this.y += this.speedY; //to move in Y axis

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        //for redraw the particle
        this.draw();
      }
    }

    function createPArticles() {
      particles = [];
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particle());
      }
    }

    //For diffrents Screen Sizes Particles Are Created
    function handleResize(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createPArticles();

    }
    handleResize();
    window.addEventListener("resize", handleResize);

    //for loop the Animation
    let animationid;
    function animate(){
      ctx.clearRect(0,0,canvas.width ,canvas.height); //for clear the treck
      particles.forEach((e)=> e.update()); //for each particle will update;
      animationid = requestAnimationFrame(animate); //request for each particle to animate;
    }
    animate();

    //for stop the Animation after unMont the Component;
    return()=>{
      cancelAnimationFrame(animationid);
      window.removeEventListener("resize" , handleResize)
    }
  } , [])

  return (
    <canvas
      ref={canvasRef}
      className=" absolute w-full h-full left-0 top-0 pointer-events-none z-0"
    ></canvas>
  );
};

export default ParticleBaground;
