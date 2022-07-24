import { NotFound } from "../../assets"

function PageNotFound(){
    return(
        <>
            <div className="grid h-screen place-items-center">
                <img className="w-9/12" src={NotFound} alt="notfound"/>
            </div>
        </>
    )
}
export default PageNotFound;