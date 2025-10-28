const initialItems = [
    'Laptop',
    'Smartphone',
    'Headphones',
    'Keyboard',
    'Mouse',
    'Monitor',
    'Webcam',
    'Printer',
    'Router',
    'Tablet'
];

const itemList = document.getElementById('itemList');
const searchInput = document.getElementById('searchInput');

function renderList(itemsToDisplay) {
    itemList.innerHTML = '';
    itemsToDisplay.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

function filterItems() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = initialItems.filter(item => 
        item.toLowerCase().includes(searchTerm)
    );
    renderList(filteredItems);
}

searchInput.addEventListener('input', filterItems);

document.addEventListener('DOMContentLoaded', () => {
    renderList(initialItems);
});