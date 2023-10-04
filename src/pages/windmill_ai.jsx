import React, { Component } from 'react';
import Head from '@docusaurus/Head';
import LandingSection from '../landing/LandingSection';
import LandingHeader from '../landing/LandingHeader';
import Footer from '../landing/Footer';
import { ArrowRight, Book, Pen } from 'lucide-react';
import LayoutProvider from '@theme/Layout/Provider';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Windmill_AI() {
	const data = {
		title: 'Build internal tools with Windmill AI',
		subtitle:
			'Have AI help you generate scripts and flows from simple prompts.',
		description: (
			<div className="flex flex-col gap-4">
				<p>
                    Windmill is a low-code platform for building endpoints, flows, and apps from simple scripts.
                    The presence of code at the heart of Windmill offers unlimited possibilities so as not to rely solely on pre-built integrations.
				</p>
				<p>
                    With the integration of AI models within Windmill, your willpower alone can create the internal tools you want in just a few seconds.
                </p>
				<p>The AI generates code that matches Windmill's specifications, especially the interaction with external APIs.</p>
			</div>
		),
		screenshot: '/img/windmill_ai/flow_generation.png',
        video: {
            videoSrc: '/videos/flow_ai.mp4',
            altText: 'Windmill AI'
        }
	};

    const code_generation = {
        title: "Code Generation",
        description: (
            <div className="flex flex-col gap-4">
                <p>
                    Generate Windmill-specific code from simple prompt.
                </p>
                <p>
                    The AI-generated script will set to be tested right away, with an auto-generated UI and a dedicated webhook.
                </p>
            </div>
        ),
        video: {
            videoSrc: '/videos/ai_generation.mp4',
            altText: 'Code Generation'
        }
    };
    
    const code_edition = {
        title: "Code Edition",
        description: (
            <div className="flex flex-col gap-4">
                <p>
                    Select the code section you want to edit and give instructions to the AI assistant.
                </p>
            </div>
        ),
        video: {
            videoSrc: '/videos/ai_edit.mp4',
            altText: 'Code Edition'
        }        
    };

    const code_fixing = {
        title: "Code Fixing",
        description: (
            <div className="flex flex-col gap-4">
                <p>
                    Upon error when executing code, you will be offered to "AI Fix" it.
                </p>
                <p>
                    The assistant will automatically read the code, explain what went wrong, and suggest a way to fix it.
                </p>
            </div>
        ),
        video: {
            videoSrc: '/videos/ai_fix.mp4',
            altText: 'Code Fixing'
        }        
    };

    const flow_sequence = {
        title: "Sequence Flow Generation",
        description: (
            <div className="flex flex-col gap-4">
                <p>
                    Describe the sequence of actions you wish to execute, and the AI Flow builder will write all the steps, link them together, and allow you to trigger the flow manually.
                </p>
            </div>
        ),
        video: {
            videoSrc: '/videos/flow_ai.mp4',
            altText: 'Sequence Flow Generation'
        }        
    };

    const flow_trigger = {
        title: "Trigger Flow Generation",
        description: (
            <div className="flex flex-col gap-4">
                <p>
                    Build a flow with two scripts, one that regularly checks for changes in an external system and a second that is executed for each change using a for-loop.
                </p>
                <p>
                    This allows you to avoid relying on webhooks sent by external APIs, which can be tedious to configure.
                </p>
            </div>
        ),
        video: {
            videoSrc: '/videos/flow_ai_trigger.mp4',
            altText: 'Trigger Flow Generation'
        }        
    };

    const script_section = [
        code_generation,
        code_edition,
        code_fixing,
      ];      

    const flow_section = [
    flow_sequence,
    flow_trigger,
    ];

	return (
		<LayoutProvider>
			<main>
				<Head>
					<title>Windmill AI</title>
					<meta name="Windmill AI" content="Windmill Team." />
					<meta
						name="description"
						content="We are a team commited to open source, with a strong will to improve internal tools for everyone."
					/>
				</Head>
				<LandingHeader />
				<LandingSection bgClass="relative">
					<div className="max-w-6xl mx-auto px-4 sm:px-6">
						<div className="py-12 md:py-20">
							<div className=" pb-12 md:pb-20">
								<h1
									className="leading-10 mb-2 !text-4xl text-blue-500 dark:text-blue-500"
								>
									{data.title}
								</h1>
								<p className="text-md text-gray-600 dark:text-gray-400">{data.subtitle}</p>
							</div>
							<div className="grid grid-cols-2 gap-2">
								<div className="flex items-start flex-col justify-center gap-8">
									<div className="text-lg font-normal">{data.description}</div>
									<div className="flex flex-row gap-2">
										<button
											type="button"
											className="flex items-center gap-2 rounded-md bg-[#4285F4] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>
											Start building with Windmill
											<ArrowRight className="" aria-hidden="true" />
										</button>
										<button
											type="button"
											className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
										>
											Book demo
											<ArrowRight className="" aria-hidden="true" />
										</button>
									</div>
								</div>
								<div className="w-full">
                                    <video src={data.video.videoSrc} className="w-full rounded" autoPlay />
								</div>
							</div>
						</div>
					</div>
				</LandingSection>
                <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                    <h2 className="leading-9 mb-6 text-3xl text-blue-500">
                        Windmill AI for Scripts
                    </h2>
                    <Carousel>
                        {script_section.map((section, index) => (
                            <div key={index} className="grid grid-cols-2 gap-8">
                                <div className="flex items-start flex-col justify-center gap-4">
                                    <h3 className="text-xl font-bold mb-2 text-blue-500">{section.title}</h3>
                                    <div className="text-lg font-normal text-left">{section.description}</div> {/* Added text-left here */}
                                </div>
                                <div className="w-full">
                                    <video src={section.video.videoSrc} className="w-full rounded" controls />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </section>
                <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                    <h2 className="leading-9 mb-6 text-3xl text-teal-500 dark:text-teal-500">
                        Windmill AI for Flows
                    </h2>
                    <Carousel>
                        {flow_section.map((section, index) => (
                            <div key={index} className="grid grid-cols-2 gap-8">
                                <div className="flex items-start flex-col justify-center gap-4">
                                    <h3 className="text-xl font-bold mb-2 text-teal-500">{section.title}</h3>
                                    <div className="text-lg font-normal text-left">{section.description}</div> {/* Added text-left here */}
                                </div>
                                <div className="w-full">
                                    <video src={section.video.videoSrc} className="w-full rounded" controls />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </section>
				<Footer />
			</main>
		</LayoutProvider>
	);
}