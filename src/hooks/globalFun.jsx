import i18n from "i18next"
import CHAINS from '../../assets/constants/chains.json'
const changeLang = (value) => i18n.changeLanguage(value)

const formatAddress = (accountAddress) => accountAddress.slice(0,5)+'...'+accountAddress.slice(-5)

const formatBalanceCommas = ((x) =>  {
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
})

const formatBalanceDecimals = (decimals,balance) => parseFloat((balance/Math.pow(10,decimals)).toFixed(2))

const fetcher = (...args) => fetch(...args).then(res => res.json()).then(res => res.error != null ? res.data : res)

const paginate = (searchItems,showItems,currentPage,items,tempNumberOfPages) => {
  let itemsPerPage = searchItems.length < 10 && searchItems.length > 0 ? searchItems.length : ( showItems.length > 10 ? 10 : showItems.length)
  // Get current items
  const index0fLastItem = currentPage*itemsPerPage
  const index0fFirstItem = index0fLastItem-itemsPerPage
  let pages
  if (searchItems.length == 0)
  {
      items = showItems.slice(index0fFirstItem, index0fLastItem)
      pages = Math.ceil(showItems.length/itemsPerPage)
  } else {
      items = searchItems.slice(index0fFirstItem, index0fLastItem)
      pages = Math.ceil(searchItems.length/itemsPerPage)
  }
 
  const pageNumbers = []
  for (let i = 1; i <= pages; i++){
      pageNumbers.push(i)
  }
 
  if(pageNumbers.length <= 5){
      tempNumberOfPages = [...pageNumbers]
  } else {
      if (currentPage >= 1 && currentPage <= 3) {
          tempNumberOfPages = [1,2,3,4,5,'...',pageNumbers.length]
      }
      else if ( currentPage >= 4 && currentPage < pageNumbers.length - 2) {
          const sliced1 = pageNumbers.slice(currentPage - 2, currentPage+1) 
          tempNumberOfPages = [1,'...',...sliced1,'...',pageNumbers.length]
      }
      else if ( currentPage > pageNumbers.length - 3) {                           
          const sliced = pageNumbers.slice(pageNumbers.length - 5)                
          tempNumberOfPages = [1,'...',...sliced]
      }
  }
  return [tempNumberOfPages,items]
}

const getPercentageChange = (oldNumber, newNumber) => ((newNumber-oldNumber)/newNumber*100.0).toFixed(5)

const displayPercentageChange = (quote_rate_24h,quote_rate) =>{
  if (quote_rate_24h == null)  return '--'
  const value = parseFloat(getPercentageChange(quote_rate_24h,quote_rate))
  return  <div className={`font-semibold ${value > 0 ? 'text-emerald-600' : 'text-red-500'}`}>{value}%</div>
}

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
  //get Native balance
  const encryptedBalance = await provider.request({
    method: 'eth_getBalance',
    params: [accountAddress,'latest'],
  })
  const nativeBalance = decrypteBalance(encryptedBalance)
  return nativeBalance
}

const getCoinChangePrice = async(defaultCurrency,coinSymbol) =>{
  const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${defaultCurrency}&order=market_cap_rank_desc&sparkline=true&price_change_percentage=24h`
  const res = await  fetch(API)
  const data = await res.json()
  return data.filter(item => coinSymbol.toLowerCase() == item.symbol)
}
       

export { changeLang,formatAddress, formatBalanceCommas , formatBalanceDecimals,displayPercentageChange, detectProvider ,getWalletAddress, disconnect ,getChainStats, getBalanceStats, getCoinChangePrice, fetcher , paginate}