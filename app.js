


fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        let recipes = data.recipes;

        let container = document.createElement('div');
        container.id = 'recipes-container';
        document.body.appendChild(container);

        recipes.forEach(recipe => {
            let recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            recipeDiv.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" style="width: 200px;    height: 200px;
    border-radius:50% ;"/>
                <h2>${recipe.name}</h2>
                <p>${recipe.ingredients}</p>
                <hr style ="width: 80%; margin: 10px auto;">
            `;

            container.appendChild(recipeDiv);
        });
    })
    .catch(error => console.error('Error fetching recipes:', error));
    let searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Or search your favourite recipe....';
    searchInput.id = 'search-bar';
    searchInput.style = 'display: block; margin: 20px auto; padding: 10px; width: 80%;';

    document.body.insertBefore(searchInput, document.getElementById('recipes-container'));

    searchInput.addEventListener('input', (event) => {
        let searchTerm = event.target.value.toLowerCase();
        let recipeDivs = document.querySelectorAll('.recipe');

        recipeDivs.forEach(recipeDiv => {
            let recipeName = recipeDiv.querySelector('h2').textContent.toLowerCase();
            if (recipeName.includes(searchTerm)) {
                recipeDiv.style.display = 'block';
            } else {
                recipeDiv.style.display = 'none';
            }
        });
    });
