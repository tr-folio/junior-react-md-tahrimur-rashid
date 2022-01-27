import React from 'react';
import './App.css';
import AddToCart from './Components/AddToCart/AddToCart';
import All from './Components/All/All';
import Clothes from './Components/Clothes/Clothes';
import NotFound from './Components/NotFound/NotFound';
import Tech from './Components/Tech/Tech';
import {
  HeaderDiv,
  HeaderButton,
  NavMenusDiv,
  ShoppingBagIconDiv,
  CurrencyCartDiv,
  CurrencyCartButton,
  ShoppingBagIcon,
  CurrenciesDiv,
  CurrencyDiv,
  CartButtonImg,
  ShoppingBagIconImg,
  TransparentLayerDiv,
  MiniCartContainer,
  MiniCartDiv,
  MiniFlexDiv,
  MiniCartP,
  ViewBagButton,
  CheckOutButton,
  NumberOfCartItemsDiv
} from "./StyledAppJs";
import shoppingcartimg from "./Images/shoppingcart.png";
import shoppingbagimg from "./Images/shoppingbag.png";
import CartPage from './Components/CartPage/CartPage';
import SingleMiniCart from './SingleMiniCart';
import ShowTotal from './ShowTotal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNone: {
        display: 'none'
      },
      currencies: [],
      isCurrencyDiv: false,
      isMiniCart: false,
      cart: [],
      numberOfCartItems: 0
    };
    this.toggleCurrencyDiv = this.toggleCurrencyDiv.bind(this); // bind this with the method toggleCurrencyDiv
    this.toggleMiniCart = this.toggleMiniCart.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4000/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `
        {
          currencies {
            label
            symbol
          }
        }
      `})
    }).then(response => response.json())
    .then((data) => {
        // console.log(data.data.currencies);
        this.setState({currencies: data.data.currencies});
    });

    if (localStorage.getItem("shoppingCart") !== null) {
      const existingCart = JSON.parse(localStorage.getItem("shoppingCart"));
      this.state.numberOfCartItems = existingCart.length;
      this.state.cart = [...existingCart];
    }

    if (localStorage.getItem("currency") === null) {
      localStorage.setItem("currency", "$");
    } else {
      const currencySymbol = localStorage.getItem("currency");
      document.getElementById("currency-symbol").innerHTML = `${currencySymbol}`;
    }

    window.onload = function() {
      localStorage.setItem("totalPrice", "empty");
      localStorage.setItem("selectedAttribute", "empty");
      const currentPath = window.location.pathname;

      if (currentPath === "/") {
        document.getElementById('all').style.display = 'block';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('add-to-cart').style.display = 'none';
        document.getElementById('cart-page').style.display = 'none';
        document.getElementById('not-found').style.display = 'none';
      } else if (currentPath === "/all") {
        document.getElementById('all').style.display = 'block';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('add-to-cart').style.display = 'none';
        document.getElementById('cart-page').style.display = 'none';
        document.getElementById('not-found').style.display = 'none';
      } else if (currentPath === "/clothes") {
        document.getElementById('all').style.display = 'none';
        document.getElementById('clothes').style.display = 'block';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('add-to-cart').style.display = 'none';
        document.getElementById('cart-page').style.display = 'none';
        document.getElementById('not-found').style.display = 'none';
      } else if (currentPath === "/tech") {
        document.getElementById('all').style.display = 'none';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'block';
        document.getElementById('add-to-cart').style.display = 'none';
        document.getElementById('cart-page').style.display = 'none';
        document.getElementById('not-found').style.display = 'none';
      } else if (currentPath === "/add-to-cart") {
        document.getElementById('all').style.display = 'none';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('add-to-cart').style.display = 'block';
        document.getElementById('cart-page').style.display = 'none';
        document.getElementById('not-found').style.display = 'none';
      } else if (currentPath === "/cart-page") {
        document.getElementById('all').style.display = 'none';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('add-to-cart').style.display = 'none';
        document.getElementById('cart-page').style.display = 'block';
        document.getElementById('not-found').style.display = 'none';
      } else {
        document.getElementById('all').style.display = 'none';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('add-to-cart').style.display = 'none';
        document.getElementById('cart-page').style.display = 'none';
        document.getElementById('not-found').style.display = 'block';
      }
    }
  }

  displayAll() {
    window.location.pathname = "/all";
  }
  displayClothes() {
    window.location.pathname = "/clothes";
  }
  displayTech() {
    window.location.pathname = "/tech";
  }

  toggleCurrencyDiv() {
    if (this.state.isCurrencyDiv == false) {
      this.setState({isCurrencyDiv: true});
      document.getElementById("currencies-div").style.display = "inline-block";
      document.getElementById("caret-symbol").innerHTML = "&#8963";
    } else if (this.state.isCurrencyDiv == true) {
      this.setState({isCurrencyDiv: false});
      document.getElementById("currencies-div").style.display = "none";
      document.getElementById("caret-symbol").innerHTML = "&#8964";
    }
  }

  changeCurrency(event) {
    let currencyString = event.target.innerHTML;
    const toBeRemoved = currencyString.substr(-9);
    currencyString = currencyString.replace(toBeRemoved, "");
    document.getElementById("currency-symbol").innerHTML = `${currencyString}`;
    localStorage.setItem("currency", currencyString);
    this.toggleCurrencyDiv();
    window.location.reload();
  }

  toggleMiniCart() {
    if (this.state.isMiniCart === false) {
      this.state.isMiniCart = true;
      document.getElementById("show-mini-cart").style.display = 'block';
    } else {
      this.state.isMiniCart = false;
      document.getElementById("show-mini-cart").style.display = 'none';
    }
  }

  viewCartPage() {
    window.location.pathname = "/cart-page";
  }

  render() {
    return (
      <div className="App">
        <HeaderDiv>
          <NavMenusDiv>
            <HeaderButton onClick={this.displayAll}>ALL</HeaderButton>
            <HeaderButton onClick={this.displayClothes}>CLOTHES</HeaderButton>
            <HeaderButton onClick={this.displayTech}>TECH</HeaderButton>
          </NavMenusDiv>
          <ShoppingBagIconDiv>
            <ShoppingBagIcon>
              <ShoppingBagIconImg src={shoppingbagimg}/>
            </ShoppingBagIcon>
          </ShoppingBagIconDiv>
          <CurrencyCartDiv>
            <CurrencyCartButton onClick={this.toggleCurrencyDiv}>
              <span id="currency-symbol">$</span>&nbsp;
              <span id="caret-symbol">&#8964;</span>
              <CurrenciesDiv id="currencies-div">
                {this.state.currencies.map(currency => <CurrencyDiv onClick={this.changeCurrency}key={currency.symbol}>{currency.symbol}&nbsp;{currency.label}</CurrencyDiv>)}
              </CurrenciesDiv>
            </CurrencyCartButton>
            <CurrencyCartButton onClick={this.toggleMiniCart}>
              <CartButtonImg src={shoppingcartimg}/>
              <NumberOfCartItemsDiv>{this.state.numberOfCartItems}</NumberOfCartItemsDiv>
            </CurrencyCartButton>
          </CurrencyCartDiv>
        </HeaderDiv> <br/> <br/>
        <div id="page-container">
          <div id="all" style={this.state.displayNone}><All/></div>
          <div id="clothes" style={this.state.displayNone}><Clothes/></div>
          <div id="tech" style={this.state.displayNone}><Tech/></div>
          <div id="add-to-cart" style={this.state.displayNone}><AddToCart/></div>
          <div id="cart-page" style={this.state.displayNone}><CartPage/></div>
          <div id="not-found" style={this.state.displayNone}><NotFound/></div>
        </div>
        <TransparentLayerDiv id="show-mini-cart">
          <MiniCartContainer>
            <MiniFlexDiv>
            <MiniCartDiv>
              <MiniCartP><b>My Bag</b>&nbsp;&nbsp;<span>{this.state.numberOfCartItems}&nbsp;items</span></MiniCartP>
              <div>
                {this.state.cart.map(singleCartItem => <SingleMiniCart key={singleCartItem.id} singleCartItem={singleCartItem}></SingleMiniCart>)}
              </div>
              <div>
                  <ShowTotal></ShowTotal>
              </div>
              <div>
                <ViewBagButton onClick={this.viewCartPage}>VIEW BAG</ViewBagButton> <CheckOutButton>CHECK OUT</CheckOutButton>
              </div>
            </MiniCartDiv>
            </MiniFlexDiv>
          </MiniCartContainer>
        </TransparentLayerDiv>
      </div>
    );
  }
}

export default App;
