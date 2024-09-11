type Item = {
  id: number;
  items: SubItem[];
  color: string;
  carousel: number;
};

export type SubItem = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  number: number;
  size: string;
  color: number;
};

type ColorCarousel = {
  id: number;
  items: Item[];
  title: string;
  category: number;
};

export const colorCarousel: ColorCarousel[] = [
  {
    id: 1,
    items: [
      {
        id: 1,
        items: [
          {
            id: 3,
            title: 'Микеа 2',
            description:
              'Custom built and fully installed for as little as $284,000 or $1,701/mo',
            image: 'http://206.81.18.120/media/posts/house2.png',
            number: 1,
            size: '170',
            color: 1,
          },
        ],
        color: '#FBE5B9',
        carousel: 1,
      },
      {
        id: 2,
        items: [
          {
            id: 5,
            title: 'Микеа 4',
            description:
              'Custom built and fully installed for as little as $284,000 or $1,701/mo',
            image: 'http://206.81.18.120/media/posts/house1.png',
            number: 3,
            size: '175',
            color: 2,
          },
        ],
        color: '#E9EDC9',
        carousel: 1,
      },
      {
        id: 3,
        items: [
          {
            id: 4,
            title: 'Микеа 3',
            description:
              'Custom built and fully installed for as little as $284,000 or $1,701/mo',
            image: 'http://206.81.18.120/media/posts/house3.png',
            number: 2,
            size: '170',
            color: 3,
          },
        ],
        color: '#F6F7F5',
        carousel: 1,
      },
    ],
    title: 'house',
    category: 3,
  },
];

export const colors: string[] = colorCarousel.flatMap((category) =>
  category.items.map((item) => item.color),
);
