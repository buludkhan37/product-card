import { allProducts } from "./products.js";

const productTemplate = document.getElementById('product-template');
const products = document.getElementById('products');
const paragraphTemplate = document.getElementById('paragraph-template');

// 4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const newProducts = allProducts.reduce((acc, product) => {
    acc.push({ [product.title] : product.description });
    return acc;
}, []);

console.log(newProducts);

function countOfProducts() {
    const count = +prompt('Сколько карточек показать? От 1 до 5');

    return count >= 1 && count <= 5 ? count : null;
}

const count = countOfProducts();

if (count !== null) {
    showProductsCards(allProducts, count);

    changeProductCardColor();
} else {
    createParagraph();
}

function createParagraph() {
    const paragraphCopy = paragraphTemplate.content.cloneNode(true);
    paragraphCopy.querySelector('.product-card__paragraph').textContent = 'Количество карточек должно быть от 1 до 5. Обновите страницу и попробуйте ещё раз.';

    products.append(paragraphCopy);
}

function showProductsCards(productsArray, count) {
    productsArray.slice(0, count).forEach(product => {
        const productCopy = productTemplate.content.cloneNode(true);
        productCopy.querySelector('.product-card__image').src = product.img;
        productCopy.querySelector('.product-card__skin-type').textContent = product.skinType;
        productCopy.querySelector('.product-card__title').textContent = product.title;
        productCopy.querySelector('.product-card__description').textContent = product.description;
        productCopy.querySelector('.product-card__price-value').textContent = product.priceValue;
        const compoundLists = productCopy.querySelector('.product-card__compounds-lists');

        product.compoundLists.forEach(compound => {
            const li = document.createElement('li');

            li.textContent = compound;
            compoundLists.appendChild(li)
        })

        products.appendChild(productCopy);
    })
}

function changeProductCardColor() {
    const chgColorBtns = document.querySelectorAll(
        '.actions__button-change-color'
    );

    chgColorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.product-card');

            card.classList.toggle('product-card--active');
        });
    });
}