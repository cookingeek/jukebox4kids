/**
 *
 */
var playsController=require('./controller/PlaysController.js');

module.exports=function (app, router)
{
    //app.get('/api/play',playsController.get);
    console.log("test");
    router.post('/api/play/create',playsController.create);
    router.get('/api/play/list',playsController.loadAll);
    router.post('/api/play/update',playsController.update);
    router.post('/api/play/remove',playsController.remove);
}
