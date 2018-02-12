<?php
$filterData = $_GET['filterData'];

$json_data = '{
                "more": 1,
                "items": [
                    {
                        "src": "img/blog-preview/pic1.jpg",
                        "name": "New element 1",
                        "itemDate": "<time date-time=\'2018-07-28\'>july 28</time>",
                        "text": "Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!",
                        "link": "#"
                    },
                    {
                        "src": "img/blog-preview/pic1.jpg",
                        "name": "New element 1",
                        "itemDate": "<time date-time=\'2018-07-28\'>july 28</time>",
                        "text": "Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!",
                        "link": "#"
                    },
                    {
                        "src": "img/blog-preview/pic1.jpg",
                        "name": "New element 1",
                        "itemDate": "<time date-time=\'2018-07-28\'>july 28</time>",
                        "text": "Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!",
                        "link": "#"
                    }
                ]
              }';


$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>