/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-04-20 14:53:02
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-14 17:57:19
 */
// import data from '@works/core'
import { createMachine, interpret } from 'xstate' ;
type DemoData = {
    userId: number;
    user: string;
    error: null | Error;
    data?: string;
};
// const normalTask = new Promise<DemoData>((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve({ userId: Math.random(), user: 'laoyuan', error: null });
//         } else {
//             reject({ userId: 0, user: '', error: new Error('测试') });
//         }
//     }, 3000);
// });

// const fetchCuteAnimals = () => {
//     return normalTask;
// };


const toggleMachine = createMachine({
    id: 'toggle',
    initial: 'inactive',
    states: {
        inactive: {
            on: {
                TOGGLE: 'active',
            },
        },
        active: {
            on: { TOGGLE: 'inactive' },
        },
    },
});

const lightMachine = createMachine({
    // 状态机标识
    id: 'light',
    // 初始状态
    initial: 'green',
    // 整个状态机的本地 context
    context: {
        elapsed: 0,
        direction: 'east'
    },
    // 状态定义
    states: {
        green: {
            /* ... */
        },
        yellow: {
            /* ... */
            on: {
                LIGHT: {
                    target: 'green'
                }
            }
        },
        red: {
            /* ... */
        }
    }
});

// console.log('输出', toggleMachine.initialState)
// const state = lightMachine.transition('yellow', { type: 'TIMER' })
// console.log('输出', state.value)
// const toggleService = interpret(toggleMachine).start();
// toggleService.onTransition(state => {
//     console.log('🍊🍊🍊🍊🍊🍊', state.value);
//     const selectionFired = new CustomEvent('ctoggle', {
//         detail: state.value,
//     });
//     window.dispatchEvent(selectionFired);
//     window.dispatchEvent(new Event('toggle'));
// });

const promiseMachine = createMachine({
    id: 'promise',
    initial: 'pending',
    states: {
        pending: {
            on: {
                // 状态转换（简写）
                // 这相当于 { target: 'resolved' }
                RESOLVE: '#promise.resolved',

                // 状态转换 (object)
                REJECT: {
                    target: 'rejected'
                } 
            }
        },
        resolved: {
            type: 'final'
        },
        rejected: {
            type: 'final'
        }
    }
});
const { initialState } = promiseMachine;
console.log(initialState.value);
const nextState = promiseMachine.transition(initialState, { type: 'RESOLVE' });

console.log(nextState.value);
// export { normalTask, fetchCuteAnimals };