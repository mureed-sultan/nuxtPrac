import axios from 'axios';

export default {
  name: 'Search',
  watchQuery: ['q'],
  async asyncData ({ query }) {
    let data = {
      query: query.q,
      origin: location.origin,
    };
    if (query.q) {
      let res = (await axios.get(process.env.apiUrl + '/jsonapi/' + 'index/search?filter[fulltext]=' + query.q + '&page[limit]=10')).data;
      data.pages = res.data.map(x => x.attributes);
    }
    return data;
  }
}
