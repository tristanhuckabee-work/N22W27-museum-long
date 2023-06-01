import { Route } from 'react-router-dom';

import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt} />
      {/* <h1>Hello from App</h1> */}
      <Route path="/galleries/:galleryId">
        <GalleryView galleries={harvardArt}/>
      </Route>
    </div>
  );
}

export default App;
