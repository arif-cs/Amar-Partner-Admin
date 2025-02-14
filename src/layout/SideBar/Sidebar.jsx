import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { GrResources } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className='flex gap-5 mt-5'>
                <section className='w-48 mr-5'>
                    <div className='flex flex-col gap-5'>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1 btn-accent"><RxDashboard className='' /> Dashbords <IoIosArrowDown className='ml-5' /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="/banner"><li><a>Banner</a></li></Link>
                                <Link to="/notice"><li><a>Notice</a></li></Link>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1 btn-info"><GrResources  className=' mr-2' /> Resources <IoIosArrowDown className='ml-5' /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to='/roles'><li>Roles</li></Link>
                                <Link to='/users'><li>User</li></Link>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Sidebar;