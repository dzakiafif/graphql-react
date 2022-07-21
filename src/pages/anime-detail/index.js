import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../../context";
const AnimeDetail = () => {
    const [title, setTitle] = useState("");
    const [collectionItem, setCollectionItem] = useState("");
    const [state, dispatch] = useContext(AnimeContext);

    useEffect(() => {
        localStorage.setItem('my-collection', JSON.stringify(state.data));
        console.log('ini ada perubahan');
    }, [state]);

    console.log(`ini di pages animeDetail ${collectionItem}`);

    return (
        <div>
            <label>input name collection</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <label>input collection item</label>
            <input type="text" onChange={(e) => setCollectionItem(e.target.value)} value={collectionItem} />
            <button onClick={() => dispatch({ type: 'ADD_COLLECTION_ITEM', payload: { name: title, collectionItem: { name: collectionItem } } })}>test</button>
            {/* <button onClick={() => dispatch({ type: 'REMOVE_COLLECTION', payload: { name: title } })}>test</button> */}
            {/* <button onClick={() => dispatch({ type: 'ADD_COLLECTION', payload: { name: title, collectionItem: [] } })}>test</button> */}
        </div>
    );
}

export default AnimeDetail;