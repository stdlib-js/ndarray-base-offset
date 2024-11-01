// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";return function(e){var t,n,f;return"number"==typeof(f=e.offset)?f:0===(n=e.shape).length||"object"!=typeof(t=e.strides)||null===t?0:function(e,t){var n,f,o;for(f=e.length,n=0,o=0;o<f;o++)t[o]<0&&(n-=t[o]*(e[o]-1));return n}(n,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).offset=t();
//# sourceMappingURL=index.js.map
