export class GenericsService {

    protected CONTEXT: string;

    constructor(context:string) {
        this.CONTEXT = context;
    }

    protected getFullUrl(url:string){
        return this.CONTEXT + url;
    }

}