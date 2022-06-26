import Nav from './components/Nav';
import DataTable from './components/DataTable'
import Footer from './components/Footer'
import image from './images/duotone.png'
import { setGlobalState, useGlobalState} from './state/state'

export default function App() {
  const changeCurrency = (value)=>{
      setGlobalState("defaultCurrency",value)
  }
  const [defaultCurrency] = useGlobalState("defaultCurrency")
  return (
    <div className="bg-gray-800 font-sans leading-normal tracking-norma" >    
      <Nav changeCurrency={changeCurrency} currency={defaultCurrency} />
      <main>
        <div className="hero text-accent-content lg:h-[50vh] h-screen ">
          <div className="h-full w-full bg-center bg-no-repeat bg-cover brightness-50" style={{ backgroundImage: `url(${image})` }} ></div>  
            <div className="text-center hero-content">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Keep up-to-date</h1>
                <p className="py-6">
                  Don't lose sight of your goals. Follow real-time prices, track your favorite cryptocurrency to know what's happening to your investments.
                </p>
                <a href="#content" className="inline-block p-4 bg-teal-500 font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-teal-600 hover:shadow-lg active:bg-teal-700 active:shadow-lg transition duration-200 ease-in-out select-none">
                  Get Started
                </a>
            </div>
          </div> 
        </div>
        <DataTable currency={defaultCurrency}/>
      </main>
      <Footer/>
    </div>
  )
}
