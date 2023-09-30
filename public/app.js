const connecttomask=async()=>{
    let account;
    if(window.ethereum!="undefined"){
        const accounts=await ethereum.request({method:"eth_requestAccounts"})
        const account=accounts[0];
        document.getElementById("mask").innerHTML=account;
    }
}


const connectcontract=async ()=>{
    const abi=[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "owner",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "depositMoney",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint152",
                    "name": "amount",
                    "type": "uint152"
                }
            ],
            "name": "withdrawMoney",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "returnbalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const address="0x649Daea608D494a4B0D566961C87e004f4635eA3";

    window.contract=await new window.web3.eth.Contract(abi,address);

    document.getElementById("contract").innerHTML="Connect to the smart contract"
}