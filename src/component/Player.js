import React from "react"
import shaka from "shaka-player"

class Player extends React.Component {
    componentDidMount() {
        // Install built-in polyfills to patch browser incompatibilities.
        shaka.polyfill.installAll();
        this.initPlayer();
    }

    componentDidUpdate() {
        this.initPlayer()
    }

    initPlayer() {
        // Check to see if the browser supports the basic APIs Shaka needs.
        if (!shaka.Player.isBrowserSupported()) {
            // This browser does not have the minimum set of APIs we need.
            console.error('Browser not supported!');
            return;
        }

        if (!this.props.source) {
            console.error("Missing video data");
            return;
        }

        var player = new shaka.Player(this.refs.video);

        // Listen for error events.
        player.addEventListener('error', (event) => console.error('Error code', event.detail.code, 'object', event.detail));

        const videoSource = this.props.source.sources[0];

        if (videoSource.drm) {
            console.log(videoSource.drm);
            player.configure({
                drm: {
                    servers: {
                        'com.widevine.alpha': videoSource.drm.widevine.LA_URL,
                        'com.microsoft.playready': videoSource.drm.playready.LA_URL
                    }
                }
            });
        }


        var videoUrl = videoSource.dash ? videoSource.dash : videoSource.src;
        console.log(videoUrl);
        // Try to load a manifest.
        // This is an asynchronous process.
        player.load(videoUrl).then(function() {
            // This runs if the asynchronous load is successful.
            console.log('The video has now been loaded!');
        }).catch((error) => console.error('Error code', error.code, 'object', error));  // onError is executed if the asynchronous load fails.

        player.autoPlay = true;
    }

    componentWillUnmount() {
        this.refs.player = null;
    }

    render() {
        return (
            <div>
                <video ref="video" width="640" poster="//shaka-player-demo.appspot.com/assets/poster.jpg" controls autoPlay></video>
            </div>
        );
    }
}

export default Player