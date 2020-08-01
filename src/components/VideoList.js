import React from 'react';
import VideoItem from './VideoItem';

// ({ videos }) is shorthand for props.videos

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        // We map over the array of videos, and pass as a prop
        // each individual video into the VideoItem component 
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
};



export default VideoList;










