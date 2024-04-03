function createTable(id, recipes, ingredientCount) {
    var table = document.getElementById(id);
    table.innerHTML = '';
    var header = table.createTHead();
    var row = header.insertRow(0);
    row.insertCell(0).outerHTML = "<th>Name</th>";
    row.insertCell(1).outerHTML = "<th>Flavour</th>";
    row.insertCell(2).outerHTML = "<th>Cooking Time</th>";

    var tbody = document.createElement('tbody');
    recipes.forEach(function(recipe) {
        if (parseInt(recipe.no_of_ingredients) === ingredientCount) {
            var row = tbody.insertRow();
            row.insertCell(0).innerHTML = `<a href="${recipe.link}" target="_blank">${recipe.name}</a>`;
            row.insertCell(1).textContent = recipe.flavour;
            row.insertCell(2).textContent = recipe.cooking_time;
        }
    });
    table.appendChild(tbody);
}

function sortTable(id, column) {
    var table = document.getElementById(id);
    var tbody = table.querySelector('tbody');
    var rows = Array.from(tbody.rows);
    rows.sort((a, b) => {
        var aValue = a.cells[column === 'cooking_time' ? 2 : 1].textContent;
        var bValue = b.cells[column === 'cooking_time' ? 2 : 1].textContent;
        return column === 'cooking_time' ? timeStringToMinutes(aValue) - timeStringToMinutes(bValue) : aValue.localeCompare(bValue);
    });
    rows.forEach(row => tbody.appendChild(row));
}

function timeStringToMinutes(timeString) {
    var parts = timeString.split('-');
    var min = parseInt(parts[0]);
    var max = parseInt(parts[1]);
    return (min + max) / 2; // Return average time for sorting
}

// Create tables for each number of ingredients
createTable('5-ingredients', data, 5);
createTable('6-ingredients', data, 6);
createTable('7-ingredients', data, 7);
createTable('8-ingredients', data, 8);
createTable('9-ingredients', data, 9);
createTable('10-ingredients', data, 10);
createTable('11-ingredients', data, 11);