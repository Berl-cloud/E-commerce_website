/************************************SWITCHING ITEM TO PREVIEW************************************/

function clickme(smallImg) {

    let fullImg = document.getElementById("preview_imgbox");
    fullImg.src = smallImg.src;   

}

/************************************CHOOSING ITEM SIZE************************************/

// function size(chosenSize) {
//     let mySize = document.querySelector('.size span');
//     mySize.innerHTML = chosenSize.src;
// }

/************************************CHANGING ITEM COLOR************************************/

function color() {
    let grey = document.getElementById('greyBag');
    let fullImg = document.getElementById("preview_imgbox");
    let imgSelected = document.getElementsByClassName('chosenImg');
            fullImg.src = grey.src;
            // imgSelected.src = grey.src
            localStorage.setItem('chosenColor', JSON.stringify('Grey'));
            // document.getElementById('cart-confirmation-product-info .product_color').innerText = Grey;
  };

function color1() {
    let wine = document.getElementById('wineBag');
    let fullImg = document.getElementById("preview_imgbox");
    let imgSelected = document.getElementsByClassName('chosenImg');
            fullImg.src = wine.src;
            // imgSelected.src = fullImg.src;
            localStorage.setItem('chosenColor',JSON.stringify ('Wine Red'));
            // document.getElementById('cart-confirmation-product-info .product_color').textContent = Wine-red;
  };

  /************************************INCREASING AND REDUCING ITEM QUANTITY************************************/

  let input = document.getElementById("qtyNumber");

  function minus(){
    let num = +input.value; //+ for convert from string to number
      if (num > 1) {
          num--;
      } else {
          num;
      }
    input.value = num;
    
  }
  
  function plus(){
    let num = +input.value; //+ for convert from string to number
    if (num < 100) {
        num++;
    } else {
        num;
    }
    input.value = num;
  }

  /************************************ITEM QUANTITY TO SHOW IN CART************************************/

let carts = document.querySelectorAll('#addCart');

let products = [
    {
        name: 'Couple laptop backpack USB charging 3-piece',
        tag: 'laptopbag',
        price: 200,
        inCart: 0
    }    
];

for ( let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);

    })
    
}


function keepCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers (product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    
   if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1 );
    document.querySelector('.cart span').textContent = productNumbers + 1;
    document.querySelector('.cart-confirmation').classList.add('slide') = ;
    // document.querySelector('product-qtysubtotal span').innerHTML = productNumbers + 1;
   } else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
   } 
   
   setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
         if(cartItems[product.tag] == undefined) {
             cartItems = { ...cartItems, [product.tag]: product }
         
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify (cartItems));
}

function totalCost(product) {
    
    let total = localStorage.getItem('totalCost');
    total =parseFloat(cartItems[product.tag].inCart * product.price);

    if(total != null) {
        total = parseFloat(total);
        localStorage.setItem('totalCost', total)
        document.querySelector('.cart-confirmation-subtotal p').textContent = total;
        document.querySelector('.productTotal span').textContent = total;
        // document.querySelector('.cart-confirmation').style.display = 'block';
    } else {
        localStorage.setItem('totalCost', product.price);
        document.querySelector('.cart-confirmation-subtotal p').textContent = product.price;
    }
    // document.getElementById('productTotal').innerHTML = total
    
}



/************************ JAVASCRIPT FOR CART PAGE**********************/



keepCartNumbers();


let close = document.getElementById('cart-confirmationClosebtn');
    close.addEventListener('click', function (event) {
    let closeClicked = event.target;
    closeClicked.parentElement.parentElement.remove();
})

let button = document.getElementById('deleteCartItem');
    button.addEventListener('click', function (event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
})

