import React, {useEffect,useState} from 'react'

const Practice = () => {
    const [count, setCount] = useState(0);
    const [toggle,setToggle] = useState(0);
    const [pageWidth, setPageWidth] = useState(window.innerWidth)

    useEffect(()=>{
       const resizeHandler = () => {
        setPageWidth(window.innerWidth)
       };
       window.addEventListener("resize",resizeHandler);
       console.log("Hey I'm coming from useEffect");

       return () =>{
        console.log("I'm removing");
        window.removeEventListener("resize",resizeHandler);
       }
    })
  return (
    <div>
        <h1>Learn useEffect hey!!</h1>
        <h1>Page Width - {pageWidth}</h1>
        <h1 onClick={() => setToggle(!toggle)}>{toggle ? "open": "close"}</h1>
        Count - {count}
        <button onClick={()=> setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default Practice