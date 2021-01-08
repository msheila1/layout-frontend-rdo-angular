import { RequestOptions, ResponseContentType } from "@angular/http";
import {
  HttpParams,
  HttpResponse,
  HttpHeaders,
  HttpClient
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map, delay } from "rxjs/operators";
import { AbstractModel } from "../../shared/models/abstract.model";
import { Page } from "../../shared/models/page.model";
import { environment } from "../../../environments/environment";

export abstract class AbstractService<T extends AbstractModel<ID>, ID> {
  
    public static baseUrl: string = environment.services.baseUrl;

    constructor(
        protected endpoint: string,
        protected http: HttpClient,
        protected options?: RequestOptions
    ) {}

    insert(model: T): Observable<T> {
        return create(this.http, AbstractService.baseUrl + this.endpoint, model);
    }

    update(model: T): Observable<T> {
        return update(this.http, AbstractService.baseUrl + this.endpoint, model);
    }

    save(model: T): Observable<T> {
        return model.id ? this.update(model) : this.insert(model);
    }

    delete(id: ID): Observable<void> {
        return destroy(this.http, AbstractService.baseUrl + this.endpoint, id);
    }

    findById(id: ID): Observable<T> {
        return findById(this.http, AbstractService.baseUrl + this.endpoint, id);
    }

    listAll(): Observable<T[]> {
        return listAll(this.http, AbstractService.baseUrl + this.endpoint);
    }

    listBy(httpParams: HttpParams): Observable<T[]> {
        return listBy(this.http, AbstractService.baseUrl + this.endpoint, httpParams);
    }

    listByEndPoint(endpoint: string, httpParams: HttpParams): Observable<T[]> {
        return listBy(this.http, AbstractService.baseUrl + endpoint, httpParams);
    }

    query(httpParams: HttpParams): Observable<Page<T>> {
        return query(this.http, AbstractService.baseUrl + this.endpoint, httpParams);
    }

    queryByEndPoint(endpoint: string, httpParams: HttpParams): Observable<Page<T>> {
        return query(this.http, AbstractService.baseUrl + endpoint, httpParams);
    }
}

export const create = <T extends AbstractModel<ID>, ID>(http: HttpClient, endpoint: string, model: T): Observable<T> => {
    const headers = new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8"
    });

    return http
        .post<T>(endpoint, model, { headers: headers })
        .pipe(delay(1000));
};

export const update = <T extends AbstractModel<ID>, ID>(http: HttpClient, endpoint: string, model: T): Observable<T> => {
    const headers = new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8"
    });

    return http
        .put<T>(model.id ? `${endpoint}/${model.id}` : endpoint, model, {
        headers: headers
        })
        .pipe(delay(1000))
};

export const destroy = <ID>(http: HttpClient, endpoint: string, id: ID): Observable<void> => {
    return http.delete<void>(`${endpoint}/${id}`);
};

export const find = <T extends AbstractModel<ID>, ID>(http: HttpClient, endpoint: string): Observable<T> => {
    return http.get<T>(`${endpoint}`);
};

export const findBy = <T extends AbstractModel<ID>, ID>(http: HttpClient, endpoint: string, httpParams?: HttpParams): Observable<T> => {
    return http.get<T>(endpoint, { params: httpParams });
};

export const findById = <T extends AbstractModel<ID>, ID>(http: HttpClient, endpoint: string, id: ID): Observable<T> => {
    return http.get<T>(`${endpoint}/${id}`);
};

export const listAll = <T extends AbstractModel<ID>, ID>(http: HttpClient, endpoint: string): Observable<T[]> => {
    return http.get<T[]>(endpoint);
};

export const listBy = <T extends AbstractModel<ID>, ID>(http: HttpClient, endpoint: string, httpParams?: HttpParams): Observable<T[]> => {
    return http
        .get<T[]>(endpoint, {
        params: httpParams
        })
        .pipe(
        delay(1000)
        );
};

export const query = <T extends AbstractModel<ID>, ID>(http: HttpClient, endpoint: string, httpParams: HttpParams): Observable<Page<T>> => {
    return http
        .get(endpoint, {
        params: httpParams,
        observe: "response"
        })
        .pipe(
        map((response: HttpResponse<Page<T>>) => {
            return response.body;
        }),
        delay(1000)
        );
};

export const countBy = <T>(http: HttpClient, endpoint: string, httpParams?: HttpParams): Observable<T> => {
    return http.get<T>(endpoint, { params: httpParams });
};