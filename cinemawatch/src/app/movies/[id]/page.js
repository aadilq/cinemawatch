"use client";


import React, {useState, useEffect} from "react";
import { api, IMAGE_BASE_URL } from "@/app/api/api";
import { useParams } from "next/navigation";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/app/components/Navbar";

const MovieDetailPage = () =>{
    const params = useParams();
    const id = params.id;
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(()=> {
        if(!id) return;

        //fetching the movie details
        api.get(`/movie/${id}`)
            .then(response => setMovie(response.data))
            .catch(error => console.error('Error fetching movie details', error));

        //fetching the movie's cast
        api.get(`/movie/${id}/credits`)
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
        <div className="container my-4 text-white ">
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
                <h1 className="display-4 text-dark mb-2">{movie.title}</h1>
                <div className="mb-4">
                    <span className="badge bg-warning text-dark mr-2">
                        Rating: {movie.vote_average}
                    </span>
                    <span className="mr-2">{movie.runtime}</span>
                    <span>{movie.genres.map(genre => genre.name).join(", ")}</span>
                </div>
                <div>
                    <p className="mb-2 text-dark"><strong>Release Date:</strong>
                    {new Date(movie.release_date).toLocaleDateString()}</p>
                    <h2 className="h4 text-dark mb-2">Overview</h2>
                    <p className="text-dark">{movie.overview}</p>
                </div>
            </div>
            <h2 className="h4 mb-4 border-bottom border-light pb-2">Cast</h2>
            <div className="row">
                {cast.map(member => (
                    <div key={member.cast_id} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex flex-columnalign-items center">
                        <div className="position-relative">
                            <img
                           src={member.profile_path ? `${IMAGE_BASE_URL}${member.profile_path}` : 'https://media.geeksforgeeks.org/wp-content/uploads/20240805102426/pta.jpg'}
                            alt={member.name}
                            className="img-fluid rounded-circle"
                            style={{width: '150px', height: '150px', objectFit: 'cover'}} 
                            />
            </div>
            <p className="font-weight bold text-center mt-2">{member.name}</p>
            <p className="text-muted text-center">{member.character}</p>
            </div>
                ))}
            </div>
        </div>
        </>
    )
};

export default MovieDetailPage