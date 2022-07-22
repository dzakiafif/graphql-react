function Loader(){
    let circleCommonClasses = 'h-2.5 w-2.5 rounded-full bg-blue-600 mb-8'

    return(
        <>
            <div className="flex justify-center items-center">
                <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                <div
                    className={`${circleCommonClasses} mr-1 animate-bounce200`}
                ></div>
                <div className={`${circleCommonClasses} animate-bounce400`}></div>
            </div>
        </>
    )
}
export default Loader;