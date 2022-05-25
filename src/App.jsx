import Nav from './components/Nav';
import DataTable from './components/DataTable'
import Footer from './components/Footer'
import image from './images/duotone.png'


export default function App() {

  return (
    <div className="font-sans leading-normal tracking-normal dark:bg-gray-800" >    
      <Nav/>
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
        <DataTable/>
      </main>
      <Footer/>
    </div>
  )
}
