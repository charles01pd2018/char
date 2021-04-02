export const CarouselContent = [ 
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
];