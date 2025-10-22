import Community from '../views/Community';
import Home from '../views/Home';
import NewsDetail from '../views/NewsDetails';
import Category from '../views/Category';

let routes = [

	{
		path: '/',
		component: Home,
		layout: 'main',
	},
	{
		path: '/community',
		component: Community,
		layout: 'community',
	},
	{
		path: '/news/:id/:slug',
		component: NewsDetail,
		layout: 'newsDetails',
	},
	{
		path: '/category/:category',
		component: Category,
		layout: 'main',
	}
	
];
export default routes;