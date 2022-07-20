import { useQuery } from '@apollo/client';
import { LIST_ANIME } from '../../graphql/queries';

const Anime = () => {
    const { loading, error, data } = useQuery(LIST_ANIME, { variables: { 'page': 1, 'perPage': 10 } });
    console.log(data);
    return (
        <div>test</div>
    )
}

export default Anime;