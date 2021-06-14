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

//   let input = document.getElementById("qtyNumber");

//   function minus(){
//     let num = +input.value; //+ for convert from string to number
//       if (num > 1) {
//           num--;
//       } else {
//           num;
//       }
//     input.value = num;
    
//   }
  
//   function plus(){
//     let num = +input.value; //+ for convert from string to number
//     if (num < 100) {
//         num++;
//     } else {
//         num;
//     }
//     input.value = num;
//   }

  /************************************ITEM QUANTITY TO SHOW IN CART************************************/
document.addEventListener('DOMContentLoaded', ()=>{
    init();
    
})

let cartItems = localStorage.setItem('productsInCart', '');
localStorage.setItem('cartNumbers','');
let inputqty = document.getElementById('qtyNumber');
localStorage.setItem('totalCost', '');
let productNumbers;
let total;


function init(){
    
    // qtyPlus();

    let carts = document.querySelector('#btn_addCart');

    let products = 
        {
            name: 'Couple laptop backpack USB charging 3-piece',
            tag: 'laptopbag',
            price: 200,
            inCart: 0
        };
    
        carts.addEventListener("click", () => {
        //    slide();
        document.getElementById('cart-confirmation').style.display='block';
        cartNumbers(products);
        totalCost(products);
        
        })

        // function slide() {
        //     let slide_in = document.getElementById('cart-confirmation'); 
        //     // slide_in.attr('id')
        //     console.log(slide_in.id)
        //     slide_in.id = 'cart-confirmation-slide'
        // }
    
        // function qtyPlus() {
    //     inputqty.addEventListener('change', () => {
    //     })

    //     // inputqty.addEventListener('keydown', (b) => {
    //     //     inputqty.value=b.Number(b.keyCode)
    //     // })
    // }
//    productNumbers = .value + productNumbers
    //ADDING ITEMS TO CART
    function cartNumbers (product) {

        if (inputqty.value) {
            productNumbers = Number(inputqty.value) + Number(localStorage.getItem('cartNumbers'));
        localStorage.setItem('cartNumbers', Number(productNumbers) );
        } else
        console.log(productNumbers)
        document.querySelector('.cart span').textContent = productNumbers;
        document.querySelector('.cart-span').textContent = productNumbers; 
    }

    function keepCartNumbers() {
        productNumbers = localStorage.getItem('cartNumbers');
    
        if(productNumbers) {
            document.querySelector('.cart span').textContent = productNumbers;
        }
    }
    
    function setItems(product) {
       
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
        total =(productNumbers * products.price);
    
        if(total != null) {
            total = parseFloat(total);
            localStorage.setItem('totalCost', total)
            document.querySelector('.cart-confirmation-subtotal p').textContent = total;
            document.querySelector('.cart-confirmation-subtotal_p').textContent = total;
            
        } else {
            localStorage.setItem('totalCost', product.price);
            document.querySelector('.cart-confirmation-subtotal p').textContent = product.price;
        }
        document.querySelector('.order-summary-body subtotal').innerText = total;
         
    }
    
    
    
    /************************ JAVASCRIPT FOR CART PAGE**********************/ 
    
    let close = document.getElementById('cart-confirmationClosebtn');
        close.addEventListener('click', function (event) {
        let closeClicked = event.target;
        closeClicked.parentElement.parentElement.remove();
    })
    
    // let button = document.getElementById('deleteCartItem');
    //     button.addEventListener('click', function (event) {
    //     let buttonClicked = event.target;
    //     buttonClicked.parentElement.parentElement.parentElement.remove();
    // })
    
    

}
