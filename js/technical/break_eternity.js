!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Decimal=e()}(this,(function(){"use strict";function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=Math.log10(9e15),i=function(){for(var t=[],e=-323;e<=308;e++)t.push(Number("1e"+e));return function(e){return t[e+323]}}(),r=[2,Math.E,3,4,5,6,7,8,9,10],n=[[1,1.0891168053867777,1.1789745164521264,1.2701428397304229,1.3632066654400328,1.4587804913784246,1.557523817412741,1.660158301473385,1.767487542936873,1.8804205225512542,2],[1,1.1121114330934,1.23103892493161,1.35838369631113,1.49605193039935,1.64635423375119,1.81213853570186,1.99697132461829,2.20538955455724,2.44325744833852,Math.E],[1,1.1187738849693603,1.2464963939368214,1.38527004705667,1.5376664685821402,1.7068895236551784,1.897001227148399,2.1132403089001035,2.362480153784171,2.6539010333870774,3],[1,1.1367350847096405,1.2889510672956703,1.4606478703324786,1.6570295196661111,1.8850062585672889,2.1539465047453485,2.476829779693097,2.872061932789197,3.3664204535587183,4],[1,1.1494592900767588,1.319708228183931,1.5166291280087583,1.748171114438024,2.0253263297298045,2.3636668498288547,2.7858359149579424,3.3257226212448145,4.035730287722532,5],[1,1.159225940787673,1.343712473580932,1.5611293155111927,1.8221199554561318,2.14183924486326,2.542468319282638,3.0574682501653316,3.7390572020926873,4.6719550537360774,6],[1,1.1670905356972596,1.3632807444991446,1.5979222279405536,1.8842640123816674,2.2416069644878687,2.69893426559423,3.3012632110403577,4.121250340630164,5.281493033448316,7],[1,1.1736630594087796,1.379783782386201,1.6292821855668218,1.9378971836180754,2.3289975651071977,2.8384347394720835,3.5232708454565906,4.478242031114584,5.868592169644505,8],[1,1.1793017514670474,1.394054150657457,1.65664127441059,1.985170999970283,2.4069682290577457,2.9647310119960752,3.7278665320924946,4.814462547283592,6.436522247411611,9],[1,1.18422737399915,1.4066113788546144,1.680911177655277,2.027492094355525,2.4775152854601967,3.080455730250329,3.918234505962507,5.1332705696484595,6.9878696918072905,10]],a=[[-1,-.9194161097107025,-.8335625019330468,-.7425599821143978,-.6466611521029437,-.5462617907227869,-.4419033816638769,-.3342645487554494,-.224140440909962,-.11241087890006762,0],[-1,-.90603157029014,-.80786507256596,-.7064666939634,-.60294836853664,-.49849837513117,-.39430303318768,-.29147201034755,-.19097820800866,-.09361896280296,0],[-1,-.9021579584316141,-.8005762598234203,-.6964780623319391,-.5911906810998454,-.486050182576545,-.3823089430815083,-.28106046722897615,-.1831906535795894,-.08935809204418144,0],[-1,-.8917227442365535,-.781258746326964,-.6705130326902455,-.5612813129406509,-.4551067709033134,-.35319256652135966,-.2563741554088552,-.1651412821106526,-.0796919581982668,0],[-1,-.8843387974366064,-.7678744063886243,-.6529563724510552,-.5415870994657841,-.4352842206588936,-.33504449124791424,-.24138853420685147,-.15445285440944467,-.07409659641336663,0],[-1,-.8786709358426346,-.7577735191184886,-.6399546189952064,-.527284921869926,-.4211627631006314,-.3223479611761232,-.23107655627789858,-.1472057700818259,-.07035171210706326,0],[-1,-.8740862815291583,-.7497032990976209,-.6297119746181752,-.5161838335958787,-.41036238255751956,-.31277212146489963,-.2233976621705518,-.1418697367979619,-.06762117662323441,0],[-1,-.8702632331800649,-.7430366914122081,-.6213373075161548,-.5072025698095242,-.40171437727184167,-.30517930701410456,-.21736343968190863,-.137710238299109,-.06550774483471955,0],[-1,-.8670016295947213,-.7373984232432306,-.6143173985094293,-.49973884395492807,-.394584953527678,-.2989649949848695,-.21245647317021688,-.13434688362382652,-.0638072667348083,0],[-1,-.8641642839543857,-.732534623168535,-.6083127477059322,-.4934049257184696,-.3885773075899922,-.29376029055315767,-.2083678561173622,-.13155653399373268,-.062401588652553186,0]],s=function(t){return c.fromValue_noAlloc(t)},u=function(t,e,i){return c.fromComponents(t,e,i)},l=function(t,e,i){return c.fromComponents_noNormalize(t,e,i)},h=function(t,e){var i=e+1,r=Math.ceil(Math.log10(Math.abs(t))),n=Math.round(t*Math.pow(10,i-r))*Math.pow(10,r-i);return parseFloat(n.toFixed(Math.max(i-r,0)))},o=function(t){return Math.sign(t)*Math.log10(Math.abs(t))},g=.5671432904097838,m=function(t){var e,i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e-10;if(!Number.isFinite(t))return t;if(0===t)return t;if(1===t)return g;e=t<10?0:Math.log(t)-Math.log(Math.log(t));for(var n=0;n<100;++n){if(i=(t*Math.exp(-e)+e*e)/(e+1),Math.abs(i-e)<r*Math.abs(i))return i;e=i}throw Error("Iteration failed to converge: ".concat(t.toString()))};function f(t){var e,i,r,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e-10;if(!Number.isFinite(t.mag))return t;if(t===c.dZero)return t;if(t===c.dOne)return s(g);c.abs(t),e=c.ln(t);for(var u=0;u<100;++u){if(i=c.exp(-e),r=e.sub(t.mul(i)),n=e.sub(r.div(e.add(1).sub(e.add(2).mul(r).div(c.mul(2,e).add(2))))),c.abs(n.sub(e)).lt(c.abs(n).mul(a)))return n;e=n}throw Error("Iteration failed to converge: ".concat(t.toString()))}var c=function(){function g(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,g),this.sign=Number.NaN,this.mag=Number.NaN,this.layer=Number.NaN,t instanceof g?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):"string"==typeof t?this.fromString(t):(this.sign=0,this.layer=0,this.mag=0)}var c,y,v;return c=g,y=[{key:"m",get:function(){if(0===this.sign)return 0;if(0===this.layer){var t,e=Math.floor(Math.log10(this.mag));return t=5e-324===this.mag?5:this.mag/i(e),this.sign*t}if(1===this.layer){var r=this.mag-Math.floor(this.mag);return this.sign*Math.pow(10,r)}return this.sign},set:function(t){this.layer<=2?this.fromMantissaExponent(t,this.e):(this.sign=Math.sign(t),0===this.sign&&(this.layer,this.exponent))}},{key:"e",get:function(){return 0===this.sign?0:0===this.layer?Math.floor(Math.log10(this.mag)):1===this.layer?Math.floor(this.mag):2===this.layer?Math.floor(Math.sign(this.mag)*Math.pow(10,Math.abs(this.mag))):this.mag*Number.POSITIVE_INFINITY},set:function(t){this.fromMantissaExponent(this.m,t)}},{key:"s",get:function(){return this.sign},set:function(t){0===t?(this.sign=0,this.layer=0,this.mag=0):this.sign=t}},{key:"mantissa",get:function(){return this.m},set:function(t){this.m=t}},{key:"exponent",get:function(){return this.e},set:function(t){this.e=t}},{key:"normalize",value:function(){if(0===this.sign||0===this.mag&&0===this.layer)return this.sign=0,this.mag=0,this.layer=0,this;if(0===this.layer&&this.mag<0&&(this.mag=-this.mag,this.sign=-this.sign),0===this.layer&&this.mag<1/9e15)return this.layer+=1,this.mag=Math.log10(this.mag),this;var t=Math.abs(this.mag),i=Math.sign(this.mag);if(t>=9e15)return this.layer+=1,this.mag=i*Math.log10(t),this;for(;t<e&&this.layer>0;)this.layer-=1,0===this.layer?this.mag=Math.pow(10,this.mag):(this.mag=i*Math.pow(10,t),t=Math.abs(this.mag),i=Math.sign(this.mag));return 0===this.layer&&(this.mag<0?(this.mag=-this.mag,this.sign=-this.sign):0===this.mag&&(this.sign=0)),this}},{key:"fromComponents",value:function(t,e,i){return this.sign=t,this.layer=e,this.mag=i,this.normalize(),this}},{key:"fromComponents_noNormalize",value:function(t,e,i){return this.sign=t,this.layer=e,this.mag=i,this}},{key:"fromMantissaExponent",value:function(t,e){return this.layer=1,this.sign=Math.sign(t),t=Math.abs(t),this.mag=e+Math.log10(t),this.normalize(),this}},{key:"fromMantissaExponent_noNormalize",value:function(t,e){return this.fromMantissaExponent(t,e),this}},{key:"fromDecimal",value:function(t){return this.sign=t.sign,this.layer=t.layer,this.mag=t.mag,this}},{key:"fromNumber",value:function(t){return this.mag=Math.abs(t),this.sign=Math.sign(t),this.layer=0,this.normalize(),this}},{key:"fromString",value:function(t){var e=(t=t.replace(",","")).split("^^^");if(2===e.length){var i=parseFloat(e[0]),r=parseFloat(e[1]),n=e[1].split(";"),a=1;if(2===n.length&&(a=parseFloat(n[1]),isFinite(a)||(a=1)),isFinite(i)&&isFinite(r)){var l=g.pentate(i,r,a);return this.sign=l.sign,this.layer=l.layer,this.mag=l.mag,this}}var h=t.split("^^");if(2===h.length){var m=parseFloat(h[0]),f=parseFloat(h[1]),c=h[1].split(";"),y=1;if(2===c.length&&(y=parseFloat(c[1]),isFinite(y)||(y=1)),isFinite(m)&&isFinite(f)){var v=g.tetrate(m,f,y);return this.sign=v.sign,this.layer=v.layer,this.mag=v.mag,this}}var d,k,p=t.split("^");if(2===p.length){var N=parseFloat(p[0]),M=parseFloat(p[1]);if(isFinite(N)&&isFinite(M)){var b=g.pow(N,M);return this.sign=b.sign,this.layer=b.layer,this.mag=b.mag,this}}var F=(t=t.trim().toLowerCase()).split("pt");if(2===F.length){d=10,k=parseFloat(F[0]),F[1]=F[1].replace("(",""),F[1]=F[1].replace(")","");var _=parseFloat(F[1]);if(isFinite(_)||(_=1),isFinite(d)&&isFinite(k)){var w=g.tetrate(d,k,_);return this.sign=w.sign,this.layer=w.layer,this.mag=w.mag,this}}if(2===(F=t.split("p")).length){d=10,k=parseFloat(F[0]),F[1]=F[1].replace("(",""),F[1]=F[1].replace(")","");var q=parseFloat(F[1]);if(isFinite(q)||(q=1),isFinite(d)&&isFinite(k)){var I=g.tetrate(d,k,q);return this.sign=I.sign,this.layer=I.layer,this.mag=I.mag,this}}var x=t.split("e"),E=x.length-1;if(0===E){var S=parseFloat(t);if(isFinite(S))return this.fromNumber(S)}else if(1===E){var T=parseFloat(t);if(isFinite(T)&&0!==T)return this.fromNumber(T)}var O=t.split("e^");if(2===O.length){this.sign=1,"-"==O[0].charAt(0)&&(this.sign=-1);for(var V="",z=0;z<O[1].length;++z){var A=O[1].charCodeAt(z);if(!(A>=43&&A<=57||101===A))return this.layer=parseFloat(V),this.mag=parseFloat(O[1].substr(z+1)),this.normalize(),this;V+=O[1].charAt(z)}}if(E<1)return this.sign=0,this.layer=0,this.mag=0,this;var P=parseFloat(x[0]);if(0===P)return this.sign=0,this.layer=0,this.mag=0,this;var Z=parseFloat(x[x.length-1]);if(E>=2){var D=parseFloat(x[x.length-2]);isFinite(D)&&(Z*=Math.sign(D),Z+=o(D))}if(isFinite(P))if(1===E)this.sign=Math.sign(P),this.layer=1,this.mag=Z+Math.log10(Math.abs(P));else{if(this.sign=Math.sign(P),this.layer=E,2===E){var Y=g.mul(u(1,2,Z),s(P));return this.sign=Y.sign,this.layer=Y.layer,this.mag=Y.mag,this}this.mag=Z}else this.sign="-"===x[0]?-1:1,this.layer=E,this.mag=Z;return this.normalize(),this}},{key:"fromValue",value:function(t){return t instanceof g?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):"string"==typeof t?this.fromString(t):(this.sign=0,this.layer=0,this.mag=0,this)}},{key:"toNumber",value:function(){return Number.isFinite(this.layer)?0===this.layer?this.sign*this.mag:1===this.layer?this.sign*Math.pow(10,this.mag):this.mag>0?this.sign>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:0:Number.NaN}},{key:"mantissaWithDecimalPlaces",value:function(t){return isNaN(this.m)?Number.NaN:0===this.m?0:h(this.m,t)}},{key:"magnitudeWithDecimalPlaces",value:function(t){return isNaN(this.mag)?Number.NaN:0===this.mag?0:h(this.mag,t)}},{key:"toString",value:function(){return isNaN(this.layer)||isNaN(this.sign)||isNaN(this.mag)?"NaN":this.mag===Number.POSITIVE_INFINITY||this.layer===Number.POSITIVE_INFINITY?1===this.sign?"Infinity":"-Infinity":0===this.layer?this.mag<1e21&&this.mag>1e-7||0===this.mag?(this.sign*this.mag).toString():this.m+"e"+this.e:1===this.layer?this.m+"e"+this.e:this.layer<=5?(-1===this.sign?"-":"")+"e".repeat(this.layer)+this.mag:(-1===this.sign?"-":"")+"(e^"+this.layer+")"+this.mag}},{key:"toExponential",value:function(t){return 0===this.layer?(this.sign*this.mag).toExponential(t):this.toStringWithDecimalPlaces(t)}},{key:"toFixed",value:function(t){return 0===this.layer?(this.sign*this.mag).toFixed(t):this.toStringWithDecimalPlaces(t)}},{key:"toPrecision",value:function(t){return this.e<=-7?this.toExponential(t-1):t>this.e?this.toFixed(t-this.exponent-1):this.toExponential(t-1)}},{key:"valueOf",value:function(){return this.toString()}},{key:"toJSON",value:function(){return this.toString()}},{key:"toStringWithDecimalPlaces",value:function(t){return 0===this.layer?this.mag<1e21&&this.mag>1e-7||0===this.mag?(this.sign*this.mag).toFixed(t):h(this.m,t)+"e"+h(this.e,t):1===this.layer?h(this.m,t)+"e"+h(this.e,t):this.layer<=5?(-1===this.sign?"-":"")+"e".repeat(this.layer)+h(this.mag,t):(-1===this.sign?"-":"")+"(e^"+this.layer+")"+h(this.mag,t)}},{key:"abs",value:function(){return l(0===this.sign?0:1,this.layer,this.mag)}},{key:"neg",value:function(){return l(-this.sign,this.layer,this.mag)}},{key:"negate",value:function(){return this.neg()}},{key:"negated",value:function(){return this.neg()}},{key:"sgn",value:function(){return this.sign}},{key:"round",value:function(){return this.mag<0?g.dZero:0===this.layer?u(this.sign,0,Math.round(this.mag)):this}},{key:"floor",value:function(){return this.mag<0?g.dZero:0===this.layer?u(this.sign,0,Math.floor(this.mag)):this}},{key:"ceil",value:function(){return this.mag<0?g.dZero:0===this.layer?u(this.sign,0,Math.ceil(this.mag)):this}},{key:"trunc",value:function(){return this.mag<0?g.dZero:0===this.layer?u(this.sign,0,Math.trunc(this.mag)):this}},{key:"add",value:function(t){var e,i,r=s(t);if(!Number.isFinite(this.layer))return this;if(!Number.isFinite(r.layer))return r;if(0===this.sign)return r;if(0===r.sign)return this;if(this.sign===-r.sign&&this.layer===r.layer&&this.mag===r.mag)return l(0,0,0);if(this.layer>=2||r.layer>=2)return this.maxabs(r);if(g.cmpabs(this,r)>0?(e=this,i=r):(e=r,i=this),0===e.layer&&0===i.layer)return s(e.sign*e.mag+i.sign*i.mag);var n=e.layer*Math.sign(e.mag),a=i.layer*Math.sign(i.mag);if(n-a>=2)return e;if(0===n&&-1===a){if(Math.abs(i.mag-Math.log10(e.mag))>17)return e;var h=Math.pow(10,Math.log10(e.mag)-i.mag),o=i.sign+e.sign*h;return u(Math.sign(o),1,i.mag+Math.log10(Math.abs(o)))}if(1===n&&0===a){if(Math.abs(e.mag-Math.log10(i.mag))>17)return e;var m=Math.pow(10,e.mag-Math.log10(i.mag)),f=i.sign+e.sign*m;return u(Math.sign(f),1,Math.log10(i.mag)+Math.log10(Math.abs(f)))}if(Math.abs(e.mag-i.mag)>17)return e;var c=Math.pow(10,e.mag-i.mag),y=i.sign+e.sign*c;return u(Math.sign(y),1,i.mag+Math.log10(Math.abs(y)))}},{key:"plus",value:function(t){return this.add(t)}},{key:"sub",value:function(t){return this.add(s(t).neg())}},{key:"subtract",value:function(t){return this.sub(t)}},{key:"minus",value:function(t){return this.sub(t)}},{key:"mul",value:function(t){var e,i,r=s(t);if(!Number.isFinite(this.layer))return this;if(!Number.isFinite(r.layer))return r;if(0===this.sign||0===r.sign)return l(0,0,0);if(this.layer===r.layer&&this.mag===-r.mag)return l(this.sign*r.sign,0,1);if(this.layer>r.layer||this.layer==r.layer&&Math.abs(this.mag)>Math.abs(r.mag)?(e=this,i=r):(e=r,i=this),0===e.layer&&0===i.layer)return s(e.sign*i.sign*e.mag*i.mag);if(e.layer>=3||e.layer-i.layer>=2)return u(e.sign*i.sign,e.layer,e.mag);if(1===e.layer&&0===i.layer)return u(e.sign*i.sign,1,e.mag+Math.log10(i.mag));if(1===e.layer&&1===i.layer)return u(e.sign*i.sign,1,e.mag+i.mag);if(2===e.layer&&1===i.layer){var n=u(Math.sign(e.mag),e.layer-1,Math.abs(e.mag)).add(u(Math.sign(i.mag),i.layer-1,Math.abs(i.mag)));return u(e.sign*i.sign,n.layer+1,n.sign*n.mag)}if(2===e.layer&&2===i.layer){var a=u(Math.sign(e.mag),e.layer-1,Math.abs(e.mag)).add(u(Math.sign(i.mag),i.layer-1,Math.abs(i.mag)));return u(e.sign*i.sign,a.layer+1,a.sign*a.mag)}throw Error("Bad arguments to mul: "+this+", "+t)}},{key:"multiply",value:function(t){return this.mul(t)}},{key:"times",value:function(t){return this.mul(t)}},{key:"div",value:function(t){var e=s(t);return this.mul(e.recip())}},{key:"divide",value:function(t){return this.div(t)}},{key:"divideBy",value:function(t){return this.div(t)}},{key:"dividedBy",value:function(t){return this.div(t)}},{key:"recip",value:function(){return 0===this.mag?g.dNaN:0===this.layer?u(this.sign,0,1/this.mag):u(this.sign,this.layer,-this.mag)}},{key:"reciprocal",value:function(){return this.recip()}},{key:"reciprocate",value:function(){return this.recip()}},{key:"cmp",value:function(t){var e=s(t);return this.sign>e.sign?1:this.sign<e.sign?-1:this.sign*this.cmpabs(t)}},{key:"cmpabs",value:function(t){var e=s(t),i=this.mag>0?this.layer:-this.layer,r=e.mag>0?e.layer:-e.layer;return i>r?1:i<r?-1:this.mag>e.mag?1:this.mag<e.mag?-1:0}},{key:"compare",value:function(t){return this.cmp(t)}},{key:"isNan",value:function(){return isNaN(this.sign)||isNaN(this.layer)||isNaN(this.mag)}},{key:"isFinite",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return isFinite(this.sign)&&isFinite(this.layer)&&isFinite(this.mag)}))},{key:"eq",value:function(t){var e=s(t);return this.sign===e.sign&&this.layer===e.layer&&this.mag===e.mag}},{key:"equals",value:function(t){return this.eq(t)}},{key:"neq",value:function(t){return!this.eq(t)}},{key:"notEquals",value:function(t){return this.neq(t)}},{key:"lt",value:function(t){return s(t),-1===this.cmp(t)}},{key:"lte",value:function(t){return!this.gt(t)}},{key:"gt",value:function(t){return s(t),1===this.cmp(t)}},{key:"gte",value:function(t){return!this.lt(t)}},{key:"max",value:function(t){var e=s(t);return this.lt(e)?e:this}},{key:"min",value:function(t){var e=s(t);return this.gt(e)?e:this}},{key:"maxabs",value:function(t){var e=s(t);return this.cmpabs(e)<0?e:this}},{key:"minabs",value:function(t){var e=s(t);return this.cmpabs(e)>0?e:this}},{key:"clamp",value:function(t,e){return this.max(t).min(e)}},{key:"clampMin",value:function(t){return this.max(t)}},{key:"clampMax",value:function(t){return this.min(t)}},{key:"cmp_tolerance",value:function(t,e){var i=s(t);return this.eq_tolerance(i,e)?0:this.cmp(i)}},{key:"compare_tolerance",value:function(t,e){return this.cmp_tolerance(t,e)}},{key:"eq_tolerance",value:function(t,e){var i=s(t);if(null==e&&(e=1e-7),this.sign!==i.sign)return!1;if(Math.abs(this.layer-i.layer)>1)return!1;var r=this.mag,n=i.mag;return this.layer>i.layer&&(n=o(n)),this.layer<i.layer&&(r=o(r)),Math.abs(r-n)<=e*Math.max(Math.abs(r),Math.abs(n))}},{key:"equals_tolerance",value:function(t,e){return this.eq_tolerance(t,e)}},{key:"neq_tolerance",value:function(t,e){return!this.eq_tolerance(t,e)}},{key:"notEquals_tolerance",value:function(t,e){return this.neq_tolerance(t,e)}},{key:"lt_tolerance",value:function(t,e){var i=s(t);return!this.eq_tolerance(i,e)&&this.lt(i)}},{key:"lte_tolerance",value:function(t,e){var i=s(t);return this.eq_tolerance(i,e)||this.lt(i)}},{key:"gt_tolerance",value:function(t,e){var i=s(t);return!this.eq_tolerance(i,e)&&this.gt(i)}},{key:"gte_tolerance",value:function(t,e){var i=s(t);return this.eq_tolerance(i,e)||this.gt(i)}},{key:"pLog10",value:function(){return this.lt(g.dZero)?g.dZero:this.log10()}},{key:"absLog10",value:function(){return 0===this.sign?g.dNaN:this.layer>0?u(Math.sign(this.mag),this.layer-1,Math.abs(this.mag)):u(1,0,Math.log10(this.mag))}},{key:"log10",value:function(){return this.sign<=0?g.dNaN:this.layer>0?u(Math.sign(this.mag),this.layer-1,Math.abs(this.mag)):u(this.sign,0,Math.log10(this.mag))}},{key:"log",value:function(t){return t=s(t),this.sign<=0||t.sign<=0||1===t.sign&&0===t.layer&&1===t.mag?g.dNaN:0===this.layer&&0===t.layer?u(this.sign,0,Math.log(this.mag)/Math.log(t.mag)):g.div(this.log10(),t.log10())}},{key:"log2",value:function(){return this.sign<=0?g.dNaN:0===this.layer?u(this.sign,0,Math.log2(this.mag)):1===this.layer?u(Math.sign(this.mag),0,3.321928094887362*Math.abs(this.mag)):2===this.layer?u(Math.sign(this.mag),1,Math.abs(this.mag)+.5213902276543247):u(Math.sign(this.mag),this.layer-1,Math.abs(this.mag))}},{key:"ln",value:function(){return this.sign<=0?g.dNaN:0===this.layer?u(this.sign,0,Math.log(this.mag)):1===this.layer?u(Math.sign(this.mag),0,2.302585092994046*Math.abs(this.mag)):2===this.layer?u(Math.sign(this.mag),1,Math.abs(this.mag)+.36221568869946325):u(Math.sign(this.mag),this.layer-1,Math.abs(this.mag))}},{key:"logarithm",value:function(t){return this.log(t)}},{key:"pow",value:function(t){var e=this,i=s(t);if(0===e.sign)return i.eq(0)?l(1,0,1):e;if(1===e.sign&&0===e.layer&&1===e.mag)return e;if(0===i.sign)return l(1,0,1);if(1===i.sign&&0===i.layer&&1===i.mag)return e;var r=e.absLog10().mul(i).pow10();return-1===this.sign?Math.abs(i.toNumber()%2)%2==1?r.neg():Math.abs(i.toNumber()%2)%2==0?r:g.dNaN:r}},{key:"pow10",value:function(){if(!Number.isFinite(this.layer)||!Number.isFinite(this.mag))return g.dNaN;var t=this;if(0===t.layer){var e=Math.pow(10,t.sign*t.mag);if(Number.isFinite(e)&&Math.abs(e)>=.1)return u(1,0,e);if(0===t.sign)return g.dOne;t=l(t.sign,t.layer+1,Math.log10(t.mag))}return t.sign>0&&t.mag>=0?u(t.sign,t.layer+1,t.mag):t.sign<0&&t.mag>=0?u(-t.sign,t.layer+1,-t.mag):g.dOne}},{key:"pow_base",value:function(t){return s(t).pow(this)}},{key:"root",value:function(t){var e=s(t);return this.pow(e.recip())}},{key:"factorial",value:function(){return this.mag<0||0===this.layer?this.add(1).gamma():1===this.layer?g.exp(g.mul(this,g.ln(this).sub(1))):g.exp(this)}},{key:"gamma",value:function(){if(this.mag<0)return this.recip();if(0===this.layer){if(this.lt(l(1,0,24)))return s(function(t){if(!isFinite(t))return t;if(t<-50)return t===Math.trunc(t)?Number.NEGATIVE_INFINITY:0;for(var e=1;t<10;)e*=t,++t;var i=.9189385332046727;i+=(.5+(t-=1))*Math.log(t),i-=t;var r=t*t,n=t;return i+=1/(12*n),i+=1/(360*(n*=r)),i+=1/(1260*(n*=r)),i+=1/(1680*(n*=r)),i+=1/(1188*(n*=r)),i+=691/(360360*(n*=r)),i+=7/(1092*(n*=r)),i+=3617/(122400*(n*=r)),Math.exp(i)/e}(this.sign*this.mag));var t=this.mag-1,e=.9189385332046727;e+=(t+.5)*Math.log(t);var i=t*t,r=t,n=12*r,a=1/n,u=(e-=t)+a;if(u===e)return g.exp(e);if((u=(e=u)-(a=1/(n=360*(r*=i))))===e)return g.exp(e);e=u;var h=1/(n=1260*(r*=i));return e+=h,e-=h=1/(n=1680*(r*=i)),g.exp(e)}return 1===this.layer?g.exp(g.mul(this,g.ln(this).sub(1))):g.exp(this)}},{key:"lngamma",value:function(){return this.gamma().ln()}},{key:"exp",value:function(){return this.mag<0?g.dOne:0===this.layer&&this.mag<=709.7?s(Math.exp(this.sign*this.mag)):0===this.layer?u(1,1,this.sign*Math.log10(Math.E)*this.mag):1===this.layer?u(1,2,this.sign*(Math.log10(.4342944819032518)+this.mag)):u(1,this.layer+1,this.sign*this.mag)}},{key:"sqr",value:function(){return this.pow(2)}},{key:"sqrt",value:function(){if(0===this.layer)return s(Math.sqrt(this.sign*this.mag));if(1===this.layer)return u(1,2,Math.log10(this.mag)-.3010299956639812);var t=g.div(l(this.sign,this.layer-1,this.mag),l(1,0,2));return t.layer+=1,t.normalize(),t}},{key:"cube",value:function(){return this.pow(3)}},{key:"cbrt",value:function(){return this.pow(1/3)}},{key:"tetrate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l(1,0,1);if(1===t)return g.pow(this,e);if(0===t)return new g(e);if(this.eq(g.dOne))return g.dOne;if(this.eq(-1))return g.pow(this,e);if(t===Number.POSITIVE_INFINITY){var i=this.toNumber();if(i<=1.444667861009766&&i>=.06598803584531254){if(i>1.444667861009099)return new g(Math.E);var r=g.ln(this).neg();return r.lambertw().div(r)}return i>1.444667861009766?new g(Number.POSITIVE_INFINITY):g.dNaN}if(this.eq(g.dZero)){var n=Math.abs((t+1)%2);return n>1&&(n=2-n),new g(n)}if(t<0)return g.iteratedlog(e,this,-t);e=s(e);var a=t,u=a-(t=Math.trunc(t));if(this.gt(g.dZero)&&this.lte(1.444667861009766)){t=Math.min(1e4,t);for(var h=0;h<t;++h){var o=e;if(e=this.pow(e),o.eq(e))return e}if(0!=u){var m=this.pow(e);return e.mul(1-u).add(m.mul(u))}return e}0!==u&&(e.eq(g.dOne)?this.gt(10)?e=this.pow(u):(e=s(g.tetrate_critical(this.toNumber(),u)),this.lt(2)&&(e=e.sub(1).mul(this.minus(1)).plus(1))):e=this.eq(10)?e.layeradd10(u):e.layeradd(u,this));for(var f=0;f<t;++f){if(e=this.pow(e),!isFinite(e.layer)||!isFinite(e.mag))return e.normalize();if(e.layer-this.layer>3)return l(e.sign,e.layer+(t-f-1),e.mag);if(f>1e4)return e}return e}},{key:"iteratedexp",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l(1,0,1);return this.tetrate(t,e)}},{key:"iteratedlog",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e<0)return g.tetrate(t,-e,this);t=s(t);var i=s(this),r=e,n=r-(e=Math.trunc(e));if(i.layer-t.layer>3){var a=Math.min(e,i.layer-t.layer-3);e-=a,i.layer-=a}for(var u=0;u<e;++u){if(i=i.log(t),!isFinite(i.layer)||!isFinite(i.mag))return i.normalize();if(u>1e4)return i}return n>0&&n<1&&(i=t.eq(10)?i.layeradd10(-n):i.layeradd(-n,t)),i}},{key:"slog",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;if((t=s(t)).lte(g.dZero))return g.dNaN;if(t.eq(g.dOne))return g.dNaN;if(t.lt(g.dOne))return this.eq(g.dOne)?g.dZero:this.eq(g.dZero)?g.dNegOne:g.dNaN;if(this.mag<0||this.eq(g.dZero))return g.dNegOne;var e=0,i=s(this);if(i.layer-t.layer>3){var r=i.layer-t.layer-3;e+=r,i.layer-=r}for(var n=0;n<100;++n)if(i.lt(g.dZero))i=g.pow(t,i),e-=1;else{if(i.lte(g.dOne))return s(e+g.slog_critical(t.toNumber(),i.toNumber()));e+=1,i=g.log(i,t)}return s(e)}},{key:"layeradd10",value:function(t){t=g.fromValue_noAlloc(t).toNumber();var e=s(this);if(t>=1){e.mag<0&&e.layer>0?(e.sign=0,e.mag=0,e.layer=0):-1===e.sign&&0==e.layer&&(e.sign=1,e.mag=-e.mag);var i=Math.trunc(t);t-=i,e.layer+=i}if(t<=-1){var r=Math.trunc(t);if(t-=r,e.layer+=r,e.layer<0)for(var n=0;n<100;++n){if(e.layer++,e.mag=Math.log10(e.mag),!isFinite(e.mag))return 0===e.sign&&(e.sign=1),e.layer<0&&(e.layer=0),e.normalize();if(e.layer>=0)break}}for(;e.layer<0;)e.layer++,e.mag=Math.log10(e.mag);return 0===e.sign&&(e.sign=1,0===e.mag&&e.layer>=1&&(e.layer-=1,e.mag=1)),e.normalize(),0!==t?e.layeradd(t,10):e}},{key:"layeradd",value:function(t,e){var i=this.slog(e).toNumber()+t;return i>=0?g.tetrate(e,i):Number.isFinite(i)?i>=-1?g.log(g.tetrate(e,i+1),e):g.log(g.log(g.tetrate(e,i+2),e),e):g.dNaN}},{key:"lambertw",value:function(){if(this.lt(-.3678794411710499))throw Error("lambertw is unimplemented for results less than -1, sorry!");if(this.mag<0)return s(m(this.toNumber()));if(0===this.layer)return s(m(this.sign*this.mag));if(1===this.layer)return f(this);if(2===this.layer)return f(this);if(this.layer>=3)return l(this.sign,this.layer-1,this.mag);throw"Unhandled behavior in lambertw()"}},{key:"ssqrt",value:function(){if(1==this.sign&&this.layer>=3)return l(this.sign,this.layer-1,this.mag);var t=this.ln();return t.div(t.lambertw())}},{key:"pentate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l(1,0,1);e=s(e);var i=t,r=i-(t=Math.trunc(t));0!==r&&(e.eq(g.dOne)?(++t,e=new g(r)):e=this.eq(10)?e.layeradd10(r):e.layeradd(r,this));for(var n=0;n<t;++n){if(e=this.tetrate(e.toNumber()),!isFinite(e.layer)||!isFinite(e.mag))return e.normalize();if(n>10)return e}return e}},{key:"sin",value:function(){return this.mag<0?this:0===this.layer?s(Math.sin(this.sign*this.mag)):l(0,0,0)}},{key:"cos",value:function(){return this.mag<0?g.dOne:0===this.layer?s(Math.cos(this.sign*this.mag)):l(0,0,0)}},{key:"tan",value:function(){return this.mag<0?this:0===this.layer?s(Math.tan(this.sign*this.mag)):l(0,0,0)}},{key:"asin",value:function(){return this.mag<0?this:0===this.layer?s(Math.asin(this.sign*this.mag)):l(Number.NaN,Number.NaN,Number.NaN)}},{key:"acos",value:function(){return this.mag<0?s(Math.acos(this.toNumber())):0===this.layer?s(Math.acos(this.sign*this.mag)):l(Number.NaN,Number.NaN,Number.NaN)}},{key:"atan",value:function(){return this.mag<0?this:0===this.layer?s(Math.atan(this.sign*this.mag)):s(Math.atan(Infinity*this.sign))}},{key:"sinh",value:function(){return this.exp().sub(this.negate().exp()).div(2)}},{key:"cosh",value:function(){return this.exp().add(this.negate().exp()).div(2)}},{key:"tanh",value:function(){return this.sinh().div(this.cosh())}},{key:"asinh",value:function(){return g.ln(this.add(this.sqr().add(1).sqrt()))}},{key:"acosh",value:function(){return g.ln(this.add(this.sqr().sub(1).sqrt()))}},{key:"atanh",value:function(){return this.abs().gte(1)?l(Number.NaN,Number.NaN,Number.NaN):g.ln(this.add(1).div(s(1).sub(this))).div(2)}},{key:"ascensionPenalty",value:function(t){return 0===t?this:this.root(g.pow(10,t))}},{key:"egg",value:function(){return this.add(9)}},{key:"lessThanOrEqualTo",value:function(t){return this.cmp(t)<1}},{key:"lessThan",value:function(t){return this.cmp(t)<0}},{key:"greaterThanOrEqualTo",value:function(t){return this.cmp(t)>-1}},{key:"greaterThan",value:function(t){return this.cmp(t)>0}}],v=[{key:"fromComponents",value:function(t,e,i){return(new g).fromComponents(t,e,i)}},{key:"fromComponents_noNormalize",value:function(t,e,i){return(new g).fromComponents_noNormalize(t,e,i)}},{key:"fromMantissaExponent",value:function(t,e){return(new g).fromMantissaExponent(t,e)}},{key:"fromMantissaExponent_noNormalize",value:function(t,e){return(new g).fromMantissaExponent_noNormalize(t,e)}},{key:"fromDecimal",value:function(t){return(new g).fromDecimal(t)}},{key:"fromNumber",value:function(t){return(new g).fromNumber(t)}},{key:"fromString",value:function(t){return(new g).fromString(t)}},{key:"fromValue",value:function(t){return(new g).fromValue(t)}},{key:"fromValue_noAlloc",value:function(t){return t instanceof g?t:new g(t)}},{key:"abs",value:function(t){return s(t).abs()}},{key:"neg",value:function(t){return s(t).neg()}},{key:"negate",value:function(t){return s(t).neg()}},{key:"negated",value:function(t){return s(t).neg()}},{key:"sign",value:function(t){return s(t).sign}},{key:"sgn",value:function(t){return s(t).sign}},{key:"round",value:function(t){return s(t).round()}},{key:"floor",value:function(t){return s(t).floor()}},{key:"ceil",value:function(t){return s(t).ceil()}},{key:"trunc",value:function(t){return s(t).trunc()}},{key:"add",value:function(t,e){return s(t).add(e)}},{key:"plus",value:function(t,e){return s(t).add(e)}},{key:"sub",value:function(t,e){return s(t).sub(e)}},{key:"subtract",value:function(t,e){return s(t).sub(e)}},{key:"minus",value:function(t,e){return s(t).sub(e)}},{key:"mul",value:function(t,e){return s(t).mul(e)}},{key:"multiply",value:function(t,e){return s(t).mul(e)}},{key:"times",value:function(t,e){return s(t).mul(e)}},{key:"div",value:function(t,e){return s(t).div(e)}},{key:"divide",value:function(t,e){return s(t).div(e)}},{key:"recip",value:function(t){return s(t).recip()}},{key:"reciprocal",value:function(t){return s(t).recip()}},{key:"reciprocate",value:function(t){return s(t).reciprocate()}},{key:"cmp",value:function(t,e){return s(t).cmp(e)}},{key:"cmpabs",value:function(t,e){return s(t).cmpabs(e)}},{key:"compare",value:function(t,e){return s(t).cmp(e)}},{key:"isNaN",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return t=s(t),isNaN(t.sign)||isNaN(t.layer)||isNaN(t.mag)}))},{key:"isFinite",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return t=s(t),isFinite(t.sign)&&isFinite(t.layer)&&isFinite(t.mag)}))},{key:"eq",value:function(t,e){return s(t).eq(e)}},{key:"equals",value:function(t,e){return s(t).eq(e)}},{key:"neq",value:function(t,e){return s(t).neq(e)}},{key:"notEquals",value:function(t,e){return s(t).notEquals(e)}},{key:"lt",value:function(t,e){return s(t).lt(e)}},{key:"lte",value:function(t,e){return s(t).lte(e)}},{key:"gt",value:function(t,e){return s(t).gt(e)}},{key:"gte",value:function(t,e){return s(t).gte(e)}},{key:"max",value:function(t,e){return s(t).max(e)}},{key:"min",value:function(t,e){return s(t).min(e)}},{key:"minabs",value:function(t,e){return s(t).minabs(e)}},{key:"maxabs",value:function(t,e){return s(t).maxabs(e)}},{key:"clamp",value:function(t,e,i){return s(t).clamp(e,i)}},{key:"clampMin",value:function(t,e){return s(t).clampMin(e)}},{key:"clampMax",value:function(t,e){return s(t).clampMax(e)}},{key:"cmp_tolerance",value:function(t,e,i){return s(t).cmp_tolerance(e,i)}},{key:"compare_tolerance",value:function(t,e,i){return s(t).cmp_tolerance(e,i)}},{key:"eq_tolerance",value:function(t,e,i){return s(t).eq_tolerance(e,i)}},{key:"equals_tolerance",value:function(t,e,i){return s(t).eq_tolerance(e,i)}},{key:"neq_tolerance",value:function(t,e,i){return s(t).neq_tolerance(e,i)}},{key:"notEquals_tolerance",value:function(t,e,i){return s(t).notEquals_tolerance(e,i)}},{key:"lt_tolerance",value:function(t,e,i){return s(t).lt_tolerance(e,i)}},{key:"lte_tolerance",value:function(t,e,i){return s(t).lte_tolerance(e,i)}},{key:"gt_tolerance",value:function(t,e,i){return s(t).gt_tolerance(e,i)}},{key:"gte_tolerance",value:function(t,e,i){return s(t).gte_tolerance(e,i)}},{key:"pLog10",value:function(t){return s(t).pLog10()}},{key:"absLog10",value:function(t){return s(t).absLog10()}},{key:"log10",value:function(t){return s(t).log10()}},{key:"log",value:function(t,e){return s(t).log(e)}},{key:"log2",value:function(t){return s(t).log2()}},{key:"ln",value:function(t){return s(t).ln()}},{key:"logarithm",value:function(t,e){return s(t).logarithm(e)}},{key:"pow",value:function(t,e){return s(t).pow(e)}},{key:"pow10",value:function(t){return s(t).pow10()}},{key:"root",value:function(t,e){return s(t).root(e)}},{key:"factorial",value:function(t,e){return s(t).factorial()}},{key:"gamma",value:function(t,e){return s(t).gamma()}},{key:"lngamma",value:function(t,e){return s(t).lngamma()}},{key:"exp",value:function(t){return s(t).exp()}},{key:"sqr",value:function(t){return s(t).sqr()}},{key:"sqrt",value:function(t){return s(t).sqrt()}},{key:"cube",value:function(t){return s(t).cube()}},{key:"cbrt",value:function(t){return s(t).cbrt()}},{key:"tetrate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l(1,0,1);return s(t).tetrate(e,i)}},{key:"iteratedexp",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l(1,0,1);return s(t).iteratedexp(e,i)}},{key:"iteratedlog",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return s(t).iteratedlog(e,i)}},{key:"layeradd10",value:function(t,e){return s(t).layeradd10(e)}},{key:"layeradd",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return s(t).layeradd(e,i)}},{key:"slog",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s(t).slog(e)}},{key:"lambertw",value:function(t){return s(t).lambertw()}},{key:"ssqrt",value:function(t){return s(t).ssqrt()}},{key:"pentate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l(1,0,1);return s(t).pentate(e,i)}},{key:"affordGeometricSeries",value:function(t,e,i,r){return this.affordGeometricSeries_core(s(t),s(e),s(i),r)}},{key:"sumGeometricSeries",value:function(t,e,i,r){return this.sumGeometricSeries_core(t,s(e),s(i),r)}},{key:"affordArithmeticSeries",value:function(t,e,i,r){return this.affordArithmeticSeries_core(s(t),s(e),s(i),s(r))}},{key:"sumArithmeticSeries",value:function(t,e,i,r){return this.sumArithmeticSeries_core(s(t),s(e),s(i),s(r))}},{key:"efficiencyOfPurchase",value:function(t,e,i){return this.efficiencyOfPurchase_core(s(t),s(e),s(i))}},{key:"randomDecimalForTesting",value:function(t){if(20*Math.random()<1)return l(0,0,0);var e=Math.random()>.5?1:-1;if(20*Math.random()<1)return l(e,0,1);var i=Math.floor(Math.random()*(t+1)),r=0===i?616*Math.random()-308:16*Math.random();Math.random()>.9&&(r=Math.trunc(r));var n=Math.pow(10,r);return Math.random()>.9&&(n=Math.trunc(n)),u(e,i,n)}},{key:"affordGeometricSeries_core",value:function(t,e,i,r){var n=e.mul(i.pow(r));return g.floor(t.div(n).mul(i.sub(1)).add(1).log10().div(i.log10()))}},{key:"sumGeometricSeries_core",value:function(t,e,i,r){return e.mul(i.pow(r)).mul(g.sub(1,i.pow(t))).div(g.sub(1,i))}},{key:"affordArithmeticSeries_core",value:function(t,e,i,r){var n=e.add(r.mul(i)).sub(i.div(2)),a=n.pow(2);return n.neg().add(a.add(i.mul(t).mul(2)).sqrt()).div(i).floor()}},{key:"sumArithmeticSeries_core",value:function(t,e,i,r){var n=e.add(r.mul(i));return t.div(2).mul(n.mul(2).plus(t.sub(1).mul(i)))}},{key:"efficiencyOfPurchase_core",value:function(t,e,i){return t.div(e).add(t.div(i))}},{key:"slog_critical",value:function(t,e){return t>10?e-1:g.critical_section(t,e,a)}},{key:"tetrate_critical",value:function(t,e){return g.critical_section(t,e,n)}},{key:"critical_section",value:function(t,e,i){(e*=10)<0&&(e=0),e>10&&(e=10),t<2&&(t=2),t>10&&(t=10);for(var n=0,a=0,s=0;s<r.length;++s){if(r[s]==t){n=i[s][Math.floor(e)],a=i[s][Math.ceil(e)];break}if(r[s]<t&&r[s+1]>t){var u=(t-r[s])/(r[s+1]-r[s]);n=i[s][Math.floor(e)]*(1-u)+i[s+1][Math.floor(e)]*u,a=i[s][Math.ceil(e)]*(1-u)+i[s+1][Math.ceil(e)]*u;break}}var l=e-Math.floor(e);return n*(1-l)+a*l}}],y&&t(c.prototype,y),v&&t(c,v),g}();return c.dZero=l(0,0,0),c.dOne=l(1,0,1),c.dNegOne=l(-1,0,1),c.dTwo=l(1,0,2),c.dTen=l(1,0,10),c.dNaN=l(Number.NaN,Number.NaN,Number.NaN),c.dInf=l(1,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),c.dNegInf=l(-1,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),c.dNumberMax=u(1,0,Number.MAX_VALUE),c.dNumberMin=u(1,0,Number.MIN_VALUE),c}));