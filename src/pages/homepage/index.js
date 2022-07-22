import { useState } from "react";
import { useQuery } from "@apollo/client";
import { LIST_ANIME } from "../../graphql/queries";

function Homepage() {
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const { loading, error, data, fetchMore } = useQuery(LIST_ANIME, {
    variables: { page: 1, perPage: 10 },
  });

  const handleLoadMore = () => {
    data?.Page.pageInfo.currentPage < data?.Page.pageInfo.lastPage && fetchMore({
        variables: {
            page: data?.Page.pageInfo.currentPage + 1,
            perPage: 10
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
            fetchMoreResult.media = [
                ...prevResult.Page.media,
                ...fetchMoreResult.Page.media
            ];

            console.log(fetchMoreResult);

            return fetchMoreResult;
        }
    })
  }

  return (
    <>
      <div className="pt-10 pb-20 px-20 grid grid-cols-1 lg:grid-cols-4 place-items-center space-y-5">
        {data?.Page.media.map((val, i) => (
          <div
            onClick={() => setShowModalDetail(true)}
            className="bg-gray-100 px-4 py-4 rounded-xl"
            key={i}
          >
            <img
              className="rounded-md w-64 h-96 md:w-52 md:h-72"
              src={val.coverImage.large}
              alt=""
            />
            <h1 className="pt-2 text-lg font-poppins font-semibold text-gray-800 w-44">
              {val.title.romaji.slice(0,17) + '...'}
            </h1>
            <h1 className="font-poppins font-medium text-gray-500 text-xs">
              {val.title.native }
            </h1>
            <h1 className="pt-3 font-poppins font-semibold text-sm text-right">
              Total Owned: 1
            </h1>
          </div>
        ))}
      </div>
      
      <button onClick={() => handleLoadMore()}>Load More</button>

      {/* Modal detail */}
      {showModalDetail ? (
        <>
          <div className="md:pt-5 justify-center place-items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-9/12 md:w-full bg-white outline-none focus:outline-none mx-auto">
                <div className="relative p-4 md:p-6 flex-auto">
                  <div className="flex flex-row space-x-8">
                    <img
                      className="rounded-md w-40 h-56 md:w-52 md:h-72"
                      src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/621.jpg"
                    />
                    <div className="flex flex-col space-y-2">
                      <h1 className="pt-1 text-lg md:text-2xl font-poppins font-semibold text-gray-800">
                        Nightwalker: The Midnight Detective
                      </h1>
                      <div className="flex flex-col md:flex-row space-y-1 md:space-x-2 md:place-items-center">
                        <h1 className="font-poppins font-medium text-gray-800 text-xs md:text-sm">
                          Night Walker: Mayonaka no Tantei
                        </h1>
                        <h1 className="font-poppins font-medium text-gray-600 text-xs md:text-xs">
                          ナイトウォーカー真夜中の探偵
                        </h1>
                      </div>

                      <h1 className="pt-1 md:pt-3 font-poppins font-semibold text-sm md:text-lg">
                        Description :
                      </h1>
                      <p className="font-poppins font-medium text-xs md:text-sm text-gray-600">
                        A sequel film to <i>Go-toubun no Hanayome ∬</i>.
                      </p>
                      <div className="flex flex-row space-x-10 md:space-x-14">
                        <div>
                          <h1 className="pt-1 md:t-2 font-poppins font-semibold text-sm md:text-lg">
                            Start Date
                          </h1>
                          <p className="font-poppins font-medium text-xs md:text-sm text-gray-600">
                            20 May 2022
                          </p>
                        </div>

                        <div>
                          <h1 className="pt-1 md:pt-2 font-poppins font-semibold text-sm md:text-lg">
                            End Date
                          </h1>
                          <p className="font-poppins font-medium text-xs md:text-sm text-gray-600">
                            20 May 2022
                          </p>
                        </div>
                      </div>

                      <h1 className="pt-1 md:pt-2 font-poppins font-semibold text-sm md:text-lg">
                        Status :
                      </h1>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        FINISHED
                      </label>
                    </div>
                  </div>
                  <h1 className="pt-2 md:pt-3 font-poppins font-semibold">
                    Related Tags :
                  </h1>
                  <div className="relative max-w-[800px]">
                    <div className="flex flex-wrap pt-2 place-items-center space-y-2 space-x-1 left-0">
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Twins
                      </label>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Female Harem
                      </label>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Coming of Age
                      </label>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Primarily Female Cast
                      </label>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Male Protagonist
                      </label>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Ensemble Cast
                      </label>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Love Triangle
                      </label>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Shounen
                      </label>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Teacher
                      </label>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Heterosexual
                      </label>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Cute Girls Doing Cute Things
                      </label>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        Time Skip
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b space-x-2">
                  <p className="text-red-500 font-poppins text-xs md:text-sm font-normal">
                    ini pesan error
                  </p>
                  <button
                    className="text-white p-2 rounded-lg background-transparent font-bold uppercase px-5 text-xs md:text-sm bg-blue-700 focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalAdd(true)}
                  >
                    Add to Collection
                  </button>
                  <button
                    className="text-white p-2 rounded-lg background-transparent font-bold uppercase px-5 text-xs md:text-sm bg-red-500 focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalDetail(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-20 bg-black"></div>
        </>
      ) : null}

      {/* Modal Add Collection */}
      {showModalAdd ? (
        <>
          <div className="md:pt-5 justify-center place-items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none mx-auto">
                <div className="relative p-4 md:p-6 flex-auto">
                  <div className="flex flex-col space-y-2 place-items-center">
                    <h1 className="pt-1 text-sm md:text-lg md:text-2xl font-poppins font-semibold text-gray-800">
                      Nightwalker: The Midnight Detective
                    </h1>
                    <img
                      className="rounded-md w-40 h-56 md:w-52 md:h-72"
                      src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/621.jpg"
                    />
                    <h1 className="font-poppins font-medium text-sm md:text-base">
                      Type a name and add to my collection
                    </h1>
                    <input
                      className="w-80 px-4 py-2 border-2 rounded-lg border-gray-400 font-poppins outline-none focus:border-blue-400 text-xs md:text-base"
                      type="text"
                      placeholder="Anime Nickname..."
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
                    onClick={() => setShowModalAdd(true)}
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
export default Homepage;
