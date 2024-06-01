import { nanoid } from 'nanoid';
// import { getRandomTrueOrFalse } from '../utils/common.js'; позже должно понадобиться (или нет)

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        title: 'Upgrade to a business class',
        price: 190,
        isChecked: true
      },
      {
        title: 'Choose the radio station',
        price: 82,
        isChecked: true
      },
      {
        title: 'Choose temperature',
        price: 63,
        isChecked: true
      },
      {
        title: 'Drive quickly, I\'m in a hurry',
        price: 184,
        isChecked: true
      },
      {
        title: 'Drive slowly',
        price: 169,
        isChecked: true
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        title: 'Infotainment system',
        price: 119,
        isChecked: true
      },
      {
        title: 'Order meal',
        price: 74,
        isChecked: true
      },
      {
        title: 'Choose seats',
        price: 41,
        isChecked: true
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        title: 'Book a taxi at the arrival point',
        price: 69,
        isChecked: true
      },
      {
        title: 'Order a breakfast',
        price: 135,
        isChecked: true
      },
      {
        title: 'Wake up at a certain time',
        price: 132,
        isChecked: true
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        title: 'Choose meal',
        price: 195,
        isChecked: true
      },
      {
        title: 'Choose seats',
        price: 69,
        isChecked: true
      },
      {
        title: 'Upgrade to comfort class',
        price: 186,
        isChecked: true
      },
      {
        title: 'Upgrade to business class',
        price: 83,
        isChecked: true
      },
      {
        title: 'Add luggage',
        price: 143,
        isChecked: true
      },
      {
        title: 'Business lounge',
        price: 176,
        isChecked: true
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        title: 'Choose the time of check-in',
        price: 168,
        isChecked: true
      },
      {
        title: 'Choose the time of check-out',
        price: 144,
        isChecked: true
      },
      {
        title: 'Add breakfast',
        price: 137,
        isChecked: true
      },
      {
        title: 'Laundry',
        price: 104,
        isChecked: true
      },
      {
        title: 'Order a meal from the restaurant',
        price: 152,
        isChecked: true
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
        price: 140,
        isChecked: true
      },
      {
        title: 'Choose seats',
        price: 51,
        isChecked: true
      },
      {
        title: 'Upgrade to comfort class',
        price: 109,
        isChecked: true
      },
      {
        title: 'Upgrade to business class',
        price: 121,
        isChecked: true
      },
      {
        title: 'Add luggage',
        price: 192,
        isChecked: true
      },
      {
        title: 'Business lounge',
        price: 93,
        isChecked: true
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        title: 'With automatic transmission',
        price: 157,
        isChecked: true
      },
      {
        title: 'With air conditioning',
        price: 174,
        isChecked: true
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        title: 'Choose live music',
        price: 148,
        isChecked: true
      },
      {
        title: 'Choose VIP area',
        price: 57,
        isChecked: true
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
