"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=u(function(v,f){
var n=require('@stdlib/ndarray-base-strides2offset/dist');function o(e){var r,t,s;return s=e.offset,typeof s=="number"?s:(t=e.shape,t.length===0||(r=e.strides,typeof r!="object"||r===null)?0:n(t,r))}f.exports=o
});var a=i();module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
