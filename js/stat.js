'use strict';

var CLOUD_WIDTH = 500;  //ширина облака
var CLOUD_HEIGHT = 200; //высота облака
var CLOUD_X = 100; //расположение облака по горизонтале
var CLOUD_Y = 50; //расположение облака по вертикале
var GAP = 10;     // расстояние между итемами
var FONT_GAP = 15; // расстояние от облака до начала текста
var TEXT_WIDTH = 50; //ширина текста
var barWidth = 20; //высота гистограммы
//var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var BAR_HEIGHT= CLOUD_HEIGHT - GAP - TEXT_WIDTH;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.3)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );
  
  ctx.fillStyle = 'blue';
  
  var maxTime = getMaxElement(times);
  
  for (var i = 0; i < players.length; i++) {
    ctx.fillText(
      players[i],
      CLOUD_X + GAP  + (GAP + BAR_HEIGHT) * i,
      CLOUD_Y + GAP * 4 + BAR_HEIGHT 
    );
    ctx.fillRect(
      CLOUD_X +  GAP + (GAP + BAR_HEIGHT) * i,
      CLOUD_Y + GAP*2,
      (barWidth * times[i]) / maxTime,
      BAR_HEIGHT
    );
  }
};

