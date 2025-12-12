function randomId(){
 return 'user-'+Math.random().toString(36).slice(2,8);
}
module.exports={randomId};