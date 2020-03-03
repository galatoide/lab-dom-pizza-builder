// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    // console.log(document.querySelectorAll('.greenPeppers'))
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (!state.whiteSauce) {
    document.getElementsByClassName('sauce')[0].classList.remove('sauce-white')
} else {
  document.getElementsByClassName('sauce')[0].classList.add('sauce-white')
}
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (!state.glutenFreeCrust) {
    document.getElementsByClassName('crust')[0].classList.remove('crust-gluten-free')
} else {
  document.getElementsByClassName('crust')[0].classList.add('crust-gluten-free')
}
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    document.getElementsByClassName('btn btn-pepperoni')[0].classList.add('active')
  } else {
    document.getElementsByClassName('btn btn-pepperoni')[0].classList.remove('active')
  }
  
  
  if (state.mushrooms) {
    document.getElementsByClassName('btn btn-mushrooms')[0].classList.add('active')
  } else {
    document.getElementsByClassName('btn btn-mushrooms')[0].classList.remove('active')
  }
  
  
  if (state.greenPeppers) {
    document.getElementsByClassName('btn btn-green-peppers')[0].classList.add('active')
  } else {
    document.getElementsByClassName('btn btn-green-peppers')[0].classList.remove('active')
  }

  if (state.whiteSauce) {
    document.getElementsByClassName('btn btn-sauce')[0].classList.add('active')
  } else {
    document.getElementsByClassName('btn btn-sauce')[0].classList.remove('active')
  }

  if (state.glutenFreeCrust) {
    document.getElementsByClassName('btn btn-crust')[0].classList.add('active')
  } else {
    document.getElementsByClassName('btn btn-crust')[0].classList.remove('active')
  }
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let priceList = document.querySelector(".panel.price ul")
  priceList.innerHTML = ""   /* Without this it keeps adding ahah */

  let totalPrice = 10

  if (state.pepperoni) {
    let ingredientToAdd = document.createElement("li")
  ingredientToAdd.innerText = ` $${ingredients.pepperoni.price} Pepperoni`
  priceList.appendChild(ingredientToAdd)

  totalPrice += ingredients.pepperoni.price
  } 


  if (state.mushrooms) {
    let ingredientToAdd = document.createElement("li")
  ingredientToAdd.innerText = ` $${ingredients.mushrooms.price} Mushrooms`
  priceList.appendChild(ingredientToAdd)
  totalPrice += ingredients.mushrooms.price
  } 


  if (state.greenPeppers) {
    let ingredientToAdd = document.createElement("li")
  ingredientToAdd.innerText = ` $${ingredients.greenPeppers.price} Green Peppers`
  priceList.appendChild(ingredientToAdd)
  totalPrice += ingredients.greenPeppers.price
  } 

  if (state.whiteSauce) {
    let ingredientToAdd = document.createElement("li")
  ingredientToAdd.innerText = ` $${ingredients.whiteSauce.price} White Sauce`
  priceList.appendChild(ingredientToAdd)
  totalPrice += ingredients.whiteSauce.price

  }

  if (state.glutenFreeCrust) {
    let ingredientToAdd = document.createElement("li")
  ingredientToAdd.innerText = ` $${ingredients.glutenFreeCrust.price} Gluten Free Crust`
  priceList.appendChild(ingredientToAdd)
  totalPrice += ingredients.glutenFreeCrust.price
  }

  let totalPriceOrder = document.querySelector(".panel.price strong")
  totalPriceOrder.innerText = `$${totalPrice}`
  
}

renderEverything();
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').onclick = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  console.log('sdgdrh')
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener ("click",() => {
  state.whiteSauce=!state.whiteSauce
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener ("click",() => {
  state.glutenFreeCrust=!state.glutenFreeCrust
  renderEverything();
})