console.log(data);

// Select your container element.
var containerElement = document.querySelector('.Container');

// Define the insert function with a parameter.
function insertDataItem(dataItem) {
    // Update this to your match your collection's metadata.
    containerElement.innerHTML += `
        <div class="Recipe">
            <p>Name: ${dataItem['name']}</p>
            <p>Link: <a href="${dataItem['link']}" target="_blank">${dataItem['link']}</a></p>
            <p>Flavour: ${dataItem['flavour']}</p>
            <p>Number of Ingredients: ${dataItem['no_of_ingredients']}</p>
            <p>Cooking Time: ${dataItem['cooking_time']}</p>
        </div>
    `;
}

// Run the insert function for every element in the collection array
data.forEach((dataItem) => {
    insertDataItem(dataItem);
});

