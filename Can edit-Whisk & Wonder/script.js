/* =========================
   HOME ADVERTISEMENT
========================= */

let currentSlide = 0;

let slides = document.querySelectorAll(".ad-slide");

function changeAd() {

    if (slides.length === 0) {
        return;
    }

    slides[currentSlide].classList.remove("active-slide");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active-slide");
}

setInterval(changeAd, 3500);


/* =========================
   HOME SEARCH
========================= */

function searchHome() {

    let search = document.getElementById("homeSearch").value;

    if (search.trim() === "") {

        alert("Please enter an ingredient!");

        return;
    }

    window.location.href =
        "recipes.html?search=" +
        encodeURIComponent(search);
}


/* =========================
   RECIPE SEARCH
========================= */

function filterRecipes() {

    let input =
        document.getElementById("recipeSearch");

    let filter =
        input.value.toLowerCase();

    let difficulty =
        document.getElementById("difficultyFilter").value;

    let cards =
        document.querySelectorAll(".recipe-card");


    cards.forEach(function(card) {

        let name =
            card.dataset.name.toLowerCase();

        let level =
            card.dataset.difficulty;


        let nameMatch =
            name.includes(filter);

        let difficultyMatch =
            difficulty === "all" ||
            difficulty === level;


        if (nameMatch && difficultyMatch) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   RECIPE INFORMATION
========================= */

let recipeData = {

    "Strawberry Shortcake": {

        ingredients: [
            "Strawberries",
            "Flour",
            "Sugar",
            "Whipped cream",
            "Milk"
        ],

        steps: [
        "Wash and slice the strawberries.",
        "Mix the flour, sugar and milk to make the shortcake batter.",
        "Bake the shortcake until golden.",
        "Let the cake cool before decorating.",
        "Add whipped cream and strawberries between the layers.",
        "Serve fresh and enjoy!"
        ],

        instructions:
        "Bake the shortcake until golden. Slice the strawberries and prepare the cream. Layer the cake with strawberries and cream, then serve."
    },


    "Chocolate Brownies": {

        ingredients: [
            "Chocolate",
            "Butter",
            "Flour",
            "Sugar",
            "Eggs"
        ],

        instructions:
        "Melt the chocolate and butter. Mix with sugar and eggs. Add flour and bake until the center is slightly soft."
    },


    "Banana Pancakes": {

        ingredients: [
            "Banana",
            "Flour",
            "Egg",
            "Milk",
            "Sugar"
        ],

        instructions:
        "Mash the banana. Mix all ingredients together. Cook small pancakes in a pan until golden on both sides."
    },


    "Blueberry Muffins": {

        ingredients: [
            "Blueberries",
            "Flour",
            "Sugar",
            "Milk",
            "Egg"
        ],

        instructions:
        "Mix the dry ingredients. Add milk and egg. Fold in blueberries and bake until golden."
    },


    "Mango Sticky Rice": {

        ingredients: [
            "Mango",
            "Sticky rice",
            "Coconut milk",
            "Sugar",
            "Salt"
        ],

        instructions:
        "Cook the sticky rice. Heat coconut milk with sugar and salt. Mix with the rice and serve with fresh mango."
    },


    "Lemon Cookies": {

        ingredients: [
            "Lemon",
            "Flour",
            "Butter",
            "Sugar",
            "Egg"
        ],

        instructions:
        "Mix butter and sugar. Add egg and lemon zest. Mix in flour and bake until the edges are lightly golden."
    },


    "Classic Cheesecake": {

        ingredients: [
            "Cream cheese",
            "Biscuits",
            "Butter",
            "Sugar",
            "Eggs"
        ],

        instructions:
        "Prepare the biscuit base. Mix the cream cheese filling and pour over the base. Bake until set and chill before serving."
    },


    "Chocolate Chip Cookies": {

        ingredients: [
            "Flour",
            "Butter",
            "Sugar",
            "Chocolate chips",
            "Egg"
        ],

        instructions:
        "Mix butter and sugar. Add egg and flour. Fold in chocolate chips. Bake until golden around the edges."
    },


    "Tiramisu": {

        ingredients: [
            "Coffee",
            "Mascarpone",
            "Ladyfingers",
            "Sugar",
            "Cocoa powder"
        ],

        instructions:
        "Dip ladyfingers in coffee. Layer with mascarpone cream. Repeat the layers and dust with cocoa powder."
    },


    "Apple Crumble": {

        ingredients: [
            "Apples",
            "Flour",
            "Butter",
            "Sugar",
            "Cinnamon"
        ],

        instructions:
        "Slice the apples and place them in a baking dish. Cover with a crumb mixture and bake until golden."
    },


    "Matcha Roll Cake": {

        ingredients: [
            "Matcha powder",
            "Flour",
            "Eggs",
            "Sugar",
            "Whipped cream"
        ],

        instructions:
        "Prepare the matcha cake batter. Bake in a thin sheet. Spread cream over the cake and carefully roll it."
    },


    "Coconut Pudding": {

        ingredients: [
            "Coconut milk",
            "Sugar",
            "Gelatin",
            "Milk",
            "Coconut"
        ],

        instructions:
        "Heat coconut milk and sugar. Add gelatin and stir. Pour into cups and refrigerate until set."
    },


    "Oreo Cheesecake Cups": {

        ingredients: [
            "Oreo cookies",
            "Cream cheese",
            "Whipped cream",
            "Sugar",
            "Butter"
        ],

        instructions:
        "Crush the Oreos and mix with butter. Add cheesecake filling and chill until firm."
    },


    "Strawberry Crepes": {

        ingredients: [
            "Strawberries",
            "Flour",
            "Milk",
            "Eggs",
            "Whipped cream"
        ],

        instructions:
        "Make a thin crepe batter and cook in a pan. Fill with strawberries and cream, then fold."
    },


    "Strawberry Milk Pudding": {

        ingredients: [
            "Strawberries",
            "Milk",
            "Sugar",
            "Gelatin",
            "Cream"
        ],

        instructions:
        "Blend strawberries with milk and sugar. Add gelatin and cream. Pour into cups and chill until set."
    }

};


/* =========================
   OPEN RECIPE
========================= */

let selectedRecipe = "";


function showRecipe(name) {

    let recipe = recipeData[name];

    if (!recipe) {
        return;
    }

    selectedRecipe = name;


    document.getElementById("modalTitle").innerText =
        name;


    let list =
        document.getElementById("modalIngredients");

    list.innerHTML = "";


    recipe.ingredients.forEach(function(item) {

        let li = document.createElement("li");

        li.innerText = item;

        list.appendChild(li);

    });


    document.getElementById("modalInstructions").innerText =
        recipe.instructions;


    let modal =
        document.getElementById("recipeModal");

    modal.style.display = "flex";

}


/* =========================
   CLOSE RECIPE
========================= */

function closeRecipe() {

    let modal =
        document.getElementById("recipeModal");

    modal.style.display = "none";

}


/* =========================
   FAVORITES
========================= */

function saveCurrentRecipe() {

    if (selectedRecipe === "") {
        return;
    }


    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];


    if (!favorites.includes(selectedRecipe)) {

        favorites.push(selectedRecipe);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert("Added to your favorites!");

    } else {

        alert("This recipe is already in your favorites!");

    }

}


/* =========================
   SHOW FAVORITES
========================= */

function loadFavorites() {

    let box =
        document.getElementById("favoriteList");

    if (!box) {
        return;
    }


    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];


    if (favorites.length === 0) {
        return;
    }


    box.innerHTML = "";


    let grid =
        document.createElement("div");

    grid.className = "saved-grid";


    favorites.forEach(function(recipe) {

        let card =
            document.createElement("div");

        card.className = "saved-card";


        card.innerHTML = `

            <h3>${recipe}</h3>

            <p>
                Saved in your Whisk & Wonder collection.
            </p>

            <button onclick="removeFavorite('${recipe}')">
                Remove
            </button>

        `;


        grid.appendChild(card);

    });


    box.appendChild(grid);

}


/* =========================
   REMOVE FAVORITE
========================= */

function removeFavorite(name) {

    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];


    favorites =
        favorites.filter(function(item) {

            return item !== name;

        });


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    loadFavorites();

}


/* =========================
   INGREDIENT SEARCH
========================= */

function ingredientSearch(ingredient) {

    window.location.href =
        "recipes.html?search=" +
        encodeURIComponent(ingredient);

}


/* =========================
   CONTACT FORM
========================= */

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you for your message! ♡\n\n" +
        "Your feedback has been received."
    );

}


/* =========================
   RUN FAVORITES
========================= */

loadFavorites();


/* =========================
   READ SEARCH FROM HOME
========================= */

window.addEventListener("load", function() {

    let params =
        new URLSearchParams(window.location.search);

    let search =
        params.get("search");


    if (search) {

        let input =
            document.getElementById("recipeSearch");


        if (input) {

            input.value = search;

            filterRecipes();

        }

    }

});