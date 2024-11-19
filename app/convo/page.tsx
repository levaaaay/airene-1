'use client'

import React from 'react'
import Image from 'next/image'
import meralcoImage from "@/assets/meralco.svg"
import Link from 'next/link'
import bell from '@/assets/bell.svg'
import logout from '@/assets/log-out.svg'

const Convo = () => {
    return (
        <div>
            <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center h-20">
                        {/* Navbar Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image src={meralcoImage} alt="Logo" width={32} height={32} />
                            </Link>
                        </div>

                        {/* Chat with Airene Text */}
                        <div className="flex text-base pl-2">
                            Chat with Airene!
                        </div>

                        {/* Desktop Menu aligned to the right with more space */}
                        <div className="ml-auto flex space-x-6 pr-4">
                            <button
                                className="p-2 hover:bg-gray-200 rounded-full"
                                aria-label="Notifications"
                                onClick={() => alert("Bell clicked")}
                            >
                                <Image src={bell} alt="bell" width={24} height={24} />
                            </button>
                            <button
                                className="p-2 hover:bg-gray-200 rounded-full"
                                aria-label="Logout"
                                onClick={() => alert("Logout clicked")}
                            >
                                <Image src={logout} alt="logout" width={24} height={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content Section */}
            <div className="flex flex-col items-center pt-36"> {/* Add padding top to account for fixed navbar */}
                {/* Gradient Text */}
                <div className="text-4xl font-bold bg-gradient-to-b from-orange-500 via-orange-600 via-orange-700 to-orange-900 bg-clip-text text-transparent mb-4">
                    Hey there!
                </div>
                <div className="text-4xl font-bold bg-gradient-to-b from-orange-900 to-black bg-clip-text text-transparent">
                    What's the buzz?
                </div>
                <div className='flex text-gray-600 text-lg'>
                    The name's <div className='text-orange-400 pl-1'> Airene</div>! Your bright,
                </div>
                <div className='flex text-gray-600 text-lg'>
                    powerful, and electrifying AI assistant,
                </div>
                <div className='flex text-gray-600 text-lg'>
                    here to energize you Meralco
                </div>
            </div>
        </div>
    )
}

export default Convo
