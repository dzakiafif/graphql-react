import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimeContext } from '../../context';
import { Breadcrumb, HeadingTitle, Modal } from "../../components";

function Collection() {

  const { state, dispatch } = useContext(AnimeContext);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalRemove, setShowModalRemove] = useState(false);
  const [nameCollectionRemove, setNameCollectionRemove] = useState("");
  const [nameCollection, setNameCollection] = useState("");
  const navigate = useNavigate();
  
  const handleAddCollection = (name) => {
    dispatch({ type: 'ADD_COLLECTION', payload: { name, collectionItem: [] } })
    setShowModalAdd(false);
    setNameCollection("");
  }

  const handleCloseModal = () => {
    setShowModalAdd(false);
    setNameCollection("");
  }

  const handleClickRemove = (name) => {
    setShowModalRemove(true);
    setNameCollectionRemove(name);
  }

  const handleRemoveCollection = (name) => {
    dispatch({ type: 'REMOVE_COLLECTION', payload: {name} })
    setShowModalRemove(false);
  }

  return (
    <>
      <div className="pt-10 pb-20 px-20 place-items-center space-y-5">
        <Breadcrumb otherPage="My Collection"/>
        <HeadingTitle title="My Anime Collection" />
        <button
                  className="text-white p-2 rounded-lg background-transparent font-bold uppercase px-5 text-xs md:text-sm bg-blue-700 focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModalAdd(true)}
                >
                  Add to Collection
                </button>
        <div className="pt-5 pb-20 px-20 grid grid-cols-1 lg:grid-cols-4 place-items-center space-y-5">
          {
            state.data?.map(val => (
              <div className="bg-gray-100 px-4 py-4 rounded-xl">
              <img
                className="rounded-md w-44 h-60 md:w-52 md:h-72"
                src={val.collectionItem.length > 0 ? val.collectionItem[0].coverImage.large : 'https://fakeimg.pl/350x200/?text=Hello'}
                alt="img3"
              />
            <h1 className="pt-2 text-lg font-poppins font-semibold text-gray-800 w-44" onClick={() => navigate(`/collection-detail/${val.name}`)}>
              {val.name.length > 17 ? val.name.slice(0, 17) + "..." : val.name}
            </h1>
            <div className="pt-3 text-right">
              <button className="px-5 py-2 font-poppins rounded-md font-semibold text-sm bg-red-500 text-white right-0" onClick={() => handleClickRemove(val.name)}>
                Remove
              </button>
            </div>
          </div>
            ))
          }
        </div>
      </div>

      {
        showModalAdd && (
          <Modal modalImage="" modalTitle="">
            <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b space-x-2">
              <input
                  className="w-80 px-4 py-2 border-2 rounded-lg border-gray-400 font-poppins outline-none focus:border-blue-400 text-xs md:text-base"
                  type="text"
                  placeholder="Collection Name..."
                  onChange={(e) => setNameCollection(e.target.value)}
                  value={nameCollection}
                />
              <button
                className="text-white p-2 rounded-lg background-transparent font-bold uppercase px-5 text-xs md:text-sm bg-blue-700 focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleAddCollection(nameCollection)}
              >
                Add Collection
              </button>
              <button
                className="text-white p-2 rounded-lg background-transparent font-bold uppercase px-5 text-xs md:text-sm bg-red-500 focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleCloseModal()}
              >
                Close
              </button>
            </div>
          </Modal>
        )
      }

      {
        showModalRemove && (
          <Modal modalImage="" modalTitle="">
            <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b space-x-2">
              <button
                className="text-white p-2 rounded-lg background-transparent font-bold uppercase px-5 text-xs md:text-sm bg-blue-700 focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleRemoveCollection(nameCollectionRemove)}
              >
                Delete Collection
              </button>
              <button
                className="text-white p-2 rounded-lg background-transparent font-bold uppercase px-5 text-xs md:text-sm bg-red-500 focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleCloseModal()}
              >
                Close
              </button>
            </div>
          </Modal>
        )
      }
    </>
  );
}
export default Collection;
