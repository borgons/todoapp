import mongoose from 'mongoose';

interface TodoIntfc {
   title: string;
   description: string;
}

interface todoMdlIntfc extends mongoose.Model<TodoDoc> {
   build(attr: TodoIntfc): TodoDoc 
}

interface TodoDoc extends mongoose.Document {
   title: string;
   description: string;
}

// Todo Schema
const todoSchema = new mongoose.Schema({
   title: {
      type: String, 
      required: true,
   },
   description: {
      type: String, 
      required: true,
   },
});

todoSchema.statics.build = (attr: TodoIntfc) => {
   return new Todo(attr)
}

const Todo = mongoose.model<TodoDoc, todoMdlIntfc>('Todo', todoSchema)

Todo.build({
   title: 'some title',
   description: 'some description'
})

export { Todo };
