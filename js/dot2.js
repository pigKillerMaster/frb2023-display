var timeBegin=Date.now();
var time;

var canvas=document.getElementById('canvas2');
var context=canvas.getContext('2d');

var divWidth=canvas.offsetWidth;
var divHeight=canvas.offsetHeight;

var p21=document.getElementById('p21');
var p22=document.getElementById('p22');
var p23=document.getElementById('p23');
var p24=document.getElementById('p24');
var p25=document.getElementById('p25');
var p26=document.getElementById('p26');
var p27=document.getElementById('p27');
var p28=document.getElementById('p28');
var p29=document.getElementById('p29');
var p30=document.getElementById('p30');
var p31=document.getElementById('p31');
var p32=document.getElementById('p32');
var p33=document.getElementById('p33');
var p34=document.getElementById('p34');
var p35=document.getElementById('p35');

var progressBar = document.getElementById('timeControl');
// 添加事件监听器以允许手动控制进度条
progressBar.addEventListener('input', function () {
  currentTime = parseInt(progressBar.value);
  timeBegin=Date.now()-currentTime;
  time=currentTime;
});

var cx21=0.16*divWidth,cy21=0.25*divHeight,o21=1;
var x21=cx21,y21=cy21,t21=2000;
var cx22=0.32*divWidth,cy22=0.25*divHeight,o22=1;
var x22=cx22,y22=cy22,t22=200;
var cx23=0.48*divWidth,cy23=0.25*divHeight,o23=1;
var x23=cx3,y23=cy23,t23=400;
var cx24=0.64*divWidth,cy24=0.25*divHeight,o24=1;
var x24=cx24,y24=cy24,t24=600;
var cx25=0.80*divWidth,cy25=0.25*divHeight,o25=1;
var x25=cx25,y25=cy25,t25=800;
var cx26=0.16*divWidth,cy26=0.50*divHeight,o26=1;
var x26=cx26,y26=cy26,t26=3200;
var cx27=0.32*divWidth,cy27=0.50*divHeight,o27=1;
var x27=cx27,y27=cy27,t27=3400;
var cx28=0.48*divWidth,cy28=0.50*divHeight,o28=1;
var x28=cx28,y28=cy28,t28=1600;
var cx29=0.64*divWidth,cy29=0.50*divHeight,o29=1;
var x29=cx29,y29=cy29,t29=1800;
var cx30=0.80*divWidth,cy30=0.50*divHeight,o30=1;
var x30=cx30,y30=cy30,t30=2000;
var cx31=0.16*divWidth,cy31=0.75*divHeight,o31=1;
var x31=cx31,y31=cy31,t31=3000;
var cx32=0.32*divWidth,cy32=0.75*divHeight,o32=1;
var x32=cx32,y32=cy32,t32=3500;
var cx33=0.48*divWidth,cy33=0.75*divHeight,o33=1;
var x33=cx33,y33=cy33,t33=4000;
var cx34=0.64*divWidth,cy34=0.75*divHeight,o34=1;
var x34=cx34,y34=cy34,t34=4500;
var cx35=0.80*divWidth,cy35=0.75*divHeight,o35=1;
var x35=cx35,y35=cy35,t35=4600;
var cx16=0.16*divWidth,cy16=1.00*divHeight,o16=1;
var x16=cx16,y16=cy16,t16=5000;

var r21=0.08*divWidth,a21=0;
var r22=0.08*divWidth,a22=0;
var r23=0.08*divWidth,a23=0;
var r24=0.08*divWidth,a24=0;
var r25=0.08*divWidth,a25=0;
var r26=0.08*divWidth,a26=0;
var r27=0.08*divWidth,a27=0;
var r28=0.08*divWidth,a28=0;
var r29=0.08*divWidth,a29=0;
var r30=0.08*divWidth,a30=0;
var r31=0.08*divWidth,a31=0;
var r32=0.08*divWidth,a32=0;
var r33=0.08*divWidth,a33=0;
var r34=0.08*divWidth,a34=0;
var r35=0.08*divWidth,a35=0;

var timer=setInterval(function() {
  if(time>15000) {
    currentTime=0;
    timeBegin=Date.now();
  }
  time=Date.now()-timeBegin;

  x21=cx21+r21*a21*Math.cos(a21);
  y21=cy21+r21*a21*Math.sin(a21);
  x22=cx22+r22*a22*Math.cos(a22);
  y22=cy22+r22*a22*Math.sin(a22);
  x23=cx23+r23*a23*Math.cos(a23);
  y23=cy23+r23*a23*Math.sin(a23);
  x24=cx24+r24*a24*Math.cos(a24);
  y24=cy24+r24*a24*Math.sin(a24);
  x25=cx25+r25*a25*Math.cos(a25);
  y25=cy25+r25*a25*Math.sin(a25);
  x26=cx26+r26*a26*Math.cos(a26);
  y26=cy26+r26*a26*Math.sin(a26);
  x27=cx27+r27*a27*Math.cos(a27);
  y27=cy27+r27*a27*Math.sin(a27);
  x28=cx28+r28*a28*Math.cos(a28);
  y28=cy28+r28*a28*Math.sin(a28);
  x29=cx29+r29*a29*Math.cos(a29);
  y29=cy29+r29*a29*Math.sin(a29);
  x30=cx30+r30*a30*Math.cos(a30);
  y30=cy30+r30*a30*Math.sin(a30);

  x31=cx31+r31*a31*Math.cos(a31);
  y31=cy31+r31*a31*Math.sin(a31);
  x32=cx32+r32*a32*Math.cos(a32);
  y32=cy31+r32*a32*Math.sin(a32);

  set();

  if(time>t21) {p21.style.backgroundColor="green";a21=0.0005*time;o21=1-time*0.000088;}
  else {p21.style.backgroundColor="green";a21=0;o21=1;}

  if(time>t22) {p22.style.backgroundColor="green";a22=0.0005*time;o22=1-time*0.000088;}
  else {p22.style.backgroundColor="green";a22=0;o22=1;}

  if(time>t23) {p23.style.backgroundColor="green";a23=0.0005*time;o23=1-time*0.000088;}
  else {p23.style.backgroundColor="green";a23=0;o23=1;}

  if(time>t24) {p24.style.backgroundColor="green";a24=0.0005*time;o24=1-time*0.000088;}
  else {p24.style.backgroundColor="green";a24=0;o24=1;}

  if(time>t25) {p25.style.backgroundColor="green";a25=0.0005*time;o25=1-time*0.000088;}
  else {p25.style.backgroundColor="green";a25=0;o25=1;}

  if(time>t26) {p26.style.backgroundColor="green";a26=0.0005*time;o26=1-time*0.000088;}
  else {p26.style.backgroundColor="green";a26=0;o26=1;}

  if(time>t27) {p27.style.backgroundColor="green";a27=0.0005*time;o27=1-time*0.000088;}
  else {p27.style.backgroundColor="green";a27=0;o27=1;}

  if(time>t28) {p28.style.backgroundColor="green";a28=0.0005*time;o28=1-time*0.000088;}
  else {p28.style.backgroundColor="green";a28=0;o28=1;}

  if(time>t29) {p29.style.backgroundColor="green";a29=0.0005*time;o29=1-time*0.000088;}
  else {p29.style.backgroundColor="green";a29=0;o29=1;}
  
  if(time>t30) {p30.style.backgroundColor="green";a30=0.0005*time;o30=1-time*0.000088;}
  else {p30.style.backgroundColor="green";a30=0;o30=1;}

  if(time>t31) {p31.style.backgroundColor="yellow";a31=0.0005*time;o31=1-time*0.000088;}
  else {p31.style.backgroundColor="green";a31=0;o31=1;}

  if(time>t32) {p32.style.backgroundColor="yellow";a32=0.0005*time;o32=1-time*0.000088;}
  else {p32.style.backgroundColor="green";a32=0;o32=1;}

  if(time>t33) {
    p33.style.backgroundColor="red"
    if(time-t33<7000) {
      if(time%1000>=500) o33=1;
      else o33=0;
    }
    else p33.style.opacity=0;
  }
  else {
    p33.style.backgroundColor="palevioletred";
    p33.style.opacity=1;
  }

  if(time>t34) {
    p34.style.backgroundColor="red"
    if(time-t34<7000) {
      if(time%1000>=500) o34=1;
      else o34=0;
    }
    else p34.style.opacity=0;
  }
  else {
    p34.style.backgroundColor="palevioletred";
    p34.style.opacity=1;
  }

  if(time>t35) {
    p35.style.backgroundColor="red"
    if(time-t35<7000) {
      if(time%1000>=500) o35=1;
      else o35=0;
    }
    else p35.style.opacity=0;
  }
  else {
    p35.style.backgroundColor="palevioletred";
    p35.style.opacity=1;
  }

  function setStyle(dot,x,y,o) {
    dot.style.left=x+'px';
    dot.style.top=y+'px';
    dot.style.opacity=o;
  }

  function set() {
    setStyle(p21,x21,y21,o21);
    setStyle(p22,x22,y22,o22);
    setStyle(p23,x23,y23,o23);
    setStyle(p24,x24,y24,o24);
    setStyle(p25,x25,y25,o25);
    setStyle(p26,x26,y26,o26);
    setStyle(p27,x27,y27,o27);
    setStyle(p28,x28,y28,o28);
    setStyle(p29,x29,y29,o29);
    setStyle(p30,x30,y30,o30);
    setStyle(p31,x31,y31,o31);
    setStyle(p32,x32,y32,o32);
    setStyle(p33,x33,y33,o33);
    setStyle(p34,x34,y34,o34);
    setStyle(p35,x35,y35,o35);
  }
}, 10);