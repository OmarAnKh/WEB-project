import './App.css';
import MainPageLayout from './components/MainPageLayout'

import PostPageLayout from './components/PostPageLayout';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
   <div className="App">
      <Routes>
        <Route path='/PostPageLayout/:id/:collection_name/:comments_section' element={<PostPageLayout />} />
        <Route path="/" element={<MainPageLayout />} />
      </Routes>

    </div>
  );
}

export default App;
