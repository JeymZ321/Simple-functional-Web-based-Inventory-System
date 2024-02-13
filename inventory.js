const itemsList = document.getElementById('items-list');
const itemNameInput = document.getElementById('item-name');
const itemQuantityInput = document.getElementById('item-quantity');

function addItem() {

    const itemName = itemNameInput.value.trim();
    const itemQuantity = parseInt(itemQuantityInput.value);

    if (itemName === '' || isNaN(itemQuantity)) {

        alert('Please enter valid item name and quantity.');
        return;
    }

    const item = document.createElement('li');
    item.className = 'item';
    item.innerHTML = `<strong>${itemName}</strong>: ${itemQuantity} units`;
    item.addEventListener('click', () => {
        editItem(item);
    });
    
    itemsList.appendChild(item);

    itemNameInput.value = '';
    itemQuantityInput.value = '';

   
}

function clearFields() {

    itemNameInput.value = '';
    itemQuantityInput.value = '';

    itemNameInput.classList.add('button-click-animation');
    itemQuantityInput.classList.add('button-click-animation');
}

function clearInventory() {

    itemsList.innerHTML = '';
   
}

function searchItems() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const items = itemsList.getElementsByTagName('li');

    for (let item of items) {
        const itemName = item.textContent.toLowerCase();
        if (itemName.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
}

function editItem(item) {
    const itemName = item.querySelector('strong').textContent;
    const itemQuantity = parseInt(item.textContent.match(/\d+/)[0]); // Extracts the quantity from the text
    itemNameInput.value = itemName;
    itemQuantityInput.value = itemQuantity;
    item.remove();
}

function addEditButton(item) {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        editItem(item);
    };
    item.appendChild(editButton);
}