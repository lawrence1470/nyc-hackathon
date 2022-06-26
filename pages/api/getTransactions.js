const query = new URLSearchParams({mnemonic: 'string'}).toString();


const genAddress = async (req, res) => {
    const query = new URLSearchParams({
        pageSize: '10',
        offset: '0',
        // from: '0',
        // to: '1087823',
        sort: 'DESC'
    }).toString();

    const address = '0xeD5D20E7794728640cb2F96E6489E6cA7A4a8c3e';
    const resp = await fetch(
        `https://api-us-west1.tatum.io/v3/ethereum/account/transaction/${address}?${query}`,
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