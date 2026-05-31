"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=f(function(p,i){
var n=require('@stdlib/assert-is-number/dist').isPrimitive,o=require('@stdlib/ndarray-base-strides2offset/dist');function a(e){var r,t,s;return s=e.offset,n(s)?s:(t=e.shape,t.length===0||(r=e.strides,typeof r!="object"||r===null)?0:o(t,r))}i.exports=a
});var v=u();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
