function Modal({ modalTitle, modalImage, children }){
    return(
        <>
            <div className="md:pt-5 justify-center place-items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none mx-auto">
                        <div className="relative p-4 md:p-6 flex-auto">
                            <div className="flex flex-col space-y-2 place-items-center">
                                <h1 className="pt-1 text-sm md:text-lg md:text-2xl font-poppins font-semibold text-gray-800">
                                {modalTitle}
                                </h1>
                                <img
                                className="rounded-md w-40 h-56 md:w-52 md:h-72"
                                src={modalImage}
                                alt="img2"
                                />
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
export default Modal;