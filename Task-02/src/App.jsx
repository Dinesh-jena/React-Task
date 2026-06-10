import React, { useEffect, useState } from 'react'

const App = () => {

  
  const [apple, setapple] = useState(false);
  const [mango, setmango] = useState(false);
  const [graps, setgraps] = useState(false);
  const [dragon, setdragon] = useState(false);
  const [checkall, setcheckall] = useState(false);

  
  function SubmitHandler(e){
    e.preventDefault();
      
     
  }

  const Result =[apple,mango,graps,dragon];

 

  useEffect(()=>{
    if(checkall == true){
        setapple(true);
        setmango(true);
        setdragon(true);
        setgraps(true);
      }
  },[checkall])


  useEffect(()=>{
    if(mango && apple && graps && dragon ){
      setcheckall(true);
    }else{
      setcheckall(false)
    }
  },[mango,apple,graps,dragon])

  
  let Totalcount=0;
  let Checkedcount=0;

  Result.map((elem,index)=>{
    if(elem == true){
      Checkedcount++;
    }
   Totalcount++;
  })



     
  return (
    <div className='flex justify-center  '>
      <h1>Multiple select Concept</h1>

      <div className='flex justify-center border-2 h-100 w-75 '>
        <form onSubmit={SubmitHandler}>
        <div className='flex '>
          <input 
          type="checkbox"
           value={apple}
          checked = { apple}
           onChange={(e)=>setapple(e.target.checked)}
           />
          <p>apple</p>
        </div>
        
        <br />

       <div className='flex'>
          <input 
          type="checkbox"
           value={mango}
            checked = { mango}
           onChange={(e)=>setmango(e.target.checked)}
           />
          <p>mango</p>
        </div>
        
        <br />
        <div className='flex'>
          <input 
          type="checkbox"
           value={graps}
            checked = { graps}
           onChange={(e)=>setgraps(e.target.checked)}
           
           />
          <p>graps</p>
        </div>
        
        <br />
        <div className='flex'>
          <input 
          type="checkbox"
           value={dragon}
            checked = { dragon}
           onChange={(e)=>setdragon(e.target.checked)}
           />
          <p>dragon</p>
        </div>
        
        <br />


        <br />
         <div className='flex'>
          <input 
          type="checkbox"
           value={checkall}
           checked = { checkall}
           onChange={(e)=>setcheckall(e.target.checked)}
           />
          <p>selectAll</p>
        </div>


        <button className='border-2'>submit</button>
      </form>



      </div>

        <div className='ml-15 h-50 w-50 border-2'>
            <h1>TotalCount:-{Totalcount}</h1>
             <h1>CheckCount:-{Checkedcount}</h1>
        </div>

      
    </div>

    
  )
}

export default App