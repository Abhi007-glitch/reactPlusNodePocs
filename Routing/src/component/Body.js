import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Route,Routes } from 'react-router-dom'
import Login from './Login'
import Details from './Details'
import RegisterationForm from './RegisterationForm'
import Edit from './Edit'

function Body() {

  // const appRouter = createBrowserRouter([
  //   {
  //     path:"/",
  //     Component:<Login/>
  //   },
  //   {
  //     path:"/form",
  //     Component:<Form />
  //   },
  //   {
  //     path:"/Deatils",
  //     Component:<Details/>
  //   }

  // ]);

//  route  = BrowserRouter(router);

  return (

    <>
    <Header />
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/form' element={<RegisterationForm/>}/>
      <Route path='/Details' element={<Details/>} > 
       <Route path=":id"/>
      </Route>
      <Route path='edit' element={<Edit/>} />
            
    </Routes>
    <Footer />
   
    </>
    
  )
}

export default Body