import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
// const searchParams = new URLSearchParams({
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: 40,
// });

export default class TestyApiService {
    constructor() {
        this.params = {};
        this.params.category = '';
        this.params.limit = 9;
    }

    async getCategories() {
        const response = await axios.get(
            `${BASE_URL}/categories`
        );
        return response.data;
    }

    setCategory(name) {
        this.params.category = name;
    }

    setPerPage(num) {
        this.params.limit = num;
    }

    setSearchText(name) {
        this.params.st = name;
    }

    async getRecipes() {
        const response = await axios.get(
            `${BASE_URL}/recipes`
            , {
                params: this.params
            }
        );
        return response.data;
    }
}
