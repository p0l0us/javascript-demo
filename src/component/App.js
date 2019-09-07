import React from 'react';

import Header from './Header';
import Player from './Player';
import Footer from './Footer';
import mediaLoader from "../loader/MediaLoader";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {videos: {}};
    }
    componentDidMount() {
        mediaLoader("data/Media.json").then(data => {
            this.setState({videos: data.videos});
        });

    }
    render(){
        return(
            <div>
                <Header />
                <Player source={this.state.videos && this.state.videos.length > 0 ? this.state.videos[0] : null} />
                <Footer />
           </div>
        )
    }
}


export default App;