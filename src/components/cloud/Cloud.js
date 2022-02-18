import React from 'react'
import './Cloud.css'
import { LoremIpsum } from 'react-lorem-ipsum'

const Cloud = () => {
    return (
        <div className='cloud'>
            <div className='container'>
                <div className='content'>
                    <h2><span>Cloud</span>Security</h2>
                    <p> <LoremIpsum p={1} /> </p>
                    <div><button>Sign Up</button></div>

                </div>
            </div>
        </div>
    )
}

export default Cloud