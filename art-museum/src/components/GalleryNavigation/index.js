import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css'

export default function GalleryNavigation({ galleries }) {
  function getGalleryNavLinks() {
    return galleries.records.map(gallery => {
      return (
      <NavLink
        exact
        key={`GalleryKey${gallery.id}`}
        to={`/galleries/${gallery.id}`}
      >
        {gallery.name}
      </NavLink>
      )
    })
  }

  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      { getGalleryNavLinks() }
    </nav>
  );
}