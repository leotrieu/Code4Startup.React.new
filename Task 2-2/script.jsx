var Product = React.createClass({
  buy: function() {
    alert("You bought an Android mobile!");
  },

  render: function() {
    return (
      <div>
      <p>Android - $199</p>
      <button onClick={this.buy}>Buy</button>
      </div>
    );
  }
});

React.render(<Product />, document.getElementById("root"));
