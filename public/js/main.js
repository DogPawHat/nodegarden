"use strict";!function(){function t(){e=window.innerWidth*d,o=window.innerHeight*d,r=e*o,i.length=Math.sqrt(r)/25|0,h.width=e,h.height=o;var t,a;for(t=0,a=i.length;a>t;t++)i[t]||(i[t]={x:Math.random()*e,y:Math.random()*o,vx:1*Math.random()-.5,vy:1*Math.random()-.5,m:2*Math.random()+1})}function a(t){var a={x:t.pageX,y:t.pageY},n=i[Math.floor(Math.random()*(i.length-1))];n.x=a.x,n.y=a.y,n.vx=0,n.vy=0,n.m=2*Math.random()+1}function n(){var t,a,m,r,d,h,v,x,s,M;for(requestAnimationFrame(n),y.clearRect(0,0,e,o),h=0,M=i.length-1;M>h;h++)for(v=h+1;M+1>v;v++){if(x=i[h],s=i[v],r=s.x-x.x,d=s.y-x.y,t=Math.sqrt(Math.pow(r,2)+Math.pow(d,2)),t<=x.m/2+s.m/2){if(x.m<=s.m){s.vx=s.m*s.vx/(x.m+s.m)+x.m*x.vx/(x.m+s.m),s.vy=s.m*s.vy/(x.m+s.m)+x.m*x.vy/(x.m+s.m),x.x=Math.random()*e,x.y=Math.random()*o,x.vx=1*Math.random()-.5,x.vy=1*Math.random()-.5,x.m=2*Math.random()+1;continue}if(s.m<=x.m){x.vx=x.m*x.vx/(x.m+s.m)+s.m*s.vx/(x.m+s.m),x.vy=x.m*x.vy/(x.m+s.m)+s.m*s.vy/(x.m+s.m),s.x=Math.random()*e,s.y=Math.random()*o,s.vx=1*Math.random()-.5,s.vy=1*Math.random()-.5,s.m=2*Math.random()+1;continue}}a={x:r/t,y:d/t},m=3*(x.m*s.m)/Math.pow(t,2);var c=100*m;.05>c||(y.beginPath(),l?y.strokeStyle="rgba(191,191,191,"+(1>c?c:1)+")":y.strokeStyle="rgba(63,63,63,"+(1>c?c:1)+")",y.moveTo(x.x,x.y),y.lineTo(s.x,s.y),y.stroke(),x.vx+=m*a.x/x.m,x.vy+=m*a.y/x.m,s.vx-=m*a.x/s.m,s.vy-=m*a.y/s.m)}for(l?y.fillStyle="#ffffff":y.fillStyle="#000000",h=0,M=i.length;M>h;h++)y.beginPath(),y.arc(i[h].x,i[h].y,i[h].m,0,2*Math.PI),y.fill(),i[h].x+=i[h].vx,i[h].y+=i[h].vy,(i[h].x>e+25||i[h].x<-25||i[h].y>o+25||i[h].y<-25)&&(i[h].x=Math.random()*e,i[h].y=Math.random()*o,i[h].vx=1*Math.random()-.5,i[h].vy=1*Math.random()-.5)}function m(t){t.stopPropagation(),l=!l,l?document.body.classList.add("nightmode"):document.body.classList.remove("nightmode")}var e,o,r,d=window.devicePixelRatio,i=new Array(Math.sqrt(r)/10|0),h=document.createElement("canvas"),y=h.getContext("2d"),v=document.getElementById("container"),x=document.getElementsByClassName("moon")[0],l=!1;1!==d&&(h.style.transform="scale("+1/d+")",h.style.transformOrigin="0 0"),h.id="nodegarden",v.appendChild(h),t(),n(),window.addEventListener("resize",t),v.addEventListener("click",a),x.addEventListener("click",m)}();