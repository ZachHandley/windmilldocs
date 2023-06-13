import classNames from 'classnames';
import { ExternalLink } from 'lucide-react';
import React from 'react';

export default function SectionExamples({ examples, kind }) {
	const hubUrlByKind = {
		script: 'https://hub.windmill.dev/scripts',
		flow: 'https://hub.windmill.dev/flows',
		app: 'https://hub.windmill.dev/apps'
	};

	const tryByKind = {
		script: 'https://app.windmill.dev/scripts/add?nodraft=true',
		flow: 'https://app.windmill.dev/flows/add?nodraft=true',
		app: 'https://app.windmill.dev/apps/add?nodraft=true'
	};

	const colorByKind = {
		script: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500  ',
		flow: 'bg-teal-500 hover:bg-teal-600 focus:ring-teal-500 ',
		app: 'bg-orange-500 hover:bg-orange-600 focus:ring-orange-500 '
	};

	return (
		<>
			<div className="mx-auto w-full mb-4 mt-20 transition-all flex gap-2 flex-col">
				<span className="tracking-tight leading-tight text-left font-semibold text-gray-600 text-xl">
					Examples
				</span>
				<div className="bg-white border rounded-lg divide-y shadow-sm">
					<div className="grid grid-cols-1 lg:grid-cols-3 divide-x-0 divide-y lg:divide-x lg:divide-y-0">
						{examples.map((example, index) => (
							<a
								key={example.name}
								className={classNames(
									'flex flex-col p-6 hover:bg-gray-50  cursor-pointer !no-underline overflow-hidden ',
									index === 0 ? 'rounded-l-lg' : '',
									index === examples.length - 1 ? 'rounded-r-lg' : ''
								)}
								href={example.href}
								target="_blank"
							>
								<div className="flex flex-auto flex-col text-base leading-7 text-gray-600 gap-2">
									<p className="text-md font-bold">{example.name}</p>
									<p className="flex-auto text-sm">{example.description}</p>
									<p className="text-xs text-right">See example -{'>'}</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
			<div className="flex gap-4">
				<a
					type="button"
					href={hubUrlByKind[kind]}
					target="_blank"
					className={classNames(
						'transition-all inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 !no-underline hover:text-white',
						colorByKind[kind]
					)}
				>
					{`Explore more ${kind}s on the Hub`}
					<ExternalLink className="ml-2 h-4" />
				</a>

				<a
					type="button"
					href={tryByKind[kind]}
					target="_blank"
					onClick={() => window.plausible('try-cloud')}
					data-analytics='"try-cloud"'
					className="transition-all  inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 !no-underline hover:text-orange-600"
				>
					{`Try building ${kind}s`}
					<ExternalLink className="ml-2 h-4" />
				</a>
			</div>
		</>
	);
}
