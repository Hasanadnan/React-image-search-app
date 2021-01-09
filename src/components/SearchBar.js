import React from "react";

class SearchBar extends React.Component {
  //   onInputChange(e) {
  //     console.log(e.target.value);
  //   }

  state = { term: "" };

  // onFromSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // } ai vabe likle error dekhabe... akahne this SearchBar ke follow kore

  //uporer this ke value cinanor solution 1:
  onFromSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFromSubmit}>
          {/*uporer this ke value cinanor solution 2: */}
          {/* <form
          className="ui form"
          onSubmit={(event) => this.onFromSubmit(event)}
        > */}
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
