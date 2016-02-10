var Hello = React.createClass({
  render: function() {
    return (
      <h2>What's up React? Halo from Leo Trieu</h2>
    );
  }
});
React.render(<Hello/>, document.getElementById("root"));
