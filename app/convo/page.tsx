'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import meralcoImage from "@/assets/meralco.svg"
import Link from 'next/link'
import bell from '@/assets/bell.svg'
import logout from '@/assets/log-out.svg'
import { useRouter } from 'next/navigation' // Importing useRouter for client-side navigation

const Convo = () => {
    const [message, setMessage] = useState('');
    const [boxClicked, setBoxClicked] = useState<string | null>(null);  // Track which box is clicked
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [isClient, setIsClient] = useState(false); // Track if the component is on the client

    // Set the 'isClient' flag to true after the component is mounted on the client
    useEffect(() => {
        setIsClient(true); // Indicate that the component has mounted
    }, []);

    // Handle input change to auto-expand chatbox
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);

        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`; // Limit max height
        }
    };

    // Handle logout and navigate to the main page (home)
    const handleLogout = () => {
        if (isClient) {
            // Add custom logout functionality here
            console.log("Logged out!");
        }
    };

    // Handle box click event to perform an action
    const handleBoxClick = (box: string) => {
        // Here you can define the action that happens when a box is clicked.
        // For now, we will set the state to which box was clicked.
        setBoxClicked(box);
        console.log(`Box clicked: ${box}`); // Just log to console (you can replace this with any action)

        // You can also do something else, like show an alert or update other states.
        alert(`You clicked on: ${box}`);
    };

    return (
        <div className="flex flex-col h-screen">
            <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center h-20">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image src={meralcoImage} alt="Logo" width={32} height={32} />
                            </Link>
                        </div>
                        <div className="flex text-base pl-2">
                            Chat with Airene!
                        </div>
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
                                onClick={handleLogout} // Trigger the handleLogout function
                            >
                                <Image src={logout} alt="logout" width={24} height={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex flex-col items-center pt-36">
                <div className="text-4xl font-bold bg-gradient-to-b from-orange-500 via-orange-600 via-orange-700 to-orange-900 bg-clip-text text-transparent mb-4">
                    Hey there!
                </div>
                <div className="text-4xl font-bold bg-gradient-to-b from-orange-900 to-black bg-clip-text text-transparent">
                    What's the buzz?
                </div>
                <div className='flex text-gray-600 text-lg font-light mt-2'>
                    The name's <div className='text-orange-400 pl-1'> Airene</div>! Your bright,
                </div>
                <div className='flex text-gray-600 text-lg font-light'>
                    powerful, and electrifying AI assistant,
                </div>
                <div className='flex text-gray-600 text-lg font-light'>
                    here to energize your Meralco experience. What can I do to help you with?
                </div>

                {/* Clickable Boxes with Custom Actions */}
                <div className='flex gap-16 mt-4'>
                    <div 
                        className="w-full max-w-80 bg-white border-2 border-orange-500 p-12 rounded-lg shadow-md cursor-pointer hover:bg-orange-50 transition-all"
                        onClick={() => handleBoxClick('Box 1')}  // Trigger action when Box 1 is clicked
                    >
                        <p className="text-center text-gray-700">This is a white box with an orange border.</p>
                    </div>
                    <div 
                        className="w-full max-w-80 bg-white border-2 border-orange-500 p-12 rounded-lg shadow-md cursor-pointer hover:bg-orange-50 transition-all"
                        onClick={() => handleBoxClick('Box 2')}  // Trigger action when Box 2 is clicked
                    >
                        <p className="text-center text-gray-700">This is a white box with an orange border.</p>
                    </div>
                    <div 
                        className="w-full max-w-80 bg-white border-2 border-orange-500 p-12 rounded-lg shadow-md cursor-pointer hover:bg-orange-50 transition-all"
                        onClick={() => handleBoxClick('Box 3')}  // Trigger action when Box 3 is clicked
                    >
                        <p className="text-center text-gray-700">This is a white box with an orange border.</p>
                    </div>
                </div>
            </div>

            <footer className="bg-white fixed bottom-0 w-full shadow-md py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end space-x-4 chatbox-wrapper">
                        <textarea
                            ref={textareaRef}
                            value={message}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="w-full p-3 border-2 border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none overflow-hidden"
                            rows={1}
                            style={{ maxHeight: '120px' }}
                        />
                        <button
                            className="p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            onClick={() => alert("Message sent!")}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Convo;
