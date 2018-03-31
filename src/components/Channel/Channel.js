import React, { Component } from 'react';

class Channel extends Component {

  render() {
    const channel = this.props.channelData;
    return (
      <div className="Channel">
        <img src={channel.thumbnail_url}/>
        <h1>{channel.display_name}</h1>
        Subscribers: {channel.stats.subscribers}
        Views: {channel.stats.views}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales.
      </div>
    );
  }
}

export default Channel;
