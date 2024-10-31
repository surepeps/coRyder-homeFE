import React from 'react'

function ModalSpinner() {
  return (
    <div className="flex w-full h-full py-10 justify-center items-center">
        <div className="animate-spin rounded-full border-t-4 border-b-4 border-[#c10202] h-28 w-28"></div>
    </div>
    
  )
}

export default ModalSpinner