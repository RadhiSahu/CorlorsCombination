var tl = gsap.timeline({
    scrollTrigger : {
        trigger : "#home",
        start : "top top",
        end: "+=" + (window.innerHeight * 8),
        pin : true,
        scrub : true,
    }
})
tl.to("#home #overlay #center",{
    left : "50%",
    ease : Power1
})
.to("#home #overlay #purple",{
    top : "50%",
    width : "7.5vw",
    height : "7.5vw",
    stagger : .05,
    ease : Power1
},"same")
.to("#home #overlay #gallery",{
    top : "150%",
    ease : Power1
},"same")
.to("#home #overlay #center h3",{
    opacity : 0,
    duration : .20,
    ease : Power1
},"same")
.to("#home #overlay #center #centerimg img",{
    scale : 0,
    ease : Power1
},"same")
tl.to("#circle",{
    scale : .15,
    ease : Power1
},"same")
.to("#smcrl",{
    scale : .5,
    ease : Power1
},"same")
.to("#circle #crlbottom img",{
    rotate : "-180deg",
    ease : Power1,
    stagger : .03
},"same")
.to("#home #overlay #bottom img",{
   filter : "brightness(white)",
},"same")
.to("#overlay #pink",{
    top : "70%",
    rotate : "0deg",
    ease : Power0
},"same")
.to("#home #overlay #purple",{
    opacity : 0,
    duration : .15,
    ease : Power1
},"same1")
.to("#circle",{
    scale : 0,
    duration : 1.5,
    ease : Power1
},"same1")
.to("#smcrl",{
    scale : 0,
    duration : 1.5,
    ease : Power1
},"same1")
.to("#purplediv",{
    top : 0,
    delay : .8,
    ease : Power0
},"same1")
.to("#purplediv",{
    top : "-90%",
    delay : .5,
    ease : Power0
})
var tl2 = gsap.timeline({
    scrollTrigger : {
        trigger : "#second",
        start : "top top",
        end: "+=" + (window.innerHeight * 8),
        pin : true,
        scrub : true,
    }
})
gsap.set("#soverlay #stop .circle",{ scale : 0.5 })
tl2.to("#second #soverlay #stop .circle",{
    scale : 1,
    ease : Power0
},"same2")
.to("#second #soverlay #stop .circle",{
    top : "50%",
    stagger : .1,
    ease : Power0
},"same2")
.to("#second #soverlay #stop .circle",{
    left : "50%",
    ease : Power0
})
.to("#second #soverlay #stop .circle",{
    scale : .7,
    ease : Power0
})
.to("#second #soverlay #stop .circle",{
    scale : 7,
    // background : "linear-gradient (to right,#D5A7B4,#B4AAD5)",
    ease : Power0
},"same3")
.to("#second #soverlay #btm #btm3",{
    left : "3.7vw",
    duration : .5,
    ease : Power0
},"same3")
.to("#second #soverlay #stop",{
    borderBottom : "0px solid white",
    ease : Power0
},"same3")
.to("#second #soverlay #stop>h1",{
    left : "-157%",
    duration : 5,
    ease : Power0
},"same4")
.to("#second #soverlay #btm #btm4",{
    left : "3.7vw",
    delay : 2,
    duration : 1.5,
    ease : Power0
},"same4")
.to("#second #soverlay #stop .circle",{
    background: "linear-gradient(to right,#D5A7B4,#B4AAD5)",
    delay: -2.5,
    ease : Power0
},"same5")
.to("#second #soverlay #sbtm h1:nth-child(1)",{
    opacity : 0,
    delay : 1,
    duration : 1,
    ease : Power0
},"same4")
.to("#second #soverlay #sbtm h1:nth-child(2)",{
    opacity : 1,
    delay : 2,
    duration : 1,
    ease : Power0
},"same4")
.to("#second #soverlay #sbtm #one",{
    marginTop : "-3.5vw",
    delay : .1,
    ease : Power0
},"same3")
.to("#second #soverlay #sbtm #two",{
    marginTop : "-3.5vw",
    delay : -2,
    ease : Power0
},"same5")
.to("#second #soverlay #stop #plrs span",{
    top : 0,
    height : "100%",
    stagger : 0.1,
    ease : Power0,
})
.to("#second #soverlay #stop #plrs #plr1 #p11",{
    height : "6vw",
    bottom : "6vw",
    ease : Power0,
},"same6")
.to("#second #soverlay #stop #plrs #plr1 #p12",{
    height : "6vw",
    bottom : 0,
    ease : Power0,
},"same6")
.to("#second #soverlay #stop #plrs .inp",{
    left : "-10vw",
    ease : Power0,
})
.to("#second #soverlay #stop #plrs #plr1 #p12",{
    left : "-15vw",
    ease : Power0,
},"same7")
.to("#second #soverlay #stop #plrs #plr2 #p21",{
    height : "6vw",
    bottom : "6vw",
    ease : Power0,
},"same6")
.to("#second #soverlay #stop #plrs #plr2 #p22",{
    height : "6vw",
    bottom : 0,
    ease : Power0,
},"same6")
.to("#second #soverlay #stop #plrs #plr2 #p22",{
    left : "-15vw",
    ease : Power0,
},"same7")
.to("#second #soverlay #stop #plrs #plr3 #p31",{
    height : "6vw",
    bottom : "6vw",
    ease : Power0,
},"same6")
.to("#second #soverlay #stop #plrs #plr3 #p32",{
    height : "6vw",
    bottom : 0,
    ease : Power0,
},"same6")
.to("#second #soverlay #stop #plrs #plr3 #p32",{
    left : "-15vw",
    ease : Power0,
},"same7")
.to("#second #soverlay #stop #plrs #plr4 #p41",{
    height : "6vw",
    bottom : "6vw",
    ease : Power0,
},"same6")
.to("#second #soverlay #stop #plrs #plr4 #p42",{
    height : "6vw",
    bottom : 0,
    ease : Power0,
},"same6")
.to("#second #soverlay #stop #plrs #plr4 #p42",{
    left : "-15vw",
    ease : Power0,
},"same7")
.to("#second #soverlay #stop #plrs #plr5 #p51",{
    height : "6vw",
    bottom : "6vw",
    ease : Power0,
},"same6")
.to("#second #soverlay #stop #plrs #plr5 #p52",{
    height : "6vw",
    bottom : 0,
    ease : Power0,
},"same6")
.to("#second #soverlay #stop #plrs #plr5 #p52",{
    left : "-15vw",
    ease : Power0,
},"same7")
.to("#second #soverlay #stop #plrs #plr5 #p53",{
    height : "12vw",
    bottom : 0,
    ease : Power0,
},"same6")
