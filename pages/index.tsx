import type {NextPage} from 'next';
import {useQuery} from "react-query";
import axios from "axios";
import {useState} from "react";
import Navigation from "../components/Navigation";
import {useAccount} from "wagmi";


const Home: NextPage = () => {
    const {data, isError, isLoading} = useAccount()

    if (isLoading) return <div>Loading account…</div>
    if (isError) return <div>Error loading account</div>

    return (
        <div>
            <Navigation/>
        </div>
    );
};

export default Home;
