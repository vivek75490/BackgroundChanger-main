import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState('gray');
  const [screenContent, setScreenContent] = useState('Test Your Screen');

  function resetScreen(){
    setScreenContent('');
  }

  function colorSetter(value){
    setColor(value);
  }

  return (
    <>
      {/*Main body */}
      <div className='w-full h-screen duration-1000 flex justify-center items-center' style={{backgroundColor: color}}>

        <div className='main-content text-wrap'>{screenContent}</div>

        {/*Lower panel body with buttons*/}
        <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2' onClick={resetScreen}>

          <div className='btn-container bg-neutral-400 shadow-md w-6/12 min-w-80 max-w-96 h-11  rounded-full grid grid-flow-col justify-evenly'>

            {/*Color change buttons lay here*/}
            <button onClick={() => colorSetter('#0000FF')} style={{backgroundColor:'#0000FF', color:'white'}}>Blue</button>

            <button onClick={() => colorSetter('#00FF00')} style={{backgroundColor:'#00FF00', color:'black'}}>Green</button>

            <button onClick={() => colorSetter('#FF0000')} style={{backgroundColor:'#FF0000', color:'white'}}>Red</button>

            <button onClick={() => colorSetter('#FFFFFF')} style={{backgroundColor:'#FFFFFF', color:'black'}}>White</button>

            <button onClick={() => colorSetter('#000000')} style={{backgroundColor:'#000000', color:'white'}}>Black</button>

          </div>

        </div>
      
      </div>
  
    </>
  )
}

export default App
