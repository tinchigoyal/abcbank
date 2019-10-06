function getRandomColor() {
    var letters = '0123456789ABC';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 13)];
    }
    return color;
}

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

function setRandomColor(ele) {
    var randomColor = getRandomColor()
    console.log(randomColor, hexToRgb(randomColor.replace('#', '')))
    ele.style.backgroundColor = 'rgb(' + hexToRgb(randomColor.replace('#', '')) + ', 0.35 )';
    ele.querySelector('.project-dp').style.backgroundColor = randomColor;
}


document.addEventListener('DOMContentLoaded', function () {
    var ele = document.getElementsByClassName('project-rich-info');
    for (var i = 0; i < ele.length; i++) {
        setRandomColor(ele[i])
    }

}, false);


function expandme() {
    document.getElementsByTagName("body")[0].classList.add("show-alert");
    setTimeout(function () {
        document.getElementsByTagName("body")[0].classList.remove("show-alert");
    }, 3000)
    document.getElementsByClassName('side-nav-bar')[0].style.width = 0;
    document.getElementsByClassName('side-nav-bar')[0].style.display = 'none';
    document.getElementsByClassName('main-content-box')[0].style.marginLeft = '80px';
}


document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        document.getElementsByClassName('side-nav-bar')[0].style.width = '138px';
        document.getElementsByClassName('side-nav-bar')[0].style.display = 'block';
        document.getElementsByClassName('main-content-box')[0].style.marginLeft = '251px';
    }
};