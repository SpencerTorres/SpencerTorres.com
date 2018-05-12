import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'

const history = createHistory()
ReactGA.initialize('UA-106934595-1')

history.listen(location => ReactGA.pageview(location.pathname + location.search))

export default history
