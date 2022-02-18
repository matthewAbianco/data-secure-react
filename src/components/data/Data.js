import React from 'react'
import "./Data.css"
import { LoremIpsum } from 'react-lorem-ipsum'


const Data = () => {
    return (
        <div className='data'>
            <div className='container'>
                <div className='content'>
                    <h2><span>Data</span> Recovery</h2>
                    <p><LoremIpsum p={1} /> </p>
                    <div>
                        <button>Sign Up</button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Data