import { useContext } from 'react';
import { AnimeContext } from '../../context';
import { Breadcrumb, HeadingTitle } from "../../components";

function Collection() {

  const { state, dispatch } = useContext(AnimeContext);
  return (
    <>
      <div className="pt-10 pb-20 px-20 place-items-center space-y-5">
        <Breadcrumb otherPage="My Collection"/>
        <HeadingTitle title="My Anime Collection" />
        <div className="pt-5 pb-20 px-20 grid grid-cols-1 lg:grid-cols-4 place-items-center space-y-5">
          {
            state.data?.map(val => (
              <div className="bg-gray-100 px-4 py-4 rounded-xl">
              <img
                className="rounded-md w-44 h-60 md:w-52 md:h-72"
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/621.jpg"
              />
            <h1 className="pt-2 text-lg font-poppins font-semibold text-gray-800 w-44">
              {val.name.length > 17 ? val.name.slice(0, 17) + "..." : val.name}
            </h1>
            <div className="pt-3 text-right">
              <button className="px-5 py-2 font-poppins rounded-md font-semibold text-sm bg-red-500 text-white right-0">
                Release
              </button>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
export default Collection;
