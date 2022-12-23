import axios from 'axios';
import {getVal} from '~/scripts/utility/array.js';

let map = {
  title: 'title',
  field_page_id: 'page_id',
  field_meta_description: 'meta_description',
  field_text: 'text',
  field_heading: 'heading',
  field_link: 'link',
  field_cta_link: 'cta_link',
  field_heading_type: 'heading_type',
  field_cta_buttons: 'cta_buttons',
  field_nav_links: 'links',
  field_buttons: 'buttons',
  field_classes: 'classes',
  field_carousel: 'is_carousel',
  field_card_theme: 'theme',
  tab_sections: 'tab_sections',
  sections: 'sections',
  field_component_name: 'component_name',
  'field_card_description.processed': 'description',
  'field_formatted_text.processed': 'text',
  'field_cta_text.processed': 'cta_text',
}

let types = [
  'site_page',
  'primary_card',
  'coloured_heading',
  'link_card',
  'card_and_text',
  'card_points',
  'card_stack',
  'cards_two_columns',
  'tab_buttons',
  'tab_container',
  'tab_section',
  'page_hero',
  'cta_button',
  'predefined',
  'icons',
  'formatted_text',
  'heading_and_text',
  'where_to_cards',
  'navigation',
  'image_link',
];

function findProp(propPath, data) {
  let parts = propPath.split('.');
  for (let j = 0; data && j < parts.length; j++) {
    if (j == parts.length - 1 && Object.prototype.hasOwnProperty.call(data, parts[j])) {
      return {val: data[parts[j]]};
    }
    data = data[parts[j]];
  }
}

function makeLink(link) {
  let url = link.uri.replace(/^internal:/, '');
  return {
    url,
    text: link.title,
    is_internal: url != link.uri,
  };
}

export default async function (specs) {
  let params = 'include=';
  let results = [];
  appendParams('', specs.include);
  params = params.replace(/,+$/, '');
  const resData = (await axios.get(process.env.apiUrl + '/jsonapi/' + specs.endpoint + (specs.endpoint.indexOf('?') >= 0 ? '&' : '?') + params)).data;
  resData.data.forEach(source => {
    results.push(pullData(makeTarget(source), source, specs.include));
  });
  return results.length > 1 ? results : results[0];

  function makeTarget(source) {
    let type = source.type.split('--').pop();
    let target;
    if (types.indexOf(type) >= 0) {
      target = {
        type,
        id: source.id,
      };
      Object.entries(map).forEach(([key, path]) => {
        let prop = findProp(key, source.attributes);
        if (prop) {
          target[path] = prop = prop.val;
          if (prop) {
            if (path == 'links') {
              target[path] = prop.map(link => makeLink(link));
            } else if ((path == 'link' || path == 'cta_link')) {
              target[path] = makeLink(prop);
            }
          }
        }
      });
    } else {
      target = {
        type,
        id: source.id,
        ...source.attributes,
      };
    }
    return target;
  }

  function pullData(target, source, fields) {
    fields && Object.entries(fields).forEach(([key, arr]) => {
      let found = source.relationships[key];
      if (found) {
        let name = arr[0] || key;
        if (!found.data) {
          target[name] = null;
        } else if (Array.isArray(found.data)) {
          target[name] = [];
          found.data.forEach(function(item, index) {
            saveValue(target[name], item.id, index, arr[1]);
          });
        } else {
          saveValue(target, found.data.id, name, arr[1]);
        }
      }
    });
    return target;
  }

  function saveValue(target, id, prop, specs) {
    let obj = getVal(resData.included, id, 'id');
    let newTarget = obj && makeTarget(obj);
    if (specs && obj) {
      target[prop] = pullData(newTarget, obj, specs);
    } else {
      target[prop] = newTarget;
    }
  }

  function appendParams(prefix, entity) {
    prefix = prefix ? prefix + '.' : '';
    Object.entries(entity).forEach(([key, arr]) => {
      if (arr[1]) {
        appendParams(prefix + key, arr[1]);
      } else {
        params += prefix + key + ',';
      }
    })
  }
}
