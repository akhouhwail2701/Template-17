document.getElementById("befor").onclick = function () {
    document.getElementById("banner1").style.cssText = `transform: translateX(0%);`;
    document.getElementById("banner2").style.cssText = `transform: translateX(100%);`;

}
document.getElementById("after").onclick = function () {
    document.getElementById("banner1").style.cssText = `transform: translateX(-100%);`;
    document.getElementById("banner2").style.cssText = `transform: translateX(0%);`;
}

document.getElementById("btn-menu").onclick = function () {
    if (document.getElementById("menu").style.display == "none") {
        document.getElementById("menu").style.display = "block";
    }
    else {
        document.getElementById("menu").style.display = "none";
    }

}

document.getElementById("btn1").onclick = function () {
    if (document.getElementById("btn1").innerHTML == "-") {
        document.getElementById("btn1").innerHTML = "+";
        document.getElementById("info1").style.height = "15%";
        document.getElementById("about").style.height = "600px";
        document.getElementById("h2-1").style.color = "#000";
    } else if (document.getElementById("btn1").innerHTML == "+") {
        document.getElementById("btn1").innerHTML = "-";
        document.getElementById("info1").style.height = "40%";
        document.getElementById("about").style.height = "800px";
        document.getElementById("h2-1").style.color = "#955cfe";
    }
}
document.getElementById("btn2").onclick = function () {
    if (document.getElementById("btn2").innerHTML == "-") {
        document.getElementById("btn2").innerHTML = "+";
        document.getElementById("info2").style.height = "15%";
        document.getElementById("about").style.height = "600px";
        document.getElementById("h2-2").style.color = "#000";
    } else if (document.getElementById("btn2").innerHTML == "+") {
        document.getElementById("btn2").innerHTML = "-";
        document.getElementById("info2").style.height = "40%";
        document.getElementById("about").style.height = "800px";
        document.getElementById("h2-2").style.color = "#955cfe";
    }
}
document.getElementById("btn3").onclick = function () {
    if (document.getElementById("btn3").innerHTML == "-") {
        document.getElementById("btn3").innerHTML = "+";
        document.getElementById("info3").style.height = "15%";
        document.getElementById("about").style.height = "600px";
        document.getElementById("h2-3").style.color = "#000";
    } else if (document.getElementById("btn3").innerHTML == "+") {
        document.getElementById("btn3").innerHTML = "-";
        document.getElementById("info3").style.height = "40%";
        document.getElementById("about").style.height = "800px";
        document.getElementById("h2-3").style.color = "#955cfe";
    }
}
document.getElementById("btn4").onclick = function () {
    if (document.getElementById("btn4").innerHTML == "-") {
        document.getElementById("btn4").innerHTML = "+";
        document.getElementById("info4").style.height = "15%";
        document.getElementById("about").style.height = "600px";
        document.getElementById("h2-4").style.color = "#000";
    } else if (document.getElementById("btn4").innerHTML == "+") {
        document.getElementById("btn4").innerHTML = "-";
        document.getElementById("info4").style.height = "40%";
        document.getElementById("about").style.height = "800px";
        document.getElementById("h2-4").style.color = "#955cfe";
    }
}

document.getElementById("aft").onclick = function () {
    document.getElementById("person1").style.cssText = "transform: translateX(-100%)";
    document.getElementById("person2").style.cssText = "transform: translateX(0%)";
}
document.getElementById("bef").onclick = function () {
    document.getElementById("person1").style.cssText = "transform: translateX(0%)";
    document.getElementById("person2").style.cssText = "transform: translateX(100%)";
}
