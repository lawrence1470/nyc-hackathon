const query = new URLSearchParams({mnemonic: 'string'}).toString();


const sendMoney = async (req, res) => {

    const nonce = Number(req.body.nonce)

    const resp = await fetch(
        `https://api-us-west1.tatum.io/v3/ethereum/transaction`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-testnet-type': 'ethereum-ropsten',
                'x-api-key': 'ab7c6fc9-60f6-4ac3-bc41-876fd96e285f'
            },
            body: JSON.stringify({
                data: 'My note to recipient.',
                nonce: nonce,
                to: '0x6d5f725b674e0645c5230f0a18A4442c5Bc37988',
                currency: 'ETH',
                fee: {
                    gasLimit: '40000',
                    gasPrice: '0.00000001'
                },
                amount: '0.000001',
                fromPrivateKey: '0xbe2f8ccd863f253308994440f7b7a873785c3a69f3e4b9162a27c5f20cae1c6c'
            })
        }
    );


    const data = await resp.json();
    console.log(data, 'transaction sent')

    res.send(data)
}

export default sendMoney