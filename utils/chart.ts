const data = [
  {
    name: 'Non-Food',
    children: [
      {
        name: 'Community Events',
        children: [
          {
            name: 'Other',
            children: [],
            value: 1,
          },
          {
            name: 'Funeral for Chinese Mason',
            children: [],
            value: 1,
          },
          {
            name: "McKenzie's Chinese Dinner for Youngsters",
            children: [],
            value: 1,
          },
          {
            name: '"Dim Sim Do" Fundraising for War Nurses',
            children: [],
            value: 1,
          },
        ],
      },
      {
        name: 'Theatre & Entertainment',
        children: [],
        value: 1,
      },
      {
        name: 'Dog Show',
        children: [],
        value: 1,
      },
      {
        name: 'Programme Schedule',
        children: [],
        value: 1,
      },
      {
        name: 'Quiz',
        children: [],
        value: 1,
      },
      {
        name: 'Horse Race',
        children: [],
        value: 1,
      },
      {
        name: 'Social Events',
        children: [],
        value: 1,
      },
      {
        name: 'Government & Politics',
        children: [],
        value: 1,
      },
      {
        name: 'Local News',
        children: [],
        value: 1,
      },
    ],
  },
  {
    name: 'Food',
    children: [
      {
        name: 'Recipe',
        children: [],
        value: 1,
      },
      {
        name: 'Restaurant Review',
        children: [],
        value: 1,
      },
      {
        name: 'Health & Diet',
        children: [],
        value: 1,
      },
      {
        name: 'Food Product Trade',
        children: [],
        value: 1,
      },
      {
        name: 'Fish & Chips',
        children: [],
        value: 1,
      },
      {
        name: 'Middle Eastern Food',
        children: [],
        value: 1,
      },
      {
        name: 'Food Guide',
        children: [],
        value: 1,
      },
    ],
  },
];

export const option = {
  visualMap: {
    type: 'continuous',
    min: 0,
    max: 10,
    inRange: {
      color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862'],
    },
  },
  series: {
    type: 'sunburst',
    data: data,
    center: ['50%', '48%'],
    radius: [0, '90%'],
    label: {
      rotate: 'radial',
    },
  },
};
