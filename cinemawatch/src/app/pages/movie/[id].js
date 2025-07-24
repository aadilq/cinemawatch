import React, {useState, useEffect} from "react";
import { api, IMAGE_BASE_URL } from "@/app/api/api";
import { useRouter } from "next/router";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/app/components/Navbar";

const MovieDetailPage = () =>{
    const router = useRouter();
    const { movie_id } = router.query;
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(()=> {
        if(!id) return;

        //fetching the movie details
        api.get(`/movie/${movie_id}`)
            .then(response => setMovie(response.data))
            .catch(error => console.error('Error fetching movie details', error));

        //fetching the movie's cast
        api.get(`/movie/${movie_id}/credits`)
            .then(response => {
                console.log('Cast response data: ', response.data)
                setCast(response.data.cast);
            })
            .catch(error => console.error('Error fetching movie cast', error))
    }, [id]);

    if(!movie) return <div className="text-center text-white mt-10">Loading...</div>;

    return(
        <>
        <Navbar />
        <div className="container my-4 text-white">
            <Link href="/" passHref>
            <p className="text-primary mb-4">Back to List</p>
            </Link>
            <div className="col-md-4 mb-3 mb-md-0">
                <img 
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="img-fluid rounded shadow-lg"
                    />
            </div>
            <div className="col-md-8">
                <h1 className="display-4 mb-2">{movie.title}</h1>
                <div className="mb-4">
                    <span className="badge bg-warning text-dark mr-2">
                        Rating: {movie.vote_average}
                    </span>
                    <span className="mr-2">{movie.runtime}</span>
                    <span>{movie.genres.map(genre => genre.name).join(", ")}</span>
                </div>
                <div>
                    <p className="mb-2 text-dark"><strong>Release Date:</strong>
                    {new Date(movie.release_date).toLocaleDateString}</p>
                    <h2 className="h4 text-dark mb-2">Overview</h2>
                    <p className="text-dark">{movie.overview}</p>
                </div>
            </div>

        </div>
        </>
    )
}