var React = require("react");
var ReactIntl = require("react-intl");
var IntlMixin = ReactIntl.IntlMixin;
var FormattedMessage = ReactIntl.FormattedMessage;

var Router = require("react-router");
var Link = Router.Link;

var Tab = require("./Tab");
var UserLink = require("./UserLink");

var NavBar = React.createClass({
  mixins: [IntlMixin],

  render: function() {
    return (
      <nav className="navbar navbar-default" role="navigation" aria-label="Primary">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
              <span className="sr-only">
                <FormattedMessage message={this.getIntlMessage('nav.toggle')} />
              </span>
              <span className="btn-xs glyphicon glyphicon-th-list"></span>
            </button>
            <Link className="navbar-brand" to="home">#EtherEx</Link>
          </div>
          <div className="nav">
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav">
                <Tab to="home">
                  <i className="glyphicon glyphicon-stats"></i> &nbsp;
                  <FormattedMessage message={this.getIntlMessage('nav.trades')} />
                </Tab>
                <Tab to="markets" className="icon-chart-line"> &nbsp;
                  <FormattedMessage message={this.getIntlMessage('nav.markets')} />
                </Tab>
                <Tab to="wallet" className="icon-wallet"> &nbsp;
                  <FormattedMessage message={this.getIntlMessage('nav.wallet')} />
                </Tab>
                <Tab to="tools" className="icon-cog-alt"> &nbsp;
                  <FormattedMessage message={this.getIntlMessage('nav.tools')} />
                </Tab>
                <Tab to="help" className="icon-help">
                  <FormattedMessage message={this.getIntlMessage('nav.help')} />
                </Tab>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <UserLink address={this.props.user.user.id} showIcon={true} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
