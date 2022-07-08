class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Widget</li>
                        <li>Reviews</li>
                        <li>Customers</li>
                        <li>Online Analysis</li>
                        <li>Settings</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

class Reviews extends React.Component {
    render() {
        return (
            <div>
                <h3>Reviews</h3>
                <h4>1,281</h4>
            </div>
        )
    }
}

class AvgRating extends React.Component {
    render() {
        return (
            <div>
                <h3>Average Rating</h3>
                <h4>4.6</h4>
            </div>
        )
    }
}

class SentAnalysis extends React.Component {
    render() {
        return (
            <div>
                <h3>Sentiment Analysis</h3>
                <h4>960</h4>
                <h4>122</h4>
                <h4>321</h4>
            </div>
        )
    }
}

class Visitors extends React.Component {
    render() {
        return (
            <div>
                <h3>Website Visitors</h3>
                <h4>821</h4>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Reviews />
                <AvgRating />
                <SentAnalysis />
                <Visitors />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)