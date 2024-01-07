// Importaciones
import { createRouter, createWebHistory } from 'vue-router'

// Rutas
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'inicio',
			component: () => import('../views/inicio.vue')
		}
	]
})

// Exportación
export default router
