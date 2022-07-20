import { useContext } from "react";
import { AnimeContext } from "../../context";

const Collection = () => {
    const [state, dispatch] = useContext(AnimeContext);
    return (
        <div>test</div>
    )
}

export default Collection;