import SwiperCore, { A11y, Autoplay, Navigation, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import useMoviesLists from "../../../hooks/useMoviesLists";
import BrowseListMovie from './BrowseListMovie';
import './styles/movieslists.css';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap'
import movieTrailer from 'movie-trailer';

const MoviesList = ({ name, url, setShowTrailer, setTrailerLink }) => {

	const { isLoading, movies } = useMoviesLists(url);
	SwiperCore.use([Navigation, Scrollbar, A11y, Autoplay]);

	if(isLoading){
    return (
			<div className="d-flex pt-5 pb-5 text-white">
				<Spinner animation="border" role="status" className="mx-auto">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
    )
	}

	const params = {
		slidesPerView: 5,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		preloadImages: true,
		breakpoints: {
			1024: {
				slidesPerView: 5,
				spaceBetween: 40
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}
	}

	const handleTrailer = async (title) => {
		try {
			setShowTrailer(true);
			const trailer = await movieTrailer(title);
			const urlParams = new URLSearchParams(new URL(trailer).search)
			const v = urlParams.get('v');
			setTrailerLink(v)
		} catch (error) {
			
		}
	}
	
	return (
		<div className="movie-lists mb-4">
			<Container fluid>
				<Row>
					<Col>
						<div className="d-flex align-items-center mb-3">
							<div className="bg-danger mr-3" style={{width: '7px', height: '22px'}}></div>
							<h3 className="mb-0">{name}</h3>
						</div>
					</Col>
					<Col className="text-right">
						<Button variant="danger" size="sm">View all</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Swiper {...params} navigation>
							{movies?.map(movie => (
								<SwiperSlide key={movie.id} onClick={()=>handleTrailer(movie?.title || movie?.name || movie?.original_name)}>
									<div className="swiper-div"></div>
									<BrowseListMovie movie={movie}/>
								</SwiperSlide>
							))}
						</Swiper>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default MoviesList
