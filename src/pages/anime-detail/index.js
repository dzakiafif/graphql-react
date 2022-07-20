import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../../context";
const AnimeDetail = () => {
    const [title, setTitle] = useState("");
    const [state, dispatch] = useContext(AnimeContext);

    useEffect(() => {
        localStorage.setItem('my-collection', JSON.stringify(state.data));
        console.log('ini ada perubahan');
    }, [state]);

    return (
        <div>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <button onClick={() => dispatch({ type: 'REMOVE_COLLECTION', payload: { name: title } })}>test</button>
        </div>
    );
}

export default AnimeDetail;