import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthService from '../auth'

export const api = new AuthService()

const AuthContext = React.createContext({
  isAuthenticated: false,
  redirectUrl: '/login',
  defaultRedirect: '/'
})

export class Authentication extends Component {
  state = {
    isAuthenticated: api.loggedIn(),
    pageType: ''
  }

  static defaultProps = {
    redirectUrl: '/login',
    defaultRedirect: '/'
  }

  signin = (email, password, cb) => {
    api.login(email, password)
    .then(data => {
      this.setState({
        isAuthenticated: true
      })
      cb()
    }).catch(err => {
      console.log("Error!", err)
    })
  }

  signout = () => {
    api.logout()
    this.setState({ isAuthenticated: false })
  }

  render() {
    const value = {
      isAuthenticated: this.state.isAuthenticated,
      redirectUrl: this.props.redirectUrl,
      signin: this.signin,
      signout: this.signout
    }

    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const AuthRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    { ({ isAuthenticated, redirectUrl }) => (
      <Route {...rest} render={(props) => (
        isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{
            pathname: redirectUrl,
            state: { from: props.location }
          }}/>
        )
      }/>
    )}
  </AuthContext.Consumer>
)

export function withAuth(Component) {
  return props => (
    <AuthContext.Consumer>
      {context => (
        <Component {...context} {...props} />
      )}
    </AuthContext.Consumer>
  )
}