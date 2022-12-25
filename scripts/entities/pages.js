import api from '~/scripts/helpers/json-api.js';
import { pageConfig } from '~/scripts/config/content-types.js';

var pages = {};

export async function getPage(slug) {
  if (pages[slug]) {
    return pages[slug];
  }
  let page = await api({
    endpoint: 'node/site_page?filter[field_page_id]=' + slug,
    include: pageConfig,
  });
  // console.log(page)
  pages[slug] = page;
  return page;
}
