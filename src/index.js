let html=document.querySelector('#demo');
let style=document.querySelector('#style');
let string=`/*你好，我来演示一下我的作品
接下来我要加样式了*/
#div1{
    width:200px;
    height:200px;
    border:1px black solid;
}
/*接下来我要把div变成一个八卦图
*注意看好了
*首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0,0,3px rgba(0,0,0,0.5);
}
/* 八卦是阴阳形成的
* 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    border:none;
}
/*加两个风火轮*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border-radius:50%;
}
`;
let string2='';  //主要作用是用来缓存的；

let n=0;

let step=()=>{
    setTimeout(() => {
    if(string[n]==='\n'){   //对每一个字符都进行检查，如果是换行符，就先处理一下；
        string2+='<br>';
    }else if(string[n]===' '){   //空格替换成&nbsp;
        string2+='&nbsp'
    }else{
        string2+=string[n];  //不是字符就直接加上该字符；
    }

    html.innerHTML=string2;   //string使用点方法的时候会调用构造函数；
    style.innerHTML=string.substring(0,n);   //substring()对空格不计算在内;
    window.scrollTo(0,99999);
    html.scrollTo(0,99999);
    if(n<string.length-1){
    n+=1;
    step();
   }
    }, 0);
};

step()