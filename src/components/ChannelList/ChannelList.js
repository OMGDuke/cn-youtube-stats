import React, { Component } from 'react';
import axios from 'axios';
import './ChannelList.css';
import Channel from '../Channel/Channel';

class ChannelList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: []
    }
  }

  componentDidMount() {
    const channelsUrl = 'https://gist.githubusercontent.com/aldoninja/b77dd051aadc90598119e51b9030566b/raw/aa225e1bb8478bf517b4215808e29ae69b975702/top-10-channels.json';
    axios.get(channelsUrl).then(response => {
      this.setState({
        channels: response.data
      });
    });
  }

  renderChannels () {
    return this.state.channels.map(channel => <Channel key={channel.channel_id} channelData={channel} />)
  }

  render() {
    return (
      <div className="ChannelList">
        {this.renderChannels()}
      </div>
    );
  }
}

export default ChannelList;
