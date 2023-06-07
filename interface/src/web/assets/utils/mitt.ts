/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-15 14:08:16
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-15 14:23:09
 */
import mitt from 'mitt'

const emitter = mitt()

class  mittClass {
    public emitInstance: any = ''
    constructor() {
        this.emitInstance = emitter
    }

    // 订阅
    on(name: string, callback: () => void) {
        if (this.emitInstance.all.has(name)) {
            console.warn(`global store listener already exists before this, new listener will overwrite it.`);
            // return;
            this.emitInstance.off(name, callback)
        }
        this.emitInstance.on(name, callback)
    }
    // 发布
    emit<T> (name: string, data: T) {
        this.emitInstance.emit(name, data)
    }

    // 清除所有时间
    offAll() {
        this.emitInstance.all.clear()
    }

    getAllMethods() {
        // emitter.all.entries();
        return this.emitInstance.all.entries();
    }
}

export default new mittClass()


