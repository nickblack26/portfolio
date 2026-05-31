import { Icons } from '@/components/icons';
import { CodeIcon, HomeIcon, MailIcon } from 'lucide-react';

export const DATA = {
	name: 'Nick Black',
	initials: 'NB',
	url: 'https://dillion.io',
	location: 'San Diego, CA',
	locationLink: 'https://www.google.com/maps/place/san_diego',
	description: 'Full Stack Developer in San Diego, CA. I love building things and helping people.',
	summary:
		`Full-stack software engineer with 7 years of experience designing and scaling SaaS platforms. Led the architecture and development of Athena, an internal system that unified ITSM, proposal workflows, and real-time communications into a single, maintainable platform. Strong experience with React, TypeScript, PostgreSQL, AWS, and CI/CD automation, with a focus on writing readable, well-structured code and shipping production-ready features. Proven ability to collaborate across teams, iterate through prototyping and experimentation, and build high-performance systems that solve real customer and operational problems.`,
	avatarUrl: '/me.jpg',
	skills: [
		'React',
		'Next.js',
		'Typescript',
		'Node.js',
		'PostgreSQL',
		'MongoDB',
		'TailwindCSS',
		'Radix UI',
		'Shadcn UI',
		'GraphQL',
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		// { href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '/#projects', icon: CodeIcon, label: 'Projects' },
		{ href: '/#contact', icon: MailIcon, label: 'Contact' },
		// { href: '#', icon: PencilLine, label: 'Notes' },
	],
	contact: {
		email: 'nicholas.black98@icloud.com',
		tel: '+19015988651',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/nickblack26',
				icon: Icons.github,
				navbar: true,
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://linkedin.com/in/nick-black-dev',
				icon: Icons.linkedin,
				navbar: true,
			},
			email: {
				name: 'Send Email',
				url: '#',
				icon: Icons.email,
				navbar: false,
			},
		},
	},
	work: [
		{
			company: 'Velo IT Group',
			href: 'https://velomethod.com/',
			badges: [],
			location: 'Hybrid',
			title: 'Full Stack Developer',
			logoUrl: '/velo.svg',
			start: 'April 2023',
			end: 'Present',
			description:
				'Led the development of a full stack proposal tool with unique integration to the company’s product database, including creating the underlying PostgreSQL database and UI for Velo IT Group. Developed call center software utilizing React for dynamic front-end interfaces, Twilio for seamless cloud communication integration, and Supabase for robust data management. Ensured timely delivery of scalable web solutions through cross-functional collaboration and ongoing consultation to executive leadership. Conducted department-wide and individual training sessions on best practices for new software tools. Transformed conceptual ideas into fully functional products, from initial design to deployment.',
		},
		{
			company: 'Deep Space Robots',
			badges: [],
			href: 'https://deepspacerobots.com/',
			location: 'Remote',
			title: 'Full Stack Developer',
			logoUrl: '/dsr.svg',
			start: 'April 2022',
			end: 'August 2023',
			description:
				'Designed, developed, and optimized six front-end and back-end applications using Vue, React, Node, and TypeScript. Planned, tracked, and managed deliverables on bi-weekly short-term sprints. Led the development of a CRM project, including creating and managing development plans, client relationships, and expectations. Developed front-end and back-end features from initial concept to completion, including database design, coding, debugging, and testing. Created an offline local SQLite database that synced with the cloud database upon establishing an internet connection.',
		},
		{
			company: 'Fellowship Church',
			href: 'https://www.fellowshipchurch.com/',
			badges: [],
			location: 'Dallas, TX',
			title: 'Software Engineer',
			logoUrl: '/fc-logo.svg',
			start: 'September 2019',
			end: 'April 2022',
			classOverrides: 'bg-black text-white fill-white p-2.5',
			description:
				'Designed and developed the Fellowship Church website, integrating Planning Center Events. Managed 18 individual websites hosted on AWS. Worked with the graphic design team to build multiple user interfaces with an emphasis on mobile device design. Collaborated with project leads, product managers, and other software developers to build new web applications.',
		},
	],
	education: [
		{
			school: 'University of North Texas',
			href: 'http://unt.edu/',
			degree: "Bachelor's Degree of Computer Science (BCS)",
			logoUrl: '/unt.svg',
			start: '2020',
			end: '2022',
		},
		{
			school: 'Collin College',
			href: 'https://www.collin.edu/index.html',
			degree: 'Associates Degree of Computer Science (ACS)',
			logoUrl: '/collin.svg',
			start: '2018',
			end: '2020',
		},
	],
	projects: [
		// {
		// 	title: 'Velo Call Center',
		// 	href: '',
		// 	dates: 'June 2024 - Current',
		// 	active: true,
		// 	description:
		// 		'Crafted a custom call center frontend utilizing Next.js for dynamic front-end interfaces, Twilio for seamless cloud communication integration, and ConnectWise, IT Service software, to connect our CRM tooling.',
		// 	technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Shadcn UI', 'Twilio', 'ConnectWise'],
		// 	links: [
		// 		// {
		// 		// 	type: 'Website',
		// 		// 	href: 'https://chatcollect.com',
		// 		// 	icon: <Icons.globe className='size-3' />,
		// 		// },
		// 	],
		// 	image: '/flex.png',
		// 	video: '',
		// },
		{
			title: 'Method OS',
			href: 'https://dashboard.method-os.com/',
			dates: 'November 2023 - Current',
			active: true,
			description:
				'Sole architect of a multi-tenant ITSM/PSA platform built from scratch to replace five fragmented internal tools. Designed a polymorphic work-item schema, immutable versioned proposals, and in-database duplicate detection with skills-based ticket routing — all on a Postgres layer built to scale.',
			technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Shadcn UI', 'PostgresSQL', 'Supabase'],
			links: [
				{
					type: 'Website',
					href: 'https://dashboard.method-os.com/',
					icon: <Icons.globe className='size-3' />,
				},
				// {
				// 	type: 'Source',
				// 	href: 'https://github.com/magicuidesign/magicui',
				// 	icon: <Icons.github className='size-3' />,
				// },
			],
			image: '/method.png',
			video: '',
		},
		{
			title: 'Global Advance CRM',
			href: 'https://advancehub.org/login',
			dates: 'May 2022 - August 2023',
			active: true,
			description:
				'I led the redesign of a CRM platform using Nuxt.js, TypeScript, GraphQL, SSR, and Node. Leading a team of three developers, I ensured smooth progress with regular scrum meetings. The redesign improved user-friendliness and efficiency, leveraging TypeScript for type safety and SSR for fast loading.',
			technologies: ['Nuxt.js', 'Typescript', 'PostgreSQL', 'GraphQL', 'Nuxt UI', 'Bootstrap'],
			links: [
				{
					type: 'Website',
					href: 'https://advancehub.org/login',
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: 'https://uploads-ssl.webflow.com/64be9ae522eb4b9359d95694/64c30bb04362049eef5a65c8_GlobalAdvance.jpg',
			video: '',
		},
		{
			title: 'NextLevelFan',
			href: 'https://app.nextlevelfan.com/auth/login',
			dates: 'April 2023 - September 2023',
			active: true,
			description:
				'I led the redesign of a B2B Small Events Platform using Ruby on Rails, React, HTML, CSS, and SASS. I facilitated scrum meetings to ensure the project met requirements and progressed smoothly. By writing reusable components, I reduced unnecessary code by 20%, improving maintainability and performance.',
			technologies: ['React', 'Ruby On Rails', 'Stripe', 'Bootstrap', 'Figma'],
			links: [
				{
					type: 'Website',
					href: 'https://app.nextlevelfan.com/auth/login',
					icon: <Icons.globe className='size-3' />,
				},
				// {
				// 	type: 'Source',
				// 	href: 'https://github.com/dillionverma/llm.report',
				// 	icon: <Icons.github className='size-3' />,
				// },
			],
			image: 'https://uploads-ssl.webflow.com/64be9ae522eb4b9359d95694/64c30c6e98f9b238320ad31b_NextLevelFan.jpg',
			video: '',
		},
		{
			title: 'Tourvast',
			href: 'https://tourvast.app/',
			dates: 'April 2022 - October 2022',
			active: false,
			description:
				'I led a team of two developers to build a real estate photographers business solution using Vue.js, TypeScript, GraphQL, SASS, and Node. I facilitated scrum meetings to ensure the project met requirements and progressed smoothly. The application was completed on time and within budget, and the product owner was very satisfied with the results.',
			technologies: ['Vue.js', 'Typescript', 'GraphQL', 'Stripe', 'Bootstrap', 'Ruby On Rails'],
			links: [
				{
					type: 'Website',
					href: 'https://tourvast.app/',
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: 'https://uploads-ssl.webflow.com/64be9ae522eb4b9359d95694/64c30d718e3559214f75e13f_Tourvast.jpg',
			video: '',
		},
		{
			title: 'Fellowship Church',
			href: 'https://www.fellowshipchurch.com/',
			dates: 'April 2020 - April 2022',
			active: true,
			description:
				'I led a team to migrate Fellowship Church’s legacy application to a new platform using Next.js, Sanity CMS, GraphQL, and Node. Collaborating with designers, we created a modern, user-friendly website and reduced its size by 30% with reusable components. The project was completed on time and within budget, resulting in a more responsive and efficient website that users appreciated.',
			technologies: ['Next.js', 'Typescript', 'GraphQL', 'Sanity CMS', 'Node'],
			links: [
				{
					type: 'Website',
					href: 'https://www.fellowshipchurch.com/',
					icon: <Icons.globe className='size-3' />,
				},
			],
			image:
				'https://uploads-ssl.webflow.com/64be9ae522eb4b9359d95694/64c30e81bbf8ad730a50c0ef_Fellowship%20Church.jpg',
			video: '',
		},
	],
	hackathons: [
		{
			title: 'Tourvast',
			dates: 'November 23rd - 25th, 2018',
			location: 'London, Ontario',
			description:
				'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: [],
		},
		{
			title: 'Hack The North',
			dates: 'September 14th - 16th, 2018',
			location: 'Waterloo, Ontario',
			description:
				'Developed a mobile application which delivers university campus wide events in real time to all students.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: [],
		},
		{
			title: 'FirstNet Public Safety Hackathon',
			dates: 'March 23rd - 24th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
			icon: 'public',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
			links: [],
		},
		{
			title: 'DeveloperWeek Hackathon',
			dates: 'February 3rd - 4th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
			links: [
				{
					title: 'Github',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/cryptotrends/cryptotrends',
				},
			],
		},
		{
			title: 'HackDavis',
			dates: 'January 20th - 21st, 2018',
			location: 'Davis, California',
			description:
				'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
			win: 'Best Data Hack',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
			links: [
				{
					title: 'Devpost',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://devpost.com/software/my6footprint',
				},
				{
					title: 'ML',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/Wallet6/my6footprint-machine-learning',
				},
				{
					title: 'iOS',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/Wallet6/CarbonWallet',
				},
				{
					title: 'Server',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/Wallet6/wallet6-server',
				},
			],
		},
		{
			title: 'ETH Waterloo',
			dates: 'October 13th - 15th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
			links: [
				{
					title: 'Organization',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/ethdocnet',
				},
			],
		},
		{
			title: 'Hack The North',
			dates: 'September 15th - 17th, 2017',
			location: 'Waterloo, Ontario',
			description: 'Developed a virtual reality application allowing users to see themselves in third person.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Streamer Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/justinmichaud/htn2017',
				},
				{
					title: 'Client Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/RTSPClient',
				},
			],
		},
		{
			title: 'Hack The 6ix',
			dates: 'August 26th - 27th, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/ShareShip/ShareShip',
				},
				{
					title: 'Site',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://share-ship.herokuapp.com/',
				},
			],
		},
		{
			title: 'Stupid Hack Toronto',
			dates: 'July 23rd, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/nsagirlfriend/nsagirlfriend',
				},
			],
		},
		{
			title: 'Global AI Hackathon - Toronto',
			dates: 'June 23rd - 25th, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
			win: '1st Place Winner',
			links: [
				{
					title: 'Article',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/',
				},
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/TinySamosas/',
				},
			],
		},
		{
			title: 'McGill AI for Social Innovation Hackathon',
			dates: 'June 17th - 18th, 2017',
			location: 'Montreal, Quebec',
			description: 'Developed realtime facial microexpression analyzer using AI',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
			links: [],
		},
		{
			title: 'Open Source Circular Economy Days Hackathon',
			dates: 'June 10th, 2017',
			location: 'Toronto, Ontario',
			description:
				"Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
			win: '1st Place Winner',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/genecis',
				},
			],
		},
		{
			title: "Make School's Student App Competition 2017",
			dates: 'May 19th - 21st, 2017',
			location: 'International',
			description: 'Improved PocketDoc and submitted to online competition',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
			win: 'Top 10 Finalist | Honourable Mention',
			links: [
				{
					title: 'Medium Article',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a',
				},
				{
					title: 'Devpost',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://devpost.com/software/pocketdoc-react-native',
				},
				{
					title: 'YouTube',
					icon: <Icons.youtube className='h-4 w-4' />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
				},
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/pocketdoc-react-native',
				},
			],
		},
		{
			title: 'HackMining',
			dates: 'May 12th - 14th, 2017',
			location: 'Toronto, Ontario',
			description: 'Developed neural network to optimize a mining process',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
			links: [],
		},
		{
			title: 'Waterloo Equithon',
			dates: 'May 5th - 7th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
			links: [
				{
					title: 'Devpost',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://devpost.com/software/pocketdoc-react-native',
				},
				{
					title: 'YouTube',
					icon: <Icons.youtube className='h-4 w-4' />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
				},
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/pocketdoc-react-native',
				},
			],
		},
		{
			title: 'SpaceApps Waterloo',
			dates: 'April 28th - 30th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/earthwatch',
				},
			],
		},
		{
			title: 'MHacks 9',
			dates: 'March 24th - 26th, 2017',
			location: 'Ann Arbor, Michigan',
			description:
				'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/threejs-planes',
				},
			],
		},
		{
			title: 'StartHacks I',
			dates: 'March 4th - 5th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
			win: '1st Place Winner',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source (Mobile)',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/mattBlackDesign/recipic-ionic',
				},
				{
					title: 'Source (Server)',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/mattBlackDesign/recipic-rails',
				},
			],
		},
		{
			title: 'QHacks II',
			dates: 'February 3rd - 5th, 2017',
			location: 'Kingston, Ontario',
			description: 'Developed a mobile game which enables city-wide manhunt with random lobbies',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source (Mobile)',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/human-huntr-react-native',
				},
				{
					title: 'Source (API)',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/mattBlackDesign/human-huntr-rails',
				},
			],
		},
		{
			title: 'Terrible Hacks V',
			dates: 'November 26th, 2016',
			location: 'Waterloo, Ontario',
			description: 'Developed a mock of Windows 11 with interesting notifications and functionality',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11',
				},
			],
		},
		{
			title: 'Portal Hackathon',
			dates: 'October 29, 2016',
			location: 'Kingston, Ontario',
			description: "Developed an internal widget for uploading assignments using Waterloo's portal app",
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/UWPortalSDK/crowmark',
				},
			],
		},
	],
} as const;
