// muestra la seccion de carrito

const cartClose = document.querySelector('.cart-close')
const cartToggle = document.querySelector('#icon-shop')
const cart = document.querySelector('#cart')
  
    if (cartToggle) {
      cartToggle.addEventListener('click', function () {
        cart.classList.toggle('show-cart')
      })
    }
  
    if (cartClose) {
      cartClose.addEventListener('click', function () {
        cart.classList.remove('show-cart')
      })
    }

// informacion de productos
    const items = [
      {
        id: 1,
        name: 'Desktop Gamin',
        price: 1400.00,
        image: 'img/featured1.png',
        quantity: 20
      },
      {
        id: 2,
        name: 'Lenovo Legion',
        price: 2400.00,
        image: 'img/featured1.png',
        quantity: 5
      },
      {
        id: 3,
        name: 'Tarjeta Grafica',
        price: 400.00,
        image: 'img/featured1.png',
        quantity: 3
      }
    ]

// muestra productos y funcion al dar click

 function viewProducts () {  
  const productsContainer = document.querySelector('.cards-container');
  let html = '';
  items.forEach(product => {
    html += `  
      <article>
         <div class="article-image">
            <img 
              src="${product.image}"
              alt="${product.name}"
             />
          </div>
          <div class="article-content">
             <br>
             <h2 class="products-price">${product.price} <span class="products-quantity">| Stock: ${product.quantity}</span></h2>
             <h3 class="products-name">${product.name}</h3>
             <button class="button button-one" data-id="${product.id}">
               <i class='bx bx-plus'></i>
             </button>
          </div>
      </article>`

  })

  productsContainer.innerHTML += html

}

viewProducts ();
 

const tasksArray = JSON.parse(localStorage.getItem("cart")) ?? []; // devuelv e el primer v o el ultimo f

createTask();

const productsButton = document.querySelectorAll(".button-one");  

productsButton.forEach(button => {
  button.addEventListener('click', (e) => {
    const id = parseInt(button.getAttribute('data-id'))
    console.log(id);
    if(items.id == id ){
      tasksArray.push( { id: items.id, name: items.name, price: items.price, image: items.image, quantity: items.quantity});
      console.log(tasksArray);
      localStorage.setItem("cart", JSON.stringify(tasksArray));
      createTask();
    }
  })
})



  //   console.log(addButton);
//   //tasksArray.push({ title, description, complete: false });
//   localStorage.setItem("products", JSON.stringify(tasksArray));
//   createTask();
// });

function createTask() {
  const taskArea = document.querySelector(".cart-container");
  const elements = tasksArray.map((task) => {
    return `
    <article class="cart__card">
          <div class="cart__box">
            <img src="${task.image}" alt="${task.name}" class="cart__img">
          </div>
  
          <div class="cart__details">
            <h3 class="cart__title">${task.name}</h3>
            <span class="cart__stock">Stock: ${task.quantity} | <span class="cart__price">${task.price}</span></span>
            <span class="cart__subtotal">
              Subtotal: ${task.quantity * task.price}
            </span>
  
            <div class="cart__amount">
              <div class="cart__amount-content">
                <span class="cart__amount-box minus" data-id="${task.id}">
                <i class='bx bx-minus'></i>
                </span>
  
                <span class="cart__amount-number">${task.quantity} units</span>
  
                <span class="cart__amount-box plus" data-id="${task.id}">
                <i class='bx bx-plus'></i>
                </span>
              </div>
  
              <i class='bx bx-trash-alt cart__amount-trash' data-id="${task.id}"></i>
            </div>
          </div>
        </article>`;
  });
  taskArea.innerHTML = elements.join("");
}

function clearInputs() {
  taskTitle.value = "";
  taskDescription.value = "";
}


