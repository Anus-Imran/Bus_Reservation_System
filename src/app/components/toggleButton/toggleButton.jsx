import React, { useState, useEffect, useRef } from 'react'

const ToggleButton = ({ buttonText, buttonTextHidden, children }) => {


    const [isVisible, setIsVisible] = useState(true);
    const toggleRef = useRef(null);


    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    //handle the click outside the toggle button

    const handleOutsides = (event) => {
        if (toggleRef.current && !toggleRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    }


    useEffect(() => {
        //add event listener
        document.addEventListener('mousedown', handleOutsides);
        return () => {
            //remove event listener
            document.removeEventListener('mousedown', handleOutsides);
        }
    }, []);

    return (
        <div className='w-full h-auto' ref={toggleRef}>
            <button
                onClick={toggleVisibility}
                className={`w-fit px-4 py-2 border-2 border-red-600 ${!isVisible ? "bg-red-600 text-neutral-50" : "border-red-600 bg-transparent text-red-600"} rounded-lg transition`}
            >

                {isVisible ? buttonTextHidden : buttonText}
            </button>

            {isVisible && (
                <div className='mt-10 p-4 bg-neutral-50 border border-neutral-300 rounded-xl shadow-sm'>
                    {children}
                </div>
            )}

        </div>
    )
}

export default ToggleButton