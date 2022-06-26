import type {NextPage} from 'next';
import {useQuery} from "react-query";
import axios from "axios";
import {useState} from "react";
import Navigation from "../components/Navigation";
import {useAccount} from "wagmi";


const Home: NextPage = () => {
    const {data, isError, isLoading} = useAccount()

    return (
        <div>
            <Navigation/>
            <div className="mt-10 mx-28">
                <h1 className="text-8xl">Dashboard</h1>
            </div>
        </div>
    );
};

export default Home;
