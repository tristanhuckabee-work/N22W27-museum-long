import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css'

export default function GalleryNavigation({ galleries }) {
  let gals = galleries.records.map(gallery => {
    return (
      <NavLink
        key={`GalleryKey${gallery.id}`}
        to={`/galleries/${gallery.id}`}
      >
        {gallery.name}
      </NavLink>
    )
  });

  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      {gals}
    </nav>
  );
}