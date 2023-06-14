import React from 'react';
import { Switch } from '@headlessui/react';
import { useDeveloperMode } from '../pages';
import classNames from 'classnames';

export default function DevModeSwitch({ color = 'blue' }) {
	const { developerMode, setDeveloperMode } = useDeveloperMode();

	const switchColor = {
		blue: 'bg-blue-900',
		orange: 'bg-orange-900',
		teal: 'bg-teal-900'
	};

	const switchColorLight = {
		blue: 'bg-blue-200',
		orange: 'bg-orange-200',
		teal: 'bg-teal-200'
	};

	const id = `dev-mode-switch-${color}`;

	return (
		<div className="my-4 flex flex-row gap-2 items-center transition-all" id={id}>
			<Switch
				checked={developerMode}
				onChange={() => {
					const el = document.getElementById(id);
					const offset = el.getBoundingClientRect().top;

					setDeveloperMode(!developerMode);

					setTimeout(() => {
						const el = document.getElementById(id);

						window.scrollBy({
							top: el.getBoundingClientRect().top - offset
						});
					}, 100);
				}}
				className={`${developerMode ? switchColor[color] : 'bg-gray-200'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
			>
				<span
					aria-hidden="true"
					className={`${developerMode ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
				/>
			</Switch>
			<span
				className={classNames('font-bold text-xl', developerMode ? 'text-white' : 'text-gray-900')}
			>
				Developer ?
			</span>
		</div>
	);
}
