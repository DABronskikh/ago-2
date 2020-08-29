//получения документа по идентификатору пользователя
//(идентификатор пользователя будет просто целым числом из SQL-базы, не _id из MongoDB)
db.operations.find({userId: 1});


//добавления в документ нового элемента в определённую позицию
db.operations.updateOne(
    {userId: 1},
    {
        $push: {
            operations: {
                icon: "https://img-1",
                title: "для удаления",
                url: "https://url-1"
            }
        }
    }
);

//удаления из документа элемента по определённой позиции
db.operations.updateOne(
    {userId: 1},
    {
        $pull:
            {
                'operations': {title: "для удаления"}
            }
    }
);
