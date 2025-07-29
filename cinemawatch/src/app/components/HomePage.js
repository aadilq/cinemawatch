import React, {useState, useEffect} from "react";
import { api } from "../api/api";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import Navbar from "./Navbar";

const HomePage = () =>{
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [query, setQuery] = useState('');
    const [searching, setSearching] = useState(false);

    useEffect(() =>{
        const fetchMovies = async () => {
            try {
                const endpoint = searching ? '/search/movie' : '/movie/popular'
                const response = api.get(endpoint, {
                    params: {
                        page: currentPage, 
                        query: searching ? query : undefined
                    }
                });
                setMovies((await response).data.result);
                setTotalPages(((await response).data.total_Pages))
            } catch (error) {
                console.error(error)
            }
        }
        fetchMovies()

    }, [currentPage, query, searching])

    const handleSearch = (e) =>{
        e.preventDefault(); 
        setCurrentPage(1);
        setSearching(true);
    }

    const handleReset = () =>{
        setQuery('');
        setSearching(false);
        setCurrentPage(1);
    }

    return(
        <>
        <Navbar />
        <div className="container my-4">
            <div className="d-flex justify-content-between">
                <form onSubmit={handleSearch} className="d-flex">
                    <input 
                    className="form-control me-2"
                    type="search"
                    value={query}
                    onChange={(e) => e.target.value}
                    placeholder="Search for Movies"
                    />
                    <button className="btn btn-outline-success">
                        Search
                    </button>
                </form>
            </div>
            {searching && (
                <button onClick={handleReset} className="btn btn-outline-primary mb-4">
                    Reset Search
                </button>
            )}
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}