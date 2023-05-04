import {useEffect, useState} from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {BsArrowLeft} from 'react-icons/bs'
import {FaShoppingCart} from 'react-icons/fa'
import FoodItemCard from '../FoodItemCard'
import Barnyard from '../Barnyard'
import FromHouse from '../FromHouse'
import Sea from '../Sea'
import Biryani from '../Biryani'
import FastFood from '../FastFood'

import './index.css'

const Home = () => {
  const [foodData, setFoodData] = useState([])
  const [restaurantName, setRestaurantName] = useState('')
  const [tableMenu, setTableMenu] = useState([])
  const [soups, setSoups] = useState([])
  const [barnyard, setBarnyard] = useState([])
  const [fromHouse, setFromHouse] = useState([])
  const [sea, setSea] = useState([])
  const [biryani, setBiriyani] = useState([])
  const [fastFood, setFastFood] = useState([])
  const [activeTab, setActiveTab] = useState(tableMenu[0]?.menu_category)
  const [cartItems, setCartItems] = useState([])
  const addToCart = item => {
    if (cartItems.includes(item) === false) {
      setCartItems([...cartItems, item])
    }
  }

  const removeFromCart = () => {
    const TempCartItems = [...cartItems]
    TempCartItems.splice(0, 1)
    setCartItems(TempCartItems)
  }

  useEffect(() => {
    setRestaurantName(foodData?.restaurant_name)
    setSoups(foodData?.table_menu_list?.[0]?.category_dishes)
    setBarnyard(foodData?.table_menu_list?.[1]?.category_dishes)
    setFromHouse(foodData?.table_menu_list?.[2]?.category_dishes)
    setSea(foodData?.table_menu_list?.[3]?.category_dishes)
    setBiriyani(foodData?.table_menu_list?.[4]?.category_dishes)
    setFastFood(foodData?.table_menu_list?.[5]?.category_dishes)
  }, [foodData])

  const getFoodData = async () => {
    const url = 'https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099'
    const response = await fetch(url)
    const data = await response.json()
    setFoodData(data[0])
    setTableMenu(data[0].table_menu_list)
  }

  useEffect(() => {
    getFoodData()
  }, [])

  return (
    <div className="home">
      <div className="Header">
        <span>
          <i>
            <AiOutlineArrowLeft className="left-arrow" />
          </i>
        </span>
        <nav>
          <h4>{restaurantName}</h4>
          <div className="store-div">
            <p>My Orders</p>
            <div className="cart-count">
              <FaShoppingCart size={30} />
              <p className="items-count">{cartItems?.length}</p>
            </div>
          </div>
        </nav>
      </div>
      <div className="Mobile-view">
        <nav>
          <span>
            <i>
              <AiOutlineArrowLeft />
            </i>
          </span>
          <h4>{restaurantName}</h4>
          <div className="store-div">
            <p>My Orders</p>
            <div className="cart-count">
              <FaShoppingCart size={30} />
              <p className="items-count">{cartItems?.length}</p>
            </div>
          </div>
        </nav>
      </div>
      <div className="home-body">
        <ul>
          {tableMenu.map(each => (
            <li
              onClick={() => setActiveTab(each?.menu_category)}
              className={activeTab === each.menu_category && 'activeCategory'}
            >
              {each.menu_category}
            </li>
          ))}
        </ul>

        {activeTab === undefined &&
          soups?.map(each => (
            <FoodItemCard
              details={each}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        {activeTab === 'Salads and Soup' && soups?.length > 0
          ? soups.map(each => (
              <FoodItemCard
                details={each}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))
          : null}

        {activeTab === 'From The Barnyard' && barnyard?.length > 0
          ? barnyard?.map(each => (
              <Barnyard
                styling="activeCategory"
                details={each}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))
          : null}
        {activeTab === 'From the Hen House' && fromHouse?.length > 0
          ? fromHouse.map(each => (
              <FromHouse
                details={each}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))
          : null}
        {activeTab === 'Fresh From The Sea' && sea?.length > 0
          ? sea.map(each => (
              <Sea
                details={each}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))
          : null}
        {activeTab === 'Biryani' && biryani?.length > 0
          ? biryani.map(each => (
              <Biryani
                details={each}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))
          : null}
        {activeTab === 'Fast Food' && fastFood?.length > 0
          ? fastFood.map(each => (
              <FastFood
                details={each}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))
          : null}
      </div>
    </div>
  )
}
export default Home
