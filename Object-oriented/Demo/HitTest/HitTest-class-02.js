var HitTest = function() {}
/*
  test :  判断两个DOM对象是否相撞
  Pramas:
        enemy: 敌方飞机
        bullet: 子弹
        my:我方飞机
*/
HitTest.test = function(enemy, bullet, my) {
  // 获取到enemy 、 bullet 的位置
  var enemyPos = enemy.getBoundingClientRect();
  var bulletPos = bullet.getBoundingClientRect();
  var myPos = bulletContainer.getBoundingClientRect();

  if ((bulletPos.left + myPos.left) < enemyPos.left && (bulletPos.left + myPos.left + bulletPos.width) > enemyPos.left && (320 - myPos.height + bulletPos.top) < enemyPos.top) {
    return true;
  }
  if ((bulletPos.left+myPos.left)<(enemyPos.left+enemyPos.width)&&(bulletPos.left+myPos.left+bulletPos.width)>(enemyPos.left+enemyPos.width)&&(320 - myPos.height + bulletPos.top) < enemyPos.top) {
    return true;
  }
  return false;
}