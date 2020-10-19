(function (){
    let nav = document.getElementById('nav');

    if(navigator.userAgent.indexOf('Firefox') != -1){
        nav.style.backgroundColor = '#ffffff80';
    }
}())

function showHideMenu() {
    let menuID = document.getElementById('menu-mobile');
    let displayState = menuID.style.display;
    let upperStroke = document.getElementById('upper-stroke');
    let middleStroke = document.getElementById('middle-stroke');
    let lowerStroke = document.getElementById('lower-stroke');
    let svgStrokes = document.getElementsByClassName('cls-1');
    let logo = document.getElementById('logo');

    if(displayState == 'none' || displayState == ''){
        menuID.style.display = 'flex';
        svgStrokes[0].style.stroke = 'white';
        svgStrokes[2].style.stroke = 'white';
        middleStroke.style.display = 'none';
        upperStroke.style.transform = 'rotate(45deg)';
        lowerStroke.style.transform = 'rotate(-45deg)';
        logo.style.filter = "grayscale(1)";
        document.querySelector("body").style.overflow = 'hidden';
    } else {
        menuID.style.display = 'none';
        svgStrokes[0].style.stroke = '#a67c52';
        svgStrokes[2].style.stroke = '#a67c52';
        middleStroke.style.display = 'block';
        upperStroke.style.transform = 'rotate(0deg)';
        lowerStroke.style.transform = 'rotate(0deg)';
        logo.style.filter = "grayscale(0)";
        document.body.style.overflow = 'scroll';
    }
}