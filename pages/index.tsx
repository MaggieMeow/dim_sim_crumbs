import Image from 'next/image';
import {motion} from 'framer-motion';
import {Inter} from 'next/font/google';
import {useState} from 'react';
import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');

const inter = Inter({subsets: ['latin']});
console.log(123);
export default function Home() {
  const [sunburstActive, setSunburstActive] = useState(false);
  console.log(sunburstActive);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <motion.div
        onClick={() => setSunburstActive(!sunburstActive)}
        animate={{
          scale: sunburstActive ? 1 : 0.2,
          // height: sunburstActive ? '200vh' : '30vh',
          // width: sunburstActive ? '200vh' : '30vh',
        }}
        transition={{
          type: 'spring',
          bounce: 0.15,
        }}
        // layout
        initial={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 bg-white rounded-full h-[3000px] w-[3000px]"
        // className={` ${
        //   sunburstActive
        //     ? 'fixed top-0 right-0 bg-white rounded-full  h-[100vh] w-[100vw]'
        //     : 'fixed top-0 right-0 bg-white rounded-full h-96 w-96 '
        // }`}
      >
        <div className="">
          <ReactECharts
            className="absolute bottom-[200px] right-[200px]"
            style={{
              height: '1500px',
              width: '1500px',
            }}
            option={{
              backgroundColor: 'transparent',
              color: ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'],
              series: [
                {
                  type: 'sunburst',

                  center: ['50%', '50%'],
                  data: [
                    {
                      name: '虚构',
                      itemStyle: {
                        color: '#FF7853',
                      },
                      children: [
                        {
                          name: '小说',
                          children: [
                            {
                              name: '5☆',
                              children: [
                                {
                                  name: '疼',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FFAE57',
                                  },
                                  label: {
                                    color: '#FFAE57',
                                  },
                                },
                                {
                                  name: '慈悲',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FFAE57',
                                  },
                                  label: {
                                    color: '#FFAE57',
                                  },
                                },
                                {
                                  name: '楼下的房客',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FFAE57',
                                  },
                                  label: {
                                    color: '#FFAE57',
                                  },
                                },
                              ],
                              label: {
                                color: '#FFAE57',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '4☆',
                              children: [
                                {
                                  name: '虚无的十字架',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                                {
                                  name: '无声告白',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                                {
                                  name: '童年的终结',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                              ],
                              label: {
                                color: '#FF7853',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '3☆',
                              children: [
                                {
                                  name: '疯癫老人日记',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#EA5151',
                                  },
                                  label: {
                                    color: '#EA5151',
                                  },
                                },
                              ],
                              label: {
                                color: '#EA5151',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                          ],
                          itemStyle: {
                            color: '#FF7853',
                          },
                        },
                        {
                          name: '其他',
                          children: [
                            {
                              name: '5☆',
                              children: [
                                {
                                  name: '纳博科夫短篇小说全集',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FFAE57',
                                  },
                                  label: {
                                    color: '#FFAE57',
                                  },
                                },
                              ],
                              label: {
                                color: '#FFAE57',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '4☆',
                              children: [
                                {
                                  name: '安魂曲',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                                {
                                  name: '人生拼图版',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                              ],
                              label: {
                                color: '#FF7853',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '3☆',
                              children: [
                                {
                                  name: '比起爱你，我更需要你',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#EA5151',
                                  },
                                  label: {
                                    color: '#EA5151',
                                  },
                                },
                              ],
                              label: {
                                color: '#EA5151',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                          ],
                          itemStyle: {
                            color: '#FF7853',
                          },
                        },
                      ],
                    },
                    {
                      name: '非虚构',
                      itemStyle: {
                        color: '#EA5151',
                      },
                      children: [
                        {
                          name: '设计',
                          children: [
                            {
                              name: '5☆',
                              children: [
                                {
                                  name: '无界面交互',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FFAE57',
                                  },
                                  label: {
                                    color: '#FFAE57',
                                  },
                                },
                              ],
                              label: {
                                color: '#FFAE57',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '4☆',
                              children: [
                                {
                                  name: '数字绘图的光照与渲染技术',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                                {
                                  name: '日本建筑解剖书',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                              ],
                              label: {
                                color: '#FF7853',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '3☆',
                              children: [
                                {
                                  name: '奇幻世界艺术\n&RPG地图绘制讲座',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#EA5151',
                                  },
                                  label: {
                                    color: '#EA5151',
                                  },
                                },
                              ],
                              label: {
                                color: '#EA5151',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                          ],
                          itemStyle: {
                            color: '#EA5151',
                          },
                        },
                        {
                          name: '社科',
                          children: [
                            {
                              name: '5☆',
                              children: [
                                {
                                  name: '痛点',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FFAE57',
                                  },
                                  label: {
                                    color: '#FFAE57',
                                  },
                                },
                              ],
                              label: {
                                color: '#FFAE57',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '4☆',
                              children: [
                                {
                                  name: '卓有成效的管理者',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                                {
                                  name: '进化',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                                {
                                  name: '后物欲时代的来临',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                              ],
                              label: {
                                color: '#FF7853',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '3☆',
                              children: [
                                {
                                  name: '疯癫与文明',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#EA5151',
                                  },
                                  label: {
                                    color: '#EA5151',
                                  },
                                },
                              ],
                              label: {
                                color: '#EA5151',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                          ],
                          itemStyle: {
                            color: '#EA5151',
                          },
                        },
                        {
                          name: '心理',
                          children: [
                            {
                              name: '5☆',
                              children: [
                                {
                                  name: '我们时代的神经症人格',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FFAE57',
                                  },
                                  label: {
                                    color: '#FFAE57',
                                  },
                                },
                              ],
                              label: {
                                color: '#FFAE57',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '4☆',
                              children: [
                                {
                                  name: '皮格马利翁效应',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                                {
                                  name: '受伤的人',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                              ],
                              label: {
                                color: '#FF7853',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '3☆',
                              label: {
                                color: '#EA5151',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '2☆',
                              children: [
                                {
                                  name: '迷恋',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#CC3F57',
                                  },
                                  label: {
                                    color: '#CC3F57',
                                  },
                                },
                              ],
                              label: {
                                color: '#CC3F57',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                          ],
                          itemStyle: {
                            color: '#EA5151',
                          },
                        },
                        {
                          name: '居家',
                          children: [
                            {
                              name: '4☆',
                              children: [
                                {
                                  name: '把房子住成家',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                                {
                                  name: '只过必要生活',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                                {
                                  name: '北欧简约风格',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                              ],
                              label: {
                                color: '#FF7853',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                          ],
                          itemStyle: {
                            color: '#EA5151',
                          },
                        },
                        {
                          name: '绘本',
                          children: [
                            {
                              name: '5☆',
                              children: [
                                {
                                  name: '设计诗',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FFAE57',
                                  },
                                  label: {
                                    color: '#FFAE57',
                                  },
                                },
                              ],
                              label: {
                                color: '#FFAE57',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '4☆',
                              children: [
                                {
                                  name: '假如生活糊弄了你',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                                {
                                  name: '博物学家的神秘动物图鉴',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                              ],
                              label: {
                                color: '#FF7853',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '3☆',
                              children: [
                                {
                                  name: '方向',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#EA5151',
                                  },
                                  label: {
                                    color: '#EA5151',
                                  },
                                },
                              ],
                              label: {
                                color: '#EA5151',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                          ],
                          itemStyle: {
                            color: '#EA5151',
                          },
                        },
                        {
                          name: '哲学',
                          children: [
                            {
                              name: '4☆',
                              children: [
                                {
                                  name: '人生的智慧',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                              ],
                              label: {
                                color: '#FF7853',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                          ],
                          itemStyle: {
                            color: '#EA5151',
                          },
                        },
                        {
                          name: '技术',
                          children: [
                            {
                              name: '5☆',
                              children: [
                                {
                                  name: '代码整洁之道',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FFAE57',
                                  },
                                  label: {
                                    color: '#FFAE57',
                                  },
                                },
                              ],
                              label: {
                                color: '#FFAE57',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                            {
                              name: '4☆',
                              children: [
                                {
                                  name: 'Three.js 开发指南',
                                  value: 1,
                                  itemStyle: {
                                    opacity: 1,
                                    color: '#FF7853',
                                  },
                                  label: {
                                    color: '#FF7853',
                                  },
                                },
                              ],
                              label: {
                                color: '#FF7853',
                                downplay: {
                                  opacity: 0.5,
                                },
                              },
                            },
                          ],
                          itemStyle: {
                            color: '#EA5151',
                          },
                        },
                      ],
                    },
                  ],
                  label: {
                    rotate: 'radial',
                    color: '#2E2733',
                  },
                  itemStyle: {
                    borderColor: '#2E2733',
                    borderWidth: 2,
                  },
                  levels: [
                    {},
                    {
                      r0: 0,
                      r: 320,
                      label: {
                        rotate: 0,
                      },
                    },
                    {
                      r0: 40,
                      r: 105,
                    },
                    {
                      r0: 320,
                      r: 360,
                      itemStyle: {
                        shadowBlur: 2,
                        shadowColor: '#EA5151',
                        color: 'transparent',
                      },
                      label: {
                        rotate: 'tangential',
                        fontSize: 10,
                        color: '#FFAE57',
                      },
                    },
                    {
                      r0: 360,
                      r: 400,
                      itemStyle: {
                        shadowBlur: 80,
                        shadowColor: '#FFAE57',
                      },
                      label: {
                        position: 'outside',
                        textShadowBlur: 5,
                        textShadowColor: '#333',
                      },
                      downplay: {
                        label: {
                          opacity: 0.5,
                        },
                      },
                    },
                  ],
                },
              ],
            }}
            // notMerge={true}
            // lazyUpdate={true}
            // theme={'theme_name'}
            // onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={}
          />
        </div>
      </motion.div>
    </main>
  );
}
