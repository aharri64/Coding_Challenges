/**
https://www.youtube.com/watch?v=IHY6qcVq9Wo
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
    const dummy = new ListNode(-Infinity);
    let prev = dummy;
    
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            prev = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            prev = l2;
            l2 = l2.next;
        }
    }
    
    if(!l1) prev.next = l2;
    if(!l2) prev.next = l1;
    
    return dummy.next;
};