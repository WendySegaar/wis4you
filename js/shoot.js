var e_Cannonball;
var style_Cannonball;
var marginLeft_Cannonball;
var marginTop_Cannonball;
var w_Frame;
var h_Frame;
var fire_Timer;
var gravity = -2;

function shoot(x) {
    speed = x;
    w_Frame = document.getElementById('shoot_the_pig_uitkomst').offsetWidth;
    h_Frame = document.getElementById('shoot_the_pig_uitkomst').offsetHeight;
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

    if (marginLeft_Cannonball < w_Frame - 56 && marginTop_Cannonball < h_Frame - 50) {
        gravity = gravity + 0.01;
        marginLeft_Cannonball = parseInt(marginLeft_Cannonball) + speed;
        marginTop_Cannonball = parseInt(marginTop_Cannonball) + gravity;
    }
    else {
        clearInterval(fire_Timer);
    }
    document.getElementById('bird').style.left = marginLeft_Cannonball + "px";
    document.getElementById('bird').style.top = marginTop_Cannonball + "px";
}