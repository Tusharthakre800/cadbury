
const scroller=()=>{

    

    gsap.to(".for-pin",{
        x:-7650,
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"top -15%",
            end:"top -80%",
            scrub:1,
            pin:true,
            color:"black"
            
        }
    })
    
    let tl=gsap.timeline({scrollTrigger:{
        trigger:".page2",
        start:"top 70%",
        end:"top 15%",
        scrub:3,
        // markers:true
    }})
    
    let tl1=gsap.timeline({scrollTrigger:{
        trigger:".page2",
        start:"top 60%",
        end:"top 15%",
        scrub:4,
        // markers:true
    }})
    let tl3=gsap.timeline({scrollTrigger:{
        trigger:".page2",
        start:"top 60%",
        end:"top 15%",
        scrub:4,
        // markers:true
    }})
    let tl4=gsap.timeline({scrollTrigger:{
        trigger:".page3",
        start:"top 50%",
        end:"top 5%",
        scrub:1,
        // markers:true
    }})
    let tl5=gsap.timeline({scrollTrigger:{
        trigger:".page4",
        start:"top 40%",
        end:"top 5%",
        scrub:1,
        // markers:true
    }})
    
    tl.to(".mint",{
        top:"140%",
        right:"5%",
        width:"35%"
    })
    tl3.to(".choco1",{
        top:"130%",
        right:"34%",
        width:"10%",
        rotate:"60deg"
    })
    tl.to(".mint_leaf2",{
        top:"157%",
        left:"85%",
        width:"13%",
        rotate:"130deg"
    })
    tl1.to(".mint_leaf",{
        top:"116%",
        left:"0%",
        width:"13%",
        rotate:"-70deg"
    })
    
    tl4.to(".mint",{
        top:"240%",
        right:"27.5%",
        width:"45%",
        rotate:"90deg"
    })
    
    tl4.to(".mint_tiltle",{
        y:-150,
        // width:"60%",
        scrollTrigger:{
            scroller:"body",
            trigger:".mint_tiltle",
            scrub:3
        }
        
    })
    tl4.from(".bubbly,.milk-chocolate",{
        y:400
    })
    tl5.from(".hover1,.hover2",{
        width:"25%",
        
    })}
    
// ********************************


const time=()=>{
    
    

    var t2 = gsap.timeline()
    
    t2.from(".loader h1",{
        fontSize:0,
        duration:1.1,
        delay:1
    })
    t2.to(".loader",{
    
        y:-1000,
        duration:3,
        delay:2,
        zindex:0,
        opacity:0
    })
    t2.from(".text1",{
        y:40,
        duration:1,
        opacity:0,
        scale:5
    },"thakre")
    t2.from(".text2",{
        y:40,
        duration:1,
        opacity:0,
        scale:5
    },"thakre")
    t2.from(".text3",{
        y:40,
        duration:1,
        opacity:0,
        scale:5
        // delay:3
    },"thakre")
    t2.from(".text4",{
       y:40,
        duration:1,
        opacity:0,
        scale:5
    },"thakre")
    t2.from(".mint",{
        y:-800,
        duration:1.5
    })
    
    t2.from(".mint_leaf",{
        rotate:"360%",
        duration:1.5,
        opacity:0
    },"tushar")
    t2.from(".mint_leaf2",{
    
        duration:1.5,
        opacity:0
    },"tushar")
    t2.from(".choco1",{
        x:-2000,
        rotate:"360%",
        duration:1.5
    },"same")
    t2.from(".choco2",{
        x:2000,
        rotate:"360%",
        duration:1.5
    },"same") }
  
// ******************************


const cursor=()=>{

    
    
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    })
}


function handleScroll(dets) {
    if (dets.deltaY > 0) {
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        duration: 8,
        repeat: -1,
        ease: "none-in-out",
      });
      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(0%)",
        duration: 8,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  }
  
  window.addEventListener("wheel", handleScroll);



  scroller()
  time()
  cursor()

  