import {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {option} from '@/utils/chart';
import {useRouter} from 'next/router';

export function Chart({className}: {className?: string}) {
  const hasRendered = useRef(false);
  const chart = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (e: MessageEvent) => {
      if (e.data.name === 'navigate') {
        // push('/items');
      }
    };
    window.addEventListener('message', listener);

    return () => {
      window.removeEventListener('message', listener);
    };
  }, []);
  useEffect(() => {
    if (hasRendered.current) return;
    if (chart.current) {
      const myChart = echarts.init(chart.current);
      myChart.setOption(option);
      hasRendered.current = true;
    }
  }, []);
  // absolute bottom-[10%] right-[10%]
  return (
    <div
      ref={chart}
      className={`

      ${
        className
        // sunburstActive ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      style={{
        height: '1000px',
        width: '1000px',
      }}
    />
  );
}
