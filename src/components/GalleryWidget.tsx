import { useState } from 'react'
import LeftSide from './LeftSide'


const img = "/GalleryImage.jpg"


// Initial gallery images
const INITIAL_IMAGES = [img, img, img]

export default function GalleryWidget() {
    // State to hold the list of images and current page
    const [images, setImages] = useState(INITIAL_IMAGES)
    const [currentPage, setCurrentPage] = useState(0)


    const imagesPerPage = 3
    const totalPages = Math.ceil(images.length / imagesPerPage)

    // Function to add a new image to the state
    const addImage = () => {
        // currently same image is added
        setImages([...images, img])
    }


    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const goToNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    // Get current page images
    const startIndex = currentPage * imagesPerPage
    const currentImages = images.slice(startIndex, startIndex + imagesPerPage)

    return (
        <div className="bg-widget-bg rounded-18.89 shadow-widget min-h-[330px] w-[650px] mx-auto p-4 flex gap-4 relative z-10">
            {/* Left Side Component - Fixed 24px width */}
            <div className="w-6 flex-shrink-0">
                <LeftSide />
            </div>

            {/* Main Gallery Content */}
            <div className="flex-1 min-w-0">
                {/* Gallery Header with Controls */}
                <div className="flex items-center justify-between mb-6 px-2">
                    {/* Gallery Title */}
                    <div className="bg-nav-bg rounded-[20px] p-2 flex-shrink-0">
                        <div className="flex rounded-[20px] shadow-[inset_0px_4px_10px_2px_rgba(0,0,0,0.25)] w-auto justify-start bg-nav-bg">
                            <div className="px-6 py-3 h-[62px] w-[149px] rounded-[20px] flex justify-center items-center font-medium text-white">
                                <p className="font-poppins font-medium text-[20px] leading-normal">
                                    Gallery
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">

                        <button type='button'
                            onClick={addImage}
                            className="flex items-center justify-center h-[46px] w-[131.323px] flex-shrink-0"
                        >
                            <div className="backdrop-blur-[52.28px] backdrop-filter bg-[rgba(255,255,255,0.03)] h-[46px] relative rounded-[104px] shadow-add-btn w-[131.323px] flex gap-1 items-center justify-center">
                                <div className="absolute inset-0 pointer-events-none shadow-add-btn-inset rounded-[104px]" />
                                <img
                                    src="/Groupplus.svg"
                                    alt="Add Image"
                                    width={16}
                                    height={16}
                                />
                                <p className="font-plus-jakarta font-extrabold text-[12px] leading-[6.293px] text-white uppercase text-center">
                                    Add Image
                                </p>
                            </div>
                        </button>
                        <button
                            type='button'
                            onClick={goToPreviousPage}
                            disabled={currentPage === 0}
                            className={`w-11 h-11 bg-linear-to-b from-[#303439] to-[#161718] rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-[4px_5px_30px_5px_rgba(16,22,33,0.39)] flex-shrink-0 ${currentPage === 0
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:from-[#404449] hover:to-[#262728] cursor-pointer'
                                }`}
                        >
                            <img
                                src="/Groupltarrow.svg"
                                alt="Previous"
                                width={16}
                                height={16}
                            />
                        </button>

                        <button
                            type='button'
                            onClick={goToNextPage}
                            disabled={currentPage >= totalPages - 1}
                            className={`w-11 h-11 bg-linear-to-b from-[#303439] to-[#161718] rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-[4px_5px_30px_5px_rgba(16,22,33,0.39)] flex-shrink-0 ${currentPage >= totalPages - 1
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:from-[#404449] hover:to-[#262728] cursor-pointer'
                                }`}
                        >
                            <img
                                src="/Grouprtarrow.svg"
                                alt="Next"
                                width={16}
                                height={16}
                            />
                        </button>
                    </div>
                </div>

                {/* Gallery Content */}
                <div className="px-2">
                    <div className="flex gap-4 overflow-visible min-h-[179px] pb-8 pt-8">
                        {currentImages.map((src, index) => (
                            <div
                                key={startIndex + index}
                                className="relative h-[179px] w-[160px] rounded-[24px] overflow-hidden flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-125 hover:-rotate-6 hover:-translate-y-5 hover:z-50 hover:shadow-black hover:shadow-xl"
                            >
                                <img
                                    src={src}
                                    alt="Gallery"
                                    className="absolute max-w-none object-center object-cover rounded-[24px] size-full"

                                />
                                <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-[24px]" />
                            </div>
                        ))}

                        {/* Filling empty slots to maintain consistent spacing */}
                        {Array.from({ length: imagesPerPage - currentImages.length }, (_, index) => (
                            <div
                                key={`empty-${index}`}
                                className="h-[179px] w-[160px] flex-shrink-0 opacity-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}