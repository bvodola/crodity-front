const store = {
  cover: 'http://jonvilma.com/images/nature-5.jpg',
  avatar: 'http://www.madnicky.com/wp-content/uploads/2016/09/Megan-Fox-2.jpg',
  title: 'Lojinha da Megan',
  description: 'Loja voltada para amantes da tecnologia e acessórios. Faça sua primeira compra e ganhe 15% na segunda compra.',
  grade: 3.5
}

const user = {
  _id: 'y78ady7d8ah8gdfa8njh7829m',
  name: 'Sofia Vergara',
  cover: 'https://static.pexels.com/photos/20974/pexels-photo.jpg',
  avatar: 'https://i.pinimg.com/originals/fc/03/f6/fc03f6900db30feae108d558690ca748.jpg',
  type: 'premium',
  followers: 2042,
  following: 869,
  media: {
    total: 68,
    files: [
      {
        type: 'image',
        src: 'https://i1.wp.com/www.bikinimetrics.com/wp-content/uploads/2017/05/37_639_post_media_aSbc.jpg'
      },
      {
        type: 'image',
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Vergara_at_Pre-White_House_Correspondents%27_Dinner_Reception_Pre-Party_-_13927269587_%28cropped%29.jpg'
      },
      {
        type: 'image',
        src: 'http://retalhoclub.com.br/wp-content/uploads/2017/09/sophia-vergara-today-150824-tease_7e8c58fb35bd8f6f64945fde3ed15462.jpg'
      },
      {
        type: 'image',
        src: 'https://media1.popsugar-assets.com/files/thumbor/S336ppUueMmyHSyQJX8ZU3SSsUg/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2012/12/52/5/192/1922398/ab16234d33399043_a/i/Sofia-Vergara-Wears-Cutout-Swimsuit.jpg'
      },
      {
        type: 'image',
        src: 'http://cdn29.us1.fansshare.com/pictures/sofiavergara/sofia-vergara-bikini-762339681.jpg'
      },
      {
        type: 'image',
        src: 'http://www.imagesyoulike.com/images/v/32x24/v4637.jpg'
      }
    ]
  },
  info: {
    work: 'Fotógrafa profissional',
    school: 'Universidade das Américas',
    location: 'São Paulo - SP',
    relationship_status: 'Solteira',
  },
  friends: [
    {
      _id: 'y78ady7d8ah8gdfa8njh7829m',
      name: 'Sofia Vergara',
      avatar: 'https://i1.wp.com/www.bikinimetrics.com/wp-content/uploads/2017/05/37_639_post_media_aSbc.jpg'
    },
    {
      _id: 'y78ady7d8ah8gdfa8njh7829m',
      name: 'Sofia Vergara',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Vergara_at_Pre-White_House_Correspondents%27_Dinner_Reception_Pre-Party_-_13927269587_%28cropped%29.jpg'
    },
    {
      _id: 'y78ady7d8ah8gdfa8njh7829m',
      name: 'Sofia Vergara',
      avatar: 'http://retalhoclub.com.br/wp-content/uploads/2017/09/sophia-vergara-today-150824-tease_7e8c58fb35bd8f6f64945fde3ed15462.jpg'
    },
    {
      _id: 'y78ady7d8ah8gdfa8njh7829m',
      name: 'Sofia Vergara',
      avatar: 'https://media1.popsugar-assets.com/files/thumbor/S336ppUueMmyHSyQJX8ZU3SSsUg/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2012/12/52/5/192/1922398/ab16234d33399043_a/i/Sofia-Vergara-Wears-Cutout-Swimsuit.jpg'
    },
    {
      _id: 'y78ady7d8ah8gdfa8njh7829m',
      name: 'Sofia Vergara',
      avatar: 'http://cdn29.us1.fansshare.com/pictures/sofiavergara/sofia-vergara-bikini-762339681.jpg'
    },
    {
      _id: 'y78ady7d8ah8gdfa8njh7829m',
      name: 'Sofia Vergara',
      avatar: 'http://www.imagesyoulike.com/images/v/32x24/v4637.jpg'
    }
  ]
}


const products = [
  {
    title: 'Notebook Acer',
    price: 'R$ 120,00',
    image: 'http://www.material-ui.com/images/nature-600-337.jpg',
    likes: 133
  },
  {
    title: 'Notebook Acer',
    price: 'R$ 120,00',
    image: 'https://ludu-assets.s3.amazonaws.com/lesson-content/Y1UqoUn9EGQiRgTbONSM',
    likes: 133,
    sold_out: true
  },
  {
    title: 'Relógio Muito Interessante',
    price: 'R$ 130,00',
    image: 'https://cdn.shopify.com/s/files/1/0377/2037/products/Mens37.Front_e0435337-82ea-4472-86aa-0e34e1b2c3e8_grande.jpg?v=1501531060',
    likes: 133
  },
  {
    title: 'Notebook Acer',
    price: 'R$ 120,00',
    image: 'http://www.material-ui.com/images/nature-600-337.jpg',
    likes: 133
  },
  {
    title: 'Notebook Acer',
    price: 'R$ 120,00',
    image: 'http://www.material-ui.com/images/nature-600-337.jpg',
    likes: 133
  },
  {
    title: 'Notebook Acer',
    price: 'R$ 120,00',
    image: 'http://www.material-ui.com/images/nature-600-337.jpg',
    likes: 133
  },
];

const orders = [
  {
    _id: 'y78ady7d8ah8gdfa8njh7829m',
    order_date: new Date('05/08/2017'),
    status: 0,
    unique_id: 84590389,
    total_purchase: 1999.90,
    ads: [
      {
        name: 'Notebook Acer',
        price: '1999,90',
      },
    ],
    buyer: {
      name: 'Cara Delevingne',
      avatar: 'https://vg-images.condecdn.net/image/ooXzj57Ml4Q/crop/405/portrait',
      info: {
        location: 'São Paulo/SP'
      },
    }
  },
  {
    _id: 'y78ady7d8ah8gdfa8njh78',
    order_date: new Date('05/08/2017'),
    status: 1,
    unique_id: 84590389,
    total_purchase: 1999.90,
    ads: [
      {
        name: 'Notebook Acer',
        price: '1999,90',
      },
    ],
    buyer: {
      name: 'Cara Delevingne',
      avatar: 'https://vg-images.condecdn.net/image/ooXzj57Ml4Q/crop/405/portrait',
      info: {
        location: 'São Paulo/SP'
      },
    }
  },
  {
    _id: 'y78ady7d8ah8gdfa8njh782',
    order_date: new Date('05/08/2017'),
    status: 2,
    unique_id: 84590389,
    total_purchase: 1999.90,
    ads: [
      {
        name: 'Notebook Acer',
        price: '1999,90',
      },
    ],
    buyer: {
      name: 'Cara Delevingne',
      avatar: 'https://vg-images.condecdn.net/image/ooXzj57Ml4Q/crop/405/portrait',
      info: {
        location: 'São Paulo/SP'
      },
    }
  },
  {
    _id: 'y78ady7d8ah8gdfa8njh7829',
    order_date: new Date('05/08/2017'),
    status: 3,
    unique_id: 84590389,
    total_purchase: 1999.90,
    ads: [
      {
        name: 'Notebook Acer',
        price: '1999,90',
      },
    ],
    buyer: {
      name: 'Cara Delevingne',
      avatar: 'https://vg-images.condecdn.net/image/ooXzj57Ml4Q/crop/405/portrait',
      info: {
        location: 'São Paulo/SP'
      },
    }
  },
  {
    _id: 'y78ady7d8ah8gdfa8njh7',
    order_date: new Date('05/08/2017'),
    status: 4,
    unique_id: 84590389,
    total_purchase: 1999.90,
    ads: [
      {
        name: 'Notebook Acer',
        price: '1999,90',
      },
    ],
    buyer: {
      name: 'Cara Delevingne',
      avatar: 'https://vg-images.condecdn.net/image/ooXzj57Ml4Q/crop/405/portrait',
      info: {
        location: 'São Paulo/SP'
      },
    }
  },
  {
    _id: 'y78ady7d8ah8gdfgju8sfjgf9s9',
    order_date: new Date('05/08/2017'),
    status: 5,
    unique_id: 84590389,
    total_purchase: 1999.90,
    ads: [
      {
        name: 'Notebook Acer',
        price: '1999,90',
      },
    ],
    buyer: {
      name: 'Cara Delevingne',
      avatar: 'https://vg-images.condecdn.net/image/ooXzj57Ml4Q/crop/405/portrait',
      info: {
        location: 'São Paulo/SP'
      },
    }
  },
];

export default { store, products, user, orders };
