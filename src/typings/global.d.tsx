// 指定值类型的JSON数据
interface objOf<T>{
    [any: string]: T;
}

// 任意JSON数据
type obj = objOf<any>;

// ECMA原始类型，即 Undefined、Null、Boolean、Number 和 String。
type Primitive = string | number | boolean;

type dataList = string[] | number[] | Array<{text: string, value: any}>;