import Home from '@/components/Home'
import Portfolio from '@/components/portfolio/Portfolio.vue'
import Stocks from '@/components/portfolio/Stock.vue'

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {  
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/stocks',
        name: 'Stocks',
        component: Stocks
    }
]