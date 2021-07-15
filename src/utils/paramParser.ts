import qs from 'qs';
import { TStatusFilter, TTagFilter, TUserFilter, QueryParams } from '../components/nav/Nav';

export function createParams(statusFilter: TStatusFilter, tagFilter: TTagFilter, userFilter: TUserFilter): QueryParams {
    // parse UI state into format for axios params
    const params = {} as QueryParams;

    /**
     * if statusFilter.active is true, return active projects
     * if statusFilter.active is false, return inactive projects
     * if statusFilter.active is true and statusFilter.inactive is true, do not send as a query param and retrieve all projects
     */
    if (!statusFilter.active === statusFilter.inactive) {
        if (statusFilter.active === true) {
            params.status = true;
        }
        if (statusFilter.inactive === true) {
            params.status = false;
        }
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
