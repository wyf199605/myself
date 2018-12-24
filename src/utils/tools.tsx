export const Tools = {
    isEmpty(val: any){
        if(typeof val === 'undefined'){
            // undefined为空
            return true;
        }else if(val === null){
            // null为空
            return true;
        }else if(typeof val === 'object'){
            if(Array.isArray(val)){
                // 空数组时为空
                return val.length === 0;
            }else{
                // 空对象时为空
                return Object.keys(val).length === 0;
            }
        }else if(val === ''){
            // 空字符串时为空
            return true;
        }
        // 其余不为空
        return false;
    },
    isNotEmpty(val: any){
        return !Tools.isEmpty(val);
    },
    pattern: {
        throttling: function(action: Function, delay: number){ // 函数节流
            let last = 0;
            return function(...args: any[]){
                let curr = + new Date();
                if (curr - last > delay){
                    action.apply(this, args) ;
                    last = curr
                }
            }
        },
        debounce: function (method: Function, delay: number){ // 函数防抖
            let timer: number = null;
            return function(...args: any[]){
                let context = this;
                clearTimeout(timer);
                timer = setTimeout(function(){
                    method.apply(context, args);
                },delay);
            }
        }
    }
};
