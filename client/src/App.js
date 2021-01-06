import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllClassesScreen from './Screens/AllClassesScreen'
import CheckOutScreen from './Screens/CheckOutScreen'
import DetailScreen from './Screens/DetailScreen'
import HomeScreen from './Screens/HomeScreen'
import PriceScreen from './Screens/PriceScreen'
import PaymentScreen from './Screens/PaymentScreen'
import MembershipScreen from './Screens/MembershipScreen'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/allclasses">
          <AllClassesScreen />
        </Route>
        <Route path="/detail/:key">
          <DetailScreen />
        </Route>
        <Route path="/pricing">
          <PriceScreen />
        </Route>
        <Route exact path="/checkout">
          <CheckOutScreen />
        </Route>
        <Route path="/payment">
          <PaymentScreen />
        </Route>
        <Route path="/membership">
          <MembershipScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
