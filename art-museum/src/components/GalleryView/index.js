import { Route, useParams } from "react-router-dom";
import ArtDescription from "../ArtDescription";
import ArtImageTile from "../ArtImageTile";

export default function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const gallery = galleries.records.find(gallery => gallery.id === +galleryId);
  const tiles = gallery.objects.map(object => {
    return (
      <ArtImageTile
        key={`ArtImageTile${object.id}`}
        art={object}
      />
    )
  })

  return (
    <>
      <h2>{gallery.name}</h2>
      <Route path="/galleries/:galleryId/art/:artId">
        <ArtDescription gallery={gallery} />
      </Route>
      <Route exact path="/galleries/:galleryId">
        <main>
          {tiles}
        </main>
      </Route>
    </>
  )
}