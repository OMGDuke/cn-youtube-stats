import React, { Component } from 'react';
import './Channel.css';

class Channel extends Component {
  formatNumber(value) {
      const suffixes = ["", "k", "m", "b","t"];
      const suffixNum = Math.floor(("" + value).length/3);
      let shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
      return shortValue + suffixes[suffixNum];
  }

  render() {
    const channel = this.props.channelData;
    return (
      <div className="channel">
        <img className="channel__thumbnail" src={channel.thumbnail_url} alt={`${channel.display_name} logo`}/>
        <a className="channel__name" href={`https://www.youtube.com/channel/${channel.channel_id}`} target="_blank">{channel.display_name}</a>
        <span className="channel__stats">Subscribers: </span><span className="channel__stats">{this.formatNumber(channel.stats.subscribers)}</span>
        <span className="channel__stats">Views: </span><span className="channel__stats">{this.formatNumber(channel.stats.views)}</span>
        <div className="lorem">
          <span className="lorem__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales.</span>
        </div>
      </div>
    );
  }
}

export default Channel;
