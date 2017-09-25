import { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from 'react-ga'
GoogleAnalytics.initialize('UA-106934595-1');

export default class GAListener extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    this.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.sendPageView);
  }

  sendPageView(location) {
    GoogleAnalytics.set({ page: location.pathname });
    GoogleAnalytics.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }
}
