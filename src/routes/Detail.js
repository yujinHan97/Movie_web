import {useParams} from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import styles from "./Detail.module.css";

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
        <div className={styles.container}>
            {loading? (
                <div className={styles.loader}>
                    <span> Loading...</span>
                </div>) : (
                <div className={styles.detail}>
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