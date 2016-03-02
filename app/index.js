var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
/**
* React component should be test against these acronyms:
* - Focused
* - Independent
* - Reusable
* - Small
* - Testable
*/
// Dummy data
var USER_DATA = {
  name: 'Bunchhieng Soth',
  username: 'Bunchhieng',
  image: 'http://vignette2.wikia.nocookie.net/fairy-tail/images/4/4e/Happy_fairy_tail_by_justvinaj-d5i0j8v.jpg/revision/latest?cb=20130527222348&path-prefix=fr'
}
// This creates a new HelloWorld element
var HelloWorld = React.createClass({
  render: function() {
    // Access name property with this.props.name
    return ( < div > Hello {this.props.name} < /div>)
  }
});

// Profile info
var ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href);
  },
  render: function() {
    return (
      <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
        // this access all childrens between components
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

// Render the HelloWorld to app div
// ReactDOM.render( <Avatar user={USER_DATA} /> , document.getElementById('app'));
ReactDOM.render( routes , document.getElementById('app'));
