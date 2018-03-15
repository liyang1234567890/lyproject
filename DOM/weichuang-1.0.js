/**
 * Created by Queen on 2018/3/15.
 */
//根据元素的id查找元素对象
function id(sId){
    return document.getElementById(sId);
}

//根据元素标签查找元素对象
function tag(sTagName,context){
    context = context || document;
    return context.getElementsByTagName(sTagName);
}

function animate(elem,attr,callbaack){
    clearInterval(elem.timmer);
    elem.timer = setInterval(function(){
        var bStop = true;
        for(var prop in attr){//取出attr对象中的属性
            var currentStyle;

            if(prop == 'opacity'){//如果prop是opacity
                currentStyle = parseInt(css(elem,prop)*100);
            }else{
                currentStyle = parseInt(css(elem,prop));
            }

            var speed = (attr[prop] - currentStyle) / 8;
            speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);

            if(currentStyle != attr[prop]){
                bStop = false;
            }

            currentStyle += speed;
            if(prop == 'opacity'){
                elem.style.opacity = currentStyle / 100;
                elem.style.fileter = "alpha(opacity:"+currentStyle+
            }else{
                elem.style[prop] = currentStyle + 'px';
            }
        }

        if(bStop){
            clearInterval(elem.timer);
            if(callback) callback();
        }
    },30);
}

// function noteBook(a){
//     if(你想要笔记本){
//         console.log('那就听我的话');
//         if(黑色 = true){
//             console.log('我送给你');
//         }else if(白色 = true){
//             return 15 yuan;
//         }
//     }
//     console.log('滚犊子');
// }
