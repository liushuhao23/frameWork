/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-26 22:40:38
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-27 00:05:06
 */
import { emitter, GLOBAL_STORE_CHANGE } from './const'
import { GlobalStoreData } from './type/GlobalStore'
import cloneDeep from 'lodash.clonedeep';

let globalStore: GlobalStoreData = {
    workspace: {}
}


function setGlobalData(store: GlobalStoreData) {
    if (store === globalStore) {
        console.warn('[acp] store has not changed！');
        return false;
    }
    globalStore = cloneDeep(globalStore);
    emitter.emit(GLOBAL_STORE_CHANGE, [globalStore])
    return true 
}

export function initGlobalStore(store: GlobalStoreData) {
    if (store === globalStore) {
        console.warn('[acp] store has not changed！');
    } else {
        const prevGlobalStore = cloneDeep(globalStore);
        globalStore = cloneDeep(store);
        emitter.emit(GLOBAL_STORE_CHANGE, [globalStore, prevGlobalStore])

    }
    return {globalStore: new GlobalStore(), setGlobalData}
}

export class GlobalStore {
    /**
     * onGlobalStoreChange 全局依赖监听
     *
     * 收集 setStore 时所需要触发的依赖
     *
     * 限制条件：子应用只有一个激活状态的全局监听，新监听覆盖旧监听
     *
     * 这么设计是为了减少全局监听滥用导致的内存爆炸
     *
     * @param callback
     * @param fireImmediately
     */
    onGlobalStoreChange(callback: ([store]: GlobalStoreData[]) => void, fireImmediately?: boolean) {
        if (!(callback instanceof Function)) {
            console.error('[acp] callback must be function!');
            return;
        }
        if (emitter.all.has(GLOBAL_STORE_CHANGE)) {
            console.warn(`[acp] global store listener already exists before this, new listener will overwrite it.`);
            emitter.off(GLOBAL_STORE_CHANGE)
        }
        emitter.on(GLOBAL_STORE_CHANGE, callback)
        if (fireImmediately) {
            const cloneStore = cloneDeep(globalStore);
            callback([cloneStore]);
        }
    }

    // get(key?: keyof GlobalStoreData) {
    //     return key ? cloneDeep(globalStore[key]) : cloneDeep(globalStore)
    // }
}