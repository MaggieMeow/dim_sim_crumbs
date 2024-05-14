import Image from 'next/image';
import {motion} from 'framer-motion';
import {Inter} from 'next/font/google';
import {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import {option} from '@/utils/chart';

const inter = Inter({subsets: ['latin']});
export default function Home() {
  const [sunburstActive, setSunburstActive] = useState(false);
  const chart = useRef<HTMLDivElement>(null);
  console.log({sunburstActive});
  const hasRendered = useRef(false);

  useEffect(() => {
    if (hasRendered.current) return;
    if (chart.current) {
      const myChart = echarts.init(chart.current);
      myChart.setOption(option);
      hasRendered.current = true;
    }
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <motion.div
        onClick={() => {
          setSunburstActive(true);
        }}
        animate={{
          scale: sunburstActive ? 1 : 0.2,
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
      >
        <motion.button
          animate={{
            opacity: sunburstActive ? 1 : 0,
          }}
          onClick={(e) => {
            e.stopPropagation();
            setSunburstActive((prev) => !prev);
          }}
          className="absolute top-[50%] left-[50%] p-4 bg-black text-white z-10"
        >
          Close
        </motion.button>

        <div
          ref={chart}
          className={`absolute bottom-[10%] right-[10%] ${
            sunburstActive ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            height: '1000px',
            width: '1000px',
          }}
        />
      </motion.div>
    </main>
  );
}
