import React from 'react'
import {ConnectButton} from '@rainbow-me/rainbowkit';


const Navigation = () => {

    return (
        <nav className="bg-black py-5 flex justify-center items-center">
            <h1 className='text-white font-extrabold text-xl mx-10'>
                Period dApp
            </h1>
            <ConnectButton/>
        </nav>
    )
}

export default Navigation