!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);for(var r=new(0,a("kpS0W").default),o=document.querySelector(".category-list"),c=document.querySelector(".cards"),i=document.querySelector(".filter-input"),l=document.querySelector(".area"),d=document.querySelector(".ingrediends"),u=document.querySelector(".time"),s=document.querySelector(".all-category-btn"),g=5;g<=120;g+=5){var f=document.createElement("option");f.value=g,f.innerHTML=g,u.appendChild(f)}function p(){c.innerHTML="",r.getRecipes().then((function(e){e.results.forEach((function(e){c.innerHTML+='<div><img class="card-img" src="'.concat(e.preview,'"/></div>')})),console.log(e)}))}i.addEventListener("change",(function(e){console.log(e.target.value.trim()),r.setSearchText(e.target.value.trim()),p()})),d.addEventListener("change",(function(e){console.log(e.target.value),r.setSearchIngredient(e.target.value),p()})),l.addEventListener("change",(function(e){console.log(e.target.selectedOptions[0].dataset.param),r.setSearchArea(e.target.selectedOptions[0].dataset.param),p()})),o.addEventListener("click",(function(e){console.log(e.target.dataset.recipeCategory),r.setCategory(e.target.dataset.recipeCategory),p()})),u.addEventListener("change",(function(e){console.log(e.target.value),r.setSearchTime(e.target.value),p()})),s.addEventListener("click",(function(){r.setCategory(""),p()})),r.getCategories().then((function(e){e.forEach((function(e){o.innerHTML+='<li><button class="category-btn" data-recipe-category="'.concat(e.name,'">').concat(e.name,"</button></li>")}))})),r.getAreas().then((function(e){e.forEach((function(e){var t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,t.dataset.param=e.name,l.appendChild(t)}))})),r.getIngredients().then((function(e){e.forEach((function(e){var t=document.createElement("option");t.value=e._id,t.innerHTML=e.name,d.appendChild(t)}))})),p()}();
//# sourceMappingURL=index.a4762a34.js.map