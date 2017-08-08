<?php

$frm_name  = 'Krskmed'; // from name
$recepient = 'terehmaster@mail.ru';
$sitename  = 'Krskmed';
$subject   = 'Заявка с сайта. Форма "Обратный звонок"';


$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$send_message = "<div style='font-size: 16px;'>
<br>
<b>Имя:</b> $name <br><br>
<b>Телефон:</b> $phone
<br>
</div>";

mail($recepient, $subject, $send_message, "From: $frm_name" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
echo 'Ok!';