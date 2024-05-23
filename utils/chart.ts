import * as echarts from "echarts";
import { type SunburstSeriesOption } from "echarts";

const data = [
  {
    name: "Non-Food",
    children: [
      {
        name: "Community Events",

        children: [
          {
            name: "Other",
            children: [],
            value: 1,
          },
          {
            name: "Funeral for Chinese Mason",
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
        name: "Theatre & Entertainment",
        children: [],
        value: 1,
      },
      {
        name: "Dog Show",
        children: [],
        value: 1,
      },
      {
        name: "Programme Schedule",
        children: [],
        value: 1,
      },
      {
        name: "Quiz",
        children: [],
        value: 1,
      },
      {
        name: "Horse Race",
        children: [],
        value: 1,
      },
      {
        name: "Social Events",
        children: [],
        value: 1,
      },
      {
        name: "Government & Politics",
        children: [],
        value: 1,
      },
      {
        name: "Local News",
        children: [],
        value: 1,
      },
    ],
  },
  {
    name: "Food",
    children: [
      {
        name: "Recipe",
        children: [],
        value: 1,
      },
      {
        name: "Restaurant Review",
        children: [],
        value: 1,
      },
      {
        name: "Health & Diet",
        children: [],
        value: 1,
      },
      {
        name: "Food Product Trade",
        children: [],
        value: 1,
      },
      {
        name: "Fish & Chips",
        children: [],
        value: 1,
      },
      {
        name: "Middle Eastern Food",
        children: [],
        value: 1,
      },
      {
        name: "Food Guide",
        children: [],
        value: 1,
      },
    ],
  },
];

export const option = {
  visualMap: {
    show: false,
    type: "continuous",
    min: 0,
    max: 10,
    inRange: {
      color: ["#b5cdfa", "#ffa3a3", "#fab486"],
    },
  },
  tooltip: {
    trigger: "item",
    // appendTo: 'body',
    showDelay: 500,
    hideDelay: 1000,
    // alwaysShowContent: true,
    transitionDuration: 0.3,
    position: (pos: any) => [pos[0] + 5, pos[1] - 10],
    enterable: true,
    extraCssText: "pointer-events: auto!important;",
  },

  series: {
    tooltip: {
      formatter: function (data: any) {
        const subcat = data.data.name;
        if (subcat === "sunburst" || subcat === "back") {
          return;
        }
        const encoded = btoa(subcat);

        const message = `{name: 'navigate', subcat: '${encoded}'}`;
        // console.log(
        //   `<div style="cursor:pointer;" onclick="window.postMessage(${message});">View articles on ${subcat}</div>`
        // );
        return `<div style="cursor:pointer;" onclick="window.postMessage(${message});">View articles<br> on ${subcat}</div>`;
      },
    },
    type: "sunburst",
    name: "back",

    data: data,
    center: ["50%", "48%"],
    radius: [0, "85%"],
    label: {
      width: 90,
      overflow: "break",
      rotate: "45",
      textStyle: {
        fontSize: 13,
      },
    },
  },
};
