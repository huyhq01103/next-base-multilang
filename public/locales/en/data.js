export default {
	nav: [
		{
			title: "Solutions",
			path: "/solutions",
			sub: [
				{
					title: "Desktop Ads",
					path: "/solutions/portfolio",
				},
				{
					title: "Mobile Ads",
					path: "/solutions/mobile-ads",
				},
				{
					title: "Audience network",
					path: "/solutions/audience",
				},
				{
					title: "Brandlift",
					path: "/solutions/brandlift",
				},
				{
					title: "Innovative skin",
					path: "/solutions/innovative-skin",
				}
			],
		},
		{
			title: "Quotation",
			path: "/quotation",
		},
		{
			title: "News",
			path: "/news",
		},
		{
			title: "Blog",
			path: "/blog",
		},
		{
			title: "Support",
			path: "/support",
		},
		{
			title: "Contact",
			path: "/contact",
		},
	],
	header: {
		register: "Sign up",
		login: "Sign in",
	},
	footer: {
		help: [
			{ link: "/", title: "All rights reserved" },
			{
				link: "/contact-support/support/terms-of-use",
				title: "Terms of service",
			},
			{
				link: "/contact-support/support/privacy-policy",
				title: "Privacy Policy",
			},
			{ link: "/contact-support/contact", title: "Contacts" },
		],
		address: [
			{
				title: "Headquarter:",
				content: [
					{
						title: "R1202, 12th floor, HITTC Building,185 Giang Vo Rd., Dong Da Dist., Ha Noi",
						link: "https://goo.gl/maps/G8pL15HwQgzkaFv46",
						image: "/assets/images/icons/location.svg",
					},
					{
						title: "Phone: (024) 3512 3776.",
						link: "tel:+842435123776",
						image: "/assets/images/icons/phone.svg",
					},
				],
			},
			{
				title: "Branch:",
				content: [
					{
						title:
							"3rd Floor, Block AB, 27B Nguyen Dinh Chieu Street, Da Kao Ward, District 1, Ho Chi Minh City.",
						link: "https://goo.gl/maps/Nf3Yxt75pU2qda337",
						image: "/assets/images/icons/location.svg",
					},
					{
						title: "Phone: (028) 62 88 99 00.",
						link: "tel:+842862889900",
						image: "/assets/images/icons/phone.svg",
					},
				],
			},
		],
		contact: {
			title: "Contacts",
			content: [
				{
					image: "/assets/images/icons/email.svg",
					title: "Email: sales@coccoc.com",
					link: "mailto:sales@coccoc.com",
				},
				{
					image: "/assets/images/icons/phone.svg",
					title: "Hotline: (024) 38 838 838.",
					link: "tel:+842438838838",
				},
				{
					image: "/assets/images/icons/skype.svg",
					title: "Skype: coccoc_qc",
					link: "skype:coccoc_qc?chat",
				},
			],
		},
		copyright: "Copyright © 2021 CocCoc Company. All rights reserved.",
	},
	// HOMEPAGE
	hero_banner: {
		header: "<p>Bật <span>Quảng Cáo</span></p> <p class='minus'>-</p> <p>Xây <span>Thương Hiệu</span></p><p>Triệu <span>Ý Tưởng</span></p> <p class='minus'>-</p> <p>Đậm <span>Ấn Tượng</span></p>",
		description: "<p>Concentrate on getting your adverts in front of your target customers</p> <p>Spreading your brand across Vietnam</p>",
		button_title: "Start now",
		button: "Start now",
		image: "/assets/images/hero/hero.png",
	},
	reason: {
		title: "Why you should choose Cốc Cốc",
		content: [
			{
				title: "<strong>25M</strong> users on desktop and mobile.",
				image: "/assets/images/icons/group.svg",
			},
			{
				title: "Approximately <strong>4M</strong> users daily.",
				image: "/assets/images/icons/mouse.svg",
			},
			{
				title: "Brand image <strong>protection</strong> and brand safety.",
				image: "/assets/images/icons/security.svg",
			},
			{
				title:
					"<strong>Impressions</strong> to real ID users is higher than the market figure. ",
				image: "/assets/images/icons/user.svg",
			},
			{
				title:
					"<strong>Classify and reach</strong> the right target customers.",
				image: "/assets/images/icons/comment.svg",
			},
			{
				title:
					"<strong>Brandlift</strong> - Fantastic tool for measuring marketing metrics.",
				image: "/assets/images/icons/presentation.svg",
			},
			{
				title: "Help you <strong>optimize</strong> your ad campaigns.",
				image: "/assets/images/icons/speaker.svg",
			},
			{
				title:
					"<strong>Comprehensive support</strong> from SMEs to LEs.",
				image: "/assets/images/icons/building.svg",
			},
		],
	},
	customers: {
		title: "Clients",
		image: [
			"/assets/images/customers/1-shoppe.png",
			"/assets/images/customers/2-grab.png",
			"/assets/images/customers/3-milo.png",
			"/assets/images/customers/4-oppo.png",
			"/assets/images/customers/5-friso.png",
			"/assets/images/customers/6-huggies.png",
			"/assets/images/customers/7-tiki.png",
			"/assets/images/customers/8-rmit.png",
			"/assets/images/customers/9-omo.png",
			"/assets/images/customers/10-vtv.png",
			"/assets/images/customers/11-spotify.png",
			"/assets/images/customers/12-pepsi.png",
		],
	},
	case_study: {
		title: "Case Study",
		button_title: "Detail",
	},

	business: {
		title: "Develop your business with diverse advertising solutions",
		image: "/assets/images/business/business.png",
		description:
			"Explore how to reach your potential customers with Cốc Cốc ads",
		button_title: "Explore",
	},
	// END HOME PAGE

	// NEWS PAGE
	search: {
		placeholder: "Search",
		noResult: {
			title: "No data",
			content: "Cốc Cốc Ad Platform will update information as soon as possible."
		},
		notFound: {
			title: "No results",
			content: "Make sure your keyword is grammatically correct or try another ones."
		}
	},
	news: {
		title: "News",
		button_title: "See more",
	},
	NewsCategory: [
		{
			name: "All",
			data: "all",
		},
		{
			name: "Cốc Cốc News",
			data: "post",
		},
		{
		  name: "Market Report",
		  data: "report"
		},
		{
			name: "Case study",
			data: "case-study",
		},
	],
	NewsDetail: {
		lastest: "Latest news",
		caseStudy: "Latest case studies",
		lastestReport: "Other market reports",
		btnDownload: "Download"
	},

	contact_form: {
		title: "Contact us and stand a chance to get promotional offers",
		name: "Full Name",
		email: "Email",
		phone: "Phone",
		content: "Comment",
		button_title: "Send",
	},
	// END NEWS PAGE

	// HELP AND SUPPORT PAGE
	title:{
		title_contact: "Contact",
		title_support: "Support",
	},
	contact_info: [
		{
			title: "Free Support",
			content: "024 38 838 838",
			link: "tel:+842438838838",
		},
		{
			title: "Contact for advertising:",
			content: "sales@coccoc.com",
			link: "mailto:sales@coccoc.com",
		},
		{
			title: "Technical Support",
			content: "support_qc@coccoc.com",
			link: "mailto:support_qc@coccoc.com",
		},
		{
			title: "Skype",
			content: "coccoc_qc",
			link: "skype:coccoc_qc?chat",
		},
	],

	contact_location: [
		{
			title: "Cốc Cốc Hanoi",
			image: "/assets/images/contact/hanoi.png",
			address: "R1202, 12th floor, HITTC Building, 185 Giang Vo Rd., Ha Noi",
			lat: 21.027329,
			lng: 105.824703,
		},
		{
			title: "Cốc Cốc Ho Chi Minh City",
			image: "/assets/images/contact/hcm.png",
			address:
				"3rd Floor, Block AB, 27B Nguyen Dinh Chieu Street, Da Kao Ward, District 1, Ho Chi Minh City",
			lat: 10.76303813,
			lng: 106.68611345,
		},
	],

	agency: {
		title: "Agencies",
		content: [
			{
				title: "All",
				more: "See more",
				content: [
					{
						image: "/assets/images/customers/Mindshare-Enterprise.png",
						title: "Mindshare Enterprise",
						content:
							"We are a global media agency network of 9,300 people across 86 countries with diverse opinions, cultures and passions. We are united by our desire to create new media experiences for our clients and their consumers and have fun whilst doing it.",
						address:
							"Level 42, Bitexco Financial Tower, 02 Hai Trieu Street, District 1, Ho Chi Minh City, Vietnam",
						phone: "(+84) 28 6288 3325",
						link: "//www.mindshareworld.com/",
					},
					{
						image: "/assets/images/customers/Chin-Media.png",
						title: "Chin Media Company Limited",
						content:
							"Dedicated experts with strategies. Making plans and providing integrated digital media solutions.",
						address: "28 B2 Road, Sala Urban Area, District 2, Ho Chi Minh City, Vietnam",
						phone: "(+84) 932 761 669",
						link: "//www.chinmedia.vn/",
					},
					{
						image: "/assets/images/customers/Wavemaker.png",
						title: "Wavemaker",
						content:
							"We believe there is always a better way to grow by positively provoking growth for clients and our people, shape decisions and experience through media, content and technology.",
						address:
							"Level 42, Bitexco Financial Tower, 02 Hai Trieu Street, District 1, Ho Chi Minh City",
						phone: "(+84) 28 6288 3456",
						link: "//www.wavemakerglobal.com/",
					},
					{
						image: "/assets/images/customers/ANTS.png",
						title: "Online advertising solutions Joint Stock Company ANTS",
						content:
							"Founded in 2014, ANTS's mission is to unleash the full economic protential of digital media companies.",
						address:
							"AntHill 24.D6, Saigon Pearl Villa Area, 92 Nguyen Huu Canh Street, Ward 22, Binh Thanh District, HCM City, Vietnam",
						phone: "(+84) 28 7039 9199",
						link: "//www.ants.vn/",
					},
					{
						image: "/assets/images/customers/Performics.png",
						title: "Performics",
						content:
							"Founded in 1998, Performics is a performance pioneer, originally operating as an affiliate network, and rolling out search marketing services in the early 2000s. Today, Performance Marketing has moved from a specialty service to the strategic center for brands.",
						address: "26 Tran Cao Van Street, District 3, HCM City, Vietnam",
						phone: "(+84) 28 3827 6002",
						link: "//www.performics.com/",
					},
					{
						image: "/assets/images/customers/PMAX.png",
						title: "Joint Stock Company PMAX",
						content:
							"Providing total performance marketing solutions to promote business growth.",
						address: "28 - 36 Nguyen Co Thach Street, An Loi Dong Ward, District 2, HCM City, Vietnam",
						phone: "(+84) 964 966 040",
						link: "//www.pmax.com.vn/",
					},
					{
						image: "/assets/images/customers/Innocom.png",
						title: "Technology & Business Consultants Company Limited Innocom",
						content:
							"Consulting and providing technology application solutions in business development, communication and marketing.",
						address:
							"5th Floor, BIDV Building, 46 Vuong Thua Vu Street, Thanh Xuan District, Hanoi City, Vietnam",
						phone: "(+84) 964 738 895",
						link: "//www.innocom.vn/",
					},
					{
						image: "/assets/images/customers/CAPITAL.png",
						title: "Commerce & Communication Company Limited CAPITAL",
						content:
							"Developing and providing general solutions for multimedia services on the basis of the convergence of communication, telecommunications and information technology.",
						address: "Times City, 485 Minh Khai Street, Hanoi City, Vietnam",
						phone: "(+84) 904 861 916",
						link: "//www.capitalmedia.com.vn/",
					},
					{
						image: "/assets/images/customers/AKC.png",
						title: "Commerce & Communication Services Company Limited AKC",
						content:
							"AKC Media Agency believes that our creativity & realism will create practical and effective long-term communication campaigns for clients.",
						address: "8 Tran Thai Tong Street, Cau Giay District, Hanoi City, Vietnam",
						phone: "(+84) 977 385 835",
						link: "//www.akcmedia.net/",
					},
					{
						image: "/assets/images/customers/Life-Media-Agency.png",
						title: "Life Media Agency",
						content:
							"Life Vietnam Media was founded by a group of experienced and passionate people in media field, especially online media in Vietnam.",
						address: "9B Alley 46, Dong Da District, Hanoi City, Vietnam",
						phone: "(+84) 949 884 686 - (+84) 902 288 664",
						link: "//www.lifemedia.com.vn/",
					},
				],
			},
			{
				title: "Ha Noi",
				more: "See more",
				content: [
					{
						image: "/assets/images/customers/Innocom.png",
						title: "Technology & Business Consultants Company Limited Innocom",
						content:
							"Consulting and providing technology application solutions in business development, communication and marketing.",
						address:
							"5th Floor, BIDV Building, 46 Vuong Thua Vu Street, Thanh Xuan District, Hanoi City, Vietnam",
						phone: "(+84) 964 738 895",
						link: "//www.innocom.vn/",
					},
					{
						image: "/assets/images/customers/CAPITAL.png",
						title: "Commerce & Communication Company Limited CAPITAL",
						content:
							"Developing and providing general solutions for multimedia services on the basis of the convergence of communication, telecommunications and information technology.",
						address: "Times City, 485 Minh Khai Street, Hanoi City, Vietnam",
						phone: "(+84) 904 861 916",
						link: "//www.capitalmedia.com.vn/",
					},
					{
						image: "/assets/images/customers/AKC.png",
						title: "Commerce & Communication Services Company Limited AKC",
						content:
							"AKC Media Agency believes that our creativity & realism will create practical and effective long-term communication campaigns for clients.",
						address: "8 Tran Thai Tong Street, Cau Giay District, Hanoi City, Vietnam",
						phone: "(+84) 977 385 835",
						link: "//www.akcmedia.net/",
					},
					{
						image: "/assets/images/customers/Life-Media-Agency.png",
						title: "Life Media Agency",
						content:
							"Life Vietnam Media was founded by a group of experienced and passionate people in media field, especially online media in Vietnam.",
						address: "9B Alley 46, Dong Da District, Hanoi City, Vietnam",
						phone: "(+84) 949 884 686 - (+84) 902 288 664",
						link: "//www.lifemedia.com.vn/",
					},
				],
			},
			{
				title: "Ho Chi Minh",
				more: "See more",
				content: [
					{
						image: "/assets/images/customers/Mindshare-Enterprise.png",
						title: "Mindshare Enterprise",
						content:
							"We are a global media agency network of 9,300 people across 86 countries with diverse opinions, cultures and passions. We are united by our desire to create new media experiences for our clients and their consumers and have fun whilst doing it.",
						address:
							"Level 42, Bitexco Financial Tower, 02 Hai Trieu Street, District 1, Ho Chi Minh City, Vietnam",
						phone: "(+84) 28 6288 3325",
						link: "//www.mindshareworld.com/",
					},
					{
						image: "/assets/images/customers/Chin-Media.png",
						title: "Chin Media Company Limited",
						content:
							"Dedicated experts with strategies. Making plans and providing integrated digital media solutions.",
						address: "28 B2 Road, Sala Urban Area, District 2, Ho Chi Minh City, Vietnam",
						phone: "(+84) 932 761 669",
						link: "//www.chinmedia.vn/",
					},
					{
						image: "/assets/images/customers/Wavemaker.png",
						title: "Wavemaker",
						content:
							"We believe there is always a better way to grow by positively provoking growth for clients and our people, shape decisions and experience through media, content and technology.",
						address:
							"Level 42, Bitexco Financial Tower, 02 Hai Trieu Street, District 1, Ho Chi Minh City",
						phone: "(+84) 28 6288 3456",
						link: "//www.wavemakerglobal.com/",
					},
					{
						image: "/assets/images/customers/ANTS.png",
						title: "Online advertising solutions Joint Stock Company ANTS",
						content:
							"Founded in 2014, ANTS's mission is to unleash the full economic protential of digital media companies.",
						address:
							"AntHill 24.D6, Saigon Pearl Villa Area, 92 Nguyen Huu Canh Street, Ward 22, Binh Thanh District, HCM City, Vietnam",
						phone: "(+84) 28 7039 9199",
						link: "//www.ants.vn/",
					},
					{
						image: "/assets/images/customers/Performics.png",
						title: "Performics",
						content:
							"Founded in 1998, Performics is a performance pioneer, originally operating as an affiliate network, and rolling out search marketing services in the early 2000s. Today, Performance Marketing has moved from a specialty service to the strategic center for brands.",
						address: "26 Tran Cao Van Street, District 3, HCM City, Vietnam",
						phone: "(+84) 28 3827 6002",
						link: "//www.performics.com/",
					},
					{
						image: "/assets/images/customers/PMAX.png",
						title: "Joint Stock Company PMAX",
						content:
							"Providing total performance marketing solutions to promote business growth.",
						address: "28 - 36 Nguyen Co Thach Street, An Loi Dong Ward, District 2, HCM City, Vietnam",
						phone: "(+84) 964 966 040",
						link: "//www.pmax.com.vn/",
					}
				],
			},
		],
	},
	// END HELP AND SUPPORT PAGE

	// QUOTATION PAGE
	quotation: {
		hero: {
			title:
				"<strong>Vietnam's leading ad platform</strong> in terms of reach rate",
			button: ["Ratecard", "Credential"],
		},
		body: {
			title:
				"Hệ sinh thái Cốc Cốc - Nền tảng vững chắc đứng sau Cốc Cốc Audience Network với:",
			content: [
				{
					title: "GIẢI PHÁP TỐT NHẤT CHO NHẬN DIỆN THƯƠNG HIỆU",
					content:
						"Định hình nhận diện thương hiệu và tương tác với khách hàng tiềm năng của bạn qua các loại hình quảng cáo của Cốc Cốc",
					image: "/assets/images/quotation/quotation-article1.png",
				},
				{
					title: "ĐO LƯỜNG CHÍNH XÁC HIỆU QUẢ QUẢNG CÁO",
					content: "Tiếp cận đúng người vào đúng thời điểm",
					image: "/assets/images/quotation/quotation-article2.png",
				},
			],
		},
		data: {
			title:
				"45% of Vietnamese Internet users chose Cốc Cốc",
			content: [
				"<strong>25M</strong> users on desktop and mobile",
				"<strong>Approximately 4M</strong> users daily",
			],
		},
	},
	// END QUOTATION PAGE

	// SOLUTION PAGE
	solution_router: [
		{
			title: "Desktop Ads",
			path: "/portfolio",
		},
		{
			title: "Mobile Ads",
			path: "/mobile-ads",
		},
		{
			title: "Audience network",
			path: "/audience",
		},
		{
			title: "Brandlift",
			path: "/brandlift",
		},
		{
			title: "Innovative skin",
			path: "/innovative-skin",
		}
	],
	desktopAds: {
		hero: {
			title: "Desktop Ad Solutions",
			content:
				"Explore how to reach your potential customers with Cốc Cốc ads",
			button: "Explore",
		},
		filter: {
			title: "Select your industry to see the most suitable ad campaigns",
		},
		title: ["Display Ads", "Search Ads", "Special Ads"],
	},
	mobileAds: {
		hero: {
			title: "Mobile Ad Solutions",
			content: "Explore how to reach your potential customers with Cốc Cốc ads.",
			button: "Explore",
		}
	},
	innovative: {
		hero: {
			title: "Premium solutions",
			content: "Unlimited creation and premium solutions help brands be close to protential customers.",
			button: "Explore",
		}
	},
	audience: {
		hero: {
			title: "Audience Network",
			content:
				"Is a network which connects advertisers with various websites, using targeting technology to help reach exactly your target customers.",
		},
		audience_data: {
			title: "Why Cốc Cốc Audience Network",
			description: "is an ideal solution for advertisers?",
			content: [
				{
					title:
						"Cốc Cốc Ecosystem - The foundation supporting Cốc Cốc Audience Network:",
					data: [
						"<strong>25M</strong><p>users monthly</p>",
						"<strong>51%</strong><p>loyal users daily</p>",
						"<strong>41%</strong><p>Reaching up to 41% of Vietnamese Internet users</p>",
					],
				},
				{
					title: "Having cutting-edge advertising technology:",
					data: [
						"<strong>Machine learning</strong><p>Machine learning</p>",
						"<strong>AI</strong><p>Artificial intelligence</p>",
						"<strong>RTB</strong><p>Real Time Bidding</p>",
					],
				},
			],
		},
		reason: {
			title: 'Cốc Cốc Audience Network helps advertisers',
			content: [
				{
					image: "/assets/images/solution/audience/1.svg",
					content:
						"Follow users to learn their media behaviours and interactions with browsers",
				},
				{
					image: "/assets/images/solution/audience/2.svg",
					content: "Learning users' insights and displaying the most relevant articles",
				},
				{
					image: "/assets/images/solution/audience/3.svg",
					content: "Optimizing CTR - Increasing touch points with target customers",
				},
				{
					image: "/assets/images/solution/audience/4.svg",
					content: "Grow revenue and minimize cost",
				},
				{
					image: "/assets/images/solution/audience/5.svg",
					content:
						"Delivering messages through various user-friendly ads formats ",
				},
				{
					image: "/assets/images/solution/audience/6.svg",
					content: "Expand more advertising resources",
				},
			],
		},
		activate: {
			title: "How Audience Network operates?",
			content: "Advertising messages will be displayed to each relevant audience segment in advertising spots on pre-connected websites.",
			button: "Details",
		},
		form: {
			title: "Contact us and stand a chance to get promotional offers",
			name: "Full Name",
			email: "Email",
			phone: "Phone",
			description: "Comment",
			button: "Send",
			industry: {
				title: "Industry",
				content: [
					{ key: "", value: "Industry" },
					{ key: "Retails", value: "Retails" },
					{ key: "Real Estate", value: "Real Estate" },
					{ key: "Travel", value: "Travel" },
					{ key: "Pharmacy", value: "Pharmacy" },
					{ key: "Electronic Mobile", value: "Electronic Mobile" },
					{ key: "EduJobs", value: "Edu - Jobs" },
					{ key: "Airlines", value: "Airlines" },
					{ key: "FMCG", value: "FMCG" },
					{ key: "Other", value: "Other" },
					{ key: "AutoVehicle", value: "AutoVehicle" },
					{ key: "Beauty and Hospital", value: "Beauty and Hospital" },
					{ key: "Finance", value: "Finance" },
					{ key: "Ecommerce", value: "Ecommerce" },
					{ key: "Game", value: "Game" },
					{ key: "Telecom", value: "Telecom" },
				],
			},
		},
	},
	brandlift: {
		hero: {
			title: "Brandlift Survey",
			content: "Excellent tool for evaluating the effectiveness of an ad campaign with high precision",
			button: "Explore now",
		},
		why_coccoc: {
			title: 'Cốc Cốc provides a "measurement" that current advertising statistics fail to provide - Support brands in optimizing ad campaigns.',
			content: [
				"Does your advertisement impress target audiences?",
				"Do people perceive your message correctly?",
				"The level of brand interest, the impact of advertising on users' purchasing decisions.",
				"What are brand-related keywords users memorize after they saw your ad?",
			],
		},
		why_coccoc_2: {
			title: "With Coc Coc Brandlift, essential measurement metrics will let you know how impactful (influential) your ad campaigns are:",
			content: [
				"Ad Recall",
				"Brand Recall",
				"Brand Awareness",
				"Brand Preference",
				"Purchase Intent",
			],
		},
		activate: {
			title: "How Brandlift works",
			content: [
				{
					image: "/assets/images/solution/brandlift/activate/1-laptop.svg",
					content: "Campaign launch on Cốc Cốc Newtab and reach certain terms",
				},
				{
					image: "/assets/images/solution/brandlift/activate/2-split.svg",
					content:
						'The system automatically divides users into two groups: <strong class="green">"Exposed"</strong> (users saw the ad) and <strong class="purple">"Control"</strong> (users did not see the ad)',
				},
				{
					image: "/assets/images/solution/brandlift/activate/3-discuss.svg",
					content:
						"Create a survey on browser using the same set of questionnaires for both groups of potential customers, to pinpoint the difference before and after the advertising campaign.",
				},
				{
					image: "/assets/images/solution/brandlift/activate/4-chart.svg",
					content:
						"Collecting data and making reports on the advertising campaign effectiveness",
				},
			],
		},
		benefit: {
			title: "What benefits Brandlift could provide",
			content: [
				{
					image: "/assets/images/solution/brandlift/benefit/group.svg",
					content:
						"Help you identify whether potential customers remember your brand, products and ad messages",
				},
				{
					image: "/assets/images/solution/brandlift/benefit/cart.svg",
					content:
						"Help brands in evaluating the influence of advertising on potential customers' purchase decisions.",
				},
				{
					image: "/assets/images/solution/brandlift/benefit/checked.svg",
					content:
						"Help brand development team adjust and make informed decisions for upcoming campaigns",
				},
			],
		},
		form: {
			title: "Leave your information for consultancy",
			company: "Brand name",
			name: "Full name",
			email: "Email",
			phone: "Phone",
			button: "Get consult now",
		},
	},
	modal: {
		header: {
			title: "Video Banner",
			description:
				"Video nổi bật nằm ở chính giữa trang tab mới, dễ gây ấn tượng với người dùng",
		},
		title_seemore: "View more other ads",
		main: ["FORMAT", "BUYING MODEL", "TARGETING OPTIONS"],
		footer: "Get consult now",
		note: `*Please enable Flash for a full experience if you are not using <a href="https://coccoc.com/en/" target="_blank">Cốc Cốc Browser</a>`,
		content: [
			{
				image: "/assets/images/icons/macbook.svg",
				button: "Demo",
				description:
					"*Vui lòng bật Flash để xem Demo nếu bạn không dùng <strong>Trình duyệt Cốc Cốc</strong>",
			},
			{
				image: "/assets/images/icons/macbook.svg",
				button: "Demo",
				description:
					"*Vui lòng bật Flash để xem Demo nếu bạn không dùng <strong>Trình duyệt Cốc Cốc</strong>",
			},
			{
				image: "/assets/images/icons/macbook.svg",
				button: "Demo",
				description:
					"*Vui lòng bật Flash để xem Demo nếu bạn không dùng <strong>Trình duyệt Cốc Cốc</strong>",
			},
		],
	},
	// END SOLUTION PAGE
	form_download: {
		title: "Register to dowload report",
		textContent: "Please fill out the form below to download this market report.",
		company: "Company",
		full_name: "Full name",
		email: "Working email",
		phone: "Phone",
		position: "Job title",
		button: "Submit",
	},
	form_notify: {
		required: "",
		error: "Please enter the correct format",
		empty: "Field cannot be left blank",
		state: {
			error: "Error!",
			success: "Sent successfully",
			loading: "The system is processing...",
		},
	},
	// END SOLUTION PAGE
};
