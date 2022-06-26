import type {NextPage} from 'next';
import {useQuery} from "react-query";
import axios from "axios";
import Navigation from "../components/Navigation";
import {useAccount} from "wagmi";
import AccountInfo from '../components/AccountInfo'
import {useEffect, useState} from "react";


const Home: NextPage = () => {
    const [balance, setBalace] = useState(0)
    const {data, isError, isLoading} = useAccount()
    const walletGen = useQuery("walletgen", () => axios.get('/api/genwallet'))
    // const genAddress: any = useQuery("address", () => axios.post('/api/genaddress', {walletGen}), {
    //     enabled: walletGen.isSuccess
    // })
    //
    // const getAccountBalance: any = useQuery("address", () => axios.post('/api/genaddress', {walletGen}), {
    //     enabled: walletGen.isSuccess
    // })


    const myAddress = data?.address ?? ""
    let nonce = -1


    useEffect(() => {


        async function fetchMyAPI() {
            if (nonce === -1) {
                const transactions = await axios.get('/api/getTransactions')
                const nonceValue = transactions.data[0].nonce
                nonce = nonceValue
                console.log('heree', nonce)
            }

            try {
                nonce += 2
                await axios.post('/api/sendMoney', {nonce})
                const balance = await axios.get('/api/accountBalance')
                console.log(balance, 'bal')
                console.log(balance, 'bal')
                setBalace(balance.data.balance)
                // @ts-ignore
            } catch (e) {
                // Logout the user and redirect to the login page
            }
        }

        setInterval(() => {
            fetchMyAPI()
        }, 1000 * 10) // in milliseconds
        return () => clearInterval()
    }, [])

    return (
        <div>
            <Navigation/>
            <div className="mt-10 mx-28 flex justify-center items-center flex-col">
                <h1 className="text-8xl text-center">Dashboard</h1>

                <AccountInfo user="Hello welcome back user123" address={myAddress}/>


                <div className='bg-black rounded-3xl text-white p-5  my-5 w-96'>
                    <span>Balance in eth:</span>
                    <span>{balance}</span>
                </div>


                {/*<div className='bg-black rounded-3xl text-white p-5  my-5 w-96'>*/}
                {/*    <span> other user </span>*/}
                {/*    <span className="text-xs">{genAddress.isSuccess && genAddress.data.data?.address}</span>*/}
                {/*</div>*/}
                {/*<button onClick={handleGetMoney} className="bg-blue-300 rounded-3xl px-10 py-3">Collect Funds</button>*/}
            </div>
        </div>
    );
};

export default Home;
