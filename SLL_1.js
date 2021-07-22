class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    front() {
        if (this.head == null) {
            console.log("I'm null!");
            return null
        }
        return this.head.val;
    }
    removeFront() {
        if (this.head == null) {
            console.log("I'm null!");
            return null
        }
        this.head = this.head.next;
        return this.head;
    }
    addFront(value){
        var node = new Node(value);
        node.next = this.head;      // the new note's "next" is now == the head of this list
        this.head = node;           // make the head of this list == node 
        return this; 
    }
    contains(value) {
        var runner = this.head;
        while(runner != null) {
            if(value == runner.val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    length() {
        var runner = this.head;
        var count = 0;
        while(runner != null) {
            count++;
            runner = runner.next;
        }
        return count;
    }
    display() {
        var runner = this.head;
        var str = "";
        while(runner != null) {
            str = str + runner.val + " "
            runner = runner.next;
        }
        return str
    }
}
sll1 = new SLL()
node1 = new Node(6)
node2 = new Node(10)

// establish head of my SLL
sll1.head = node1;
// connect the two Nodes together
node1.next = node2;
console.log(sll1)
console.log(sll1.front())
console.log(sll1.removeFront())
console.log(sll1.addFront(3).addFront(6))
console.log(sll1.contains(33))
console.log(sll1.contains(10))
console.log(sll1.length())
console.log(sll1.display())

