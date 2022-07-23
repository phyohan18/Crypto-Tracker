const formatAddress = (accountAddress) => {
    return accountAddress.slice(0,6)+'...'+accountAddress.slice(-6)
}

const formatCurrency = (x) =>  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const detectProvider = () => {
    let provider;
    if (window.ethereum){
      provider = window.ethereum;
    } else if (window.web3){
      provider = window.web3.currentProvider;
    } else {
      return false
    }
    return provider
}

const disconnect = () =>{
  let provider = detectProvider()
  provider.removeAllListeners('chainChanged')
  provider.removeAllListeners('accountsChanged')
  window.localStorage.removeItem('account_address');
}

export { formatAddress, formatCurrency , detectProvider , disconnect};