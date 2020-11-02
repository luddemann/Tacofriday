import React from 'react'

interface Props {
    onClick: () => void,
    isLoading: boolean
}

const ActionButton = ({ onClick, isLoading }: Props) => {
    return (
        <>
            <button
            className='mt-2 py-6 px-12 bg-orange-500 hover:bg-orange-600 focus:outline-none focus:shadow-outline text-white rounded-2xl text-md uppercase font-bold tracking-wider shadow-2xl w-full sm:w-auto'
            onClick={onClick}
            >
            {isLoading ? (
                <span className="text-xs">Creating taco..</span>
            ) : (
                <> 
                Create taco
                </>
            )}
            </button>
        </>
    )
}
export default ActionButton


