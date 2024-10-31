export const newsApiKeys = {
    getNews: 'get-news',
    getLastNews: 'get-last',
    getOneNews: (newsId?: string) => `get-one-news-${newsId}`,
}
