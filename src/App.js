import Header from './components/Header'
import About from './components/About'
import Homepage from './components/Homepage'
import Software from './components/Software'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header/>
      </div>
      <Route path='/website' component={Homepage}/>
      <Route path='/aboutme' component={About} />
      <Route path='/software' component={Software}/>
    </Router>
  );
}

export default App;
