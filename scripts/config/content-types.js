export const primaryCard = {
  field_headings: ['headings'],
  field_card_media: ['media', {
    field_media_image: ['image'],
  }],
};

const baseConfig = {
  field_heading_text: ['heading_text', {
    field_headings: ['headings'],
  }],
  field_headings: ['headings'],
  field_linked_cards: ['linked_cards'],
  field_card: ['card', {
    ...primaryCard
  }],
  field_cards: ['cards', {
    ...primaryCard,
  }],
  field_split_cards: ['split_cards', {
    ...primaryCard,
  }],
  field_cta_buttons: ['cta_buttons'],
  field_icon_links: ['icons', {
    field_media: ['media', {
      field_media_image: ['image'],
    }],
  }],
};

export const pageConfig = {
  field_sections: ['sections', {
    ...baseConfig,
    field_tab_sections: ['tab_sections', {
      field_sections: ['sections', {
        ...baseConfig,
      }],
    }],
  }],
}
