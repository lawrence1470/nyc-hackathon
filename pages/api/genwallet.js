const query = new URLSearchParams({mnemonic: 'string'}).toString();


const genWallet = async (req, res) => {
    const resp = await fetch(
        `https://api-us-west1.tatum.io/v3/ethereum/wallet?${query}`,
        {
            method: 'GET',
            headers: {
                'x-testnet-type': 'ethereum-ropsten',
                'x-api-key': 'ab7c6fc9-60f6-4ac3-bc41-876fd96e285f'
            }
        }
    );

    const data = await resp.text();
    res.send(data)
}

export default genWallet