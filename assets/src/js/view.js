
var AboutMe = React.createClass({
  getInitialState: function() {
    return {
      age: 17
    };
  },

  calcAge: function() {
    var birthday = +new Date("1999-04-03");
    this.setState({age: ((Date.now() - birthday) / (31557600000)).toFixed(8)});
  },

  componentDidMount: function() {
    this.interval = setInterval(this.calcAge, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div>I'm a {this.state.age} year old web developer living in Los Angeles, California, United States. I have been freelance programming for over 2 years, and have been programming since the age of 12. </div>
    );
  }
});

ReactDOM.render(<AboutMe/>, document.getElementById('about-me-react'));
