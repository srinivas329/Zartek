import {useState} from 'react'
import {BiFoodTag} from 'react-icons/bi'

const Sea = props => {
  const {details} = props
  console.log(details, 'se')

  const [count, setCount] = useState(0)

  const Increase = () => {
    setCount(prev => prev + 1)
  }
  const decrease = () => {
    if (count > 1) {
      setCount(prev => prev - 1)
    }
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
            <button type="button" onClick={Increase}>
              +
            </button>
            <p>{count}</p>
            <button type="button" onClick={decrease}>
              -
            </button>
          </div>
          {details?.dish_Availability ? (
            <p> </p>
          ) : (
            <p className="err">Not Available</p>
          )}
        </div>
      </div>
      <div className="card-2">
        <p>{details?.dish_calories}calories</p>
        <img src={details?.dish_image} alt="food" height={100} width={100} />
      </div>
    </div>
  )
}

export default Sea
