var Product = React.createClass({
  getInitialState: function() {
    return {qty: 0};
  },

  buy: function() {
    this.setState({qty: this.state.qty +1});
  },

  render: function() {
    return (
      <div>
      <h3>Android - $199</h3>
      <button onClick={this.buy}>Buy</button>
      <h3>Qty: {this.state. qty} item(s)</h3>
      </div>
    );
  }
});

React.render(<Product />, document.getElementById("root"));
