import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer({ id });

  return (
    <div className='md:pt-0 pt-[50%]'>
      <iframe
        className='aspect-video  w-screen '
        src={"https://www.youtube.com/embed/" + trailerVideo+'?&autoplay=1&mute=1'}
        title="YouTube video player"
        allow=" autoplay; c encrypted-media; gyroscope;  web-share">
      </iframe>
    </div>
  )
}

export default VideoBackground