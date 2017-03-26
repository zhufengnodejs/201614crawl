/**
 * 把得到的电影数组存入数据库中
 */
let Movie = require('../model');
let async = require('async');
let logger = require('debug')('crawl:write');
module.exports = function(movies,callback){
  async.forEach(movies,function(movie,cb){
      Movie.create(movie,cb);
      logger(`写入电影:${movie.name}`);
  },callback);
}
