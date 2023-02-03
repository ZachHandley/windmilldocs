import React from 'react';
import LandingSection from '../landing/LandingSection';
import FeatureCardTabs from '../landing/tabs/FeatureCardTabs';
import {
	ExternalLink,
	List,
	Database,
	Bug,
	Play,
	CalendarClock,
	FormInput,
	WebhookIcon,
	Terminal,
	Globe
} from 'lucide-react';
import { GitBranch, Repeat, Verified } from 'lucide-react';
import { Code } from 'lucide-react';

const tabs = [
	{
		label: 'Flow editor',
		icon: List,
		id: 'flow-editor',
		data: [
			{
				title: 'Sequence',
				description: 'Build complex Flows from atomic scripts.',
				icon: List,
				caption: 'Write scripts in Typescript, Python, Go and Bash or use scripts from the hub',
				video: {
					videoSrc: '/videos/flow-sequence.mp4',
					videoLength: '28'
				}
			},

			{
				title: 'Branching',
				description: 'Built-in branching logic to create complex workflows.',
				icon: GitBranch,
				caption: 'Built-in branching logic to create complex workflows',
				video: {
					videoSrc: '/videos/flow-branch.mp4',
					videoLength: '28'
				}
			},
			{
				title: 'For Loops',
				description: 'Create for loops to iterate over a list of items.',
				icon: Repeat,
				caption: 'Create for loops to iterate over a list of items',
				video: {
					videoSrc: '/videos/flow-loop.mp4',
					videoLength: '28'
				}
			},
			{
				title: 'Error Handler',
				description:
					'Easily recover from errors and continue your flow or log the error on Slack, Discord, etc.',
				icon: Bug,
				caption:
					'Easily recover from errors and continue your flow or log the error on Slack, Discord, etc.',
				imageSrc: '/images/error-handler.png'
			}
		]
	},
	{
		label: 'Suspend/Approval Step',
		icon: Verified,
		id: 'suspend-approval',
		data: [
			{
				title: 'Approval step',
				description:
					'Send request for approval by email, slack, anything and get a dedicate approval page',
				icon: Verified,
				caption:
					'Send request for approval by email, slack, anything and get a dedicate approval page',
				video: {
					videoSrc: '/videos/flow-approval.mp4',
					videoLength: '47'
				}
			},
			{
				title: 'Resume Workflows with secret webhooks',
				description:
					'Automatically resume workflows with secret webhooks. This is useful for resuming workflows after an approval step.',
				icon: Verified,
				caption: 'Resume Workflows with secret webhooks',
				imageSrc: ''
			}
		]
	},
	{
		label: 'Retries',
		icon: Repeat,
		id: 'retries',
		data: [
			{
				title: 'Customize number of retries for each individual step',
				description:
					'Automatically retry failed steps. Customize the number of retries for each individual step.',
				icon: Repeat,
				caption: 'Easily retry failed steps',
				video: {
					videoSrc: '/videos/flow-retries.mp4',
					videoLength: '15'
				}
			}
		]
	},
	/*
	{
		label: 'Hub scripts',
		icon: Globe,
		id: 'hub-scripts',
		data: [
			{
				title: 'Short video of usig a script from the hub',
				description:
					'Automatically retry failed steps. Customize the number of retries for each individual step.',
				icon: Code,
				caption: 'TODO',
				imageSrc: ''
			}
		]
	},
	{
		label: 'ETL/Data processing',
		icon: Database,
		id: 'etl-data-processing',
		data: [
			{
				title: 'Shared folder between folders to write and read heavy data',
				description:
					'Automatically retry failed steps. Customize the number of retries for each individual step.',
				icon: Database,
				caption: 'TODO',
				imageSrc: ''
			}
		]
	},
	*/
	{
		label: 'Execute a flow',
		icon: Play,
		id: 'schedules-webhooks-ui-cli',
		data: [
			{
				title: 'Schedules',
				description:
					'Windmill allows you to define schedules for Scripts and Flows. Once a schedule is defined, it will automatically run the script at the set frequency.',
				icon: CalendarClock,
				caption:
					'Windmill allows you to define schedules for Scripts and Flows. Once a schedule is defined, it will automatically run the script at the set frequency.',
				video: {
					videoSrc: '/videos/flow-schedule.mp4',
					videoLength: '15'
				}
			},

			{
				title: 'UI',
				description: 'You can directly trigger a script using the autogenerated UI.',
				icon: FormInput,
				caption: 'You can directly trigger a script using the autogenerated UI.',
				video: {
					videoSrc: '/videos/flow-ui.mp4',
					videoLength: '14'
				}
			},
			{
				title: 'Webhooks',
				icon: WebhookIcon,
				caption: 'TODO',
				imageSrc: ''
			},
			{
				title: 'CLI',
				icon: Terminal,
				caption: 'Execute a flow from the CLI',
				imageSrc: '/images/setup.gif'
			}
		]
	}
];

export default function FlowSection() {
	return (
		<LandingSection bgClass="bg-gradient-to-br from-white to-teal-50">
			<div className="flex flex-col gap-4 justify-center w-full">
				<div className="flex flex-col gap-2">
					<h1 className="tracking-tight leading-tight text-left font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-800">
						Flows
					</h1>
					<h2 className="text-gray-600 text-2xl font-semibold">
						Workflow engine on-par with Airflow/Temporal
					</h2>
				</div>

				<span className="text-lg text-gray-600 max-w-3xl">
					Build complex Flows from atomic apps. Automatically trigger apps and Flow from webhooks, a
					schedule, watching for events, or slack.
				</span>

				<FeatureCardTabs tabs={tabs} color="green" />
				<div className="flex">
					<a
						href="https://hub.windmill.dev/flows"
						type="button"
						target="_blank"
						className="inline-flex items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 !no-underline hover:text-white"
					>
						Explore flows on the Hub
						<ExternalLink className="ml-2 h-5" />
					</a>
				</div>
			</div>
		</LandingSection>
	);
}
