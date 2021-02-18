export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const faq = {
  title: 'Frequently asked questions',
  subtitle: '(FAQ)',
  image: 'https://cdn.shopify.com/s/files/1/0038/6357/6643/files/icouniforms-faq-image.png?16835040154830260790://st.depositphotos.com/1005920/3087/i/950/depositphotos_30874237-stock-photo-faq-icon.https://alltest.com.au/wp-content/uploads/faq.ico.png',
  text: 'Lorem ipsum – tekst składający się z łacińskich i quasi-łacińskich wyrazów, mający korzenie w klasycznej łacinie, wzorowany na fragmencie traktatu Cycerona „O granicach dobra i zła” napisanego w 45 p.n.e. Tekst jest stosowany do demonstracji krojów pisma, kompozycji kolumny itp. -zrodlo: Wikipedia',
};
export const info = {
  title: 'Informations & details',
  subtitle: '(Info)',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Gtk-dialog-info.svg/1200px-Gtk-dialog-info.svg.png',
  text: 'Lorem ipsum – tekst składający się z łacińskich i quasi-łacińskich wyrazów, mający korzenie w klasycznej łacinie, wzorowany na fragmencie traktatu Cycerona „O granicach dobra i zła” napisanego w 45 p.n.e. Tekst jest stosowany do demonstracji krojów pisma, kompozycji kolumny itp. -zrodlo: Wikipedia',
};


export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Letters to write <sup>x8!</sup>',
    description: 'Who want get letter from u?',
    image: 'https://d31029zd06w0t6.cloudfront.net/wp-content/uploads/sites/38/2020/02/web1_729931c3.jpg',
  },
  {
    id: 'list-3',
    title: 'Best songs<sup>ever!</sup>',
    description: 'Music make me intrested',
    image: 'https://media.timeout.com/images/102438769/image.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
