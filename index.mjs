// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@v0.2.3-esm/index.mjs";function t(t){var r,n,d;return d=t.offset,s(d)?d:0===(n=t.shape).length||"object"!=typeof(r=t.strides)||null===r?0:e(n,r)}export{t as default};
//# sourceMappingURL=index.mjs.map
