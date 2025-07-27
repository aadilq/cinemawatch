import React from "react";
import Link from "next/link";
import { IMAGE_BASE_URL } from "../api/api";

const MovieCard = ({movie}) =>{
    return(
        <div className="card shadow-sm mb-4 bg-gray">
            <Link href={`movie/${movie.id}`} passHref>
            <div className="positive-relative">
                <img 
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top" />
                <div className="position-absolute top-0 start-0 m-2
                bg-danger text-white text-xs font-weight-bold py-1 px-2 rounded">
                    {new Date(movie.release_date).getFullYear}
                </div>
            </div>
            </Link>
        </div>
    )
}
