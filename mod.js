// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){var t,n,r;return"number"==typeof(r=e.offset)?r:0===(n=e.shape).length||"object"!=typeof(t=e.strides)||null===t?0:function(e,t){var n,r,f;for(r=e.length,n=0,f=0;f<r;f++)t[f]<0&&(n-=t[f]*(e[f]-1));return n}(n,t)}export{e as default};
//# sourceMappingURL=mod.js.map
