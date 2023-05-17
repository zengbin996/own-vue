import { createRouter, createWebHashHistory } from 'vue-router';
import { ElMessage } from 'element-plus';

const routes = [
  {
    name: 'Test',
    path: '/test',
    component: () => import('../pages/Test.vue'),
    meta: {
      title: 'Test',
    },
  },
  {
    name: 'Home',
    path: '/',
    component: () => import('../pages/Index.vue'),
    meta: {
      title: 'One.',
    },
  },
  {
    name: 'Wallpaper',
    path: '/wallpaper',
    component: () => import('../pages/wallpaper/Index.vue'),
    meta: {
      title: 'Wallpaper',
    },
  },
  {
    name: 'Music',
    path: '/music',
    component: () => import('../pages/music/Index.vue'),
    meta: {
      title: 'Music',
    },
  },
  {
    name: 'Camera',
    path: '/camera',
    component: () => import('../pages/camera/Index.vue'),
    meta: {
      title: 'Camera',
    },
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });

// const routerWhite = ['/login']

// router.beforeEach((to, from, next) => {
// 	if (to.meta.title) {
// 		document.title = to.meta.title
// 	}

// 	if (routerWhite.indexOf(to.fullPath) == -1) {
// 		const loginInfo = JSON.parse(localStorage.getItem('loginInfo') ?? '{}')

// 		if (loginInfo.authorization && new Date(loginInfo.authorization.expires) > new Date()) {
// 			next()
// 		} else {
// 			if (loginInfo.authorization) ElMessage.error('登录已过期请重新登录')
// 			next({ path: '/login' })
// 		}
// 	} else {
// 		next()
// 	}
// })

export default router;
