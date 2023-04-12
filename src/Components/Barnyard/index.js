import {useState} from 'react'
import {BiFoodTag} from 'react-icons/bi'

import './index.css'

const Barnyard = props => {
  const {details, addToCart, removeFromCart} = props
  const [count, setCount] = useState(0)
  const Increase = () => {
    setCount(prev => prev + 1)
    addToCart(details)
  }
  const decrease = () => {
    if (count > 1) {
      setCount(prev => prev - 1)
    }
    removeFromCart()
  }
  return (
    <div className="food-card">
      <div className="card-1">
        <BiFoodTag
          color={details?.dish_Availability ? 'green' : 'red'}
          className={details?.dish_Availability ? 'circle-icon' : 'circle-red'}
        />
        <div className="card">
          <h4>{details?.dish_name}</h4>
          <span className="tag">
            {details?.dish_currency} &nbsp;{details?.dish_price}
          </span>
          <span className="descript">{details?.dish_description}</span>
          <div className="btn-card">
            <button className="count-btns" type="button" onClick={decrease}>
              -
            </button>
            <h4>{count}</h4>
            <button
              className="count-btns"
              type="button"
              onClick={() => Increase(details)}
            >
              +
            </button>
          </div>
          {details?.dish_Availability ? (
            <p className="custom">Customizations available</p>
          ) : (
            <p className="err">Not Available</p>
          )}
        </div>
      </div>
      <div className="card-2">
        <p>{details?.dish_calories}calories</p>
        <img
          src={details?.dish_image}
          className="image_ele"
          alt="food"
          height={100}
          width={100}
        />
      </div>
    </div>
  )
}
export default Barnyard
