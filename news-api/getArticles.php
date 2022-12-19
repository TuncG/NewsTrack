<?php

$allowedOrigins = array(
    'https://newstrack.tuncgonel.com',
);
error_log("raninto issue004");
// if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] != '/') {
//     foreach ($allowedOrigins as $allowedOrigin) {
//         if (preg_match('#' . $allowedOrigin . '#', $_SERVER['HTTP_ORIGIN'])) {
//             header('Access-Control-Allow-Origin: *');
//             header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
//             header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
//             header('Content-Type: application/json');
//             $method = $_SERVER['REQUEST_METHOD'];
//             if ($method == "OPTIONS") {
//                 error_log("INSIDE THE OPTIONS2");
//                 header('Access-Control-Allow-Origin: *');
//                 header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
//                 header("HTTP/1.1 200 OK");
//                 die();
//             }
//             break;
//         }
//     }
// }



header("Content-Type: application/json");

$data = json_decode(file_get_contents('php://input'), true);

error_log("incoming_data_json: " . print_r($data, true));

require $_SERVER['DOCUMENT_ROOT'] . '/composer/vendor/autoload.php';

$apiKey = "ed8743d6c95941759e4053a4567380c8";
$query = $data['query'];
$from = $data['from'];
$to = $data['to'];
$sortBy = $data['sortBy'];

use jcobhams\NewsApi\NewsApi;

$newsapi = new NewsApi($apiKey);

$all_articles = $newsapi->getEverything($query="Microsoft", $sources=null, $domains=null, $exclude_domains=null, $from, $to, $language=null, $sortBy,  $page_size="20", $page="1");

$newsArray = array();
$newsArray['articles']=$all_articles; 
echo json_encode($newsArray);