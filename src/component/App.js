import React from 'react';

import Header from './Header';
import Player from './Player';
import Footer from './Footer';
import Authentiation from './Authentiation';

import mediaLoader from "../loader/MediaLoader";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { videos: {} };
    }
    componentDidMount() {
        mediaLoader("data/Media.json").then(data => {
            this.setState({ videos: data.videos });
        });

    }
    render() {
        const authenticated = true; //userSelector(state => state.authenticated);
        const page = authenticated ?
            <Player source={this.state.videos && this.state.videos.length > 0 ? this.state.videos[0] : null} /> : null;

        return (
            <div>
                <Header />
                {page}
                <Authentiation store={this.props.store} company="deltatre" />
                <Footer store={this.props.store} />
            </div>
        )
    }
}


export default App;