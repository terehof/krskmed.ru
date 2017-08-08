<?php

$frm_name  = 'Krskmed'; // from name
$recepient = 'terehmaster@mail.ru';
$sitename  = 'Krskmed';
$subject   = 'Заявка с сайта. Форма "Отзыв"';


$name = trim($_POST["name"]);
$age_city = trim($_POST["age_city"]);
$feedback = trim($_POST["feedback"]);

$send_message = "<div style='font-size: 16px;'>
<br>
<b>Имя:</b> $name <br><br>
<b>Возраст, город:</b> $age_city <br><br>
<b>Отзыв:</b> $feedback
<br>
</div>";

mail($recepient, $subject, $send_message, "From: $frm_name" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
echo 'Ok!';