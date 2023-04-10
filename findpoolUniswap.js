const {abi:UniswapV3Factory}=require(`@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json`)
const ethers = require("ethers");
require(`dotenv`).config()

const GOERLI_RPC_URL=process.env.GOERLI_RPC_URL


//we will get these two addresses on goerli etherscan  through swaping our eth with uniswap transaction, on uniswap ui
const address0="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
const address1="0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6"
//we get below address from "https://docs.uniswap.org/contracts/v3/reference/deployments" as UniswapV3Factory
const factoryAddress="0x1F98431c8aD98523631AE4a59f267346ea31F984"
async function main(){
    // const provider=new ethers.provider.JsonRpcProvider(GOERLI_RPC_URL)
    const provider = new ethers.providers.JsonRpcProvider(
        GOERLI_RPC_URL
      );

    const factoryContract=new ethers.Contract(
        factoryAddress,
        UniswapV3Factory,
        provider
    )

    //we will get this 500 gas price from "https://app.uniswap.org/#/pool" then select new position
    const poolAddress=await factoryContract.getPool(address0,address1,500)
    console.log("poolAdderss",poolAddress)
}
main()