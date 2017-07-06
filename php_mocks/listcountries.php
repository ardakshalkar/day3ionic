<?php
$result = '[{"name":"Bill","surname":"Gates"},{"name":"Steve","surname":"Jobs"}]';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
echo $result;
