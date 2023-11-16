import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>

      { isLoading ? <h2>Cargando..</h2> : null }
      <div className='card-grid'>
        {images.map(({id, title, url}) => (
           <GifItem key={id}
           title={title}
           url={url}/>
        ))}
      </div>
    </>
  )
}

export default GifGrid
