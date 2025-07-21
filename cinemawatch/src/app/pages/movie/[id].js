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
    }, [id])

}