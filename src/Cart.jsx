const carts = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export function Item({carts}){
  const itemLists = carts.map((cart)=> 
    <>
        <div className="product-container col col-12" data-count={cart.quantity} data-price={cart.price}>
          <img className="img-container" src={cart.img} alt={cart.name}/>
          <div className="product-info">
            <div className="product-name">{cart.name}</div>
              <div className="product-control-container">
                <div className="product-control">
                  <img src="/icons/minus.svg" alt="Minus icon" className="product-action minus" />
                    <span className="product-count">1</span>
                      <img src="/icons/plus.svg" alt="Plus icon" className="product-action plus" />
                    </div>
                  </div>
                  <div className="price">${cart.price}</div>
                </div>
              </div>
    </>
    )
    return itemLists
}

export function Cart(){
  return (
    <>
    <section className="cart-container col col-lg-5 col-sm-12">
          <h3 className="cart-title">購物籃</h3>

          <section className="product-list col col-12" data-total-price="0">
            <Item carts={carts}></Item>
          </section>

          <section className="cart-info shipping col col-12">
            <div className="text">運費</div>
            <div className="price">免費</div>
          </section>
          <section className="cart-info total col col-12">
            <div className="text">小計</div>
            <div className="price"></div>
          </section>
        </section>

    </>
  )
}