import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BrowseListMovie = ({movie}) => {

	return (
		<>
			<div className="movie-overlay pt-5">
				<FontAwesomeIcon color="#ff0000bd" className="mb-3 mx-auto" icon={faPlayCircle} size="4x" />
				<p className="w-75 mx-auto mb-0">{movie?.title || movie?.name || movie?.original_name}</p>
				{/* <p className="mb-0 mt-1" style={{fontSize: '1.5rem'}}>
					<FontAwesomeIcon color="red" className="mr-2" icon={faHeart} /> 
					<FontAwesomeIcon color="red" className="" icon={faInfoCircle} />
				</p> */}
			</div>
			<img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.id} style={{borderRadius: '1.5rem'}} className="img-fluid rounded-img" />
		</>
	)
}

export default BrowseListMovie
