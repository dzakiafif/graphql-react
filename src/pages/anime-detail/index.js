import { useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { DETAIL_ANIME } from '../../graphql/queries'
import { AnimeContext } from "../../context";
import { Breadcrumb, Label, HeadingTitle, Image, Loader } from "../../components";

const AnimeDetail = () => {
    const [datas] = useState(null);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const params = useParams();
    const {state, dispatch} = useContext(AnimeContext);
    const [names, setNames] = useState("");
    const {loading, error, data} = useQuery(DETAIL_ANIME, {
        variables: {
            id: params.id
        }
    }) 

    if (loading) return <Loader />

    const handleAddCollection = (data) => {

        if (state.data.length <= 0) {
          dispatch({ type: 'ADD_COLLECTION', payload: { name: names, collectionItem: [] } })
          dispatch({ type: 'ADD_COLLECTION_ITEM', payload: { name: names, collectionItem: data } })
        } else {
    
        }
      }

    return (
        <>
            <div className="pt-10 pb-20 px-20 place-items-center">
                <Breadcrumb otherPage="Anime Detail" />
                <HeadingTitle title={data?.Media.title.english === null ? " This anime doesnt have english title": data?.Media.title.english}/>
                <div className="pt-5 flex flex-col">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                        <Image src={data?.Media.coverImage.large}/>
                        <div className="flex flex-col space-y-1">
                        <div className="flex flex-row justify-between">
                            <h1 className="text-lg md:text-2xl font-poppins font-semibold text-gray-800">
                                {data?.Media.title.english === null
                                ? " This anime doesnt have english title"
                                : data?.Media.title.english}
                            </h1>

                            <button className="text-white p-2 rounded-lg background-transparent font-bold uppercase px-5 text-xs md:text-sm bg-blue-700 focus:outline-none ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModalAdd(true)}>
                                Add to Collection
                            </button>
                        </div>
                        
                        <div className="flex flex-col md:flex-row space-y-1 md:space-x-5 md:place-items-center">
                            <h1 className="font-poppins font-medium text-gray-800 text-sm md:text-lg">
                            {data?.Media.title.romaji}
                            </h1>
                            <h1 className="font-poppins font-medium text-gray-600 text-sm md:text-lg">
                            {data?.Media.title.native}
                            </h1>
                        </div>

                        <h1 className="pt-1 md:pt-3 font-poppins font-semibold text-sm md:text-lg">
                            Description :
                        </h1>
                        <p
                            className="font-poppins font-medium text-xs md:text-sm text-gray-600"
                            dangerouslySetInnerHTML={{ __html: data?.Media.description }}
                        />
                        <div className="flex flex-row space-x-10 md:space-x-14">
                            <div>
                            <h1 className="pt-1 md:t-2 font-poppins font-semibold text-sm md:text-lg">
                                Start Date
                            </h1>
                            <p className="font-poppins font-medium text-xs md:text-sm text-gray-600">
                                {`${data?.Media.startDate.year} - ${
                                data?.Media.startDate.month < 10
                                    ? `0${data?.Media.startDate.month}`
                                    : data?.Media.startDate.month
                                } - ${data?.Media.startDate.day}`}
                            </p>
                            </div>

                            <div>
                            <h1 className="pt-1 md:pt-2 font-poppins font-semibold text-sm md:text-lg">
                                End Date
                            </h1>
                            <p className="font-poppins font-medium text-xs md:text-sm text-gray-600">
                                {`${data?.Media.endDate.year} - ${
                                data?.Media.endDate.month < 10
                                    ? `0${data?.Media.endDate.month}`
                                    : data?.Media.endDate.month
                                } - ${data?.Media.endDate.day}`}
                            </p>
                            </div>
                        </div>

                        <h1 className="pt-1 md:pt-2 font-poppins font-semibold text-sm md:text-lg">
                            Status :
                        </h1>
                        <Label labelName={data?.Media.status}/>
                        </div>
                    </div>
                    <div className="pt-2">
                        <h1 className="pt-2 md:pt-3 font-poppins font-semibold text-sm md:text-lg">
                            Related Tags :
                        </h1>
                        <div className="relative max-w-[800px]">
                            <div className="flex flex-wrap pt-2 place-items-center space-y-2 space-x-1 left-0">
                                {data?.Media.tags.map((val, i) => (
                                    <Label labelKey={i} labelName={val.name}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModalAdd ? (
            <>
            <div className="md:pt-5 justify-center place-items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none mx-auto">
                    <div className="relative p-4 md:p-6 flex-auto">
                    <div className="flex flex-col space-y-2 place-items-center">
                        <h1 className="pt-1 text-sm md:text-lg md:text-2xl font-poppins font-semibold text-gray-800">
                        {data?.Media.title.romaji}
                        </h1>
                        <img
                        className="rounded-md w-40 h-56 md:w-52 md:h-72"
                        src={data?.Media.coverImage.large}
                        alt="img2"
                        />
                        <h1 className="font-poppins font-medium text-sm md:text-base">
                            Type a name and add to my collection
                            </h1>
                            <input
                            className="w-80 px-4 py-2 border-2 rounded-lg border-gray-400 font-poppins outline-none focus:border-blue-400 text-xs md:text-base"
                            type="text"
                            placeholder="Anime Nickname..."
                            onChange={(e) => setNames(e.target.value)}
                            value={names}
                            />
                        <p className="pt-2 text-red-500 font-poppins text-xs md:text-sm font-normal">
                        ini pesan error
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b space-x-2">
                    <button
                        className="text-white p-2 rounded-lg background-transparent font-bold uppercase px-5 text-xs md:text-sm bg-blue-700 focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleAddCollection(datas)}
                    >
                        Add to Collection
                    </button>
                    <button
                        className="text-white p-2 rounded-lg background-transparent font-bold uppercase px-5 text-xs md:text-sm bg-red-500 focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalAdd(false)}
                    >
                        Close
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
            ) : null}
        </>
        
    );
}

export default AnimeDetail;