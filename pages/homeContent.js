export const HomeHeroWaveContent = {
    heroWaveTitle: "pofo",
    heroWaveDescription: "Keeping track of my dev journey"
};

export const HomeGridSectionContent = {
    gridSectionTitle: 'About',
    gridSectionDescription: 'I like talking to computers',
    gridSectionImages: [ 
        {
            imagePath: '/favicon.svg',
            imageAltText: 'image 2 alt text',
        }, 
        {
            imagePath: '/static/branding/yooshLogo.svg',
            imageAltText: 'yoosh_crypto logo',
        }, 
    ],
};

export const HomeFlexPanelContent = {
    flexPanelTitle: 'Hackathons',
    flexPanelDescription: 'I don’t usually win, but when I do, it’s because my team carried me',
    flexPanelCardItems: [
        {
            cardHeader: "HACK UCI 2021",
            cardHeaderDescription: "pomo-fomo: Best Use of Twilio",
            cardDescription: "A web app that uses the Pomodoro Technique to create a virtual study space for students",
            cardImage: {
                imagePath: "/static/projects/pomo-fomo/logo.svg",
                imageAltText: "pomo-fomo devpost submission logo animation"
            },
            cardLink: "https://devpost.com/software/pomo-fomo"
        },
    ]
};

export const HomeCarouselContent = { 
    carouselTitle: 'Projects',
    carouselItems: [ 
        {
            carouselDisplay: {
                displayImages: [
                    {
                        imagePath: '/static/projects/crypto-block/page.png',
                        imageAltText: 'crypto block home page screenshot',
                    }, 
                    {
                        imagePath: '/static/projects/crypto-block/logo.svg',
                        imageAltText: 'crypto block logo',
                    },
                ],
                carouselDisplayDestination: 'https://cryptoblock.me/' // optional
            },
            carouselDescriptionTitle: 'Crypto Block',
            carouselDescriptionText: '!!! My First Deployed Project !!! Inspired by my personal obsession with crypto. Will always have a special place in my heart.',
            carouselDescriptionFeatures: { // optional
                featuresTitle: 'Tech Learnings',
                featuresList: [
                    'Writing code and organizing code are 2 different beasts',
                    'Choosing the right framework for your project is important',
                    'Deploying?! Server-side vs. client-side?!?!?',
                    'Personal opinion formed: using a styling library kinda blows'
                ]
            },
            carouselDescriptionTags: [ // optional
                'React.js', 'Sass', 'Heroku'
            ]
        },
    ] 
};