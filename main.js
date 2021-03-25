var todoList = new Vue({
  el: '#root',
  data:{
    inserimento: '',
    edit :'',
    prova:'false',
    lista:[
      {
        title: 'Studiare',
        status: 'todo',
      },
      {
        title: 'Studiare ancora',
        status: 'todo',
      },
      {
        title: 'Studiare di più',
        status: 'todo',
      },
      {
        title: 'Urlare',
        status: 'todo',
      },
      {
        title: 'Tornare a studiare',
        status: 'todo',
      }
    ]
  }, //fine data
  // computed:{
  //   listareverse: function (){
  //     let statusDone =this.lista.filter((todo) => todo.status == 'done');
  //     let statusTodo = this.lista.filter((todo) => todo.status == 'todo');
  //
  //     return [...statusTodo, ...statusDone];
  //   }
  // },
  methods: {
    inputText: function() {
      if (this.inserimento != '') {
        let obj = {
          title: this.inserimento,
          status: 'todo'
        }
        this.lista.push(obj);
        this.inserimento = ''
      }
    },
    check: function(todo) {
      let i = this.lista.indexOf(todo);
      // console.log(this.lista[i].status);
      this.lista[i].status = 'done';
    },
    cancel: function(todo){
      // console.log(this.listareverse);
      let i = this.lista.indexOf(todo);
      this.lista.splice(i, 1);
    },
    editText: function($event){
      $event.target.blur();
    }
  } //fine methods
})
