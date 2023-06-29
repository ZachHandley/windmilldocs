import React, { useState, useEffect, useRef } from 'react';
import { Framer } from './framer';
import TabContent from './TabContent';
import { Tab, useTabs } from './useTabs';

export const useContainerDimensions = (myRef) => {
	const [dimensions, setDimensions] = useState({ width: 0 });

	useEffect(() => {
		const getDimensions = () => ({
			width: myRef.current.offsetWidth
		});

		const handleResize = () => {
			setDimensions(getDimensions());
		};

		if (myRef.current) {
			setDimensions(getDimensions());
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [myRef]);

	return dimensions;
};

export default function FeatureCardTabs({ tabs, color = 'blue' as 'blue' | 'teal' | 'orange' }) {
	const [hookProps] = useState({
		tabs: tabs,
		initialTabId: tabs[0].id
	});
	const framer = useTabs(hookProps);
	const data = framer.selectedTab.data;

	const selectFocusColors = {
		blue: 'focus:border-blue-500 focus:ring-blue-500',
		teal: 'focus:border-teal-500 focus:ring-teal-500',
		orange: 'focus:border-orange-500 focus:ring-orange-500'
	};

	const componentRef = useRef();
	const { width } = useContainerDimensions(componentRef);

	return (
		<>
			<div className="sm:hidden">
				<label htmlFor="tabs" className="sr-only">
					Select a tab
				</label>
				<select
					id="tabs"
					name="tabs"
					className={`block w-full rounded-md border-gray-300 dark:bg-gray-900 dark:text-white mb-4 ${selectFocusColors[color]}`}
					defaultValue={'Company'}
					onChange={(e) => {
						const tabIndex = tabs.findIndex((tab) => tab.label === e.target.value);

						framer.tabProps.setSelectedTab([tabIndex, 1]);
					}}
				>
					{tabs.map((tab: Tab) => (
						<option key={tab.label}>{tab.label}</option>
					))}
				</select>
				<Framer.Content {...framer.contentProps} width="100%">
					<TabContent data={data} color={color} />
				</Framer.Content>
			</div>
			<div className="hidden sm:block">
				<div className="w-full flex flex-col items-center justify-center" ref={componentRef}>
					<div className="max-w-7xl w-full gap-8 mb-8">
						<Framer.Tabs {...framer.tabProps} color={color} />
					</div>

					<div className="max-w-7xl flex flex-row">
						{width > 0 && (
							<Framer.Content {...framer.contentProps} width={`${width}px`}>
								<TabContent data={data} color={color} />
							</Framer.Content>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
