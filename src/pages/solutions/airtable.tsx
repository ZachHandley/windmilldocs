import React from 'react';

import {
	PlusSquareIcon,
	CopyIcon,
	ArrowLeftCircleIcon,
	ListIcon,
	RefreshCcwIcon,
	DeleteIcon
} from 'lucide-react';
import Solution from '../../components/Solutions';

export default function Content() {
	const color = '#E9B13D';
	const name = 'Airtable';
	const website = 'https://www.airtable.com/';
	const windmill_color = '#4E80EE';

	const data = {
		title: `Build internal tools with ${name}`,
		subtitle: `Windmill unlocks your creation of internal tools with ${name}. From scripts, build admin panels, BI dashboards, workflows, and more.`,
		description: (
			<div className="flex flex-col gap-4">
				<p>
					<a href={website} target="_blank">
						<strong>
							<span style={{ color }}>{name}</span>
						</strong>
					</a>{' '}
					is a comprehensive inbound marketing, sales, and CRM platform.
				</p>
				<p>
					Connecting Windmill to <span> {name}</span> takes a few seconds and lets you build
					internal tools from it and integrate with any other platform.
				</p>
				<p>
					From scripts supported in multiple languages, build UIs and flows that you can monitor and
					trigger on demand, by schedule or webhooks.
				</p>
			</div>
		),
		darkScreenshot: '/integrations/solutions_dark.png',
		lightScreenshot: '/integrations/solutions_light.png',
		documentationLink: 'https://docs.windmillui.com/',

		integrations_sub_title: `Write any script, flow or app targeting ${name} API, or pick them from WindmillHub community library.`,
		hubIntegrations: [
			{
				title: 'Create Single Record',
				link: 'https://hub.windmill.dev/scripts/airtable/302/create-single-record-airtable',
				description: 'Add a new record to an Airtable base.',
				icon: PlusSquareIcon
			},
			{
				title: 'Create Multiple Records',
				description: 'Add multiple new records to an Airtable base.',
				link: 'https://hub.windmill.dev/scripts/airtable/298/create-multiple-records-airtable',
				icon: CopyIcon
			},
			{
				title: 'Get Record',
				link: 'https://hub.windmill.dev/scripts/airtable/303/get-record-airtable',
				description: 'Retrieve a specific record from an Airtable base.',
				icon: ArrowLeftCircleIcon
			},
			{
				title: 'List Records',
				link: 'https://hub.windmill.dev/scripts/airtable/300/list-records-airtable',
				description: 'List all or specific records from an Airtable base.',
				icon: ListIcon
			},
			{
				title: 'Update record',
				link: 'https://hub.windmill.dev/scripts/airtable/301/update-record-airtable',
				description: 'Update a specific record in an Airtable base.',
				icon: RefreshCcwIcon
			},
			{
				title: 'Delete Record',
				link: 'https://hub.windmill.dev/scripts/airtable/304/delete-record-airtable',
				description: 'Remove a record from an Airtable base.',
				icon: DeleteIcon
			}
		]
	};

	return <Solution data={data} name={name} color={color} />;
}
