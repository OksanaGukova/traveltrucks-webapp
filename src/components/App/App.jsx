
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react';


const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage")
);
const CamperDetailsPage = lazy(() =>
  import("../../pages/CamperDetailsPage/CamperDetailsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const CatalogFeatures = lazy(() =>
  import("../CatalogFeatures/CatalogFeatures")
);
const CatalogRewiews = lazy(() => import("../CatalogReviews/CatalogReviews"));


function App() {
 

  return (
    <div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route path="features" element={<CatalogFeatures />} />
            <Route path="reviews" element={<CatalogRewiews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
 
}

export default App
