import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
function App() {

  //works
  const stringValue = "Harishmitha";
  const numberValue = 50;
  const arrayValue = ["a", "b"]; // returns as str
  {/* <h1>{stringValue}</h1>
        <p>Liked {numberValue} times </p> */}

  //does not work
  //object and boolean


  //directly evaluate js as well like number, string, array and Math.randowm
  // <a href={value}></a>
  return (
    <Router>
      <div className="App">
        {/* Common for all components since its outside Switch */}
        <Navbar />
        <div className="content">
          {/* only one of the routes/components within swtich will be rendered */}
          {/* If there is no Swtich then all the components will be rendered */}
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/create">
                  <Create/>
              </Route>
              <Route path="/blogs/:id">
                  <BlogDetails/>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
