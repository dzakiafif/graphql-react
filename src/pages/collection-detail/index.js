import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnimeContext } from "../../context";

const CollectionDetail = () => {
  const { state } = useContext(AnimeContext);
  const params = useParams();
  const data = state.data?.filter((val) => val.name === params.name);

  return (
    <div className="pt-10 pb-20 px-20 place-items-center space-y-5">
      <div className="pt-5 pb-20 px-20 grid grid-cols-1 lg:grid-cols-4 place-items-center space-y-5">
        {data.length > 0 && data[0].collectionItem.map((val, i) => (
          <div className={`bg-gray-100 px-4 py-4 rounded-xl ${i === 0 ? 'mt-5' : '' }`}>
            <img
              className="rounded-md w-44 h-60 md:w-52 md:h-72"
              src={val.coverImage.large}
              alt="img3"
            />
            <h1 className="pt-2 text-lg font-poppins font-semibold text-gray-800 w-44">
              {val.title.romaji.length > 17 ? val.title.romaji.slice(0, 17) + "..." : val.title.romaji}
            </h1>
            <div className="pt-3 text-right">
              <button className="px-5 py-2 font-poppins rounded-md font-semibold text-sm bg-red-500 text-white right-0">
                Release
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionDetail;
