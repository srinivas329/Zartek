import {Component} from 'react'
import Home from './Components/Home'

import './App.css'

class App extends Component {
  state = {status: false}

  onClickChangePage = () => {
    this.setState(prevState => ({
      status: !prevState.status,
    }))
  }

  loginPage = () => (
    <div className="bg-container">
      <div className="card1">
        <img
          src="https://i.imgur.com/gLlF09p.jpg"
          alt="food"
          className="main-img"
        />
        <h1 className="heading">
          Welcome to <span className="shop-name">UNI Resto Cafe</span>
        </h1>
        <button
          onClick={this.onClickChangePage}
          className="click-btn"
          type="button"
        >
          Click to Order
        </button>
      </div>
    </div>
  )

  render() {
    const {status} = this.state
    return <>{status ? <Home /> : this.loginPage()}</>
  }
}

export default App
