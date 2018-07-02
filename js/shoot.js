var e_Cannonball;
var style_Cannonball;
var marginLeft_Cannonball;
var marginTop_Cannonball;
var e_Frame;
var fire_Timer;
var gravity = -2;

function shoot() {
    e_Frame = document.getElementById('shoot_the_pig').offsetWidth;
    document.getElementById('bird').style.display = 'block';
    fire_Timer = setInterval(moveCannonball, (1));
}

function moveCannonball() {

    e_Cannonball = document.getElementById('bird');
    style_Cannonball = e_Cannonball.currentStyle || window.getComputedStyle(e_Cannonball);
    marginLeft_Cannonball = style_Cannonball.left;
    marginLeft_Cannonball = marginLeft_Cannonball.replace("px", "");
    marginTop_Cannonball = style_Cannonball.top;
    marginTop_Cannonball = marginTop_Cannonball.replace("px", "");

    if (marginLeft_Cannonball < e_Frame - 210) {
        gravity = gravity + 0.01;
        marginLeft_Cannonball = parseInt(marginLeft_Cannonball) + 2;
        marginTop_Cannonball = parseInt(marginTop_Cannonball) + gravity;
    }
    else {
        clearInterval(fire_Timer);
    }
    document.getElementById('bird').style.left = marginLeft_Cannonball + "px";
    document.getElementById('bird').style.top = marginTop_Cannonball + "px";
}