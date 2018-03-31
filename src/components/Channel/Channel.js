import React, { Component } from 'react';
import './Channel.css';

class Channel extends Component {

  render() {
    const channel = this.props.channelData;
    return (
      <div className="channel">
        <img className="channel__thumbnail" src={channel.thumbnail_url} alt={`${channel.display_name} logo`}/>
        <a className="channel__name" href={`https://www.youtube.com/channel/${channel.channel_id}`} target="_blank">{channel.display_name}</a>
        <span className="channel__stats">Subscribers: </span><span className="channel__stats">{channel.stats.subscribers}</span>
        <span className="channel__stats">Views: </span><span className="channel__stats">{channel.stats.views}</span>
        <div className="lorem">
          <span className="lorem__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales.</span>
        </div>
      </div>
    );
  }
}

export default Channel;
