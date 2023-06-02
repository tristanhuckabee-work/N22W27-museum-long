import { Link, useParams } from 'react-router-dom';

export default function ArtDescription({ gallery }) {
  const { galleryId, artId } = useParams();
  console.log('Gallery', gallery);
  let obj = gallery.objects.find(obj => obj.id === +artId);
  console.log(obj);
  const images = obj.images.map(image => {
    return (
      <img src={image.baseimageurl} alt={image.alttext} />
    )
  })
  return (
    <>
      <Link
        to={`/galleries/${galleryId}`}
      >Back to Gallery</Link>
      <a className="external" href={obj.url} target="_blank">{obj.title}</a>
      <main>
        {images}
      </main>
      <p>{obj.description}</p>
      <p>{obj.creditline}</p>
      <p>{obj.technique}</p>
    </>
  )
}