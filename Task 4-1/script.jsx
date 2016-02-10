var Product = React.createClass({
  getInitialState: function() {
    return {qty: 0};
  },

  buy: function() {
    this.setState({qty: this.state.qty +1});
    this.props.handleTotal(this.props.price);
  },

  show: function() {
    this.props.handleShow(this.props.name);
  },

  render: function() {
    return (
      <div>
        <p>{this.props.name} - ${this.props.price}</p>
        <button onClick={this.buy}>Buy</button>-
        <button onClick={this.show}>Show</button>
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
        <h3>Total Cash: ${this.props.total}</h3>
      </div>
    );
  }
});

var ProductList = React.createClass({
  getInitialState: function() {
    return {
      total: 0,
      productList: [
        {name: "Android", price: 121},
        {name: "Apple", price: 123},
        {name: "Nokia", price: 65}
      ]
    }
  },

  calculateTotal: function(price) {
    this.setState({
      total: this.state.total + price
    });
  },

  showProduct: function(name) {
    alert("You selected " + name);
  },

  render: function() {
    var component = this;
    var products = this.state.productList.map(function(product) {
      return(
        <Product name={product.name} price={product.price}
            handleShow={component.showProduct}
            handleTotal={component.calculateTotal}/>
      );
    });
    return (
      <div>
        {products}
        <Total total={this.state.total}/>
      </div>
    );
  }
});

React.render(<ProductList/>, document.getElementById("root"));
