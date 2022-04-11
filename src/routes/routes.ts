import express, { Request, Response } from 'express';
import  { Todo } from '../models/user_model';

const router = express.Router();


router.get('/getAllTodo', async (req: Request, res: Response) => {
   
   try {
      const data = await Todo.find({});

      res.status(200).json({
         data: data,
      });

   } catch (error) {
      console.log(error);
   }

});


// Post request
router.post('/addTodo', async (req: Request, res: Response) => {

   const { title, description } = req.body;

   const todo = Todo.build({
      title, 
      description
   });

   await todo.save()

   return res.status(200).json({
      data: todo,
      msg: "Task has been added"
   });

});

// Delete Request

router.delete("/delete", async (req: Request, res: Response) => {

   const { id } = req.body;

   const filter = {
      id: id,
   }; 

   const dataItem = await Todo.deleteOne(filter)
      .then((data) => {
         res.json({
            data: data,
            msg: "Task has been removed"
         })
      }).catch((error) => {
         return res.send(error);
      });
});


// Update request

router.put('/update', async (req: Request, res: Response) => {

   const { title, description, id } = req.body;

   const filter = {
      id: id,
   };

   const updatedData = {
      title: title,
      description: description
   };

   const dataItem = await Todo.updateOne(filter, updatedData, {
      new: true,
   })
      .then((data) => {
         res.json({
            data: data,
            msg: "Task has been updated"
         })
      }).catch((error) => {
         return res.send(error);
      });

});


router.get("/", async (req: Request, res: Response) => {
   res.send("Hi");
});








   export default router;