const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]

let menuList = document.querySelectorAll(".menu")[1];
for(let i=0; i<menuItems.length; i++) {
    let m = menuItems[i];
    menuList.insertAdjacentHTML('afterbegin', 
    `<li class="menu-items">
        <div class="plate">
        <img src="images/${m.image}" alt="${m.alt}" class="plate" />
        </div>
        <div class="content">
        <p class="menu-item">${m.name}</p>
        <p class="price">$${m.price/100}</p>
        <button id="btn-${i}" class="add">Add to Cart</button>
        </div>
    </li>`
    )
}