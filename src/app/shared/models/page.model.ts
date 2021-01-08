export class Page<T> {
    content: T[];
    facets: any[];
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: { sort: {sorted: boolean; unsorted: boolean}; pageSize: number; pageNumber: number; offset: number; paged: boolean };
    scrollId: number;
    size: number;
    sort: {sorted: boolean; unsorted: boolean} ;
    totalElements: number;
    totalPages: number;
}