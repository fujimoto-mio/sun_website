<?php
$value1 = 200;
$value2 = 100;

if ($value1 > $value2) {
   echo 'value1はvalue2より大きい';
}else {
   echo 'value1はvalue2より小さい';
}

$text = 'man';
if ($text === 'man') {
   echo '男性';
} elseif ($text === 'woman') {
   echo '女性';
}

$text = 'success';
if ($text === 'success'):
?>
<p>テストの結果は合格です。処理は正常に行われています。</p>
<?php elseif($text === 'error'): ?>
<p>テストの結果は失敗です。処理中にエラーが発生しています。</p>
<?php endif; ?>

<?php
$is_active = true;
$result = $is_active== true ? "active" :"default";
echo $result;

$week='wednesday';

switch ($week) {
   case 'monday':
      echo '月曜日';
      break;
   case 'tuesday':
      echo '火曜日';
      break;
   case 'wednesday':
      echo '水曜日';
      break;
   case 'thursday':
      echo '木曜日';
      break;
   case 'friday':
      echo '金曜日';
      break;
   case 'saturday':
      echo '土曜日';
      break;
   case 'sunday':
      echo '日曜日';
      break;
   default:
      echo '何曜日ですか？';
      break;
}

$old = 18;

if ($old > 10 && $old < 30) {
   print "変数は10より大きく30より小さい";
}

$sugoku = 45;
$eigo = 82;

if ($sugoku > 50 || $eigo > 50) {
   print "合格";
}

$x=true;
if ($x ) {
   echo "真です";
}else{
   echo "偽です";
}

if ( !$x ) {
   echo "偽です";
}else{
   echo "真です";
}

for ($vol =0; $vol  <= 10; $vol++){
   echo $vol. '<br/>';
}
?>

結果
0
1
2
3
4
5
6 <br/>
<br/>

<?php
echo '結果<br/>';
for ($vol =0; $vol <= 10; $vol++) { 
   if ($vol == 5) {
      echo 'continue'. '<br/>';
      continue;
   }
   echo $vol. '<br/>';
}
echo '終了';
?>

<br/>
結果
0
1
2
3
4
continue
6
7
8
9
10
終了 <br/>
<br/>

<?php
echo '結果<br/>';
for ($vol = 0; $vol <= 10; $vol++) { 
   if ($vol == 5) {
      echo 'continue'. '<br/>';
      break;
   }
   echo $vol. '<br/>';
}
echo '終了' ;
?>

<br/>
結果
0
1
2
3
4
終了 <br/>
<?php
$vol = 0;

while ($vol < 5) {
   echo $vol;
   $vol++;
}
?>
<br/>
01234
<br/>
<?php
$num = 0;

do {
   print "num=" .$num;
   $num += 1;
} while ($num < 3);

?>

<br/>num=0 num=1 num=2<br/>
<br/>

<?php
$array = ['卵','牛乳','トマト','キャベツ','リンゴ','オレンジ'];

foreach ($array as $value) {
   echo $value. "<br/>";
}
?>

<br/>
卵
牛乳
トマト
キャベツ
リンゴ
オレンジ
<br/>

<?php
$bag = [
   'リスト1' => '卵',
   'リスト2' => '牛乳',
   'リスト3' => 'トマト',
   'リスト4' => 'キャベツ',
   'リスト5' => 'リンゴ',
   'リスト6' => 'オレンジ'
];
echo "<br/>";
foreach ($bag as $key => $value) {
   echo '買い物'. $key. 'つ目は、'. $value. 'です。 <br/>';
}
?>
<br/>
買い物リスト1つ目は、卵です。<br/>
買い物リスト2つ目は、牛乳です。<br/>
買い物リスト3つ目は、トマトです。<br/>
買い物リスト4つ目は、キャベツです。<br/>
買い物リスト5つ目は、リンゴです。<br/>
買い物リスト6つ目は、オレンジです。<br/>

<?php
$array = ['卵','牛乳','トマト','キャベツ','リンゴ','オレンジ'] ;
echo "<br/>";

foreach ($array as $key => $value) {
   echo  $key.":" .$value. "<br/>";
}
?>

<br/>
0:卵
1:牛乳
2:トマト
3:キャベツ
4:リンゴ
5:オレンジ