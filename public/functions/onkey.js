//快捷键函数
function keyDown(e) {
    ie = (document.all) ? true : false;
    if (ie) {
        //IE浏览器
        if (event.keyCode == 120) {//
            event.keyCode = 0;
            event.returnValue = false;
            console.log("按F9");
            var box = document.getElementById("toolbar");
            if (box.style.display != "block") {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        }
    } else {
        //非IE浏览器
        if (e.which == 120) {//F2
            e.which = 0;
            e.returnValue = false;
            //注意：此句不能少，否则火狐下个别热键会被重复调用；
            //如F5键：会先调用自定义函数，再刷新页面，其他同理
            console.log("按F9");
            var box = document.getElementById("toolbar");
            if (box.style.display != "block") {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        }
        // return false;
    }

}

document.onkeydown = keyDown;