import React, { useState } from 'react'

const Home = () => {
    const [num1 , setNum1] = useState()
    const [num2 , setNum2] = useState()
    const [result , setResult] = useState(null)

    const add =() => {
        setResult (parseFloat(num1) + parseFloat (num2))
    }

    const sub =() => {
        setResult (parseFloat(num1) - parseFloat (num2))
    }

    const mul =() => {
        setResult (parseFloat(num1) * parseFloat (num2))
    }

    const div =() => {
        setResult (parseFloat(num1) / parseFloat (num2))
    }
    




    return (
        <div className='bg h-[100vh] w-[100vw]  '>

            <div className="heading overflow-hidden relative text-6xl text-zinc-800 flex justify-center items-center font-bold pt-16 underline cursor-pointer hover:scale-105 "><h1 >Calculator</h1></div>

            <div className='input mt-20 flex justify-center items-center gap-[20px] text-2xl '>
                <input type="number" className='h-[50px] w-[170px] px-5 outline-none border-2 rounded-full border-zinc-950 ' onChange={(e) => setNum1(e.target.value)} />
                <input type="number" className='h-[50px] w-[170px] px-5 outline-none border-2 rounded-full border-zinc-950' onChange={(e) => setNum2(e.target.value)} />
            </div>

            <div className="btn grid grid-cols-1 sm:flex justify-center items-center text-3xl font-bold mt-20 gap-2 rounded-[10px]  ">
                <button onClick={add} className='border-2 border-red-900  hover:bg-red-700  bg-red-900 text-white w-48 block mx-auto sm:mx-0  rounded-[10px]'>ADD</button>
                <button  onClick={sub} className='border-2 border-blue-900  hover:bg-blue-700 bg-blue-900 text-white w-48 block mx-auto sm:mx-0 rounded-[10px]'>SUBTRACT</button>
                <button onClick={mul} className='border-2 border-green-900 hover:bg-green-700 bg-green-900 text-white w-48 block mx-auto sm:mx-0 rounded-[10px]'>MULTIPLY</button>
                <button onClick={div} className='border-2 border-yellow-600  hover:bg-yellow-400 bg-yellow-500 text-white w-48 block mx-auto sm:mx-0 rounded-[10px]'>DIVIDE</button>
            </div>

            <div className="result text-5xl font-bold px-10 mt-11 sm:text-center text-zinc-800">
                <h2>Result:{result}</h2>
            </div>
          <h3 className='absolute bottom-16 left-5 font-bold sm:left-[38%] text-[19px]'>Copyright © 2024  reserved by Nani ❤.</h3>
        </div>
    )
}

export default Home