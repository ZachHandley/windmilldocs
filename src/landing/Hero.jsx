import React from 'react';
import SectionBlur from './SectionBlur';
import GithubStarCount from './GithubStarCount';

export default function Hero() {
	return (
		<div className="relative rounded-none mx-auto max-w-screen-2xl overflow-hidden 2xl:rounded-3xl">
			<SectionBlur color="#bfdbfe" position="top-0 left-0 -translate-y-1/2 -translate-x-3/4" />
			<SectionBlur
				position="bottom-0 right-0 translate-y-64 translate-x-1/2 h-[32rem] w-[128rem]"
				color="#bfdbfe"
			/>

			<div className="grid gap-4 mx-auto max-w-7xl px-6 gap-y-8 lg:flex lg:px-8 py-16">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
					<GithubStarCount />

					<h1 className="mt-4 !text-4xl tracking-tight sm:!text-6xl text-gray-900">
						Turn scripts into workflows and UIs in minutes
					</h1>
					<h2 className="mt-6 text-lg leading-8 text-gray-600 font-medium">
						Easily create internal apps and invincible workflows with code only where it matters.
						Self-hostable <b>worker infrastructure</b>: scalable, reliable, fast.
						<br />
						<a className="underline" href="https://github.com/windmill-labs/windmill">
							Fully Open-source
						</a>{' '}
						alternative to <i>Airplane</i>, <i>Superblocks</i> & <i>Retool</i>.
					</h2>

					<div className="mt-10 flex items-center gap-x-6">
						<a
							href="https://app.windmill.dev/user/login"
							onClick={() => window.plausible('try-cloud')}
							data-analytics='"try-cloud"'
							className="rounded-md transition-all bg-blue-500 px-4 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800 hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 !no-underline"
						>
							Try Windmill Cloud
						</a>

						<a
							href="https://docs.windmill.dev/docs/advanced/self_host/"
							onClick={() => window.plausible('self-host')}
							className="text-base font-semibold leading-7 text-gray-900 text !no-underline"
						>
							Self-host yourself <span aria-hidden="true">→</span>
						</a>
					</div>

					<div className="w-full text-left mt-16">
						Backed by <img className="inline ml-2" src="ycombinator.svg"></img>
					</div>
				</div>
				<div className="mx-auto mt-16 sm:mt-8">
					<div className="flex-none !rounded-2xl overflow-hidden">
						<img
							src="/homescreen.svg"
							alt="Windmill infrastructure"
							className="w-full"
							width="1825"
							height="1920"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
