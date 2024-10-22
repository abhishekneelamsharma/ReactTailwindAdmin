import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Sidebar = ({ toggle,handleMainToggle }) => {
    const [toggleId, setToggleId] = useState();
    const [subToggleId, setSubToggleId] = useState();

    const handleToggle = (id) => {
        id == toggleId ? setToggleId(null) : setToggleId(id)
    }
    const handleSubToggle = (id) => {
        id == subToggleId ? setSubToggleId(null) : setSubToggleId(id)
    }


    return (
        <>
            {/* <!-- Sidebar --> */}
            <div id="hs-offcanvas-example" class="fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 hidden lg:block" role="dialog" tabindex="-1" aria-label="Sidebar">
                <div class="px-6">
                    {/* <a class="flex-none font-semibold text-xl text-white focus:outline-none focus:opacity-80 dark:text-white" href="#" aria-label="Brand">Brand</a> */}
                </div>
                <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul class="space-y-1.5">
                        <li>
                            <Link to="/" class="flex items-center gap-x-3.5 py-2 px-2.5 hover:bg-gray-100 focus:text-gray-700 focus:bg-gray-100 hover:text-gray-700 text-sm text-gray-400 rounded-lg hover:bg-gray-100 " href="#">
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                Dashboard
                            </Link>
                        </li>

                        <li class="hs-accordion" id="users-accordion">
                            <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm   rounded-lg  text-gray-400 hover:text-gray-700 hover:bg-gray-100" aria-expanded="true" aria-controls="users-accordion" onClick={() => handleToggle(1)}>
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>

                                Users

                                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div id="users-accordion" class={toggleId == 1 || toggleId == "1.1" || toggleId == "1.2" ? "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 " : "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"} role="region" aria-labelledby="users-accordion">
                                <ul class="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                                    <li class="hs-accordion" id="users-accordion-sub-1">
                                        <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none " aria-expanded="true" aria-controls="users-accordion-sub-1" onClick={() => handleSubToggle("1.1")}>
                                            Sub Menu 1


                                            <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>

                                        <div id="users-accordion-sub-1" class={subToggleId == "1.1" ? "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 " : "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"} role="region" aria-labelledby="users-accordion-sub-1">
                                            <ul class="pt-2 ps-2">
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700 " href="#">
                                                        Link 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                                        Link 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                                        Link 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="hs-accordion" id="users-accordion-sub-2">
                                        <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none" aria-expanded="true" aria-controls="users-accordion-sub-2" onClick={() => handleSubToggle("1.2")}>
                                            Sub Menu 2
                                            <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>

                                        <div id="users-accordion-sub-2" class={subToggleId == "1.2" ? "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 " : "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"} role="region" aria-labelledby="users-accordion-sub-2">
                                            <ul class="pt-2 ps-2">
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                                        Link 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                                        Link 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                                        Link 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="hs-accordion" id="account-accordion">
                            <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg " aria-expanded="true" aria-controls="account-accordion" onClick={() => handleToggle(2)}>
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="15" r="3" /><circle cx="9" cy="7" r="4" /><path d="M10 15H6a4 4 0 0 0-4 4v2" /><path d="m21.7 16.4-.9-.3" /><path d="m15.2 13.9-.9-.3" /><path d="m16.6 18.7.3-.9" /><path d="m19.1 12.2.3-.9" /><path d="m19.6 18.7-.4-1" /><path d="m16.8 12.3-.4-1" /><path d="m14.3 16.6 1-.4" /><path d="m20.7 13.8 1-.4" /></svg>
                                Account
                                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button >

                            <div id="account-accordion" class={toggleId == 2 ? "hs-accordion-content w-full overflow-hidden transition-[height] duration-300" : "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"} role="region" aria-labelledby="account-accordion">
                                <ul class="pt-2 ps-2">
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="hs-accordion" id="projects-accordion">
                            <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100" aria-expanded="true" aria-controls="projects-accordion" onClick={() => handleToggle(3)}>
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>
                                Projects

                                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div id="projects-accordion" class={toggleId == 3 ? "hs-accordion-content w-full overflow-hidden transition-[height] duration-300" : "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"} role="region" aria-labelledby="projects-accordion">
                                <ul class="pt-2 ps-2">
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link to="/calender" class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-700" href="#">
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                                Calendar
                            </Link>
                        </li>

                        <li>
                            <Link to="tables" class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-700" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                                </svg>

                                Tables
                            </Link>
                        </li>

                        <li>
                            <Link to="/forms" class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-700" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>

                                Forms
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <!-- End Sidebar --> */}

            {/* <!-- Sidebar --> */}
            <div id="hs-offcanvas-example" class={toggle ? "fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 block lg:hidden" : "hidden"} role="dialog" tabindex="-1" aria-label="Sidebar">
                <div class="px-6 flex justify-end">
                    {/* <a class="flex-none font-semibold text-xl text-white focus:outline-none focus:opacity-80 dark:text-white" href="#" aria-label="Brand">Brand</a> */}
                    <button onClick={handleMainToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6 text-gray-500">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clip-rule="evenodd" />
                        </svg>

                    </button>
                </div>
                <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul class="space-y-1.5">
                        <li>
                            <Link to="/" class="flex items-center gap-x-3.5 py-2 px-2.5 hover:bg-gray-100 focus:text-gray-700 focus:bg-gray-100 hover:text-gray-700 text-sm text-gray-400 rounded-lg hover:bg-gray-100 " href="#">
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                Dashboard
                            </Link>
                        </li>

                        <li class="hs-accordion" id="users-accordion">
                            <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm   rounded-lg  text-gray-400 hover:text-gray-700 hover:bg-gray-100" aria-expanded="true" aria-controls="users-accordion" onClick={() => handleToggle(1)}>
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>

                                Users

                                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div id="users-accordion" class={toggleId == 1 || toggleId == "1.1" || toggleId == "1.2" ? "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 " : "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"} role="region" aria-labelledby="users-accordion">
                                <ul class="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                                    <li class="hs-accordion" id="users-accordion-sub-1">
                                        <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none " aria-expanded="true" aria-controls="users-accordion-sub-1" onClick={() => handleSubToggle("1.1")}>
                                            Sub Menu 1


                                            <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>

                                        <div id="users-accordion-sub-1" class={subToggleId == "1.1" ? "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 " : "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"} role="region" aria-labelledby="users-accordion-sub-1">
                                            <ul class="pt-2 ps-2">
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700 " href="#">
                                                        Link 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                                        Link 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                                        Link 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="hs-accordion" id="users-accordion-sub-2">
                                        <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none" aria-expanded="true" aria-controls="users-accordion-sub-2" onClick={() => handleSubToggle("1.2")}>
                                            Sub Menu 2
                                            <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>

                                        <div id="users-accordion-sub-2" class={subToggleId == "1.2" ? "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 " : "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"} role="region" aria-labelledby="users-accordion-sub-2">
                                            <ul class="pt-2 ps-2">
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                                        Link 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                                        Link 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                                        Link 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="hs-accordion" id="account-accordion">
                            <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg " aria-expanded="true" aria-controls="account-accordion" onClick={() => handleToggle(2)}>
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="15" r="3" /><circle cx="9" cy="7" r="4" /><path d="M10 15H6a4 4 0 0 0-4 4v2" /><path d="m21.7 16.4-.9-.3" /><path d="m15.2 13.9-.9-.3" /><path d="m16.6 18.7.3-.9" /><path d="m19.1 12.2.3-.9" /><path d="m19.6 18.7-.4-1" /><path d="m16.8 12.3-.4-1" /><path d="m14.3 16.6 1-.4" /><path d="m20.7 13.8 1-.4" /></svg>
                                Account
                                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button >

                            <div id="account-accordion" class={toggleId == 2 ? "hs-accordion-content w-full overflow-hidden transition-[height] duration-300" : "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"} role="region" aria-labelledby="account-accordion">
                                <ul class="pt-2 ps-2">
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="hs-accordion" id="projects-accordion">
                            <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100" aria-expanded="true" aria-controls="projects-accordion" onClick={() => handleToggle(3)}>
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>
                                Projects

                                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div id="projects-accordion" class={toggleId == 3 ? "hs-accordion-content w-full overflow-hidden transition-[height] duration-300" : "hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"} role="region" aria-labelledby="projects-accordion">
                                <ul class="pt-2 ps-2">
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700" href="#">
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link to="/calender" class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-700" href="#">
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                                Calendar
                            </Link>
                        </li>

                        <li>
                            <Link to="tables" class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-700" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                                </svg>

                                Tables
                            </Link>
                        </li>

                        <li>
                            <Link to="/forms" class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-700" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>

                                Forms
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <!-- End Sidebar --> */}

        </>
    )
}

export default Sidebar