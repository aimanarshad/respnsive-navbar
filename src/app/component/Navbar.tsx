"use client";

import Link from "next/link";
import React from "react";


const Navbar = () => {
    return(
        <div>
            <nav className="bg-blue-300 text-black-500 py-5 flex justify-between items-center">
              <div>
                <h1 className="text-left font-semibold">S.S</h1>
                </div> 
           
                <div>
                    <ul className="flex space-x-4 ">
                        <li><Link href="#" className="hover:text-red-500">Home</Link></li>
                        <li><Link href="#" className="hover:text-red-500">About</Link></li>
                        <li><Link href="#" className="hover:text-red-500">Skills</Link></li>
                        <li><Link href="#" className="hover:text-red-500">Feedback</Link></li>
                    
                    </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar;