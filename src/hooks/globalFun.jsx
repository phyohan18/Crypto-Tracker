import i18n from "i18next"
import CHAINS from '../../assets/constants/chains.json'
const changeLang = (value) => i18n.changeLanguage(value)

const formatAddress = (accountAddress) => accountAddress.slice(0,5)+'...'+accountAddress.slice(-5)

const formatCurrency = (x) =>  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const detectProvider = () => {
    let provider
    if (window.ethereum){
      provider = window.ethereum
    } else if (window.web3){
      provider = window.web3.currentProvider
    } else {
      return false
    }
    return provider
}

const getWalletAddress = async (provider) => {
  const accounts = await provider.request({ method: "eth_requestAccounts" }) 
  return accounts[0]
}

const disconnect = () =>{
  let provider = detectProvider()
  provider.removeAllListeners('accountsChanged')
  window.localStorage.removeItem('account_address')
}

const decrypteBalance= (encryptedBalance) => {
  const wei = parseInt(encryptedBalance,16);
  const balance = wei /(10**18)
  return balance
}

const getChainStats = async(provider) => {
  const chainId = await provider.request({ method: "eth_chainId" })
  const chainInfo = CHAINS.filter(item => item.chainId == chainId);
  return chainInfo
}

const getBalanceStats = async (provider,accountAddress) => {
  //get Native Currency Symbol
  const chainInfo = await getChainStats(provider)
  //get Native balance
  const encryptedBalance = await provider.request({
    method: 'eth_getBalance',
    params: ['0x1FBe2AcEe135D991592f167Ac371f3DD893A508B','latest'],
  })
  const nativeBalance = decrypteBalance(encryptedBalance)
  return [nativeBalance,chainInfo[0].nativeCurrency.symbol]
}

const getCoinChangePrice = async(defaultCurrency,coinSymbol) =>{
  const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${defaultCurrency}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
  const res = await  fetch(API)
  const data = await res.json()
  return data.filter(item => coinSymbol.toLowerCase() == item.symbol)
}

export { changeLang,formatAddress, formatCurrency , detectProvider ,getWalletAddress, disconnect ,getChainStats, getBalanceStats, getCoinChangePrice }