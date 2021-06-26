import { CUSTOM_ICON_TYPE } from '@tc-model';
import { IconConfig, IconResourceType, ICON_TYPE } from '@spartacus/storefront';

export const customIconsConfig: IconConfig = {
  icon: {
    symbols: {
      SEARCH: 'icon-search',
      CART: 'icon-shopping-cart',
      INFO: 'icon-info-circle',
      STAR: 'icon-star',
      GRID: 'icon-th-large',
      LIST: 'icon-bars',
      CARET_UP: 'icon-angle-up',
      CARET_DOWN: 'icon-angle-down',
      CARET_RIGHT: 'icon-angle-right',
      CARET_LEFT: 'icon-angle-left',
      ERROR: 'icon-exclamation-circle',
      WARNING: 'icon-exclamation-triangle',
      SUCCESS: 'icon-check-circle',
      CLOSE: 'icon-times',
      VISA: 'icon-cc-visa',
      MASTER_CARD: 'icon-cc-mastercard',
      AMEX: 'icon-cc-amex',
      DINERS_CLUB: 'icon-cc-diners-club',
      CREDIT_CARD: 'icon-credit-card',
      COLLAPSE: 'icon-minus',
      EXPAND: 'icon-plus',
      RESET: 'icon-times-circle',
      CIRCLE: 'icon-circle',
      HEART: 'icon-heart',
      EMPTY_HEART: 'icon-heart-outline',
      FILTER: 'icon-filter',
      PENCIL: 'icon-pencil',
      CLOCK: 'icon-clock-outline',
      TRASH: 'icon-trash',
      ACTIVE: 'icon-check',
      ON: 'icon-toggle-on',
      OFF: 'icon-toggle-off',
      LINK_OUT: 'icon-external-link',
      SORT_DOWN: 'icon-sort-down',
      SORT: 'icon-sort',
      // Custom
      USER_PLUS: 'icon-user-plus-solid',
    },
    resources: [
      {
        type: IconResourceType.SVG,
        url: './assets/icons/icons-sprite.svg',
        types: [
          ICON_TYPE.SEARCH,
          ICON_TYPE.CART,
          ICON_TYPE.INFO,
          ICON_TYPE.STAR,
          ICON_TYPE.GRID,
          ICON_TYPE.LIST,
          ICON_TYPE.CARET_UP,
          ICON_TYPE.CARET_DOWN,
          ICON_TYPE.CARET_RIGHT,
          ICON_TYPE.CARET_LEFT,
          ICON_TYPE.ERROR,
          ICON_TYPE.WARNING,
          ICON_TYPE.SUCCESS,
          ICON_TYPE.CLOSE,
          ICON_TYPE.VISA,
          ICON_TYPE.MASTER_CARD,
          ICON_TYPE.AMEX,
          ICON_TYPE.DINERS_CLUB,
          ICON_TYPE.CREDIT_CARD,
          ICON_TYPE.COLLAPSE,
          ICON_TYPE.EXPAND,
          ICON_TYPE.RESET,
          ICON_TYPE.CIRCLE,
          ICON_TYPE.HEART,
          ICON_TYPE.EMPTY_HEART,
          ICON_TYPE.FILTER,
          ICON_TYPE.PENCIL,
          ICON_TYPE.CLOCK,
          ICON_TYPE.TRASH,
          ICON_TYPE.ACTIVE,
          ICON_TYPE.ON,
          ICON_TYPE.OFF,
          ICON_TYPE.LINK_OUT,
          ICON_TYPE.SORT_DOWN,
          ICON_TYPE.SORT,
          CUSTOM_ICON_TYPE.USER_PLUS,
        ],
      },
    ],
  },
};