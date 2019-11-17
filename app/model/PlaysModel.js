/**
 *
 */
var Datastore=require('nedb');
var db={};

db.plays = new Datastore({ filename: 'db/plays.db', autoload: true });
db.plays.loadDatabase();

module.exports.create=function(data,callback)
{
    db.plays.insert(data,callback);
}

module.exports.update= function (query, update, callback) {
    db.plays.update(query, { $set: update},{}, callback)
}

module.exports.remove= function (id,callback) {
    db.plays.remove({ _id: id }, {},callback);
}

module.exports.findById= function (id,callback) {
    db.plays.find({_id:id}, callback);
}
