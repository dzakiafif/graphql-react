function Label({ labelKey, labelName }){
    return(
        <label
            className={`bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center ${labelKey === 0 ? 'mt-2' : ''}`}>
            {labelName}
        </label>
    )
}
export default Label;