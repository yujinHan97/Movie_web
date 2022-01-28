import {useParams} from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json(); 
        setMovie(json.data.movie);
        setLoading(false);
    };
    // console.log(movie);
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
            {loading? <h1> Loading... </h1> : (
                <div>
                    <h1> Detail </h1> <hr/>
                    <h2> {movie.title} </h2>
                    <img src = {movie.medium_cover_image}></img>
                    <p> {movie.description_full} </p>
                </div>
            )}
        </div>
    );
};

export default Detail;