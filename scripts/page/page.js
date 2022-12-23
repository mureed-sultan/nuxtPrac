import {getPage} from '~/scripts/entities/pages.js';
import {getLinkCards} from '~/scripts/entities/link-cards.js';
import PageSection from '~/components/PageSection.vue';

export default {
  name: 'Page',
  components: { PageSection },
  props: {
    page_id: 'String',
    sections: 'Object',
  },
  head () {
    let data = {};
    if (this.title && this.page_id != 'home') {
      data.title = this.title + ' | Blah blah';
    }
    if (this.meta_description) {
      data.meta = [
        { hid: 'description', name: 'description', content: this.meta_description || '' }
      ];
    }
    return data;
  },
  async asyncData ({ params, error }) {
    let allLinkedCards = await getLinkCards();
    var data = await getPage(params.page || 'home');

    console.log(data);

    if (!data) {
      return error({ statusCode: 404, message: 'Post not found' });
    }

    data.sections.forEach((section, index) => {
      if (section.type == 'tab_buttons') {
        let tabContainer = data.sections[index + 1];
        if (tabContainer && tabContainer.type == 'tab_container') {
          section.tab_container = tabContainer;
          section.selected_tab = 0;
        }
      } else if (section.type == 'tab_container') {
        let tabButtons = data.sections[index - 1];
        if (tabButtons && tabButtons.type == 'tab_buttons') {
          section.tab_buttons = tabButtons;
        }
      } else if (section.type == 'where_to_cards') {
        section.linked_cards = section.linked_cards.map(x => allLinkedCards.find(card => card.id == x.id)).filter(x => x);
        if (data.page_id == 'home') {
          section.where_template = 'wherenextlarge';
        }
      }
    });
    return data;
  }
}
