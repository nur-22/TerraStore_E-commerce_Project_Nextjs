'use client'
import toast, { Toaster } from 'react-hot-toast';
import { LinkIcon } from '@heroicons/react/24/solid'
const ShareBtn = () => {
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href)
        toast.success('Copied')
    }
    return (
        <>
            <button
                className="text-green-800 inline-block font-bold hover:cursor-pointer hover:text-red-600"
                onClick={handleShare}
            >
                <LinkIcon className='inline-block mr-2 w-5 h-5' />
                Share Link
            </button>
            <Toaster />
        </>
    )
}

export default ShareBtn