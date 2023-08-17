import TestyApiService from './testyApiService';
const testyApiService = new TestyApiService();
const recipeList = document.querySelector('.recipe-list');
const categoryList = document.querySelector('.category-list');

categoryList.addEventListener("click", function (e) {
    console.log(e.target.dataset.recipeCategory);
    testyApiService.setCategory(e.target.dataset.recipeCategory);
    renewRecipes();
});

//ОТРИМУЄМО СПИСОК КАТЕГОРІЙ ПРИ ЗАВАНТАЖЕНІ СТОРІНКИ
testyApiService.getCategories().then(data => {
    data.forEach(category => {
        categoryList.innerHTML += `<li><button data-recipe-category="${category.name}">${category.name}</button></li>`;
    });
}).then(console.log('bebebebe'));

//ОТРИМУЄМО СПИСОК РЕЦЕПТІВ ПРИ ЗАВАНТАЖЕНІ СТОРІНКИ
renewRecipes();

function renewRecipes() {
    recipeList.innerHTML = '';
    testyApiService.getRecipes().then(data => {
        data.results.forEach(recipe => {
            recipeList.innerHTML += `<li>${recipe.title}</li>`
        });
        console.log(data)
    });
}

