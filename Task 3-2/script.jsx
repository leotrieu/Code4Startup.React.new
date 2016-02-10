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
        <h4>Qty: {this.state. qty} item(s)</h4>
        <hr/>
      </div>
    );
  }
});

var Total = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Total Cash: </h3>
      </div>
    );
  }
});

var ProductList = React.createClass({
  render: function() {
    return (
      <div>
        <Product/>
        <Product/>
        <Product/>
        <Total/>
      </div>
    );
  }
});

React.render(<ProductList/>, document.getElementById("root"));
