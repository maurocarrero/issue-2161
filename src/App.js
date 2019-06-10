import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Index = () => <div>Hola</div>;

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Route path="/" exact component={Index} />
    </Router>
  );
}

export default App;
