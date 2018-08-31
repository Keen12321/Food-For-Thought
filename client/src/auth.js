import { decode } from 'jsonwebtoken'

class AuthService {
  constructor(config = {}) {
    this.domain = config.domain || '/api'
    this.authPath = config.authPath || 'login'
  }

  login = (email, password) => {
    return this.fetch(`${this.domain}/${this.authPath}`, {
      method: 'POST',
      body: JSON.stringify({
        email, password
      })
    }).then(res => {
      this.setToken(res.token)
      return Promise.resolve(res)
    })
  }

  logout = () => {
    localStorage.removeItem('authtoken')
  }

  loggedIn = () => {
    const token = this.getToken()
    return !!token && !this.isTokenExpired(token)
  }

  isTokenExpired = (token) => {
    try {
      const decoded = decode(token)
      return decoded.exp < Date.now() / 1000
    } catch (err) {
      return false
    }
  }

  setToken = (token) => {
    localStorage.setItem('authtoken', token)
  }

  getToken = () => {
    return localStorage.getItem('authtoken')
  }

  getProfile = () => {
    return decode(this.getToken())
  }

  get = (url) => {
    return this.fetch(url, {
      method: 'GET'
    })
  }

  put = (url, data) => {
    return this.fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  } 

  post = (url, data) => {
    return this.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  patch = (url, data) => {
    return this.fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data)
    })
  }

  delete = (url) => {
    return this.fetch(url, {
      method: 'DELETE'
    })
  }

  fetch = (url, options) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
    .then(this._checkStatus)
    .then(response => response.json())
  }

  _checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      const error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}

export default AuthService
