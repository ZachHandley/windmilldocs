import React, { useEffect, useState } from 'react';
import LandingSection from './LandingSection';
import { Code, LayoutDashboard, List, PlayCircle } from 'lucide-react';
import { VolumeX } from 'lucide-react';

const tabs = [
	{
		label: 'Scripts',
		icon: Code,
		id: 'scripts',
		data: []
	},
	{
		label: 'Flows',
		icon: List,
		id: 'flows',
		data: []
	},
	{
		label: 'Apps',
		icon: LayoutDashboard,
		id: 'apps',
		data: []
	}
];

export default function HeroExample() {
	const [hookProps] = useState({
		tabs: tabs,
		initialTabId: tabs[0].id
	});
	const [played, setPlayed] = useState(false);

	// When played toggles to true, start the video
	useEffect(() => {
		const video = document.getElementById('main-video') as HTMLVideoElement;
		if (played) {
			video.play();
		}
	}, [played]);

	return (
		<LandingSection bgClass="">
			<div className="w-full gap-8 flex flex-col">
				<h1 className="tracking-tight leading-tight text-left font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-500 to-slate-800 dark:from-slate-100 dark:to-slate-500 ">
					Give your scripts Superpowers
				</h1>
				<p className="max-w-5xl">
					Make your scripts production grade and build all of your internal tools with Python,
					Typescript, Go, Bash, Sql. <br /> Compose your scripts as workflows using low-code. <br />
					Share an autogenerated UI or build one using low-code. Run it reliably at scale on your
					infra or ours, with permissioning and monitoring included. Fully open-source and easy to
					deploy on small and large infra. Any dependency with zero-config.
				</p>
				<div className="video-container">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/pJh2fdstV-A?vq=hd1080"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen="true"
                    ></iframe>
                </div>
			</div>
		</LandingSection>
	);
}
