var navBar =document.getElementById("navbar-link");
function showMenu(){
    navBar.style.right = "0";    
    }
function hideMenu(){
    navBar.style.right = "-210px";
    }
function welcome(){
    alert("Do you wish to continue?")
}
// for gallery
window.onload=function(){
    var oDiv=document.getElementById('banner')
    var oUl=oDiv.getElementsByTagName('ul')[0]
    var oLi=oUl.getElementsByTagName('li')
    var timer=null
    //3.Splicing one more content of ul 
    // oUl.innerHTML=oUl.innerHTML+oUl.innerHTML
    oUl.innerHTML+=oUl.innerHTML
    //1.Calculate the width of ul
    oUl.style.width=oLi[0].offsetWidth*oLi.length+'px'

    //  function moving(){
    //  if(oUl.offsetLeft<-oUl.offsetWidth/2){
    //  	oUl.style.left='0'
    //  }
    // 	oUl.style.left=oUl.offsetLeft-1+'px'
    // }
     
    timer=setInterval(function(){
    // 	// 4.left=0
        if(oUl.offsetLeft<-oUl.offsetWidth/2){
            oUl.style.left='0'
        }
        // 2.rolling
        oUl.style.left=oUl.offsetLeft-5+'px'
    },30)
    

    oDiv.onmouseover=function(){
        clearInterval(timer)
    }
    oDiv.onmouseout=function(){
        timer=setInterval(function(){
        if(oUl.offsetLeft<-oUl.offsetWidth/2){
            oUl.style.left='0'
        }
        oUl.style.left=oUl.offsetLeft-5+'px'
    },30)
    }

}


// Moving an object

var oDiv1 = document.getElementById('textanimation')
var oDiv2 = document.getElementById('bluebox')
var oDiv3 = document.getElementById('yellowbox')

oDiv1.onmouseover=function(){
    moving(this,'fontSize',50)
}
oDiv1.onmouseout=function(){
    moving(this,'fontSize',12)
}

oDiv2.onmouseover = function(){
    moving(this,'width',300)
}
oDiv2.onmouseout = function(){
    moving(this,'width',100)
}

oDiv3.onmouseover = function(){
    moving(this,'height',250)
}
oDiv3.onmouseout = function(){
    moving(this,'height',100)
}

function getStyleValue(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr]
    }else{
        return getComputedStyle(obj,false)[attr]
    }
}

function moving(obj,attr,target,callbackfun){
    clearInterval(obj.timer)
    obj.timer = setInterval(function(){
        var curvalue = parseInt(getStyleValue(obj,attr))
        var speed=(target-curvalue)/8

        speed= speed>0?Math.ceil(speed):Math.floor(speed)
        if(curvalue == target){
            clearInterval(obj.timer)
            if(callbackfun){
                callbackfun()
            }
        }else{
            obj.style[attr]=curvalue+speed+'px'
        }
    },30)
}