/**
 * Created by User on 17.05.2017.
 */
var greenCircle = document.getElementById("green");
var redCircle = document.getElementById("red")
var mouseX, mouseY;
function Test() {
    var self = this;
    var CordX, CordY,CentrRedY,CentrRedX,RadRed,MinRange,MaxRange;
    self.CoordinateCentr = function (greenCircleX, greenCircleY) {
        CordX = greenCircle.offsetWidth / 2 + greenCircleX;
        CordY = greenCircle.offsetHeight / 2 + greenCircleY;
        return CordY;
    };
    self.Movement = function (mouseX, mouseY) {
        if (Math.abs(CordX - mouseX) <= greenCircle.offsetWidth / 2 + 20 && Math.abs(CordY - mouseY) <= greenCircle.offsetHeight / 2 + 20) {
            var random = Math.round((Math.random() * (30 - 15) + 15).toFixed(2));
            if (CordX >= mouseX) {
                greenCircle.style.left = CordX + random + "px";
            }
            if (CordX <= mouseX) {
                greenCircle.style.left = CordX - random + "px";
            }
            if (CordY >= mouseY) {
                greenCircle.style.top = CordY + random + "px";
            }
            if (CordY <= mouseY) {
                greenCircle.style.top = CordY - random + "px";
            }
        }
    };
    self.CentrRedX = function () {
        CentrRedX = redCircle.getBoundingClientRect().left + redCircle.offsetWidth / 2;
        return CentrRedX;
    };
    self.CentrRedY = function () {
        CentrRedY = redCircle.getBoundingClientRect().top + redCircle.offsetHeight / 2;
        return CentrRedY;
    };
    self.RadRed = function () {
        RadRed = redCircle.offsetWidth / 2;
        return RadRed;
    };
    self.RangeCoordinatesMin = function () {
        MinRange = self.CentrRedY()-greenCircle.offsetWidth*2;
        return MinRange;
    };
    self.RangeCoordinatesMax = function () {
        MaxRange = self.CentrRedY()*2-greenCircle.offsetWidth*2;
        return MaxRange;
    };
    self.BorderCircle = function (greenCircleX, greenCircleY) {
        CordX = greenCircle.offsetWidth / 2 + greenCircleX;
        CordY = greenCircle.offsetHeight / 2 + greenCircleY;
        var Rast = Math.sqrt(Math.pow((Math.abs(CordX - self.CentrRedX())), 2) + Math.pow(Math.abs(CordY - self.CentrRedY()), 2));
        var BorderRed = self.RadRed() - Rast;
        if (BorderRed <= greenCircle.offsetWidth) {
            var random = Math.round((Math.random() * (self.RangeCoordinatesMax() - self.RangeCoordinatesMin()) + self.RangeCoordinatesMin()).toFixed(2));
            greenCircle.style.top = random + "px";
            greenCircle.style.left = random + "px";
        }
    }
}
var Test = new Test();
document.getElementById("red").onmousemove = function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    var greenCircleX = greenCircle.getBoundingClientRect().left;
    var greenCircleY = greenCircle.getBoundingClientRect().top;
    Test.CoordinateCentr(greenCircleX, greenCircleY);
    Test.Movement(mouseX, mouseY);
    Test.BorderCircle(greenCircleX, greenCircleY);
};