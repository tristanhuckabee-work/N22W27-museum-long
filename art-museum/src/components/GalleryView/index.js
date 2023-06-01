import { useParams } from "react-router-dom";

export default function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const gallery = galleries.records.find(gallery => gallery.id === +galleryId);
  
  return (
    <h2>{gallery.name}</h2>
  )
}