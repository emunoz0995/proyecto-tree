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
        image: 'img/desktop.png',
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
        image: 'img/grafica.png',
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
 

let tasksArray = JSON.parse(localStorage.getItem("cart")) ?? []; 

productList();

const productsButton = document.querySelectorAll(".button-one");  
productsButton.forEach(button => {
  button.addEventListener('click', () => {
    const id = parseInt(button.getAttribute('data-id'))
    for(let i = 0; i < items.length; i++){
      if(items[i].id == id ){
      tasksArray.push( { id: items[i].id, name: items[i].name, price: items[i].price, image: items[i].image, quantity: items[i].quantity}); 
    }
    }
    localStorage.setItem("cart", JSON.stringify(tasksArray));
    productList();
  })
})


function productList() {
  const taskArea = document.querySelector(".cart-container");
  const elements = tasksArray.map((task) => {
    return `
    <div class="cart__card">
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
        </div>`;
  });
  taskArea.innerHTML = elements.join("");
}

const cartCount = document.getElementById('cart-count')
const itemsCount = document.getElementById('items-count')
const minusItems = document.querySelectorAll('.minus')
const plusItems = document.querySelectorAll('.plus')
const totalContainer = document.getElementById('cart-total')
const checkoutButton = document.getElementById('cart-checkout')
//const deleteButtons = document.querySelector('.cart__amount-trash')


const cartArea = document.querySelector('.cart__card');




cartArea.addEventListener("click", (e) => {


  console.log(cartArea);

  if (e.target.classList.contains("cart__amount-trash")) {
    // lo único que necesitamos para eliminar una tarea
    // es el id
    const taskId = e.target.getAttribute("data-id");
    const newTasks = tasksArray.filter((task) => task.id !== Number(taskId));
    tasksArray = [...newTasks];
    console.log(tasksArray);
   // createTask();
    //deleteTask({ id: taskId });
  }
  if (e.target.classList.contains("btn-complete")) {
    const taskId = e.target.getAttribute("id");
    // const index = tasksArray.findIndex((task) => task.id === Number(taskId));
    // tasksArray[index].complete = true;
    // createTask();
    updateTask(taskId);
  }
});



// deleteButtons.addEventListener("click", (e) => {
// console.log("tengo el click")
// });

// // deleteButtons.forEach(button => {
// //   button.addEventListener('click', () => {
// //     const id = parseInt(button.getAttribute('data-id'))
// //     console.log(id)
// //     trash(id);
// //     localStorage.setItem("cart", JSON.stringify(tasksArray));
// //   });
  
// // });

// function trash (e) {
//   const newArray = tasksArray.filter((items)=> items.id !== e);
//   tasksArray = [...newArray];
// }


