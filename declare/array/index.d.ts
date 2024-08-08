export {};
declare global {
  interface Array<T> {
    /**
     * Get first element of array. If array is empty, return undefined
     */
    first(defaultValue?: T): T | undefined;

    /**
     * Search all elements in array by keyword
     */
    searchAllProps(keyword: string | number): Array<T>;

    /**
     * Search min elements in array by path
     */
    findMin(path: string): T;

    /**
     * Search max elements in array by path
     */
    findMax(path: string): T;
  }
}
