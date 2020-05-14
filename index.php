<?php
// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$errors = array();

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $email = $_POST['email'];

    if (empty($_POST['message'])) {
        $message = 'Message is empty';
    } else {
        $message = $_POST['message'];
    }

    $date = date('j, F Y h:i A');

    $emailBody = "
    <html>
    <head>
        <title>$email is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
        <div style=\"padding:20px;\">
        Date: <span style=\"color:#888\">$date</span>
        <br>
        Email: <span style=\"color:#888\">$email</span>
        <br>
        Message: <div style=\"color:#888\">$message</div>
        </div>
    </body>
    </html>
    ";

    $headers = 	'From: Contact Form <noreply@tornaltisolar.com>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" . 
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'gcoma@tornaltisolar.com';
    $subject = 'Contacting you';

    if (mail($to, $subject, $emailBody, $headers)) {
        $sent = true;	
    }
}
?>

<?php if (isset($sent) && $sent === true): ?> 
    {
        "status": "success",
        "message": "Your data was successfully submitted"
    }
<?php else: ?> 
    {
        "status": "fail",
        "error":  <?php echo json_encode($errors) ?>
    }
<?php endif; ?>