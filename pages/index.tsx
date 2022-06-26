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
        </div>
    );
};

export default Home;
