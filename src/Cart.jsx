import { useContext, useState } from "react"
import { CartContext } from './CartContext.js'



export function Item({cart, onPriceChange}){
const [count, SetCount] = useState(cart.quantity)

function handleCountChange(newCount){
  SetCount(newCount)
  onPriceChange(cart.id, cart.price* newCount)
}

return(
  <>
        <div className="product-container col col-12" data-count={cart.quantity} data-price={cart.price}>
          <img className="img-container" src={cart.img} alt={cart.name}/>
          <div className="product-info">
            <div className="product-name">{cart.name}</div>
              <div className="product-control-container">
                <div className="product-control">
                  <img src="/icons/minus.svg" alt="Minus icon" className="product-action minus" onClick={()=>count > 0 && handleCountChange(count -1)}/>
                  <span className="product-count">{count}</span>
                  <img src="/icons/plus.svg" alt="Plus icon" className="product-action plus" onClick={()=> handleCountChange(count +1)}/>
                  </div>
                </div>
                <div className="product-price">${cart.price * count}</div>
                </div>
              </div>
    </>
    )
}

export function Cart(){
  const { carts, setCarts } = useContext(CartContext)

    // 防禦性檢查
  if (!Array.isArray(carts)) {
    console.error("carts is not an array:", carts);
    return null; // 或顯示錯誤訊息的 UI
  }

  const [itemPrice, SetItemPrice] = useState(
    carts.map(cart=> ({id: cart.id, totalPrice: cart.price * cart.quantity }))
  )

  function handlePriceChange(id, newTotalPrice){
      SetItemPrice(prevPrices =>
        prevPrices.map( item => item.id === id ? 
        {...item, totalPrice : newTotalPrice} : item))
  }

  const totalPrice = itemPrice.reduce((sum, item)=> sum + item.totalPrice , 0)

  return (
    <>
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

        <section className="product-list col col-12" data-total-price="0">
        {carts.map((cart)=>
          (<Item key={cart.id} 
                cart={cart} 
                onPriceChange={handlePriceChange}></Item>
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