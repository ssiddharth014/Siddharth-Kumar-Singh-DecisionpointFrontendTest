import React, {useEffect} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import Header from './Header.js'
import AllUsers from './AllUser.js'
import SeeDetail from './SeeDetail.js'

function Main (){



	
  
	return(
		<>

<Header/>
		<Switch>
		<Route path='/AllUsers' component={AllUsers} />
		<Route path='/seeDetail/:id/:id1' component={SeeDetail} />
		<Redirect to='/AllUsers' />
		</Switch>
		</>)

}
export default Main;