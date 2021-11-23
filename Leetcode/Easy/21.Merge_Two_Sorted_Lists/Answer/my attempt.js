/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let mergedList = [];
    
    if (l1 === null){
        return []
    }
    
    for (let i = 0; i < l1.length; i++){
        for (let j = 0; j < l2.length; j++){
            if (l1[i] === l2[j]){
                mergedList.push(l1[i])
            } else if  (l1[i]> l2[j]) {
                mergedList.push(l2[j])
            } else if (l1[i] < l2[j]){
                mergedList.push(l1[i]) 
            } else {
                mergedList.push(l2[j])
            }
                
        }
    }
    return mergedList;
};