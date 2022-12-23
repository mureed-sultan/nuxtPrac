import api from '~/scripts/helpers/json-api.js';
import { primaryCard } from '~/scripts/config/content-types.js';

var linkCards;

export async function getLinkCards() {
  if (linkCards) {
    return linkCards;
  }
  linkCards = (await api({
    endpoint: 'node/link_card',
    include: {
      field_card: ['card', {
        ...primaryCard,
      }],
    }
  }));
  return linkCards;
}
