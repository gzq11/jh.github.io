// 获取exico元素组，组里右4个元素
var esico = document.getElementById('icolist').getElementsByTagName('li');
// 获取圆点列表元素
var eicolist = document.querySelector('#icolist');
// 获取图片列表元素
var eimglist = document.querySelector('#imglist');

// 获取前进按钮
var eprev = document.querySelector('.prev');
// 获取后退按钮
var enext = document.querySelector('.next');
// 移动变量
var left = 0;
// 计时器
var timer;

esico[2].style.backgroundColor = 'red';

run();

//函数run通过样式marginleft进行图片的移动
function run(){
// 重置偏移量
if (left <= -3920) {

left = 0;

}
// 获取当前图片的序号
var m = Math.floor(-left/980) ;

imglist.style.marginLeft = left + 'px';
// 划过一张图片停1200毫秒
var n = (left % 980 == 0) ? n = 2000 : n = 20;

left -= 10;
icochange(m);
// 调用icochang函数进行小圆点的变化
icochange(m);
// 每n毫秒运行一次run函数
timer = setTimeout(run,n);

}
// 圆点跟随变化函数
function icochange(m){
// for循环清除li背景色
for (let index = 0; index < esico.length; index++) {

esico[index].style.backgroundColor = '';

}
// 将图片所在小圆点变为红色
if (m < esico.length) {

esico[m].style.backgroundColor = 'red';

}

}
// 图片定位函数
function imgchange(n){

let lt = - (n  * 980)

imglist.style.marginLeft = lt + 'px';
// 改变图片偏移量
left = lt;

}
// 前进按钮点击效果
eprev.onclick = function(){

let prevgo = Math.floor(-left/980)-1;

if (prevgo == -1) {

prevgo =3;

}

imgchange(prevgo);

icochange(prevgo);

}
// 后退按钮点击效果
enext.onclick = function(){

let nextgo = Math.floor(-left/980)+1;

if (nextgo == 4) {

nextgo =0;

}

imgchange(nextgo);

icochange(nextgo);

}
// 圆点点击函数
eicolist.onclick = function(){
// 获取目标元素
var tg = event.target;
// 获取目标序号
let ico = tg.innerHTML - 1;
// 切换图片，切换小圆点
imgchange(ico);

icochange(ico);

}
// 鼠标在图片列表元素上时轮播停止
eimglist.onmouseover = function(){

clearTimeout(timer);

}
// 移开时轮播开始
eimglist.onmouseout = function(){

run();

}
//
// 
// 
// 
//  
 // 思路: 获取所有要用的 => 然后通过点击图片显示弹窗 => 赋值到弹窗里面 => 图片赋值 => 文本赋值
    // 获取点击图片
    var img = document.getElementById('myImg');
    // 获取弹窗
    var modal = document.getElementById('myModal');
    // 弹窗图片
    var contImg = document.getElementById('img01');
    // 文本内容
    var caption = document.getElementById('caption');
    // 上面用图片alt图片也可以用图片赋值给弹窗内容
    var txtSpan = document.getElementById('txtSpan');

    img.onclick = function () {
        // console.log('111');
        modal.style.display = 'block';
        contImg.src = img.src
        // console.log(contImg.src,'srccc');
        caption.innerHTML = img.alt
        // 下面也可以直接获取页面内容赋值给弹窗内容
        // caption.innerHTML = txtSpan.innerHTML
    }
    // 点击x按钮关闭弹窗
    var closeBox = document.getElementsByClassName('close')[0];
    closeBox.onclick = function () {
        modal.style.display = 'none';
    }