import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import Navbar from '../../layout/Navbar/Navbar';
import Sidebar from '../../layout/SideBar/Sidebar';

const User = () => {
    return (
        <>
            <div>
                <div>
                    <Navbar></Navbar>
                </div>
                <div className='flex justify-between'>
                    <Sidebar></Sidebar>
                    <div className='w-full ml-5'>
                        <div className='flex gap-5 m-5 justify-around'>
                            <div className='bg-slate-300 p-5'>
                                <div className='flex'>
                                    <h1 className='text-black'>Total Users</h1>
                                    <select>
                                        <option value="">30 Days</option>
                                        <option value="">30 Days</option>
                                        <option value="">30 Days</option>
                                    </select>
                                </div>
                            </div>
                            <div className='bg-slate-300 p-5'>
                                <h1>7 Days</h1>
                                <select>
                                    <option value="">Lifetime</option>
                                    <option value="">7 Days</option>
                                    <option value="">30 Days</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className='text-2xl mb-5'>Users</h2>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <input type="text" className="grow" placeholder="Search" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                    </label>
                                </div>
                                <div>
                                    <button className="btn btn-xs lg:btn-md ">Create User </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="overflow-x-auto mt-5">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Details</th>
                                            <th>Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                ZemlakLeannon@gmail.com
                                            </td>
                                            <th><button className="btn btn-ghost btn-xs">details</button></th>
                                            <th>
                                                <BsThreeDots />
                                            </th>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                ZemlakLeannon@gmail.com
                                            </td>
                                            <th><button className="btn btn-ghost btn-xs">details</button></th>
                                            <th>
                                                <BsThreeDots />
                                            </th>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                ZemlakLeannon@gmail.com
                                            </td>
                                            <th><button className="btn btn-ghost btn-xs">details</button></th>
                                            <th>
                                                <BsThreeDots />
                                            </th>
                                        </tr>
                                        {/* row 4 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                ZemlakLeannon@gmail.com
                                            </td>
                                            <th><button className="btn btn-ghost btn-xs">details</button></th>
                                            <th>
                                                <BsThreeDots />
                                            </th>
                                        </tr>
                                        {/* row 5 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                ZemlakLeannon@gmail.com
                                            </td>
                                            <th><button className="btn btn-ghost btn-xs">details</button></th>
                                            <th>
                                                <BsThreeDots />
                                            </th>
                                        </tr>
                                        {/* row 6 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                ZemlakLeannon@gmail.com
                                            </td>
                                            <th><button className="btn btn-ghost btn-xs">details</button></th>
                                            <th>
                                                <BsThreeDots />
                                            </th>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default User;