//import { useMoralisWeb3Api } from 'react-moralis'

export default function DashboardTable({ accountAddress }){





    // const fetchBalances = async () => {
    //     const chainId = await provider.request({ method: "eth_chainId" })
    //     setChainId(chainId)
        
    //     const options = {
    //       chain: chainId,
    //       address: '0x1FBe2AcEe135D991592f167Ac371f3DD893A508B'
    //     };
    //     try {
    //       //get Native balance
    //       const encryptedBalance = await provider.request({
    //         method: 'eth_getBalance',
    //         params: [options.address,'latest'],
    //       })
          
    //       // get Token balance for a given address
    //       const tokenBalances = await Web3Api.account.getTokenBalances(options);
    //       setBalance({
    //         main_balance: decrypteBalance(encryptedBalance),
    //         token_balances : tokenBalances
    //       })
          
    //     } catch (e) {
    //       if(e.message == "Invalid chain!"){
    //         alert("Chain is not supported")
    //       }
    //     }
    // };

    return(
        <div className="my-6">
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="table w-full">
                    <tr className="bg-teal-500 text-accent-content select-none text-center">
                        <th className="hidden sm:table-cell">#</th>
                        <th className="text-left">Name</th>
                        <th className="text-left">Amount</th>
                        <th className="text-left">Price</th>
                        <th className="text-left">24H P/L</th>
                    </tr>
                    <tbody className="lg:text-lg font-normal text-gray-900 dark:text-accent-content">
                    <tr>
                        <td className="text-center hidden sm:table-cell dark:border-y-0">1</td>
                        <td className="dark:border-y-0">BNB</td>
                        <td className="dark:border-y-0">0</td>
                        <td className="dark:border-y-0">Blue</td>
                        <td className="dark:border-y-0">Blue</td>
                    </tr>
                    <tr>
                        <td className="text-center hidden sm:table-cell dark:border-y-0">2</td>
                        <td className="dark:border-y-0">BNB</td>
                        <td className="dark:border-y-0">0</td>
                        <td className="dark:border-y-0">Blue</td>
                        <td className="dark:border-y-0">Blue</td>
                    </tr>
                    <tr>
                        <td className="text-center hidden sm:table-cell dark:border-y-0">3</td>
                        <td className="dark:border-y-0">BNB</td>
                        <td className="dark:border-y-0">0</td>
                        <td className="dark:border-y-0">Blue</td>
                        <td className="dark:border-y-0">Blue</td>
                    </tr>
                    <tr>
                        
                        <td className="text-center hidden sm:table-cell dark:border-y-0">4</td>
                        <td className="dark:border-y-0">BNB</td>
                        <td className="dark:border-y-0">0</td>
                        <td className="dark:border-y-0">Blue</td>
                        <td className="dark:border-y-0">Blue</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}