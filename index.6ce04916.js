!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n),n.register("kpS0W",(function(t,r){var a,s,i,u;a=t.exports,s="default",i=function(){return g},Object.defineProperty(a,s,{get:i,set:u,enumerable:!0,configurable:!0});var c=n("bpxeT"),o=n("8MBJY"),p=n("a2hTj"),f=n("2TvXO"),l=n("dIxxU"),d="https://tasty-treats-backend.p.goit.global/api",g=function(){"use strict";function t(){e(o)(this,t),this.params={},this.params.category="",this.params.limit=9,this.params.title="",this.params.ingredient="",this.params.area="",this.params.time=""}return e(p)(t,[{key:"getCategories",value:function(){return e(c)(e(f).mark((function t(){var r;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.default.get("".concat(d,"/categories"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),t)})))()}},{key:"setCategory",value:function(e){this.params.category=e}},{key:"setPerPage",value:function(e){this.params.limit=e}},{key:"setSearchText",value:function(e){this.params.title=e}},{key:"setSearchIngredient",value:function(e){this.params.ingredient=e}},{key:"setSearchArea",value:function(e){this.params.area=e}},{key:"getRecipes",value:function(){var t=this;return e(c)(e(f).mark((function r(){var a;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.default.get("".concat(d,"/recipes"),{params:t.params});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),r)})))()}},{key:"getAreas",value:function(){return e(c)(e(f).mark((function t(){var r;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.default.get("".concat(d,"/areas"));case 2:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),t)})))()}},{key:"getIngredients",value:function(){return e(c)(e(f).mark((function t(){var r;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.default.get("".concat(d,"/ingredients"));case 2:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),t)})))()}},{key:"setSearchTime",value:function(e){this.params.time=e}}]),t}()})),n("kpS0W")}();
//# sourceMappingURL=index.6ce04916.js.map