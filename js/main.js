function writeCode(prefix,code,fn){
  let domCode = document.querySelector("#code");
  domCode.innerHTML = prefix || "";
  let n = 0;
  let id = setInterval(()=>{
    n+=1;
    domCode.innerHTML = 
    Prism.highlight(prefix + code.substring(0,n), Prism.languages.css);
    styleTag.innerHTML = prefix + code.substring(0,n);
    domCode.scrollTop = domCode.scrollHeight;
    if(n >= code.length){
      window.clearInterval(id);
      fn.call();
    }
  },10);
}

function whiteMarkdown(markdown,fn){
  let dompaper = document.querySelector('#paper >.content');
  let n = 0;
  let id = setInterval(()=>{
    n+=1;
    dompaper.innerHTML = markdown.substring(0,n);
    dompaper.scrollTop = dompaper.scrollHeight;
    if(n >= markdown.length){
      window.clearInterval(id);
      fn.call();
    }
  },10);
}
var result =`
/*
面试官你好，我是xxx
我将以动画的形式介绍我自己
只用文字介绍太单调的了
我就用代码介绍吧
首先准备一些样式
*/

*{
transition:all 1s;
}

html{
background:rgb(222,222,222);
font-size:16px;
}

#code{
border:1px solid purple;
padding:16px;
}

/*我需要一些代码高亮*/
.token.selector{
  color:#690;
}
.token.property{
  color:#905;
}
.token.function{
  color:#DD4A68;
}


/*加点3D效果*/
#code{
  transform:rotate(360deg);
}


/*正事介绍我自己
  我需要一张白纸
*/

#code{
  position:fixed;
  left:0;
  width:50%;
  height:100%;

}

#paper{
  position:fixed;
  right:0;
  width:50%;
  height:100%;
  background:	rgb(246,203,144);
  display:fixed;
  justify-content:center;
  align-items:center;
}

#paper >.content{
  height:100%;
  width:100%;
  background:rgba(255,100,97,.5);

}
`;

var result2 = `
`
var md = `
# 自我介绍

我叫陈硕
毕业于运城职业技术学院
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉javascript  css html canvas jquery

# 项目介绍
1. 自定义轮播图
2. 简历
3.canvas画板

# 联系方式
QQ xxxxxxx
Email xxxx
手机号 xxxx
`;

writeCode('',result,() => {
  createPaper( () => {
    writeCode(result,result2,()=>{
      whiteMarkdown(md);
    })
  });
});

function createPaper(fn){
  var paper = document.createElement('div');
  paper.id = 'paper';
  var content = document.createElement("pre");
  content.className = "content";
  paper.appendChild(content);
  document.body.appendChild(paper);
  fn.call()
}

function fn3(preResult){
  var n = 0;
  var id = setInterval(() =>{
    n +=1;
    code.innerHTML = preResult + result.substring(0,n);
    code.innerHTML = 
    Prism.highlight(code.innerHTML, Prism.languages.css);

    styleTag.innerHTML = preResult + result.substring(0,n);
    if(n >= result.length){
      window.clearInterval(id);
    }

  },10);
}