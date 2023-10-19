import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common';
type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    
    <><section className={styles.features}>
      <div className="container">
        <div className="row">

        </div>
      </div>
      <div className="giscus" /> {/* Giscus comments will be placed here */}
    </section><Giscus
      id=" comments"
      repo="MrAshCreates/blog-site"
      repoId="R_kgDOKiCvtg"
      category="General"
      categoryId="DIC_kwDOKiCvts4CaPxU"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
      ></Giscus></>

  );
}
