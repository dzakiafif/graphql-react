export const RouteParams = {
    ID: ':id'
}

export const ROUTES = {
    ROOT: '/',
    ANIME_DETAIL: `/anime-detail/${RouteParams.ID}`,
    COLLECTION: '/collection',
    COLLECTION_DETAIL: `/collection-detail/${RouteParams.ID}`
}