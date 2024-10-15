
const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

gsap.from(".nlink",{
    stagger:.2,
    y:10,
    ease:Power2,
    duration:1,
    opacity:0
})

Shery.imageEffect(".imgpic", {
    style: 4,
    // debug: true,
  });
Shery.imageEffect(".imgpic2", {
    style: 2,
    // debug: true,
  });

Shery.textAnimate(".ephameral .headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  });
  
gsap.from(".anim2",{
    y:50,
    stagger:.3,
    duration:2,
    opacity:0,
    ease:Expo
})

Shery.imageEffect(".imgtext img",{
    style:3,
    config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":6.87,"range":[0,100]},"uFrequencyZ":{"value":35.88,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.31},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500071491892819},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.56,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

})


Shery.imageEffect(".susimgwrap img",{
    style:5,
    config:{"a":{"value":1.83,"range":[0,30]},"b":{"value":-0.39,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}

})

document.querySelector(".ftext button").addEventListener("mouseover",()=>{
    gsap.to(".future video",{
        opacity:1,
        ease:Power4,
        duration:1.5
    })
})
document.querySelector(".ftext button").addEventListener("mouseleave",()=>{
    gsap.to(".future video",{
        opacity:0,
        ease:Power4,
        duration:1.5
    })
})

