import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { Header } from 'semantic-ui-react'
import HomeBar from './D_HomeBar'


class D_Reports extends Component {
 render() {
   return (
      <div>
         <HomeBar />
   		<div>
   			<Header>Reports Page</Header>
   		</div>
      </div>
     
   )
 }
}

export default withAuth(D_Reports)