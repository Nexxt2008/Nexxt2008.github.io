<?php

if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {return;}

$name  = htmlspecialchars($_POST['name']);
$email  = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

$headers = 'From: ' . $name . ' ' . $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail('fietsspeciaalzaak@skynet.be', 'Contact form Vleugels', $message, $headers);

exit();

?>