var looper;
var degreesCW = 0;
var degreesACW = 359;

function clockWise(element, speed)
{
    var obj = document.getElementById(element);
    
    obj.style.transform = "rotate("+degreesCW+"deg)";
    
    looper = setTimeout('clockWise(\''+element+'\','+speed+')', speed);
    degreesCW++;
    if(degreesCW > 359) {
        //antiClockWise(element);
        degreesCW = 1;
    }
}

function antiClockWise(element, speed)
{
    var obj = document.getElementById(element);
    
    obj.style.transform = "rotate("+degreesACW+"deg)";
    
    looper = setTimeout('antiClockWise(\''+element+'\','+speed+')', speed);
    degreesACW--;
    if(degreesACW < 1) {
        //clockWise(element);
        degreesACW = 359;
    }
}
