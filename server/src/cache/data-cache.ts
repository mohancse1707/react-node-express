class DataCache {
    public millisecondsToLive: number;
    public fetchFunction: Function;
    public cache: any;
    public fetchDate: any;

    constructor(fetchFunction, minutesToLive = 10) {
        this.millisecondsToLive = minutesToLive * 60 * 1000;
        this.fetchFunction = fetchFunction;
        this.cache = null;
        this.getData = this.getData.bind(this);
        this.resetCache = this.resetCache.bind(this);
        this.isCacheExpired = this.isCacheExpired.bind(this);
        this.fetchDate = new Date();
    }

    isCacheExpired() {
        return (this.fetchDate.getTime() + this.millisecondsToLive) < new Date().getTime();
    }

    getData = async () => {
        if (!this.cache || this.isCacheExpired()) {
            console.log('Cache is expired - fetching from public API');
            try{
                const response = await this.fetchFunction();
                this.cache = response.data;
                this.fetchDate = new Date();
                console.log('Next expiry time =', new Date(this.fetchDate.getTime() + this.millisecondsToLive).toLocaleString())
                return response.data;
            } catch(e) {
                return e;
            }
        } else {
            console.log('Cache is not expired - fetching from cache data');
            return this.cache;
        }
    }

    resetCache() {
        this.fetchDate = new Date();
    }
}

export default DataCache;