import { Router } from "express";

import CommentController from "../controllers/CommentController";

const CommentRouter = Router();


//Listar usuários
CommentRouter.get("/comments", CommentController.listComments);

//Inserir usuários
 CommentRouter.post("/comment", CommentController.createComment);

// Atualizar usuários
 CommentRouter.put("/comment/:id", CommentController.updateComment);

// Deletar usuários
 CommentRouter.delete("/comment/:id", CommentController.deleteComment);


export default CommentRouter;