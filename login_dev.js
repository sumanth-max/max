var user = document.querySelector("#user");
var label1 = document.querySelector(".label-name1");
var label2 = document.querySelector(".label-name2");
var pwd = document.querySelector("#pwd");
var eye1 = document.querySelector(".eye1");
var eye2 = document.querySelector(".eye2");
var glow = document.querySelector(".glow");
var link = document.querySelector("#here");
var pop1 = document.querySelector(".pop1");

user.addEventListener("focus", function(){
    label1.style.transform = "translateY(-30px)";
    label1.style.opacity = "0.8";
    //label1.style.top = "10px";
});

user.addEventListener("blur", function(){
    if (user.value === null || user.value === ""){
        label1.style.transform = "translateY(0px)";
        label1.style.opacity = "1";
    }
});

pwd.addEventListener("focus", function(){
    label2.style.transform = "translateY(-30px)";
    label2.style.opacity = "0.8";
    //label1.style.top = "10px";
});

pwd.addEventListener("blur", function(){
    if (pwd.value === null || pwd.value === ""){
        label2.style.transform = "translateY(0px)";
        label2.style.opacity = "1";
    }
});

glow.addEventListener("mousemove", function(){
    eye1.style.display = "block";
    eye2.style.display = "block";
});
glow.addEventListener("mouseout", function(){
    eye1.style.display = "none";
    eye2.style.display = "none";
});

/*pop1.addEventListener("mouseout",function(){
    pop1.style.bottom = "900px";
    pop1.style.top = "-10px";
});

link.addEventListener("mouseover", function(){
    pop1.style.top = "24px";
    pop1.style.bottom = "400px";
});

document.addEventListener("click",function(){
    pop1.style.bottom = "900px";
    pop1.style.top = "-10px";
});
*/

