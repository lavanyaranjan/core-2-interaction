// Function to create a table with the given ID and recipes
function createTable(id, recipes) {
    var table = document.getElementById(id);
    table.innerHTML = '';
    var header = table.createTHead();
    var row = header.insertRow(0);
    row.insertCell(0).outerHTML = "<th>Name</th>";
    row.insertCell(1).outerHTML = "<th>No. of Ingredients</th>";
    row.insertCell(2).outerHTML = "<th>Cooking Time</th>";

    var tbody = document.createElement('tbody');
    recipes.forEach(function(recipe) {
        var row = tbody.insertRow();
        var nameCell = row.insertCell(0);
        nameCell.innerHTML = `<a href="${recipe.link}" target="_blank">${recipe.name}</a>`;
        row.insertCell(1).textContent = recipe.no_of_ingredients;
        row.insertCell(2).textContent = recipe.cooking_time;
    });
    table.appendChild(tbody);
}

// Function to sort the table by the given column
function sortTable(id, column) {
    var table = document.getElementById(id);
    var tbody = table.querySelector('tbody');
    var rows = Array.from(tbody.rows);
    rows.sort((a, b) => {
        var aValue = a.cells[column === 'cooking_time' ? 3 : 2].textContent;
        var bValue = b.cells[column === 'cooking_time' ? 3 : 2].textContent;
        return column === 'cooking_time' ? timeStringToMinutes(aValue) - timeStringToMinutes(bValue) : parseInt(aValue) - parseInt(bValue);
    });
    rows.forEach(row => tbody.appendChild(row));
}

// Function to convert cooking time string to minutes for sorting
function timeStringToMinutes(timeString) {
    var parts = timeString.split('-');
    var min = parseInt(parts[0]);
    var max = parseInt(parts[1]);
    return (min + max) / 2; // Return average time for sorting
}

// Create tables for each flavour
createTable('spicy', data.filter(recipe => recipe.flavour === 'Spicy'));
createTable('savoury', data.filter(recipe => recipe.flavour === 'Savoury'));
createTable('sweet', data.filter(recipe => recipe.flavour === 'Sweet'));
createTable('tangy', data.filter(recipe => recipe.flavour === 'Tangy'));
