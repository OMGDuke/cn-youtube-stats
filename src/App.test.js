import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';

const channelsUrl = 'https://gist.githubusercontent.com/aldoninja/b77dd051aadc90598119e51b9030566b/raw/aa225e1bb8478bf517b4215808e29ae69b975702/top-10-channels.json';
const channelsData = [{
  "yt_category": "entertainment",
  "stats": {
    "subscribers": 6077710,
    "views": 4765680000
  },
  "thumbnail_url": "https://yt3.ggpht.com/-zuf1TvgF3Ik/AAAAAAAAAAI/AAAAAAAAAAA/EUhlIZ4G9wc/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
  "display_name": "はじめしゃちょー（hajime）",
  "channel_id": "UCgMPP6RRjktV7krOfyUewqw"
},
{
  "yt_category": "entertainment",
  "stats": {
    "subscribers": 5760610,
    "views": 4492440000
  },
  "thumbnail_url": "https://yt3.ggpht.com/-NFhw6-eus8Y/AAAAAAAAAAI/AAAAAAAAAAA/rtPbnb9gvAQ/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
  "display_name": "HikakinTV",
  "channel_id": "UCZf__ehlCEBPop-_sldpBUQ"
}];

xit('fetch youtube channels on componentDidMount', () => {
  const mock = new MockAdapter(axios);
  mock.onGet(channelsUrl).reply(200, channelsData);
  const app = mount(<App />);
  expect(app.update().state().channels).toEqual(channelsData);
});
