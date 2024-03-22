// An array of objects representing my collection:
var data = [
    {
        name: 'Sriracha Scrambled Eggs',
        link: 'https://allrecipes.com/recipe/238457/sriracha-scrambled-eggs/',
        flavour: 'Salty',
        no_of_ingredients: 5,
        cooking_time: '0-15 mins'
    },
    {
        name: 'Honey Garlic Shrimp',
        link: 'https://www.jocooks.com/recipes/honey-garlic-shrimp/',
        flavour: 'Sweet',
        no_of_ingredients: 8,
        cooking_time: '0-15 mins'
    },
    {
        name: 'Balsamic Glazed Chicken',
        link: 'https://www.foodnetwork.com/recipes/ina-garten/balsamic-chicken-recipe-1942047',
        flavour: 'Sweet',
        no_of_ingredients: 6,
        cooking_time: '15-30 mins'
    },
    {
        name: 'Creamy Pesto Penne with Sausage',
        link: 'https://www.allrecipes.com/recipe/237843/creamy-pesto-penne-with-sausage/',
        flavour: 'Tangy',
        no_of_ingredients: 5,
        cooking_time: '15-30 mins'
    },
    {
        name: 'Creamy Parmesan Polenta',
        link: 'https://www.allrecipes.com/recipe/242008/creamy-parmesan-polenta/',
        flavour: 'Salty',
        no_of_ingredients: 5,
        cooking_time: '0-15 mins'
    },
    {
        name: 'Garlic Roasted Broccoli',
        link: 'https://www.allrecipes.com/recipe/239193/garlic-roasted-broccoli/',
        flavour: 'Spicy',
        no_of_ingredients: 5,
        cooking_time: '15-30 mins'
    },
    {
        name: 'Spicy Peanut Noodles',
        link: 'https://www.budgetbytes.com/spicy-noodles/',
        flavour: 'Spicy',
        no_of_ingredients: 10,
        cooking_time: '15-30 mins'
    },
    {
        name: 'Left Over Spaghetti Lasagna',
        link: 'https://www.allrecipes.com/recipe/220599/left-over-spaghetti-lasagna/',
        flavour: 'Savoury',
        no_of_ingredients: 5,
        cooking_time: '45-60 mins'
    },
    {
        name: 'Mexi-Chicken Avocado Cups',
        link: 'https://www.allrecipes.com/recipe/240581/mexi-chicken-avocado-cups/',
        flavour: 'Tangy',
        no_of_ingredients: 5,
        cooking_time: '0-15 mins'
    },
    {
        name: 'Creamy Tuscan Chicken',
        link: 'https://www.delish.com/cooking/recipe-ideas/a25747099/creamy-tuscan-chicken-recipe/',
        flavour: 'Savoury',
        no_of_ingredients: 9,
        cooking_time: '30-45 mins'
    },
    {
        name: 'Eggs n\' Fries',
        link: 'https://www.allrecipes.com/recipe/242100/eggs-n-fries/',
        flavour: 'Savoury',
        no_of_ingredients: 4,
        cooking_time: '0-15 mins'
    },
    {
        name: 'Honey Mustard Chicken',
        link: 'https://www.bbcgoodfood.com/recipes/honey-mustard-chicken',
        flavour: 'Sweet',
        no_of_ingredients: 5,
        cooking_time: '30-45 mins'
    },
    {
        name: 'Sausage with Peppers and Potatoes',
        link: 'https://www.allrecipes.com/recipe/85127/kielbasa-with-peppers-and-potatoes/',
        flavour: 'Savoury',
        no_of_ingredients: 5,
        cooking_time: '30-45 mins'
    },
    {
        name: 'Tatertot Casserole',
        link: 'https://www.allrecipes.com/recipe/222037/tater-tots-r-casserole/',
        flavour: 'Savoury',
        no_of_ingredients: 5,
        cooking_time: '30-45 mins'
    },
    {
        name: 'Mini Salsa Pizzas',
        link: 'https://www.allrecipes.com/recipe/237838/quick-and-easy-mini-salsa-pizzas/',
        flavour: 'Tangy',
        no_of_ingredients: 5,
        cooking_time: '0-15 mins'
    },
    {
        name: 'Microwave Brownie',
        link: 'https://www.allrecipes.com/recipe/246940/individual-microwave-brownie/',
        flavour: 'Sweet',
        no_of_ingredients: 9,
        cooking_time: '0-15 mins'
    },
    {
        name: 'Extra Easy Hummus',
        link: 'https://www.allrecipes.com/recipe/20797/extra-easy-hummus/',
        flavour: 'Savoury',
        no_of_ingredients: 5,
        cooking_time: '0-15 mins'
    },
    {
        name: 'Tofu Lo-Mein',
        link: 'https://www.allrecipes.com/recipe/64678/fast-and-easy-tofu-lo-mein/',
        flavour: 'Tangy',
        no_of_ingredients: 6,
        cooking_time: '15-30 mins'
    },
    {
        name: 'Peanut Butter Mousse',
        link: 'https://www.allrecipes.com/recipe/255223/healthy-peanut-butter-mousse/',
        flavour: 'Sweet',
        no_of_ingredients: 5,
        cooking_time: '0-15 mins'
    }
    {
        name: 'Tangy Tamarind Rice',
        link: 'https://www.vegrecipesofindia.com/tamarind-rice-recipe/',
        flavour: 'Tangy',
        no_of_ingredients: 8,
        cooking_time: '15-30 mins'
    },
    {
        name: 'Single-Serving Cookie',
        link: 'https://www.allrecipes.com/recipe/275218/no-self-control-cookie-single-serving-cookie/',
        flavour: 'Sweet',
        no_of_ingredients: 7,
        cooking_time: '0-15 mins'
    },
    {
        name: 'Savory Mushroom Risotto',
        link: 'https://www.bbcgoodfood.com/recipes/mushroom-risotto',
        flavour: 'Savoury',
        no_of_ingredients: 9,
        cooking_time: '30-45 mins'
    },
    {
        name: 'Red Curry Chicken',
        link: 'https://www.allrecipes.com/recipe/261479/five-ingredient-red-curry-chicken/',
        flavour: 'Tangy',
        no_of_ingredients: 5,
        cooking_time: '15-30 mins'
    },
    {
        name: 'Tangy Lemon Chicken',
        link: 'https://www.recipetineats.com/lemon-chicken/',
        flavour: 'Tangy',
        no_of_ingredients: 11,
        cooking_time: '30-45 mins'
    },
    {
        name: 'Spaghetti Carbonara I',
        link: 'https://www.allrecipes.com/recipe/11791/spaghetti-carbonara-i/',
        flavour: 'Savoury',
        no_of_ingredients: 5,
        cooking_time: '15-30 mins'
    },
    {
        name: 'Salted Chocolate-Peanut Butter Vegan Nice Cream',
        link: 'https://www.allrecipes.com/recipe/265341/salted-chocolate-peanut-butter-vegan-nice-cream/',
        flavour: 'Sweet',
        no_of_ingredients: 11,
        cooking_time: '0-15 mins'
    },
    {
        name: 'Sweet Potato and Lentil Soup',
        link: 'https://www.bbcgoodfood.com/recipes/sweet-potato-lentil-soup',
        flavour: 'Sweet',
        no_of_ingredients: 8,
        cooking_time: '30-45 mins'
    },
    {
        name: 'Avocado Toast (Vegan)',
        link: 'https://www.allrecipes.com/recipe/246803/avocado-toast-vegan/',
        flavour: 'Savoury',
        no_of_ingredients: 9,
        cooking_time: '0-15 mins'
    },
    {
        name: 'Meatball Sub Casserole',
        link: 'https://www.allrecipes.com/recipe/230994/meatball-sub-casserole/',
        flavour: 'Savoury',
        no_of_ingredients: 5,
        cooking_time: '45-60 mins'
    },
    {
        name: 'Honey Garlic Chicken Stir Fry',
        link: 'https://www.dinneratthezoo.com/honey-garlic-chicken-stir-fry/',
        flavour: 'Sweet',
        no_of_ingredients: 10,
        cooking_time: '15-30 mins'
    }
];