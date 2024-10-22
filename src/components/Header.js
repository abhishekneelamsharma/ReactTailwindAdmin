import React, { useState } from 'react'
import { Avatar } from '@mui/material';

const Header = ({ handleToggle }) => {
    const [userDropdown, setUserDropdown] = useState(false);

    // console.log(handleToggle)
    return (
        <>
            <nav className='ml-64 px-4 py-2.5  justify-between bg-white hidden lg:flex'>
                <div class="w-full max-w-sm min-w-[200px]">
                    <div class="relative flex items-center">

                        <input
                            class="w-64 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Dashboard Search..."
                        />

                        <button
                            class="rounded-md ml-2 bg-slate-800 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <div class="flex items-end ms-3 flex-col cursor-pointer">
                        <div>
                            <div onClick={() => setUserDropdown(!userDropdown)}>
                                <Avatar variant="circular" />
                            </div>
                        </div>

                    </div>
                </div>
            </nav >

            <nav className=' px-4 py-2.5  justify-between bg-white flex lg:hidden'>
                <div class="w-full max-w-sm min-w-[200px] mt-2" >
                    <button onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                </div>
                <div>
                    <div class="flex items-end ms-3 flex-col cursor-pointer">
                        <div>
                            <div onClick={() => setUserDropdown(!userDropdown)}>
                                <Avatar variant="circular" />
                            </div>
                        </div>

                    </div>
                </div>
            </nav >
            <hr />

            <div class={userDropdown ? "absolute right-0 z-50 w-64 px-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow float-end " : "z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "} id="dropdown-user">
                <div class="px-4 py-3" role="none">
                    <p class="text-sm text-gray-900 dark:text-white" role="none">
                        Neil Sims
                    </p>
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        neil.sims@flowbite.com
                    </p>
                </div>
                <ul class="py-1" role="none">
                    {/* <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                </li> */}
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header