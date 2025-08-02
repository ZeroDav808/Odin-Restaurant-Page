export function loadMenu() {
    const content = document.querySelector('#content');

    content.innerHTML = '';

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';

    const header = document.createElement('h1');
    header.textContent = 'Our Menu';
    header.id = 'menu-header';

    const menuList = document.createElement('ul');
    menuList.id = 'menu-list';

    const menuItems = [
        { name: 'Caprese Skewers', description: 'Fresh mozzarella, cherry tomatoes, and basil.', price: '$8.99' },
        { name: 'Bruschetta', description: 'Toasted bread topped with fresh tomatoes.', price: '$7.50' },
        { name: 'Grilled Salmon', description: 'Pan-seared salmon with roasted asparagus.', price: '$21.99' },
        { name: 'Mushroom Risotto', description: 'Creamy Arborio rice with assorted mushrooms.', price: '$18.50' },
        { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center.', price: '$9.00' },
        { name: 'Tiramisu', description: 'Classic coffee-flavored Italian dessert.', price: '$8.50' },
    ];

    menuItems.forEach(item => {
        const listItem = document.createElement('li');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;

        listItem.append(itemName, itemDescription, itemPrice);

        menuList.append(listItem);
    });

    menuContainer.append(header, menuList);

    content.append(menuContainer);
}
