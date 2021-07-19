import qs from 'qs';
import { StatusChoices, TTagFilter, TUserFilter, QueryParams } from '../components/filter/Filter';

export function createParams(statusFilter: StatusChoices, tagFilter: TTagFilter, userFilter: TUserFilter): QueryParams {
    // parse UI state into format for axios params
    const params = {} as QueryParams;

    /**
     * if statusFilter is active, return active projects
     * if statusFilter is inactive, return inactive projects
     * if statusFilter is all, do not send as a query param and retrieve all projects
     */
    switch (statusFilter) {
        case 'active':
            params.status = true;
            break;
        case 'inactive':
            params.status = false;
            break;
        default:
            params.status = undefined;
    }

    if (tagFilter) {
        params.tags = tagFilter;
    }
    if (userFilter) {
        params.user = userFilter;
    }
    return params;
}

export function paramsSerializer(params: string[]): string {
    // parse tag array into format acceptable for axios query params
    return qs.stringify(params, { arrayFormat: 'repeat' });
}
