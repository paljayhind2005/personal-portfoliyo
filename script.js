Shery.imageMasker(".nav__menu" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Click Me",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".nav__menu" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".about" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageEffect(".img", {
  style: 3,
  /*optional parameters
  these parameter dose not applies to custom scroll trigger callback */
  scrollSnapping: true,
  scrollSpeed: 1,
  touchSpeed: 1,
  damping: 7,
});

Shery.imageEffect('img', {
  style: 5,
  setUniforms: (uniforms) => {
     uniforms.maskVal.value = 1 // Syntax -> uniforms.uniform_name.value = your
  }
})


Shery.imageMasker(".home__img" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Jayhind",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".home__img" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 10)",
  duration: 1,
});





Shery.imageMasker(".home__data" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "View More",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".home__data" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.hoverWithMediaCircle(".home__data" /* Element to target.*/, {
  images: ["", "", ""] /*OR*/,
  // videos: ["https://videos.pexels.com/video-files/7565622/7565622-sd_360_640_25fps.mp4", "https://videos.pexels.com/video-files/7565622/7565622-sd_360_640_25fps.mp4"],
});



const about = document.querySelector("#about");

about.addEventListener("mouseenter", () => {
  Shery.textAnimate(".about__description" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    x: -0.2,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.makeMagnet(".about__description" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
});

const education = document.querySelector(".education");

education.addEventListener('mouseenter',()=>{
  Shery.textAnimate(".ani" /* Element to target.*/, {
    //Parameters are optional.
    style:2,
    x: 10, // Changed from y to x
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.7,
  });
  
})




