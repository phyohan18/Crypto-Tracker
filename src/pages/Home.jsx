import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Modal from '../components/Modal'
import image from '../images/duotone.webp'
import { useChangeLanguage } from '../hooks/useCustomHooks'

export default function App() {

  const [currentLanguage, t ] = useChangeLanguage()

  return (
    <div className="bg-gray-800 font-sans leading-normal tracking-normal" >    
      <Nav currentLanguage={currentLanguage}/>
      <main>
        <div className="hero text-accent-content lg:h-[50vh] h-screen ">
          <div className="h-full w-full bg-center bg-no-repeat bg-cover brightness-50" style={{ backgroundImage: `url(${image})` }} ></div>  
            <div className="text-center hero-content">
              <div className="max-w-md">
                <h1 className={`${currentLanguage == "en" ? "text-5xl font-bold" : "text-4xl font-semibold"}`}>{t('keep_up_to_date')}</h1>
                <p className="py-6">
                  {t('slogan')}
                </p>
                <label htmlFor="my-modal-4" className="btn modal-button bg-teal-500 font-semibold text-accent-content uppercase hover:bg-teal-600 duration-200">{t('get_started')}</label>
            </div>
          </div> 
        </div>
        <div className="py-1 duration-75 bg-gray-100 dark:bg-gray-800">
          <Section translation={t} className="container lg:w-12/14 xl:w-10/12 2xl:w-8/12 mb-8 xl:mb-0 px-4 md:px-8 mx-auto mt-8"/>
        </div>
      </main>
      <Footer/>
      <Modal translation={t}/>     
    </div>
  )
}
