// グローバル変数
var slot;  //タイマーを回す値
var nums;  //スロット停止時の値
var count; //スロットボタンを停止させた回数

// スロットを始める
document.getElementById("start").onclick = function() {
  startSlot();
};

// スロットを止める
document.getElementById("stop0").onclick = function() {
  stopSlot(0);
};
document.getElementById("stop1").onclick = function() {
  stopSlot(1);
};
document.getElementById("stop2").onclick = function() {
  stopSlot(2);
};

// スロット開始と初期化
function startSlot() {
  slot  = [];
  nums  = [];
  count = 3;
  runSlot(0);
  runSlot(1);
  runSlot(2);
}

// スロットを回す
function runSlot(num) {
  clearTimeout(slot[num]);
  document.getElementById("spin" + num).innerHTML = Math.floor(Math.random() * 10);
  slot[num] = setTimeout(function() {
    runSlot(num);
  }, 100);
}

// スロットを止める
function stopSlot(num) {
  if (typeof(nums[num]) !== "undefined") return;
  clearTimeout(slot[num]);
  nums[num] = document.getElementById("spin" + num).innerHTML;
  count--;
  if (!count) resultSlot();
}

// スロットの結果判定
function resultSlot() {
  if (nums[0] == 7 && nums[1] == 7 && nums[2] == 7) {
    alert("スリーセブン！すごい！");
  } else if (nums[0] == nums[1] && nums[0] == nums[2]) {
    alert("フィーバー！おめでとう！");
  } else if (nums[0] == nums[1] || nums[0] == nums[2] || nums[1] == nums[2]) {
    alert("惜しい！");
  } else {
    alert("残念！");
  }
}