import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyCyTT28VWYONTcgS9JdXmTkoaxfdShyEpk';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    // We want there to be a default search term when the user first
    // logs into our component
    componentDidMount() {
        this.onTermSubmit('zodiac killer')
    }

    onTermSubmit = async term => {
        // Recall that from the youtube documentation, we can
        // pass in a q term, that we use to retrieve the results
        // from youtube
        const response = await youtube.get('/search', {
            // See the documentation for the params which we are passing into
            // our requests
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: `${KEY}`
            }
        });
        
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return ( 
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos}
                        />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;


