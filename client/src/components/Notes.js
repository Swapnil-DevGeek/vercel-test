import React from 'react'

import Home from './Notes/Home'
import CreateNote from './Notes/CreateNote'
import EditNote from './Notes/EditNote'
import Nav from './Notes/Nav'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Notes = ({setIsLogin}) => {
   
  return (
    <Router>
        <div className="notes-page">
            <Nav setIsLogin={setIsLogin} />
             <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/create' Component={CreateNote}/>    
                <Route path='/edit/:id' Component={EditNote}/>
            </Routes>          
        </div>
    </Router>
    
  )
}

export default Notes
