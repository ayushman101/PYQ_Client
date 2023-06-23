import React from 'react'
import './Navbar.css'
import { Outlet,Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

const Navbar = () => {


    const navigate = useNavigate();

    const handleNavigate = (depart,sch,place) => {


    if(place==="/Filespage")
      navigate(place, { state: { Department:depart, School: sch } });

    else
      navigate(place);

    };


  return (
    <div>
    <div className='Navbar'>

        <ul>
            <Link to={`/`}>
            <li>Home</li>
            </Link>
            
            <li>Question Papers
                <div className='School_sub_menu'>
                    <ul>
                        <li>Engineering
                            <div className='School_sub_menu_2'>
                                <ul>
                                    <li onClick={()=>handleNavigate("CSE","Engineering","/Filespage")}>
                                        CSE
                                    </li>
                                    
                                    <li>ECE</li>
                                    <li>EE</li>
                                    <li>FET</li>
                                    <li>ME</li>
                                </ul>
                            </div>
                        </li>
                        <li>Management</li>
                        <li>Humanities</li>
                        <li>Science</li>
                    </ul>
                </div>
            </li>


            <li>Assignments
            <div className='School_sub_menu'>
                    <ul>
                        <li>Engineering
                            <div className='School_sub_menu_2'>
                                <ul>
                                <li onClick={()=>handleNavigate("CSE","Engineering","/Assignmentspage")}>
                                        CSE
                                    </li>
                                    
                                    <li onClick={()=>handleNavigate("ECE","Engineering","/Assignmentspage")}>
                                        ECE</li>
                                    <li onClick={()=>handleNavigate("EE","Engineering","/Assignmentspage")}>
                                        EE</li>
                                    <li onClick={()=>handleNavigate("FET","Engineering","/Assignmentspage")}>
                                        FET</li>
                                    <li onClick={()=>handleNavigate("ME","Engineering","/Assignmentspage")}>
                                        ME</li>
                                </ul>
                            </div>
                        </li>
                        <li>Management</li>
                        <li>Humanities</li>
                        <li>Science</li>
                    </ul>
                </div>


            </li>
            <li onClick={()=>handleNavigate("None","None","/Skillspage")}>
                Skills</li>
            <li onClick={()=>handleNavigate("None","None","/AboutUspage")}>
                
                About Us</li>


        </ul>

    </div>
    <Outlet/>

    </div>
  )

}

export default Navbar