import React, { useState } from 'react'

const App = () => {

  const [result, setresult] = useState([
      {
        name:"apple",
        check:false
      },
      {
        name:"mango",
        check:false
      },
     {
        name:"dragon",
        check:false
      },
      {
        name:"dragon1",
        check:false
      },
       {
        name:"dragon2",
        check:false
      },

            ]);

  
  const [checkall, setcheckall] = useState(false);





const Handlecheck = (value)=>{


  setcheckall(value);
  
  const copy=[...result];

  if(value){
       {
          copy.map((elem,index)=>{
            elem.check=true;
          })
        }
      }
      else{
         {
          copy.map((elem,index)=>{
            elem.check=false;
          })
        }
      }


  setresult(copy)

}

let count=0;

const Handlesingle = (value)=>{
  
  const copy=[...result];

   copy[value].check= !(copy[value].check);

   setresult(copy)


  {
      result.map((elem,index)=>{
        if(elem.check==false){
          setcheckall(false);
        }else{
          count++;
        }
      })
   }

   if(count == result.length){
    setcheckall(true);
   }
   
   
}




  return (
    <div>
      <h1>CheckBox</h1>
      {
        result.map((elem,index)=>{
          return(
            
            <div  key={index}>
              <div className='flex justify-center'>
                <input onChange={(e)=>{Handlesingle(index)}} type="checkbox" checked={elem.check} />
                <h1>{elem.name}</h1>
              </div>
            </div>
          )
        })
      }

      <div className='flex justify-center'>
            <input
            
            checked={checkall}
              onChange={(e)=>
                {Handlecheck(e.target.checked)} } 
              type="checkbox" />
            <h1>select all</h1>
      </div>
    </div>
  )
}

export default App