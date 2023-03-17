import moon2 from './assets/moon2.gif'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [])
  return (
    <div className="App bg-black h-screen w-full">
      <div className="flex flex-col justify-center items-center h-screen">
        <img src={moon2} alt="moon" className="max-w-full max-h-full" />
        <div
          className="apply-button"
          data-hackathon-slug="meenhacks"
          data-button-theme="dark"
          // style={{"height: 44px, width: 312px"}}
        ></div>
      </div>

    </div>
  )
}

export default App
