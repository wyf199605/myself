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
    }
};
