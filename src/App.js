import Header from './components/Header'
import Homepage from './components/Homepage'
import Software from './components/Software'
import Resume from './components/Resume'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header/>
      </div>
      <Route path='/website' component={Homepage}/>
      <Route path='/software' component={Software}/>
      <Route path='/resume' component={Resume}/>
    </Router>
  );
}

export default App;
