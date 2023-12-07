var timeBegin = Date.now();
var time;

var canvas=document.getElementById('canvas1');
var context=canvas.getContext('2d');

var divWidth=canvas.offsetWidth;
var divHeight=canvas.offsetHeight;

var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('p3');
var p4=document.getElementById('p4');
var p5=document.getElementById('p5');
var p6=document.getElementById('p6');
var p7=document.getElementById('p7');
var p8=document.getElementById('p8');
var p9=document.getElementById('p9');
var p10=document.getElementById('p10');
var p11=document.getElementById('p11');
var p12=document.getElementById('p12');
var p13=document.getElementById('p13');
var p14=document.getElementById('p14');
var p15=document.getElementById('p15');

var progressBar = document.getElementById('timeControl');
// 添加事件监听器以允许手动控制进度条
progressBar.addEventListener('input', function () {
  currentTime = parseInt(progressBar.value);
  timeBegin=Date.now()-currentTime;
  time=currentTime;
});

var cx1=0.16*divWidth,cy1=0.25*divHeight,o1=1;
var x1=cx1,y1=cy1,t1=2000;
var cx2=0.32*divWidth,cy2=0.25*divHeight,o2=1;
var x2=cx2,y2=cy2,t2=200;
var cx3=0.48*divWidth,cy3=0.25*divHeight,o3=1;
var x3=cx3,y3=cy3,t3=400;
var cx4=0.64*divWidth,cy4=0.25*divHeight,o4=1;
var x4=cx4,y4=cy4,t4=600;
var cx5=0.80*divWidth,cy5=0.25*divHeight,o5=1;
var x5=cx5,y5=cy5,t5=800;
var cx6=0.16*divWidth,cy6=0.50*divHeight,o6=1;
var x6=cx6,y6=cy6,t6=1200;
var cx7=0.32*divWidth,cy7=0.50*divHeight,o7=1;
var x7=cx7,y7=cy7,t7=1400;
var cx8=0.48*divWidth,cy8=0.50*divHeight,o8=1;
var x8=cx8,y8=cy8,t8=1600;
var cx9=0.64*divWidth,cy9=0.50*divHeight,o9=1;
var x9=cx9,y9=cy9,t9=1800;
var cx10=0.80*divWidth,cy10=0.50*divHeight,o10=1;
var x10=cx10,y10=cy10,t10=2000;
var cx11=0.16*divWidth,cy11=0.75*divHeight,o11=1;
var x11=cx11,y11=cy11,t11=3000;
var cx12=0.32*divWidth,cy12=0.75*divHeight,o12=1;
var x12=cx12,y12=cy12,t12=3500;
var cx13=0.48*divWidth,cy13=0.75*divHeight,o13=1;
var x13=cx13,y13=cy13,t13=4000;
var cx14=0.64*divWidth,cy14=0.75*divHeight,o14=1;
var x14=cx14,y14=cy14,t14=4500;
var cx15=0.80*divWidth,cy15=0.75*divHeight,o15=1;
var x15=cx15,y15=cy15,t15=4600;
var cx16=0.16*divWidth,cy16=1.00*divHeight,o16=1;
var x16=cx16,y16=cy16,t16=5000;

var r1=0.08*divWidth,a1=0;
var r2=0.08*divWidth,a2=0;
var r3=0.08*divWidth,a3=0;
var r4=0.08*divWidth,a4=0;
var r5=0.08*divWidth,a5=0;
var r6=0.08*divWidth,a6=0;
var r7=0.08*divWidth,a7=0;
var r8=0.08*divWidth,a8=0;
var r9=0.08*divWidth,a9=0;
var r10=0.08*divWidth,a10=0;
var r11=0.08*divWidth,a11=0;
var r12=0.08*divWidth,a12=0;
var r13=0.08*divWidth,a13=0;
var r14=0.08*divWidth,a14=0;
var r15=0.08*divWidth,a15=0;


var timer=setInterval(function () {
  time=Date.now()-timeBegin;
  if(time>15000) {
    currentTime=0;
    timeBegin=Date.now();
    time=0;
  }
  progressBar.value=time;
  console.log(time);

  x1=cx1+r1*a1*Math.cos(a1);
  y1=cy1+r1*a1*Math.sin(a1);
  x2=cx2+r2*a2*Math.cos(a2);
  y2=cy2+r2*a2*Math.sin(a2);
  x3=cx3+r3*a3*Math.cos(a3);
  y3=cy3+r3*a3*Math.sin(a3);
  x4=cx4+r4*a4*Math.cos(a4);
  y4=cy4+r4*a4*Math.sin(a4);
  x5=cx5+r5*a5*Math.cos(a5);
  y5=cy5+r5*a5*Math.sin(a5);
  x6=cx6+r6*a6*Math.cos(a6);
  y6=cy6+r6*a6*Math.sin(a6);
  x7=cx7+r7*a7*Math.cos(a7);
  y7=cy7+r7*a7*Math.sin(a7);
  x8=cx8+r8*a8*Math.cos(a8);
  y8=cy8+r8*a8*Math.sin(a8);
  x9=cx9+r9*a9*Math.cos(a9);
  y9=cy9+r9*a9*Math.sin(a9);
  x10=cx10+r10*a10*Math.cos(a10);
  y10=cy10+r10*a10*Math.sin(a10);

  set();

  if(time>t1) {p1.style.backgroundColor="green";a1=0.0005*time;o1=1-time*0.00008;}
  else {p1.style.backgroundColor="green";a1=0;o1=1;}

  if(time>t2) {p2.style.backgroundColor="green";a2=0.0005*time;o2=1-time*0.00008;}
  else {p2.style.backgroundColor="green";a2=0;o2=1;}

  if(time>t3) {p3.style.backgroundColor="green";a3=0.0005*time;o3=1-time*0.00008;}
  else {p3.style.backgroundColor="green";a3=0;o3=1;}

  if(time>t4) {p4.style.backgroundColor="green";a4=0.0005*time;o4=1-time*0.00008;}
  else {p4.style.backgroundColor="green";a4=0;o4=1;}

  if(time>t5) {p5.style.backgroundColor="green";a5=0.0005*time;o5=1-time*0.00008;}
  else {p5.style.backgroundColor="green";a5=0;o5=1;}

  if(time>t6) {p6.style.backgroundColor="green";a6=0.0005*time;o6=1-time*0.00008;}
  else {p6.style.backgroundColor="green";a6=0;o6=1;}

  if(time>t7) {p7.style.backgroundColor="green";a7=0.0005*time;o7=1-time*0.00008;}
  else {p7.style.backgroundColor="green";a7=0;o7=1;}

  if(time>t8) {p8.style.backgroundColor="green";a8=0.0005*time;o8=1-time*0.00008;}
  else {p8.style.backgroundColor="green";a8=0;o8=1;}

  if(time>t9) {p9.style.backgroundColor="green";a9=0.0005*time;o9=1-time*0.00008;}
  else {p9.style.backgroundColor="green";a9=0;o9=1;}

  if(time>t10) {p10.style.backgroundColor="green";a10=0.0005*time;o10=1-time*0.00008;}
  else {p10.style.backgroundColor="green";a10=0;o10=1;}


  if(time>t11) {
    p11.style.backgroundColor="red"
    if(time-t11<7000) {
      if(time%1000>=500) o11=1;
      else o11=0;
    }
    else p11.style.opacity=0;
  }
  else {
    p11.style.backgroundColor="palevioletred";
    p11.style.opacity=1;
  }

  if(time>t12) {
    p12.style.backgroundColor="red"
    if(time-t12<7000) {
      if(time%1000>=500) o12=1;
      else o12=0;
    }
    else p12.style.opacity=0;
  }
  else {
    p12.style.backgroundColor="palevioletred";
    p12.style.opacity=1;
  }


  if(time>t13) {
    p13.style.backgroundColor="red"
    if(time-t13<7000) {
      if(time%1000>=500) o13=1;
      else o13=0;
    }
    else p13.style.opacity=0;
  }
  else {
    p13.style.backgroundColor="palevioletred";
    p13.style.opacity=1;
  }


  if(time>t14) {
    p14.style.backgroundColor="red"
    if(time-t14<7000) {
      if(time%1000>=500) o14=1;
      else o14=0;
    }
    else p14.style.opacity=0;
  }
  else {
    p14.style.backgroundColor="palevioletred";
    p14.style.opacity=1;
  }


  if(time>t15) {
    p15.style.backgroundColor="red"
    if(time-t15<7000) {
      if(time%1000>=500) o15=1;
      else o15=0;
    }
    else p15.style.opacity=0;
  }
  else {
    p15.style.backgroundColor="palevioletred";
    p15.style.opacity=1;
  }

  function setStyle(dot,x,y,o) {
    dot.style.left=x+'px';
    dot.style.top=y+'px';
    dot.style.opacity=o;
  }

  function set() {
    setStyle(p1,x1,y1,o1);
    setStyle(p2,x2,y2,o2);
    setStyle(p3,x3,y3,o3);
    setStyle(p4,x4,y4,o4);
    setStyle(p5,x5,y5,o5);
    setStyle(p6,x6,y6,o6);
    setStyle(p7,x7,y7,o7);
    setStyle(p8,x8,y8,o8);
    setStyle(p9,x9,y9,o9);
    setStyle(p10,x10,y10,o10);
    setStyle(p11,x11,y11,o11);
    setStyle(p12,x12,y12,o12);
    setStyle(p13,x13,y13,o13);
    setStyle(p14,x14,y14,o14);
    setStyle(p15,x15,y15,o15);
  }
}, 10);