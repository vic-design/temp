import Dashboard from '@/components/dashboard';
import Tasks from '@/components/Task/Page';

export const routes = [
    { path: '/', component: Dashboard },
    { path: '/task', component: Tasks }
];