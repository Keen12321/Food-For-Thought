import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { Header } from 'semantic-ui-react'

class D_Reports extends Component {
	render() {
		return (
      <div>
   			<Header>Reports Page</Header>
      </div>
     
		)
 	}
}

export default withAuth(D_Reports)
