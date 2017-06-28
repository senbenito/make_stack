function Stack(){
    this.items = new Array();

    return {
      empty:()=>{
        if(this.items.length === 0){
          return true;
        } else {
          return false;
        }
      },

      push:(e)=>{
        this.items.push(e);
        console.log(this.items);
        return e;
      },

      peek:()=>{
        return this.items[0];
      },

      pop:()=>{
        return this.items.pop();
      },

      search:(e)=>{
        if(this.items.indexOf(e)===-1){
          return 0.1;
        } else {
          return this.items.indexOf(e);
        }
      },

    };


}



module.exports = Stack;
