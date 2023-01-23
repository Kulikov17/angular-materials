import {storeLogger} from 'ngrx-store-logger';

import type {ActionReducer, MetaReducer} from '@ngrx/store';

export function logger(reducer: ActionReducer<unknown>): (state: unknown, action: unknown) => unknown {
    return storeLogger({collapsed: true})(reducer);
}

export const metaReducers: MetaReducer[] = [logger];
