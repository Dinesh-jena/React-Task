import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import AddnewMember from '../Components/AddnewMember';

const EmployeeDashboard = () => {

    //variable for employee
     const [id, setid] = useState(6)
    
     //usestate for employee
       const [name, setname] = useState("");
        const [department, setdepartment] = useState("");
        const [salary, setsalary] = useState(0);
        const [active, setactive] = useState(false);

    //BY default arrau
      const EmployeeData = [
                {
                    id: 1,
                    name: "Rahul Sharma",
                    department: "Software Development",
                    salary: 65000,
                    active: true
                },
                {
                    id: 2,
                    name: "Priya Patel",
                    department: "Human Resources",
                    salary: 50000,
                    active: false
                },
                {
                    id: 3,
                    name: "Amit Verma",
                    department: "Marketing",
                    salary: 55000,
                    active: true
                },
                {
                    id: 4,
                    name: "Sneha Gupta",
                    department: "Finance",
                    salary: 70000,
                    active: true
                },
                {
                    id: 5,
                    name: "Karan Singh",
                    department: "Customer Support",
                    salary: 45000,
                    active: false
                }
            ];

        const [employee, setemployee] = useState(EmployeeData);


     

        //form submithandler
         function SubmitHandler(e){
                
               e.preventDefault();
                    //My Solution
                    //  let copydoto=[...employee];
                    
                    //  console.log(department,name,salary,active);
                  
                    //  let newemployee = {
                    //                  id: id,
                    //                  name: name,
                    //                  department: department,
                    //                  salary: salary,
                    //                  active: active
                    //              }
                    //      setid(id+1);
                    //      copydoto.push(newemployee)
                        

                    //      const Result = [...copydoto];


                    //optimize solution

                    setemployee((prvs)=>[
                    ...prvs,
                    {
                        id:id,
                        name:name,
                        department:department,
                        salary:salary,
                        active:active,
                    }
                    ]

                    );   
                  
                    setid(id+1);
                    setname("");
                    setactive(false);
                    setdepartment("");
                    setsalary(0);
            }
            
            // togglehandler
            const toggleEmployeeStatus = (id) => {
                    setemployee(
                        employee.map((emp) =>
                        emp.id === id
                            ? { ...emp, active: !emp.active }
                            : emp
                        )
                    );
            };

            // DeleteHandler
            const DeleteHandler = (id) =>{
                setemployee(
                        employee.filter((emp) => emp.id !== id)
                     );
            }

    let TotalMember=0;
    let ActiveCount=0;
    let InActiveCount=0;
            function ActiveEmp(){
                
                    employee.forEach((elem)=>{
                        if(elem.active){
                        ActiveCount ++;
                        }else{
                            InActiveCount++;
                        }
                        TotalMember++;
                    })
                    
                    if(ActiveCount==0){
                        alert("No Employee Available");
                    }
                }
            ActiveEmp();
     
  return (
<div>

        {/* maindiv  */}
         <div className='flex flex-wrap ml-15 mt-15'>
                    {employee.map((elem,index)=>{
                            return (
                             <div key={index} className='h-60 w-75 border-2 border-black flex flex-col items-center ml-5 mt-2  '>

                                    <h1>Id:-{elem.id}</h1>

                                    <h1>Name:-{elem.name}</h1>

                                    <h1>Department:-{elem.department}</h1>

                                    <h1>Salary:-{elem.salary}</h1>

                                    <button
                                        onClick={() => toggleEmployeeStatus(elem.id)}
                                        className={`px-4 py-2 rounded text-white transition-all ${
                                            elem.active ? "bg-green-500" : "bg-gray-500"
                                        }`}
                                        >
                                        {elem.active ? "Active" : "Inactive"}
                                    </button>

                                    <button
                                            onClick={() => DeleteHandler(elem.id)}
                                            className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                        >Delete
                                    </button>
                            </div>
                                 )
                            })
                        }
         </div>



<br />
<hr />
<br /> 
<hr />


         
    <div className='flex ml-25 mt-5 h-100'>
             {/* ADD  Employee  */}
                      <div className='flex justify-center '>
                          <form onSubmit={SubmitHandler}>
                                        <div className='border-3 h-75 w-100'>
                                                    <div>
                                                        <h1>Add New Employee</h1>
                                                    </div>
                                                <hr  />

                                                <div className='flex mt-2'>
                                                        <h1>1.New Employee Name:-</h1>
                                                        <input 
                                                        className='border-2 ml-3'
                                                        value={name || ""} 
                                                        onChange={(e)=>setname(e.target.value)}
                                                        type="text" 
                                                        placeholder='name' />
                                                </div>

                                                <br />
                                                <hr />

                                                <div className='flex mt-2 '>
                                                        <h1>2.New Department Name:-</h1>
                                                        <input 
                                                        className='border-2 ml-3'  
                                                        onChange={(e)=>setdepartment(e.target.value)} 
                                                        value={department || ""} 
                                                        type="text" 
                                                        placeholder='department' />
                                                </div>

                                                <br />
                                                <hr />

                                                <div className='flex mt-2 '>
                                                        <h1>3.Enter Salary:-</h1>
                                                        <input 
                                                        className='border-2 ml-3'  
                                                        onChange={(e)=>setsalary(e.target.value)} 
                                                        value={salary || ""} 
                                                        type="number" 
                                                        placeholder='salary' />
                                                </div>

                                                <br />
                                                <hr />

                                                <button 
                                                className='border-2 ml-35 mt-5  '
                                                >
                                                    Add new Employee
                                                </button>

                                        </div>
                                    
                            </form>
                     </div>








                             {/* Active &INactive ka KA dashbord */}

                             <div className='ml-15 border-2 h-50 w-50'>
                                    <h1>Employee Satus Board</h1>
                                    <hr />
                                    <br />
                                    <h1>1.Total Employee:-{TotalMember}</h1>
                                    <hr />
                                    <br />
                                    <h1>2.Active Employee:-{ActiveCount}</h1>
                                    <hr />
                                    <br />
                                    <h1>3.InActive Employee:-{InActiveCount}</h1>
                             </div>



    </div>

</div>
  )
}

export default EmployeeDashboard