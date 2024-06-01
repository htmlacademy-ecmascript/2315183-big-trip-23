import { nanoid } from 'nanoid';
// import { getRandomTrueOrFalse } from '../utils/common.js'; позже должно понадобиться (или нет)

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        title: 'Upgrade to a business class',
        price: 190
      },
      {
        title: 'Choose the radio station',
        price: 82
      },
      {
        title: 'Choose temperature',
        price: 63
      },
      {
        title: 'Drive quickly, I\'m in a hurry',
        price: 184
      },
      {
        title: 'Drive slowly',
        price: 169
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        title: 'Infotainment system',
        price: 119
      },
      {
        title: 'Order meal',
        price: 74
      },
      {
        title: 'Choose seats',
        price: 41
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        title: 'Book a taxi at the arrival point',
        price: 69
      },
      {
        title: 'Order a breakfast',
        price: 135
      },
      {
        title: 'Wake up at a certain time',
        price: 132
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        title: 'Choose meal',
        price: 195
      },
      {
        title: 'Choose seats',
        price: 69
      },
      {
        title: 'Upgrade to comfort class',
        price: 186
      },
      {
        title: 'Upgrade to business class',
        price: 83
      },
      {
        title: 'Add luggage',
        price: 143
      },
      {
        title: 'Business lounge',
        price: 176
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        title: 'Choose the time of check-in',
        price: 168
      },
      {
        title: 'Choose the time of check-out',
        price: 144
      },
      {
        title: 'Add breakfast',
        price: 137
      },
      {
        title: 'Laundry',
        price: 104
      },
      {
        title: 'Order a meal from the restaurant',
        price: 152
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        title: 'Choose meal',
        price: 140
      },
      {
        title: 'Choose seats',
        price: 51
      },
      {
        title: 'Upgrade to comfort class',
        price: 109
      },
      {
        title: 'Upgrade to business class',
        price: 121
      },
      {
        title: 'Add luggage',
        price: 192
      },
      {
        title: 'Business lounge',
        price: 93
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        title: 'With automatic transmission',
        price: 157
      },
      {
        title: 'With air conditioning',
        price: 174
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        title: 'Choose live music',
        price: 148
      },
      {
        title: 'Choose VIP area',
        price: 57
      }
    ]
  }
];

let offers;

function getNeedType(currentType) {
  mockOffers.forEach((offer) => {
    if (offer.type === currentType) {
      offers = offer;
    }
  });
}

function getNeedOffer(type) {
  getNeedType(type);
  return {
    id: nanoid(),
    ...offers
  };
}

export { getNeedOffer };
