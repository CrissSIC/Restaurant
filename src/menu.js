function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createItem(
      "Pizza1",
      "Ingredient1, ingredient2, ingredient3, ingredient4, ingredient5"
    )
  );
  menu.appendChild(
    createItem(
      "Pizza2",
      "Ingredient1, ingredient2, ingredient3, ingredient4, ingredient5"
    )
  );
  menu.appendChild(
    createItem(
      "Pizza3",
      "Ingredient1, ingredient2, ingredient3, ingredient4, ingredient5"
    )
  );
  menu.appendChild(
    createItem(
      "Pizza3",
      "Ingredient1, ingredient2, ingredient3, ingredient4, ingredient5"
    )
  );
  menu.appendChild(
    createItem(
      "Pizza4",
      "Ingredient1, ingredient2, ingredient3, ingredient4, ingredient5"
    )
  );
  menu.appendChild(
    createItem(
      "Pizza5",
      "Ingredient1, ingredient2, ingredient3, ingredient4, ingredient5"
    )
  );
  menu.appendChild(
    createItem(
      "Pizza6",
      "Ingredient1, ingredient2, ingredient3, ingredient4, ingredient5"
    )
  );
  menu.appendChild(
    createItem(
      "Pizza7",
      "Ingredient1, ingredient2, ingredient3, ingredient4, ingredient5"
    )
  );
  menu.appendChild(
    createItem(
      "Pizza8",
      "Ingredient1, ingredient2, ingredient3, ingredient4, ingredient5"
    )
  );

  return menu;
}

function createItem(food, ingredients) {
  const item = document.createElement("div");
  item.classList.add("item");

  const pizzaName = document.createElement("h2");
  pizzaName.textContent = food;

  const pizzaIngredients = document.createElement("p");
  pizzaIngredients.textContent = ingredients;

  item.appendChild(pizzaName);
  item.appendChild(pizzaIngredients);

  return item;
}

function initializeMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default initializeMenu;
