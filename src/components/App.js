import React from "react";
import unsplash from "../api/unslash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { image: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    // console.log(response.data.results);
    // .then((response) => {
    //   console.log(response);
    // });
    this.setState({ image: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* found: {this.state.image.length} image */}
        <ImageList image={this.state.image} />
      </div>
    );
  }
}

export default App;
