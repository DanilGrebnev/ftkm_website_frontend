class Route {
    constructor(
        public path: string,
        private matchPattern?: RegExp
    ) {}

    isEqual(currentPath: string): boolean {
        if (currentPath === this.path) return true
        return this.matchPattern ? this.matchPattern.test(currentPath) : false
    }
}

export class RouteFactory {
    static createRoute(path: string, matchPattern?: RegExp): Route {
        return new Route(path, matchPattern)
    }
}
