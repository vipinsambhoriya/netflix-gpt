import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
const MainContainer = () => {
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!movies) return;
  const Mainmovie = movies[0];

  const{original_title, overview} = Mainmovie;
  return (
    <div>
     <VideoTitle title={original_title} overview={overview}/>
     <VideoBackground/>
    </div>
  )
}

export default MainContainer;
