const app = Vue.createApp({
    data() {
        return {
            portfolios: [
                {
                    id: 0,
                    title: 'Blog RTIK Bangkalan',
                    imgUrl: 'web%20rtik%20portfolio.png',
                    technology: {
                        Laravel8: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
                        Tailwind2: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
                        alpinejs: 'https://cdn.worldvectorlogo.com/logos/alpinejs.svg',
                        jquery: 'https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg',
                    },
                    url: 'https://rtik-bangkalan.herokuapp.com/',
                },
                {
                    id: 1,
                    title: 'Gudang Sederhana',
                    imgUrl: 'gudangku.png',
                    technology: {
                        laravel: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
                        'firebase firestore': 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', 
                    },
                    url: 'https://github.com/wildantf/gudang',
                },
                // {
                //     id: 2,
                //     title: 'Twitter Clone',
                //     imgUrl: 'Wildan.jpg',
                //     technology: {
                //         laravel: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
                //     },
                //     url: '/',
                // }
            ]
        }
    }
});
app.mount('#app')