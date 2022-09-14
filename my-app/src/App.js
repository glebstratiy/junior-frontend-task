import { Header } from './components/Header';
import {Assignment} from './components/Assignment'
import { GetSection } from './components/GetSection';
import { PostSection } from './components/PostSection';

function App() {
  return (
    <div className="App bg-slate-100">
      <Header/>
      <Assignment/>
      <GetSection/>
      <PostSection/>
    </div>
  );
}

export default App;
