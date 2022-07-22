function Label({ labelKey, labelName }){
    return(
        <label
            key={labelKey}
            className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
            {labelName}
        </label>
    )
}
export default Label;