import React from 'react';
import GiscusReact from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Giscus() {
	const { colorMode } = useColorMode();

	return (
		<GiscusReact
			id=" comments"
			repo="MrAshCreates/blog-site"
			repoId="R_kgDOKiCvtg"
			category="General"
			categoryId="DIC_kwDOKiCvts4CaPxU"
			mapping="pathname"
			term="Welcome!"
			reactionsEnabled="1"
			emitMetadata="1"
			inputPosition="top"
			theme="preferred_color_scheme"
			lang="en"
			loading="lazy"
		/>
	);
};
