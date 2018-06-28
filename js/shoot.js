var e_Cannonball;
var style_Cannonball;
var marginLeft_Cannonball;
var e_Frame;
var fire_Timer;

function shoot() {
    e_Frame = document.getElementById('shoot_the_pig').offsetWidth;
    document.getElementById('bird').style.display = 'block';
    fire_Timer = setInterval(moveCannonball, (1));
}

function moveCannonball() {

    e_Cannonball = document.getElementById('bird');
    style_Cannonball = e_Cannonball.currentStyle || window.getComputedStyle(e_Cannonball);
    marginLeft_Cannonball = style_Cannonball.marginLeft;
    marginLeft_Cannonball = marginLeft_Cannonball.replace("px", "");
    if (marginLeft_Cannonball < e_Frame - 239) {
        marginLeft_Cannonball = parseInt(marginLeft_Cannonball) + 1;
    }
    else {
        clearInterval(fire_Timer);
    }
    document.getElementById('bird').style.marginLeft = marginLeft_Cannonball + "px";
}