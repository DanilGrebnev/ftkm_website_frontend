export const navigateRoutes = {
    LOGIN: {
        toLogin: '/login',
    },
    CMS: {
        toCMS: '/cms',
    },
    news: {
        toNews: (newsId: string) => newsId,
        toCreateNews: 'newsEditor',
    },
}
