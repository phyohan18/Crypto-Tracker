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

export { formatAddress, formatCurrency , detectProvider ,getWalletAddress, disconnect}