!function(e){var n={};function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(i,s,function(n){return e[n]}.bind(null,s));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n){},function(e,n,t){t(2),t(0),e.exports=t(3)},function(e,n,t){"use strict";t.r(n);t(0);var i=document.getElementById("flash"),s=document.querySelectorAll(".land"),a=["biased","tooke","viol","unreplevinable","roadhouse","recapping","oriel","condoled","sapour","maladaptation","cosmorama","instigated","carapa","presolicit","jouncing","skald","nonreformational","undepicted","habitational","with","from","near","behind","into","towards","since","within","via","opposite","inside","as"],o=setInterval((function(){i.innerHTML=a[Math.floor(Math.random()*a.length)]}),100);function l(){i.classList.add("fade-out")}window.setTimeout((function(){clearInterval(o),s.forEach((function(e){e.classList.add("fade-in")})),window.setTimeout(l,2e3)}),2e3);var r=document.querySelectorAll(".imageone");console.log(r);var c=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return function(){for(var i=this,s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];clearTimeout(n),n=setTimeout((function(){e.apply(i,a)}),t)}},g=function(e){console.log("check called"),r.forEach((function(e){var n=e.getBoundingClientRect(),t=n.top,i=n.bottom;if(function(e){var n=e.getBoundingClientRect();console.log(n);var t=n.top,i=n.bottom;t>=0&&window.innerHeight;return window.innerHeight-t>=n.height/6}(e))return function(e){e.classList.add("active")}(e);(t>=window.innerHeight||i<=0)&&function(e){e.classList.remove("active")}(e)}))};c(g),window.addEventListener("scroll",c(g))},function(e,n,t){"use strict";t.r(n),n.default='<html lang="en">\n<head>\n    <title>date past midnight</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    <link rel="stylesheet" href="https://use.typekit.net/uce0pbt.css">\n    <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet">\n    <link rel="shortcut icon" href="./assets/favicon.ico">\n</head>\n<body>\n<div class="opener">\n  <h1 id="flash"></h1>\n</div>\n  <div class="nav land">\n    <p>date past midnight</p>\n    <ul>\n      <li>about</li>\n      <li>contact</li>\n    </ul>\n  </div>\n  <div class="land container">\n    <div class="column">\n      <div class="textover">\n        <img src="./assets/img/1.jpeg" alt="" class="imageone">\n        <div class="bottom-left">Bottom Left</div>\n      </div>\n      <img src="./assets/img/5.jpeg" alt="" class="imageone">\n      <img src="./assets/img/6.jpeg" alt="" class="imageone">\n      <img src="./assets/img/7.jpeg" alt="" class="imageone">\n      <img src="./assets/img/8.jpeg" alt="" class="imageone">\n      <img src="./assets/img/9.jpeg" alt="" class="imageone">\n      <img src="./assets/img/10.jpeg" alt="" class="imageone">\n      <img src="./assets/img/11.jpeg" alt="" class="imageone">\n    </div>\n    <div class="column">\n      <img src="./assets/img/2.jpeg" alt="" class="imageone">\n      <img src="./assets/img/3.jpeg" alt="" class="imageone">\n      <img src="./assets/img/4.jpeg" alt="" class="imageone">\n      <img src="./assets/img/12.jpeg" alt="" class="imageone">\n      <img src="./assets/img/13.jpeg" alt="" class="imageone">\n      <img src="./assets/img/14.jpeg" alt="" class="imageone">\n      <img src="./assets/img/15.jpeg" alt="" class="imageone">\n      <img src="./assets/img/16.jpeg" alt="" class="imageone">\n    </div>\n  </div>\n\n</body>\n</html>\n'}]);