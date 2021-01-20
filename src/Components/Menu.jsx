import React from 'react'
import './Menu.css'

import {Link} from 'react-router-dom'

const Menu = props => (
    
        <div className='menu'>
            <ul>
                <li>
                    <Link to="/Home">Início</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </div>
        
    
)

export default Menu