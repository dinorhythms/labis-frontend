import { MoviesList } from "../../components";
import { useEffect, useState } from 'react';
import { Modal, Spinner } from 'react-bootstrap'
import YouTube from 'react-youtube';
import './browse.css'
import { Banner } from "../../components";

const Browse = () => {

	const [showTrailer, setShowTrailer] = useState(false);
	const [trailerLink, setTrailerLink] = useState();

	const opts = {
		// height: '390',
		// width: '640',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

  useEffect(() => {
    window.scrollTo(0, 0);
	}, []);
	
	return (
		<div className="brouse">

			<div className="ptt-5">
				<Banner/>
			</div>

			<MoviesList name="Trending Now" url="/trending/movie/week" time="2500" setShowTrailer={setShowTrailer} setTrailerLink={setTrailerLink}/>
			<MoviesList name="Top Rated" url="/discover/tv" time="3500" setShowTrailer={setShowTrailer} setTrailerLink={setTrailerLink}/>
			<MoviesList name="Action Movies" url="/movie/top_rated" time="3500" setShowTrailer={setShowTrailer} setTrailerLink={setTrailerLink}/>

			<Modal transition="false" dialogClassName="my-modal" animation={false} centered show={showTrailer} onHide={()=>{setShowTrailer(false); setTrailerLink(null)}}>
        <Modal.Body>
					{trailerLink?<YouTube videoId={trailerLink} opts={opts} />:<Spinner animation="border" role="status" className="mx-auto"></Spinner>}
				</Modal.Body>
      </Modal>

		</div>
	)
}

export default Browse
