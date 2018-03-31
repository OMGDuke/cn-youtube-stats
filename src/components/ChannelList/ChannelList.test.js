import React from 'react';
import ReactDOM from 'react-dom';
import ChannelList from './ChannelList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChannelList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
