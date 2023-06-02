import { Link, useParams } from 'react-router-dom';

export default function ArtImageTile({ art }) {
  const { galleryId } = useParams();
  return (
    <Link
      key={`ArtLink${art?.id}`}
      to={`/galleries/${galleryId}/art/${art?.id}`}
    >
      <img src={art.images[0]?.baseimageurl} alt={art.images[0]?.alttext} />
    </Link>
  );
};