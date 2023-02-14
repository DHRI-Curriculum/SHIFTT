(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{91359:function(r,e,n){"use strict";n.d(e,{Z:function(){return m}});var t=n(87462),a=n(63366),o=n(67294),s=n(86010),u=n(94780),i=n(81719),c=n(78884),l=n(1588),f=n(34867);function h(r){return(0,f.Z)("MuiCardContent",r)}(0,l.Z)("MuiCardContent",["root"]);var d=n(85893);const v=["className","component"],g=(0,i.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(r,e)=>e.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var m=o.forwardRef((function(r,e){const n=(0,c.Z)({props:r,name:"MuiCardContent"}),{className:o,component:i="div"}=n,l=(0,a.Z)(n,v),f=(0,t.Z)({},n,{component:i}),m=(r=>{const{classes:e}=r;return(0,u.Z)({root:["root"]},h,e)})(f);return(0,d.jsx)(g,(0,t.Z)({as:i,className:(0,s.Z)(m.root,o),ownerState:f,ref:e},l))}))},66556:function(r,e,n){"use strict";n.r(e),n.d(e,{default:function(){return k}});var t=n(85893),a=n(41664),o=n.n(a),s=n(82023),u=n.n(s),i=n(87462),c=n(63366),l=n(67294),f=n(86010),h=n(94780),d=n(81719),v=n(78884),g=n(81401),m=n(1588),p=n(34867);function b(r){return(0,p.Z)("MuiCard",r)}(0,m.Z)("MuiCard",["root"]);const M=["className","raised"],Z=(0,d.ZP)(g.Z,{name:"MuiCard",slot:"Root",overridesResolver:(r,e)=>e.root})((()=>({overflow:"hidden"})));var w=l.forwardRef((function(r,e){const n=(0,v.Z)({props:r,name:"MuiCard"}),{className:a,raised:o=!1}=n,s=(0,c.Z)(n,M),u=(0,i.Z)({},n,{raised:o}),l=(r=>{const{classes:e}=r;return(0,h.Z)({root:["root"]},b,e)})(u);return(0,t.jsx)(Z,(0,i.Z)({className:(0,f.Z)(l.root,a),elevation:o?8:void 0,ref:e,ownerState:u},s))})),R=n(91359);function k(r){var e=r.workshop,n=(r.index,u()({luminosity:"light",count:1})[0]);u()({luminosity:"light",count:1})[0],"".concat(n);return(0,t.jsx)(w,{className:"frontpage-card",children:(0,t.jsx)(o(),{href:"/workshops/".concat(e.slug),passHref:!0,children:(0,t.jsx)(R.Z,{className:"card-content",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"overlay",children:e.title}),(0,t.jsx)("div",{className:"workshop-info",children:(0,t.jsx)("ul",{className:"objectives",children:e["learning objectives"].map((function(r,e){return"object"===typeof r||e>1?null:(0,t.jsx)("li",{className:"objective",children:r},e)}))})})]})})})})}},82023:function(r,e,n){r=n.nmd(r),function(n,t){var a=function(){var r=null,e={};g();var n=[],t=function(e){if(void 0!==(e=e||{}).seed&&null!==e.seed&&e.seed===parseInt(e.seed,10))r=e.seed;else if("string"===typeof e.seed)r=M(e.seed);else{if(void 0!==e.seed&&null!==e.seed)throw new TypeError("The seed value must be an integer or string");r=null}var i,c;if(null!==e.count&&void 0!==e.count){for(var l=e.count,f=[],h=0;h<e.count;h++)n.push(!1);for(e.count=null;l>f.length;){var d=t(e);null!==r&&(e.seed=r),f.push(d)}return e.count=l,f}return u([i=a(e),c=o(i,e),s(i,c,e)],e)};function a(r){if(n.length>0){var e=h(o=Z(r.hue)),t=(o[1]-o[0])/n.length,a=parseInt((e-o[0])/t);return!0===n[a]?a=(a+2)%n.length:n[a]=!0,(e=h(o=[(o[0]+a*t)%359,(o[0]+(a+1)*t)%359]))<0&&(e=360+e),e}var o;return(e=h(o=c(r.hue)))<0&&(e=360+e),e}function o(r,e){if("monochrome"===e.hue)return 0;if("random"===e.luminosity)return h([0,100]);var n=l(r),t=n[0],a=n[1];switch(e.luminosity){case"bright":t=55;break;case"dark":t=a-10;break;case"light":a=55}return h([t,a])}function s(r,e,n){var t=i(r,e),a=100;switch(n.luminosity){case"dark":a=t+20;break;case"light":t=(a+t)/2;break;case"random":t=0,a=100}return h([t,a])}function u(r,e){switch(e.format){case"hsvArray":return r;case"hslArray":return b(r);case"hsl":var n=b(r);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var t=b(r),a=e.alpha||Math.random();return"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+a+")";case"rgbArray":return m(r);case"rgb":return"rgb("+m(r).join(", ")+")";case"rgba":var o=m(r);a=e.alpha||Math.random();return"rgba("+o.join(", ")+", "+a+")";default:return d(r)}}function i(r,e){for(var n=f(r).lowerBounds,t=0;t<n.length-1;t++){var a=n[t][0],o=n[t][1],s=n[t+1][0],u=n[t+1][1];if(e>=a&&e<=s){var i=(u-o)/(s-a);return i*e+(o-i*a)}}return 0}function c(r){if("number"===typeof parseInt(r)){var n=parseInt(r);if(n<360&&n>0)return[n,n]}if("string"===typeof r)if(e[r]){var t=e[r];if(t.hueRange)return t.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var a=p(r)[0];return[a,a]}return[0,360]}function l(r){return f(r).saturationRange}function f(r){for(var n in r>=334&&r<=360&&(r-=360),e){var t=e[n];if(t.hueRange&&r>=t.hueRange[0]&&r<=t.hueRange[1])return e[n]}return"Color not found"}function h(e){if(null===r){var n=.618033988749895,t=Math.random();return t+=n,t%=1,Math.floor(e[0]+t*(e[1]+1-e[0]))}var a=e[1]||1,o=e[0]||0,s=(r=(9301*r+49297)%233280)/233280;return Math.floor(o+s*(a-o))}function d(r){var e=m(r);function n(r){var e=r.toString(16);return 1==e.length?"0"+e:e}return"#"+n(e[0])+n(e[1])+n(e[2])}function v(r,n,t){var a=t[0][0],o=t[t.length-1][0],s=t[t.length-1][1],u=t[0][1];e[r]={hueRange:n,lowerBounds:t,saturationRange:[a,o],brightnessRange:[s,u]}}function g(){v("monochrome",null,[[0,0],[100,0]]),v("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),v("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),v("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),v("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),v("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),v("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),v("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function m(r){var e=r[0];0===e&&(e=1),360===e&&(e=359),e/=360;var n=r[1]/100,t=r[2]/100,a=Math.floor(6*e),o=6*e-a,s=t*(1-n),u=t*(1-o*n),i=t*(1-(1-o)*n),c=256,l=256,f=256;switch(a){case 0:c=t,l=i,f=s;break;case 1:c=u,l=t,f=s;break;case 2:c=s,l=t,f=i;break;case 3:c=s,l=u,f=t;break;case 4:c=i,l=s,f=t;break;case 5:c=t,l=s,f=u}return[Math.floor(255*c),Math.floor(255*l),Math.floor(255*f)]}function p(r){r=3===(r=r.replace(/^#/,"")).length?r.replace(/(.)/g,"$1$1"):r;var e=parseInt(r.substr(0,2),16)/255,n=parseInt(r.substr(2,2),16)/255,t=parseInt(r.substr(4,2),16)/255,a=Math.max(e,n,t),o=a-Math.min(e,n,t),s=a?o/a:0;switch(a){case e:return[(n-t)/o%6*60||0,s,a];case n:return[60*((t-e)/o+2)||0,s,a];case t:return[60*((e-n)/o+4)||0,s,a]}}function b(r){var e=r[0],n=r[1]/100,t=r[2]/100,a=(2-n)*t;return[e,Math.round(n*t/(a<1?a:2-a)*1e4)/100,a/2*100]}function M(r){for(var e=0,n=0;n!==r.length&&!(e>=Number.MAX_SAFE_INTEGER);n++)e+=r.charCodeAt(n);return e}function Z(r){if(isNaN(r)){if("string"===typeof r)if(e[r]){var n=e[r];if(n.hueRange)return n.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){return f(p(r)[0]).hueRange}}else{var t=parseInt(r);if(t<360&&t>0)return f(r).hueRange}return[0,360]}return t}();r&&r.exports&&(e=r.exports=a),e.randomColor=a}()}}]);