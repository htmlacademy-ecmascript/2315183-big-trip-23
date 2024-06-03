import { nanoid } from 'nanoid';
import { getRandomArrayElement } from '../utils/common.js';

const mockDestinations = [
  {
    description: 'Helsinki - for those who value comfort and coziness',
    name: 'Helsinki',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/10.jpg',
        description: 'Helsinki with crowded streets'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/9.jpg',
        description: 'Helsinki is a beautiful city'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/19.jpg',
        description: 'Helsinki with crowded streets'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/1.jpg',
        description: 'Helsinki with an embankment of a mighty river as a centre of attraction'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/20.jpg',
        description: 'Helsinki for those who value comfort and coziness'
      }
    ]
  },
  {
    description: 'Tokio - a perfect place to stay with a family',
    name: 'Tokio',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/2.jpg',
        description: 'Tokio middle-eastern paradise'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/9.jpg',
        description: 'Tokio with crowded streets'
      }
    ]
  },
  {
    description: '',
    name: 'Nagasaki',
    pictures: []
  },
  {
    description: 'Moscow - is a beautiful city',
    name: 'Moscow',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/9.jpg',
        description: 'Moscow with crowded streets'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/2.jpg',
        description: 'Moscow with a beautiful old town'
      }
    ]
  },
  {
    description: 'Madrid - middle-eastern paradise',
    name: 'Madrid',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/19.jpg',
        description: 'Madrid middle-eastern paradise'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/18.jpg',
        description: 'Madrid with an embankment of a mighty river as a centre of attraction'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/2.jpg',
        description: 'Madrid full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/19.jpg',
        description: 'Madrid a perfect place to stay with a family'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/5.jpg',
        description: 'Madrid famous for its crowded street markets with the best street food in Asia'
      }
    ]
  },
  {
    description: 'Monaco - a true asian pearl',
    name: 'Monaco',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/18.jpg',
        description: 'Monaco full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/15.jpg',
        description: 'Monaco with an embankment of a mighty river as a centre of attraction'
      }
    ]
  },
  {
    description: 'Milan - a true asian pearl',
    name: 'Milan',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/20.jpg',
        description: 'Milan with a beautiful old town'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/11.jpg',
        description: 'Milan famous for its crowded street markets with the best street food in Asia'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/4.jpg',
        description: 'Milan with a beautiful old town'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/2.jpg',
        description: 'Milan a true asian pearl'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/4.jpg',
        description: 'Milan a perfect place to stay with a family'
      }
    ]
  },
  {
    description: 'Munich - a perfect place to stay with a family',
    name: 'Munich',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/17.jpg',
        description: 'Munich a true asian pearl'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/18.jpg',
        description: 'Munich with an embankment of a mighty river as a centre of attraction'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/8.jpg',
        description: 'Munich with a beautiful old town'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/14.jpg',
        description: 'Munich a true asian pearl'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/10.jpg',
        description: 'Munich is a beautiful city'
      }
    ]
  },
  {
    description: '',
    name: 'Rome',
    pictures: []
  },
  {
    description: 'Sochi - with a beautiful old town',
    name: 'Sochi',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/1.jpg',
        description: 'Sochi middle-eastern paradise'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/5.jpg',
        description: 'Sochi middle-eastern paradise'
      }
    ]
  }
];

let place;

function getNeedPlace(currentPlace) {
  mockDestinations.forEach((destination) => {
    if (destination.name === currentPlace) {
      place = destination;
    }
  });
}

function getRandomDestination(name) {
  if (name) {
    getNeedPlace(name);
    return {
      id: nanoid(),
      ...place
    };
  }
  return {
    id: nanoid(),
    ...getRandomArrayElement(mockDestinations)
  };
}

export { getRandomDestination };
