
let cursor= document.querySelector("#cursor")
document.addEventListener("mousemove",
function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y+"px"

})
let blur= document.querySelector("#cursor-b")
document.addEventListener("mousemove",
function(dets){
    blur.style.left = dets.x -100 + "px"
    blur.style.top = dets.y -100+"px"

})


var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3
        cursor.style.border = "1px solid white"
        cursor.style.backgroundColor= "transparent"
    })

    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor= "#95C11E"
    })

})



gsap.to("#nav",{
    backgroundColor: "black",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-in ",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})


gsap.from(".card",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:2
    }
})

gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2", {
    y:-70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})


gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})



