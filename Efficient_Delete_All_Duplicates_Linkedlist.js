// Faster than 89.65% of JavaScript online submissions for Remove Duplicates from  Sorted List.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) 
{
    if(!head)
        return head;
  var cur=head;
  var prev=new ListNode(null);
  var set=new Set();
  while(cur!=null)
  {
      if(set.has(cur.val))
      {
          prev.next=cur.next;
      }
      else
      {
          set.add(cur.val);
          prev=cur;
      }
      cur=cur.next;
  }
  return head; 
};