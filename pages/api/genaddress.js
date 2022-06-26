const query = new URLSearchParams({mnemonic: 'string'}).toString();


const genAddress = async (req, res) => {
    const xpub = req.body.walletGen.data.data.xpub;
    const index = 1;
    const resp = await fetch(
        `https://api-us-west1.tatum.io/v3/ethereum/address/${xpub}/${index}`,
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

export default genAddress