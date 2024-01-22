class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array, queue = []) {
      
      array.push(this.name)
  
      for (let child in this.children){
        queue.push(this.children[child])
      }
  
      if(queue.length > 0){
        let current = queue.shift()
         current.breadthFirstSearch(array, queue)
      }
      
      return array
    }
  }