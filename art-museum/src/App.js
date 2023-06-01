import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';


function App() {
  return (
    <>
      <GalleryNavigation galleries={harvardArt} />
      <h1>Hello from App</h1>
    </>
  );
}

export default App;
