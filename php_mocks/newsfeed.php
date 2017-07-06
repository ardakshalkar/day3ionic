<?php
$page = $_GET["page"];
$result = "";
if ($page==0){
	$result = '[{"id":10101,"url":"http://via.placeholder.com/200x200","user":{"username":"ardakshalkar"}},{"id":10102,"url":"http://via.placeholder.com/200x200","user":{"username":"mika_raiym"}}]';
}
else if ($page==1){
	$result = '[{"id":10104,"url":"http://via.placeholder.com/200x200","user":{"username":"rrdaulet"}},{"id":10105,"url":"http://via.placeholder.com/200x200","user":{"username":"mika_raiym"}}]';
}

//$result = '[{"id":10101,"url":"http://via.placeholder.com/200x200","user":"ardakshalkar"},{"id":10102,"url":"http://via.placeholder.com/200x200",user:}]';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
echo $result;
