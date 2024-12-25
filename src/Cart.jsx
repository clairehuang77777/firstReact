import { useContext, useState } from "react"
import { CartContext } from './CartContext.js'
import minusIcon from './assets/minus.svg'
import plusIcon from './assets/plus.svg'



export function Item({cart}){
const { carts, setCarts } = useContext(CartContext)

function updateCartsQuantityAndPrice(newCount){
  setCarts(
    carts.map((item) => 
    item.id === cart.id ? 
    {...item, 
      quantity: newCount, 
      price: item.price * newCount } : item
    ))
}

return(
  <>
        <div className="product-container col col-12" data-count={cart.quantity} data-price={cart.price}>
          <img className="img-container" src={cart.img} alt={cart.name}/>
          <div className="product-info">
            <div className="product-name">{cart.name}</div>
              <div className="product-control-container">
                <div className="product-control">
                  <img src={minusIcon} alt="Minus icon" className="product-action minus" 
                  onClick={() => cart.quantity > 0 && updateCartsQuantityAndPrice(cart.quantity - 1)}/>
                  <span className="product-count">{cart.quantity}</span>
                  <img src={plusIcon} alt="Plus icon" className="product-action plus" onClick={()=> updateCartsQuantityAndPrice(cart.quantity+1)}/>
                  </div>
                </div>
                <div className="product-price">${cart.price}</div>
                </div>
              </div>
    </>
    )
}

export function Cart(){
  const { carts, setCarts } = useContext(CartContext)

  const totalPrice = carts.reduce((sum, cart)=> sum + cart.price , 0)

  return (
    <>
    <section className="cart-container col  col-sm-12">
      <h3 className="cart-title">購物籃</h3>

        <section className="product-list col col-12" data-total-price="0">
        {carts.map((cart)=>
          (<Item key={cart.id} 
                  cart={cart} 
                  ></Item>
          ))}
        </section>
          <section className="cart-info shipping col col-12">
            <div className="text">運費</div>
            <div className="price">免費</div>
          </section>
          <section className="cart-info total col col-12">
            <div className="text">小計</div>
            <div className="price">{totalPrice}</div>
          </section>
        </section>

    </>
  )
}