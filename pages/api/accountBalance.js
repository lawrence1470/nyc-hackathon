const query = new URLSearchParams({mnemonic: 'string'}).toString();
require('cryptocurrency-unit-convert')


const accountBalance = async (req, res) => {
    const address = '0x6d5f725b674e0645c5230f0a18A4442c5Bc37988';
    const resp = await fetch(
        `https://api-us-west1.tatum.io/v3/ethereum/account/balance/${address}`,
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

export default accountBalance