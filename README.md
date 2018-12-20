## 学习笔记

---

### 1. webpack配置

这里我对webpack使用过程中整理的一些心得。

1. entry
    
    类型限制
    ```typescript
    type entry = string | string[] | {[name]: string}
    ```
    应用起点入口路径
    
2. context

    类型限制
    ```typescript
    type context = string
    ```
    基础目录：绝对路径，默认使用当前目录
    
3. output

    类型限制
    ```typescript
    interface output{
       /*
       * filename 
       * [name] 入口名称 
       * [id] chunk id
       * [hash] 每次构建生存的hash值
       * [chunkhash] 使用基于每个 chunk 内容的 hash
       */
       filename: string; // 输出文件名称，
       path: string; // 输出文件路径
    }
    ```
    
4. module

    1. noParse
        
        类型限制
        ```typescript
        type noParse = RegExp | [RegExp] | Function;   
        ```
        
        让webpack不解析与noParse规则一致的文件；
        
    2. rules
    
        类型限制
        ```typescript
        type rules = Array;
        ```
        
        每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)。