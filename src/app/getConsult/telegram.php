<?php

    echo "Error";
$name = $_POST['name']
$fam = $_POST['fam']
$otch = $_POST['otch']
$org = $_POST['org']
$tel = $_POST['tel']
$email = $_POST['email']
$area = $_POST['area']
$file = $_POST['file']
$token = "8484895727:AAFp8OKaFbP8b4BpiFhwLDwehnrMVVGa-0g"
$chat_id = "-1002727831745"
$arr = array(
    "Имя: " => $name,
    "Фамилия: " => $fam,
    "Отчество: " => $otch,
    "Организация: " => $org,
    "Телефон: " => $tel,
    "Эл. Почта: " => $email,
    "Сообщение: " => $area,
)

foreach($arr as $key => $value) {
    $txt .= '<b>'.$key."</b> ".$value."%0A";
}

$send = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($send) {
    echo "Сообщение отправлено!";
} else {
    echo "Error";
}

>