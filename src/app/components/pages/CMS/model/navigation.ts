import { RouteFactory } from '@/app/shared/navigation'

class CmsNavigationRoutes {
    basePath = '/cms'
    news = RouteFactory.createRoute(this.basePath, /\/cms\/newsEditor.*/)
    employees = RouteFactory.createRoute(
        this.basePath + '/employees',
        /\/cms\/employees.*/
    )
    admission = RouteFactory.createRoute(this.basePath + '/admission')
}

export const cmsNavigationRoutes = new CmsNavigationRoutes()
