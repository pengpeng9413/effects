!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MoEffects=t():e.MoEffects=t()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=n(2),i=n(3),o=["PullInUp","PullInDown","PullInLeft","PullInRight","ZoomIn","ZoomInX","ZoomInY","SlideInUp","SlideInDown","SlideInLeft","SlideInRight","ScrollLeft","ScrollRight","PressInUp","PressInDown","PressInLeft","PressInRight","PressInX","PressInY","UncoverFromTop","UncoverFromBottom","ShutterX","ShutterY","ZoomFullScreen","Wheel","Tooth","FadeIn","FadeOut","StackInTop","StackInBottom","StackInLeft","StackInRight","TopLaser","BottomLaser","RightLaser","LeftLaser","ExpandDown","ExpandUp","ExpandDownAndUp","MergeDownAndUp"],c={type:"FadeIn",duration:0,width:500,height:500,isContan:!1,easing:r.default.linear},l=new Map;t.speedMap=new Map([[1,20],[2,30]]);var u=function(){function e(){}return e.animate=function(e,t,n){void 0===n&&(n=c);var a,u,s=function(e,t,n,a){void 0===t&&(t=e.offsetWidth),void 0===n&&(n=e.offsetHeight),a.width=t,a.height=n;var r=e.__effect_wrap__;return r||((r=e.__effect_wrap__=document.createElement("figure")).setAttribute("data-isContan",a.isContan?"1":"0"),e.appendChild(r)),r.style.cssText+="display:block;width:"+t+"px;height:"+n+"px;position:relative;margin:0;padding:0;overflow:hidden;",r.innerHTML="",r}(e,(n=Object.assign({},c,n)).width,n.height,n);s.__playing__&&s.__cancel__&&s.__cancel__(),(a=t,u=n.isContan,new Promise((function(e){if(l.has(a)&&(l.get(a).setAttribute("data-isContan",u?"1":"0"),e(l.get(a))),"string"==typeof a){var t=new Image;t.crossOrigin="",t.src=a,t.setAttribute("data-isContan",u?"1":"0"),t.onload=function(){l.set(a,this),e(this)},t.onerror=function(){return e(null)}}else if(a instanceof File){var n=new FileReader;n.readAsDataURL(a),n.onload=function(t){var n=new Image;n.src=t.target.result,l.set(a,n),e(n)}}else l.set(a,a),e(a)}))).then((function(e){return function(e,t,n){var a=n.type,c=n.width,l=n.height,u=n.duration,s=n.easing,f=n.speed;"Random"!==a&&o.includes(a)||(a=o[Math.floor(Math.random()*o.length)]);var g,d={$el:e,img:t,width:c,height:l,duration:u,type:a,speed:f,easing:"string"==typeof s&&r.default[s]?r.default[s]:r.default.linear};switch(a){case"PullInUp":case"PullInDown":case"PullInLeft":case"PullInRight":case"ZoomIn":case"ZoomInX":case"ZoomInY":case"SlideInUp":case"SlideInDown":case"SlideInLeft":case"SlideInRight":case"PressInUp":case"PressInDown":case"PressInLeft":case"PressInRight":case"PressInX":case"PressInY":g=i.animatePullAndSlider(d);break;case"ScrollLeft":case"ScrollRight":g=i.animateScroll(d);break;case"ExpandUp":case"ExpandDown":g=i.expand(d);break;case"ExpandDownAndUp":g=i.animateExpandDownAndUp(d);break;case"MergeDownAndUp":g=i.animateMergeDownAndUp(d);break;case"UncoverFromTop":case"UncoverFromBottom":g=i.animateUncover(d);break;case"ShutterX":case"ShutterY":g=i.animateShutter(d);break;case"ZoomFullScreen":g=i.animateZoomFullScreen(d);break;case"Wheel":g=i.animateWheel(d);break;case"Tooth":g=i.animateTooth(d);break;case"FadeIn":case"FadeOut":g=i.animateFade(d);break;case"StackInTop":case"StackInBottom":case"StackInLeft":case"StackInRight":case"TopLaser":case"BottomLaser":case"RightLaser":case"LeftLaser":g=i.animateStackIn(d)}g&&(g(),e.__cancel__=g.cancel)}(s,e,n)}))},e.destroy=function(){l.clear()},e.engine=a.engine,e.Tween=r.default,e}();t.Effect=u,t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);t.engine=function(e,t,n,r,i){void 0===n&&(n=a.Tween.linear);var o,c=performance.now(),l=function(){return o=requestAnimationFrame(u)};l.cancel=function(){o&&cancelAnimationFrame(o)};var u=function(a){var o=(a-c)/t;if(o<0)return l();if(o>1&&!i)e(1),r&&r(),l.cancel();else{var u=n(o);e(u),l()}};return l},t.default=t.engine},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.linear=function(e){return e},e.quadraticIn=function(e){return e*e},e.quadraticOut=function(e){return e*(2-e)},e.quadraticInOut=function(e){return(e*=2)<1?e*e*.5:-.5*(--e*(e-2)-1)},e.cubicIn=function(e){return e*e*e},e.cubicOut=function(e){return--e*e*e+1},e.cubicInOut=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},e.quarticIn=function(e){return e*e*e*e},e.quarticOut=function(e){return 1- --e*e*e*e},e.quarticInOut=function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},e.circularIn=function(e){return 1-Math.sqrt(1-e*e)},e.circularOut=function(e){return Math.sqrt(1- --e*e)},e.circularInOut=function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},e.elasticIn=function(e){return 0===e?0:1===e?1:-Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)},e.elasticOut=function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin(5*(e-.1)*Math.PI)+1},e.elasticInOut=function(e){return 0===e?0:1===e?1:(e*=2)<1?-.5*Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)+1},e.bounceIn=function(t){return 1-e.bounceOut(1-t)},e.bounceOut=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},e.bounceInOut=function(t){return t<.5?.5*e.bounceIn(2*t):.5*e.bounceOut(2*t-1)+.5},e}();t.Tween=a,t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n(1),i=window.devicePixelRatio||1,o=30*i|0,c=4e4/i|0,l=function(e,t){var n=i/1;return{RW:e*n|0,RH:t*n|0}},u=function(e,t,n){var a=document.createElement("canvas"),r=l(e,t),i=r.RW,o=r.RH;if(a.width=i,a.height=o,a.style.width=e+"px",a.style.height=t+"px",n){var c=a.getContext("2d");if("1"===n.getAttribute("data-isContan")){var u=n.naturalWidth,s=n.naturalHeight,f=a.width/u,g=a.height/s,d=Math.min(f,g),h=u*d,p=s*d,m=(a.width-h)/2,I=(a.height-p)/2;c.drawImage(n,m,I,h,p)}else c.drawImage(n,0,0,i,o)}return a};t.fillCanvasBeforePlay=function(e,t,n,a){var r=u(t,n,a);return e.innerHTML="",e.appendChild(r),e.__playing__=!0,r};var s=function(e,t,n,a){var r,i="left top";switch(e){case"PullInUp":r="left bottom",i="scale(1, "+t+")";break;case"PullInDown":r="left top",i="scale(1, "+t+")";break;case"PullInLeft":r="right top",i="scale("+t+", 1)";break;case"PullInRight":r="left top",i="scale("+t+", 1)";break;case"ZoomIn":r="center center",i="scale("+t+")";break;case"ZommInX":r="center center",i="scale("+t+", 1)";break;case"ZoomInY":r="center center",i="scale(1, "+t+")";break;case"SlideInUp":r="left top",i="translate(0, "+(1-t)*a+"px)";break;case"SlideInDown":r="left top",i="translate(0, "+-1*(1-t)*a+"px)";break;case"SlideInRight":r="left top",i="translate("+-1*(1-t)*n+"px, 0)";break;case"SlideInLeft":r="left top",i="translate("+(1-t)*n+"px, 0)";break;case"PressInUp":r="top left",i="scale(1, "+(1+15*(1-t))+")";break;case"PressInDown":r="bottom left",i="scale(1, "+(1+15*(1-t))+")";break;case"PressInLeft":r="top left",i="scale("+(1+15*(1-t))+", 1)";break;case"PressInRight":r="top right",i="scale("+(1+15*(1-t))+", 1)";break;case"PressInX":r="center center",i="scale("+(1+15*(1-t))+", 1)";break;case"PressInY":r="center center",i="scale(1, "+(1+15*(1-t))+")"}return"transform-origin:"+r+"; transform:"+i+";"};t.animateScroll=function(e){var n=e.$el,i=e.width,o=e.height,c=e.img,u=e.duration,s=e.easing,f=e.type,g=e.speed,d=void 0===g?3:g,h=t.fillCanvasBeforePlay(n,i,o,c);return r.engine((function(e){var t,n=h.getContext("2d");n.clearRect(0,0,i,o),t=d>2?60*(d-2):a.speedMap.get(d);n.save();var r=l(i,o),u=r.RW,s=r.RH,g="1"===c.getAttribute("data-isContan"),p=e*t%i;if(n.translate("ScrollLeft"===f?-p:p,0),g)for(var m=c.naturalWidth,I=c.naturalHeight,v=h.width/m,_=h.height/I,w=Math.min(v,_),y=m*w,b=I*w,P=(h.width-y)/2,S=(h.height-b)/2,R=0;R<2;R++)"ScrollLeft"===f?n.drawImage(c,0===R?P:P+u,S,y,b):n.drawImage(c,0===R?-P:-R*(P+u),S,y,b);else for(R=0;R<2;R++)n.drawImage(c,"ScrollLeft"===f?R*u:-R*u,0,u,s);n.restore()}),u,s,(function(){return n.__playing__=!1}),!0)},t.animatePullAndSlider=function(e){var n=e.$el,a=e.width,i=e.height,o=e.img,c=e.duration,l=e.easing,u=e.type,f=t.fillCanvasBeforePlay(n,a,i,o);f.style.cssText+=s(u,0,a,i);return r.engine((function(e){return f.style.cssText+=s(u,e,a,i)}),c,l,(function(){return n.__playing__=!1}))},t.expand=function(e){var n=e.$el,a=e.width,i=e.height,c=e.img,s=e.duration,f=e.easing,g=e.type,d=t.fillCanvasBeforePlay(n,a,i,c).getContext("2d"),h=u(a,i,c),p=h.getContext("2d"),m=l(a,i),I=m.RW,v=m.RH,_="ExpandDown"===g;return r.engine((function(e){d.clearRect(0,0,I,v);var t=e*v,n=_?v-t-o:t+o;if(n=Math.max(0,Math.min(n,v-o)),t>=1){var a=p.getImageData(0,_?0:v-t,I,t);d.putImageData(a,0,_?0:v-t+1)}}),s,f,(function(){h=null,p=null,n.__playing__=!1}))},t.animateMergeDownAndUp=function(e){var n=e.$el,a=e.width,i=e.height,o=e.img,c=e.duration,s=e.easing,f=t.fillCanvasBeforePlay(n,a,i).getContext("2d"),g=u(a,i,o),d=g.getContext("2d"),h=l(a,i),p=h.RW,m=h.RH;return r.engine((function(e){if(0!==e){var t=e*m;if(!(t>(m+20)/2)&&t>=1){var n=d.getImageData(0,0,p,t);f.putImageData(n,0,0);var a=d.getImageData(0,m-t,p,t);f.putImageData(a,0,m-t+1)}}}),c,s,(function(){g=null,d=null,n.__playing__=!1}))},t.animateExpandDownAndUp=function(e){var n=e.$el,a=e.width,i=e.height,o=e.img,c=e.duration,s=e.easing,f=t.fillCanvasBeforePlay(n,a,i).getContext("2d"),g=u(a,i,o),d=g.getContext("2d"),h=l(a,i),p=h.RW,m=h.RH;return r.engine((function(e){if(0!==e){var t=e*m;if(!(t>m/2)&&t>=1){var n=d.getImageData(0,m/2,p,t);f.putImageData(n,0,m/2);var a=d.getImageData(0,m/2-t,p,t);f.putImageData(a,0,m/2-t+1)}}}),c,s,(function(){g=null,d=null,n.__playing__=!1}))},t.animateFade=function(e){var n=e.$el,a=e.width,i=e.height,o=e.img,c=e.duration,l=e.easing,u=e.type,s=t.fillCanvasBeforePlay(n,a,i,o),f="FadeIn"===u;s.style.opacity=f?"0":"1";return r.engine((function(e){return s.style.opacity=f?""+e:""+(1-e)}),c,l,(function(){s.style.opacity="",n.__playing__=!1}))},t.animateShutter=function(e){var n=e.$el,a=e.width,i=e.height,o=e.img,c=e.duration,s=e.easing,f=e.type,g=t.fillCanvasBeforePlay(n,a,i).getContext("2d"),d=u(a,i,o),h=d.getContext("2d"),p=l(a,i),m=p.RW,I=p.RH,v="ShutterX"===f,_=Math.ceil((v?I:m)/16);return r.engine((function(e){g.clearRect(0,0,m,I);for(var t=0;t<16;t++){var n=t*_,a=e*_,r=v?0:n,i=v?n:0,o=v?m:a,c=v?a:I;if(a>=1){var l=h.getImageData(r,i,o,c);g.putImageData(l,r,i)}}}),c,s,(function(){d=null,h=null,n.__playing__=!1}))},t.animateUncover=function(e){var n=e.$el,a=e.width,i=e.height,c=e.img,s=e.duration,f=e.easing,g=e.type,d=t.fillCanvasBeforePlay(n,a,i,c).getContext("2d"),h=u(a,i,c),p=h.getContext("2d"),m=u(a,i),I=m.getContext("2d"),v=l(a,i),_=v.RW,w=v.RH,y=function(e,t){for(var n=0,a=e.height;n<a;n++)for(var r=0,i=e.width;r<i;r++)t.data[n*i*4+4*r+0]=e.data[(a-n)*i*4+4*r+0],t.data[n*i*4+4*r+1]=e.data[(a-n)*i*4+4*r+1],t.data[n*i*4+4*r+2]=e.data[(a-n)*i*4+4*r+2],t.data[n*i*4+4*r+3]=e.data[(a-n)*i*4+4*r+3];return t}(p.getImageData(0,0,_,w),p.getImageData(0,0,_,w));I.putImageData(y,0,0);var b="UncoverFromTop"===g;return r.engine((function(e){d.clearRect(0,0,_,w);var t=e*w,n=b?w-t-o:t+o;n=Math.max(0,Math.min(n,w-o));var a=I.getImageData(0,n,_,o);if(d.putImageData(a,0,b?t-1:w-t-o+1),t>=1){var r=p.getImageData(0,b?0:w-t,_,t);d.putImageData(r,0,b?0:w-t+1)}}),s,f,(function(){h=null,p=null,m=null,I=null,n.__playing__=!1}))},t.animateWheel=function(e){var n=e.$el,a=e.width,i=e.height,o=e.img,c=e.duration,s=e.easing,f=t.fillCanvasBeforePlay(n,a,i).getContext("2d"),g=u(a,i,o),d=f.createPattern(g,"no-repeat"),h=l(a,i),p=h.RW,m=h.RH,I=Math.sqrt(Math.pow(p,2)+Math.pow(m,2))/2;f.fillStyle=d;var v=2*Math.PI,_=Math.PI/-2;return r.engine((function(e){f.clearRect(0,0,p,m),f.beginPath(),f.moveTo(p/2,m/2);var t=v*e-Math.PI/2;f.arc(p/2,m/2,I,_,t,!1),f.fill()}),c,s,(function(){g=null,n.__playing__=!1}))},t.animateTooth=function(e){var n=e.$el,a=e.width,i=e.height,o=e.img,c=e.duration,s=e.easing,f=t.fillCanvasBeforePlay(n,a,i).getContext("2d"),g=u(a,i,o),d=g.getContext("2d"),h=l(a,i),p=h.RW,m=h.RH,I=Math.ceil(p/8);return r.engine((function(e){if(f.clearRect(0,0,p,m),0!==e)for(var t=0;t<8;t++){var n=t*I,a=e*m;if(!(a<1)){var r=void 0,i=void 0;t%2==0?(r=0,i=m-a):(r=m-a,i=0);var o=d.getImageData(n,r,I,a);f.putImageData(o,n,i)}}}),c,s,(function(){g=null,d=null,n.__playing__=!1}))},t.animateZoomFullScreen=function(e){var n=e.$el,a=e.width,i=e.height,o=e.img,c=e.duration,s=e.easing,f=t.fillCanvasBeforePlay(n,a,i).getContext("2d"),g=u(a,i,o),d=g.getContext("2d"),h=l(a,i),p=h.RW,m=h.RH,I=p/2;return r.engine((function(e){f.clearRect(0,0,p,m);var t=e*I,n=m*e;if(!(n<1)){var a=I,r=m-n,i=d.getImageData(p-t,0,t+1,n+1);f.putImageData(i,a,r);var o=I-e*I,c=m-n,l=d.getImageData(0,0,t+1,n+1);f.putImageData(l,o,c)}}),c,s,(function(){g=null,d=null,n.__playing__=!1}))},t.animateStackIn=function(e){var n=e.$el,a=e.width,i=e.height,o=e.img,s=e.duration,f=e.easing,g=e.type,d=t.fillCanvasBeforePlay(n,a,i).getContext("2d"),h=l(a,i),p=h.RW,m=h.RH,I=a,v=i;switch(g){case"StackInTop":case"StackInBottom":v=4*m;break;case"TopLaser":case"BottomLaser":v=60*m;break;case"StackInLeft":case"StackInRight":I=4*p;break;case"LeftLaser":case"RightLaser":I=60*p}I=Math.min(c,I),v=Math.min(c,v);var _=u(I,v,o),w=_.getContext("2d"),y=l(I,v);I=y.RW,v=y.RH;var b=I>p,P=v>m;return r.engine((function(e){var t,n,a,r,i,o,c,l;d.clearRect(0,0,p,m);var u=!1,s=!1;if(0!==e){switch(g){case"StackInLeft":case"RightLaser":a=I*e,c=p*e,r=v,l=m,t=0,n=0,i=0,o=0,u=!0;break;case"StackInRight":case"LeftLaser":r=v,l=m,t=I-(a=I*e),n=0,i=p-(c=p*e),o=0;break;case"StackInTop":case"BottomLaser":a=I,c=p,r=v*e,l=m*e,t=0,n=0,i=0,o=0,s=!0;break;case"StackInBottom":case"TopLaser":a=I,c=p,t=0,n=v-(r=v*e),i=0,o=m-(l=m*e)}if(d.drawImage(_,t,n,a,r,i,o,c,l),b){var f=I-a,h=u?I-f:0,y=u?c:i-t,S=w.getImageData(h,0,f+1,m);d.putImageData(S,y,0)}else if(P){var R=v-r,x=s?v-R:0,M=s?l:o-n;S=w.getImageData(0,x,p,R+1);d.putImageData(S,0,M)}}}),s,f,(function(){_=null,w=null,n.__playing__=!1}))}}]).default}));