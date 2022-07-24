import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import { LIST_ANIME } from "../../graphql/queries";
import { Loader } from "../../components";
import { AnimeContext } from "../../context";

function Homepage() {
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [datas, setDatas] = useState(null);
  const { state, dispatch } = useContext(AnimeContext);
  const [names, setNames] = useState("");
  const { loading, error, data, fetchMore } = useQuery(LIST_ANIME, {
    variables: { page: 1, perPage: 10 },
  });
  const navigate = useNavigate();

  if (loading) return <Loader />;

  const handleLoadMore = () => {
    data?.Page.pageInfo.hasNextPage &&
      fetchMore({
        variables: {
          page: data?.Page.pageInfo.currentPage + 1,
          perPage: 10,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          fetchMoreResult.Page.media = [
            ...prevResult.Page.media,
            ...fetchMoreResult.Page.media,
          ];

          return fetchMoreResult;
        },
      });
  };

  const handleDetail = (data) => {
    setDatas(data);
    navigate(`/anime-detail/${data.id}`);
  };

  const handleAddCollection = (data) => {
    if (state.data.length <= 0) {
      dispatch({
        type: "ADD_COLLECTION",
        payload: { name: names, collectionItem: [] },
      });
      dispatch({
        type: "ADD_COLLECTION_ITEM",
        payload: { name: names, collectionItem: data },
      });
    } else {
    }
  };

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleLoadMore}
        hasMore={data?.Page.pageInfo.hasNextPage}
        loader={<Loader key={0} />}
      >
        <div className="pt-10 pb-20 px-20 grid grid-cols-1 lg:grid-cols-4 place-items-center space-y-5">
          {data?.Page.media.map((val, i) => (
            <div
              onClick={() => handleDetail(val)}
              className={`bg-gray-100 px-4 py-4 rounded-xl ${
                i === 0 ? "mt-5" : ""
              }`}
              key={i}
            >
              <img
                className="rounded-md w-64 h-96 md:w-52 md:h-72"
                src={val.coverImage.large}
                alt=""
              />
              <h1 className="pt-2 text-base font-poppins font-semibold text-gray-800 w-44">
                {val.title.romaji.slice(0, 17) + "..."}
              </h1>
              <h1 className="font-poppins font-medium text-gray-500 text-xs">
                {val.title.native.slice(0, 17) + "..."}
              </h1>
              <h1 className="pt-3 font-poppins font-semibold text-sm text-right">
                {`${new Intl.NumberFormat("id", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(val.popularity)} viewers`}
              </h1>
            </div>
          ))}
        </div>
      </InfiniteScroll>

      {/* <div className={`flex justify-center pb-8 ${hide ? 'invisible' : 'visible'}`}><button onClick={() => handleLoadMore()} className="bg-blue-600 px-6 rounded-md text-white font-poppins py-2 hover:bg-blue-800">Load More</button></div> */}

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
                      src={datas.coverImage.large}
                      alt="img"
                    />
                    <div className="flex flex-col space-y-2">
                      <h1 className="pt-1 text-lg md:text-2xl font-poppins font-semibold text-gray-800">
                        {datas.title.english === null
                          ? " this anime doesnt have english title"
                          : datas.title.english}
                      </h1>
                      <div className="flex flex-col md:flex-row space-y-1 md:space-x-2 md:place-items-center">
                        <h1 className="font-poppins font-medium text-gray-800 text-xs md:text-sm">
                          {datas.title.romaji}
                        </h1>
                        <h1 className="font-poppins font-medium text-gray-600 text-xs md:text-xs">
                          {datas.title.native}
                        </h1>
                      </div>

                      <h1 className="pt-1 md:pt-3 font-poppins font-semibold text-sm md:text-lg">
                        Description :
                      </h1>
                      <p
                        className="font-poppins font-medium text-xs md:text-sm text-gray-600"
                        dangerouslySetInnerHTML={{ __html: datas.description }}
                      />
                      <div className="flex flex-row space-x-10 md:space-x-14">
                        <div>
                          <h1 className="pt-1 md:t-2 font-poppins font-semibold text-sm md:text-lg">
                            Start Date
                          </h1>
                          <p className="font-poppins font-medium text-xs md:text-sm text-gray-600">
                            {`${datas.startDate.year} - ${
                              datas.startDate.month < 10
                                ? `0${datas.startDate.month}`
                                : datas.startDate.month
                            } - ${datas.startDate.day}`}
                          </p>
                        </div>

                        <div>
                          <h1 className="pt-1 md:pt-2 font-poppins font-semibold text-sm md:text-lg">
                            End Date
                          </h1>
                          <p className="font-poppins font-medium text-xs md:text-sm text-gray-600">
                            {`${datas.endDate.year} - ${
                              datas.endDate.month < 10
                                ? `0${datas.endDate.month}`
                                : datas.endDate.month
                            } - ${datas.endDate.day}`}
                          </p>
                        </div>
                      </div>

                      <h1 className="pt-1 md:pt-2 font-poppins font-semibold text-sm md:text-lg">
                        Status :
                      </h1>
                      <label className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center">
                        {datas.status}
                      </label>
                    </div>
                  </div>
                  <h1 className="pt-2 md:pt-3 font-poppins font-semibold">
                    Related Tags :
                  </h1>
                  <div className="relative max-w-[800px]">
                    <div className="flex flex-wrap pt-2 place-items-center space-y-2 space-x-1 left-0">
                      {datas.tags.map((val, i) => (
                        <label
                          key={i}
                          className="bg-green-600 w-max px-3 py-1 rounded-2xl font-poppins font-semibold text-xs md:text-sm text-white text-center"
                        >
                          {val.name}
                        </label>
                      ))}
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
                      {datas.title.romaji}
                    </h1>
                    <img
                      className="rounded-md w-40 h-56 md:w-52 md:h-72"
                      src={datas.coverImage.large}
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
export default Homepage;
