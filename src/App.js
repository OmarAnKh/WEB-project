
import './App.css';
import RelatedVideos from './components/RelatedVideos';
import PostPageLayout from './components/PostPageLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/PostPageLayout/:id/:collection_name/:comments_section' element={<PostPageLayout />} />
        
      </Routes>

    </div>
  );
}

export default App;
