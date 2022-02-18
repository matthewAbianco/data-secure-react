import React from 'react'
import './Recovery.css'
import { LoremIpsum } from 'react-lorem-ipsum'

const Recovery = () => {
    return (
        <div className='recovery'>
            <div className='container'>
                <div className='content'>
                    <h2><span>Data</span> Recovery</h2>
                    <p> <LoremIpsum p={1} /> </p>
                    <div>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recovery