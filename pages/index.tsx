// index.tsx
import type { LiFiWidget } from '@lifi/widget';
import type { NextPage } from 'next';
import Nav from '../components/Layout/Navigation'
import Header from '../components/Layout/Header'
import dynamic from 'next/dynamic';
import styles from './styles.module.css';

const LiFiWidgetDynamic = dynamic(
  () => import('@lifi/widget').then((module) => module.LiFiWidget) as any,
  {
    ssr: false,
  },
) as typeof LiFiWidget;

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Nav />
      <main className={styles.lifi_container}>
        <LiFiWidgetDynamic
        config={{
        containerStyle: {
          width: 392,
          height: 600,
          border: `1px solid rgb(234, 234, 234)`,
          borderRadius: '16px',
          display: 'flex',
          maxWidth: 392,
          },
          }}
        />
      </main>
      
    </div>
    
  );
};

export default Home;
