import SearchParams from './SearchParams';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Details from './Details';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className="top-header" id="top-header">
          Adopt Me!
        </Link>
      </header>

      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

{
  /* <div>
<h1 className="top-header" id="top-header">
  Adopt Me!
</h1>
<SearchParams />
</div> */
}
