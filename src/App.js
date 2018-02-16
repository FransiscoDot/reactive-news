import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Genres from "./containers/GenresContainer/Genres";

class App extends React.Component {
  render() {
    return(
      <div>
        <Genres />
      </div>
    );
  }
}

export default App;
