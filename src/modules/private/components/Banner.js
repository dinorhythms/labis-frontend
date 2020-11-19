import { Spinner, Button } from 'react-bootstrap';

import './styles/banner.css'

import useMoviesLists from '../../../hooks/useMoviesLists';

const Banner = () => {
	const url = "/trending/movie/week";
	const { isLoading, movies } = useMoviesLists(url);

	if(isLoading){
    return (
			<div className="d-flex pt-5 pb-5 text-white">
				<Spinner animation="border" role="status" className="mx-auto">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
    )
	}

	const movie = movies[Math.floor(Math.random() * (20 - 1) + 1)];

	return (
		<div className="banner p-3" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}?api_key=${process.env.REACT_APP_IMDB_API})`}}>
			<div className="content">
				<h5 className="details text-danger mt-0 mb-0">{movie?.media_type || 'MOVIE'}</h5>
				<h1 className="display-2">{movie?.title || movie?.name || movie?.original_name}</h1>
				<h6 className="text-danger text-capitalize">{movie?.original_language} | Realeased: {movie?.release_date}</h6>
				<p className="w-50 mt-4">{movie?.overview}</p>
				<div className="button">
					<Button variant="danger shadow" size="lg">Play</Button>{" "}
					<Button variant="outline-danger shadow" size="lg">Watch trailer</Button>
				</div>
			</div>
		</div>
	)
}

export default Banner
