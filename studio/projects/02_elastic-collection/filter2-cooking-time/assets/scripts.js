// Function to create a table with the given ID and recipes
function createTable(id, recipes) {
    var table = document.getElementById(id);
    table.innerHTML = '';
    var header = table.createTHead();
    var row = header.insertRow(0);
    row.insertCell(0).outerHTML = "<th>Name</th>";
    row.insertCell(1).outerHTML = "<th>No. of Ingredients</th>";
    row.insertCell(2).outerHTML = "<th>Flavour</th>";

    var tbody = document.createElement('tbody');
    recipes.forEach(function(recipe) {
        var row = tbody.insertRow();
        var nameCell = row.insertCell(0);
        nameCell.innerHTML = `<a href="${recipe.link}" target="_blank">${recipe.name}</a>`;
        row.insertCell(1).textContent = recipe.no_of_ingredients;
        row.insertCell(2).textContent = recipe.flavour;
    });
    table.appendChild(tbody);
}

// Function to sort the table by the given column
function sortTable(id, column) {
    var table = document.getElementById(id);
    var tbody = table.querySelector('tbody');
    var rows = Array.from(tbody.rows);
    rows.sort((a, b) => {
        var aValue = a.cells[column === 'flavour' ? 2 : 1].textContent;
        var bValue = b.cells[column === 'flavour' ? 2 : 1].textContent;
        return column === 'flavour' ? aValue.localeCompare(bValue) : parseInt(aValue) - parseInt(bValue);
    });
    rows.forEach(row => tbody.appendChild(row));
}

// Create tables for each cooking time
createTable('0-15 mins', data.filter(recipe => recipe.cooking_time === '0-15 mins'));
createTable('15-30 mins', data.filter(recipe => recipe.cooking_time === '15-30 mins'));
createTable('30-45 mins', data.filter(recipe => recipe.cooking_time === '30-45 mins'));
createTable('45-60 mins', data.filter(recipe => recipe.cooking_time === '45-60 mins'));