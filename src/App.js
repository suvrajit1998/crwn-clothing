import React, { useEffect, lazy, Suspense } from 'react'

import Header from './components/header/Header.component'
import Spinner from './components/spinner/spinner.component'
import ErrorBaundary from './components/error-baundary/error-baundary.component'
import { Route, Switch, Redirect } from 'react-router-dom'
import { auth, creatUserpropfiledocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setcurentuser } from './redux/user/user.action'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.select'
import { GlobalStyle } from './global.style'

const Homepage = lazy(() => import('./pages/homepage/Homepage.component'))
const ShopPage = lazy(() => import('./pages/shoppage/shoppage.component'))
const SinginandSingup = lazy(() =>
  import('./pages/sing-in-sing-up-page/sing-in-sing-up.component')
)
const Checkout = lazy(() => import('./pages/checkout/checkout.component'))

const App = ({ setcurentuser, currentUser }) => {
  useEffect(() => {
    let unsubcribeFromauth = null
    // console.log("I am Subcribing")
    unsubcribeFromauth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userref = await creatUserpropfiledocument(userAuth)

        userref.onSnapshot(snapshot => {
          setcurentuser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        setcurentuser(userAuth)
      }
    })

    return () => {
      // console.log("I am unsubcribing")
      unsubcribeFromauth()
    }
  }, [setcurentuser])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBaundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/singin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SinginandSingup />
              }
            />
          </Suspense>
        </ErrorBaundary>
      </Switch>
    </div>
  )
}

const mapPropsToState = createStructuredSelector({
  currentUser: selectCurrentUser
})

const dispatchToProps = dispatch => ({
  setcurentuser: user => dispatch(setcurentuser(user))
})

export default connect(mapPropsToState, dispatchToProps)(App)
