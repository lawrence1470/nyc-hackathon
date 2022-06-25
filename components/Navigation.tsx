import React from 'react'
import {ConnectButton} from '@rainbow-me/rainbowkit';
import Button from '@mui/material/Button';
import * as acc from './account.js';


const Navigation = () => {

    return (
        <nav className="bg-black py-5 flex justify-center items-center">
            <h1 className='text-white font-extrabold text-xl mx-10'>
                Period dApp
            </h1>
            <ConnectButton/>
            <Button variant="outlined" color="primary" onClick={acc.makeAcc}>Contained</Button>
        </nav>
    )
}

export default Navigation