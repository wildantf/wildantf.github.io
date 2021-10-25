const app = Vue.createApp({
    data() {
        return {
            portfolios: [
                {
                    id: 0,
                    title: 'Blog RTIK Bangkalan',
                    imgUrl: 'web%20rtik%20portfolio.png',
                    technology: [
                        'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
                        'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
                    ],
                    url: 'https://rtik-bangkalan.herokuapp.com/'
                },
                {
                    id: 1,
                    title: 'Twitter Clone',
                    imgUrl: 'web%20rtik%20portfolio.png',
                    technology: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
                    url: '/',
                },
                {
                    id: 2,
                    title: 'Twitter Clone',
                    imgUrl: 'Wildan.jpg',
                    technology: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
                    url: '/',
                }
            ]
        }
    }
});
app.mount('#app')