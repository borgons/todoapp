import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../provider/todo_provider.dart';

final titleController = TextEditingController();
final descriptionController = TextEditingController();

addDataWidget(BuildContext context) {
  return showModalBottomSheet(
    context: context,
    builder: (context) {
      return Container(
        height: 300.0,
        width: 400.0,
        child: Column(
          children: [
            TextField(
              controller: titleController,
              decoration: InputDecoration(hintText: 'Add Title'),
            ),
            TextField(
              controller: titleController,
              decoration: InputDecoration(hintText: 'Add Description'),
            ),

            ElevatedButton(
              onPressed: () {
                if(titleController.text.isNotEmpty) {
                  Provider.of<TodoProvider>(context, listen: false)
                          .addData({
                        "title": titleController.text,
                        "description": descriptionController.text
                  });
                }
              },
              child: Text("Submit")
            )
          ],
        )
      );
    }
  );
}