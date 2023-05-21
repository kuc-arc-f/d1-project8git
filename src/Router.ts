import testRouter from './routes/test';
import todoRouter from './routes/todo';
import sessionRouter from './routes/session';
import repoNameRouter from './routes/RepoName';
import repoCountRouter from './routes/RepoCount';

//
const Router = {
  /**
  * route
  * @param
  *
  * @return
  */  
  route: async function (pathname: string, req: any, res: any, env: any): Promise<Response>
  {
    let response;
    /* test */
    if (pathname === "/test2") {
      response = await testRouter.test2(req, res, env);
    }
    if (pathname === "/test3") {
      response = await testRouter.test3(req, res, env);
    }
    if (pathname === "/test/create") {
      response = await testRouter.create(req, res, env);  
    }
    if (pathname === "/test/get") {
      response = await testRouter.get(req, res, env);  
    }
    if (pathname === "/test/get_list") {
      response = await testRouter.get_list(req, res, env);  
    }
    if (pathname === "/test/delete") {
      response = await testRouter.delete(req, res, env);  
    }
    if (pathname === "/test/update") {
      response = await testRouter.update(req, res, env);  
    }
    //todo
    if (pathname === "/todos/create") {
      response = await todoRouter.create(req, res, env);  
    }
    if (pathname === "/todos/delete") {
      response = await todoRouter.delete(req, res, env);  
    }
    if (pathname === "/todos/update") {
      response = await todoRouter.update(req, res, env);  
    }
    if (pathname === "/todos/get") {
      response = await todoRouter.get(req, res, env);  
    }
    if (pathname === "/todos/get_list") {
      response = await todoRouter.get_list(req, res, env);  
    }
    //session
    if (pathname === "/session/create") {
      response = await sessionRouter.create(req, res, env);  
    }
    if (pathname === "/session/get") {
      response = await sessionRouter.get(req, res, env);  
    }
    if (pathname === "/session/delete") {
      response = await sessionRouter.delete(req, res, env);  
    }
    //repo_name
    if (pathname === "/repo_name/create") {
      response = await repoNameRouter.create(req, res, env);  
    }
    if (pathname === "/repo_name/create_repo_name") {
      response = await repoNameRouter.create_repo_name(req, res, env);  
    }
    if (pathname === "/repo_name/get_list") {
      response = await repoNameRouter.get_list(req, res, env);  
    }
    if (pathname === "/repo_name/delete_all") {
      response = await repoNameRouter.delete_all(req, res, env);  
    }
    //repoCountRouter
    if (pathname === "/repo_count/create") {
      response = await repoCountRouter.create(req, res, env);  
    }
    if (pathname === "/repo_count/delete_all") {
      response = await repoCountRouter.delete_all(req, res, env);  
    }
    if (pathname === "/repo_count/get_list") {
      response = await repoCountRouter.get_list(req, res, env);  
    }

    //@ts-ignore
    return response;
  },
}
export default Router;
