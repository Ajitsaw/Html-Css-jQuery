<?php

require "../../../wp-load.php";

if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$action = $_POST["form-action"];
	switch($action) {
		case "request":
			request();
			break;
		case "news":
			news();
			break;
		case "career":
			career();
			break;
		case "product":
			product();
			break;
		case "training":
			training();
			break;
		case "training-register":
			training_register();
			break;
	}
}

// Request

function request() {
	$name = strip_tags($_POST["fullname"]);
    $email = strip_tags($_POST["email"]);
    $phone = strip_tags($_POST["phone"]);
    $message = strip_tags($_POST["message"]);
	
	$rec = get_field("form_videocall_email", "option");
	
	$headers = array('Content-Type: text/html; charset=UTF-8');
	$body = "Name: " . $name . "<br />E-Mail Adresse: " . $email . "<br />Telefon: " . $phone . "<br /><br />Nachricht:<br />" . $message;
	$mail = str_replace(array("%%headline%%", "%%text%%"), array("Anfrage: Allgemein", $body), file_get_contents("templates/email/email-main.php"));
	$status = wp_mail($rec, "Website | Anfrage: Allgemein", $mail, $headers);
	if($status) {
		$subject = get_field("form_videocall_subject", "option");
		$headline = get_field("form_videocall_headline", "option");
		$text = get_field("form_videocall_text", "option");
		
		$mail = str_replace(array("%%headline%%", "%%text%%"), array($headline, $text), file_get_contents("templates/email/email-main.php"));
		echo wp_mail($email, $subject, $mail, $headers);
	}
}

// News

function news() {
	$company = strip_tags($_POST["company"]);
	$firstname = strip_tags($_POST["firstname"]);
	$lastname = strip_tags($_POST["lastname"]);
    $email = strip_tags($_POST["email"]);
    $phone = strip_tags($_POST["phone"]);
    $message = strip_tags($_POST["message"]);
	
	$rec = get_field("form_news_email", "option");
	
	$headers = array('Content-Type: text/html; charset=UTF-8');
	$body = "Firma: " . $company . "<br />Vorname: " . $fistname . "Nachname: " . $lastname . "<br />E-Mail Adresse: " . $email . "<br />Telefon: " . $phone . "<br /><br />Nachricht:<br />" . $message;
	$mail = str_replace(array("%%headline%%", "%%text%%"), array("Anfrage: Presse", $body), file_get_contents("templates/email/email-main.php"));
	$status = wp_mail($rec, "Website | Anfrage: Presse", $mail, $headers);
	if($status) {
		$subject = get_field("form_news_subject", "option");
		$headline = get_field("form_news_headline", "option");
		$text = get_field("form_news_text", "option");
		
		$mail = str_replace(array("%%headline%%", "%%text%%"), array($headline, $text), file_get_contents("templates/email/email-main.php"));
		echo wp_mail($email, $subject, $mail, $headers);
	}
}

// Career

function career() {
	$firstname = strip_tags($_POST["firstname"]);
	$lastname = strip_tags($_POST["lastname"]);
	$email = strip_tags($_POST["email"]);
	$phone = strip_tags($_POST["phone"]);
	$rec = strip_tags($_POST["rec-email"]);
	$job = strip_tags($_POST["job"]);

	$resume = $_FILES["resume"];
	$cover = $_FILES["cover"];
	$target_dir = get_template_directory() . "/career/";
	$resume_file = $target_dir . date("d-m-y-H-i-s") . '_' . basename($_FILES["resume"]["name"]);
	$resume_filetype = strtolower(pathinfo($resume_file,PATHINFO_EXTENSION));
	$cover_file = $target_dir . date("d-m-y-H-i-s") . '_' . basename($_FILES["cover"]["name"]);
	$cover_filetype = strtolower(pathinfo($resume_file,PATHINFO_EXTENSION));

	$allowed_types = array("pdf", "docx", "doc", "jpeg", "jpg", "png", "odt", "rtf", "txt");

	if(in_array($resume_filetype, $allowed_types) && in_array($cover_filetype, $allowed_types)) {
		if(move_uploaded_file($_FILES["resume"]["tmp_name"], $resume_file) && move_uploaded_file($_FILES["cover"]["tmp_name"], $cover_file)) {
			$headers = array('Content-Type: text/html; charset=UTF-8');
			$body = "Job: " . $job . "<br />Vorname: " . $firstname . "<br />Nachname: " . $lastname . "<br />E-Mail Adresse: " . $email . "<br />Telefon: " . $phone;
			$mail = str_replace(array("%%headline%%", "%%text%%"), array("Neue Bewerbung", $body), file_get_contents("templates/email/email-main.php"));
			$status = wp_mail($rec, "Neue Bewerbung: " . $job, $mail, $headers, array($resume_file, $cover_file));
			if($status) {
				$subject = get_field("form_application_subject", "option");
				$headline = get_field("form_application_headline", "option");
				$text = get_field("form_application_text", "option");
				
				$mail = str_replace(array("%%headline%%", "%%text%%"), array($headline, $text), file_get_contents("templates/email/email-main.php"));
				echo wp_mail($email, $subject, $mail, $headers);
			}
		} else {
			echo false;
			return;
		}
	} else {
		echo false;
		return;
	}
}

// Product

function product() {
	$name = strip_tags($_POST["name"]);
    $email = strip_tags($_POST["email"]);
    $phone = strip_tags($_POST["phone"]);
    $message = strip_tags($_POST["message"]);
	$product = strip_tags($_POST["product"]);
	
	$rec = get_field("form_videocall_email", "option");
	
	$headers = array('Content-Type: text/html; charset=UTF-8');
	$body = "Produktkategorie: " . $product . "<br />Name: " . $name . "<br />E-Mail Adresse: " . $email . "<br />Telefon: " . $phone . "<br /><br />Nachricht:<br />" . $message;
	$mail = str_replace(array("%%headline%%", "%%text%%"), array("Anfrage: " . $product, $body), file_get_contents("templates/email/email-main.php"));
	$status = wp_mail($rec, "Website | Anfrage: " . $product, $mail, $headers);
	if($status) {
		$subject = get_field("form_videocall_subject", "option");
		$headline = get_field("form_videocall_headline", "option");
		$text = get_field("form_videocall_text", "option");
		
		$mail = str_replace(array("%%headline%%", "%%text%%"), array($headline, $text), file_get_contents("templates/email/email-main.php"));
		echo wp_mail($email, $subject, $mail, $headers);
	}
}

// Training

function training() {
	$name = strip_tags($_POST["name"]);
    $email = strip_tags($_POST["email"]);
    $phone = strip_tags($_POST["phone"]);
    $message = strip_tags($_POST["message"]);

	$rec = get_field("form_training_rec", "option");
	
	$headers = array('Content-Type: text/html; charset=UTF-8');
	$body = "Name: " . $name . "<br />E-Mail Adresse: " . $email . "<br />Telefon: " . $phone . "<br /><br />Nachricht:<br />" . $message;
	$mail = str_replace(array("%%headline%%", "%%text%%"), array("Webinar", $body), file_get_contents("templates/email/email-main.php"));
	$status = wp_mail($rec, "Website | Webinar", $mail, $headers);
	if($status) {
		$subject = get_field("form_training_subject", "option");
		$headline = get_field("form_training_headline", "option");
		$text = get_field("form_training_text", "option");
		
		$mail = str_replace(array("%%headline%%", "%%text%%"), array($headline, $text), file_get_contents("templates/email/email-main.php"));
		echo wp_mail($email, $subject, $mail, $headers);
	}
}

// Training register

function training_register() {
	$firstname = strip_tags($_POST["firstname"]);
	$lastname = strip_tags($_POST["lastname"]);
	$company = strip_tags($_POST["company"]);
    $email = strip_tags($_POST["email"]);
    $phone = strip_tags($_POST["phone"]);
	$rec = strip_tags($_POST["rec-email"]);
	$training = strip_tags($_POST["training"]);
	
	$headers = array('Content-Type: text/html; charset=UTF-8');
	$body = "Schulung: " . $training . "<br />Firma: " . $company . "<br />Vorname: " . $firstname . "<br />Nachname: " . $lastname . "<br />E-Mail Adresse: " . $email . "<br />Telefon: " . $phone;
	$mail = str_replace(array("%%headline%%", "%%text%%"), array("Schulungs-Anmeldung: " . $training, $body), file_get_contents("templates/email/email-main.php"));
	$status = wp_mail($rec, "Website | Schulungs-Anmeldung: " . $training, $mail, $headers);
	if($status) {
		$subject = get_field("form_training_register_subject", "option");
		$headline = get_field("form_training_register_headline", "option");
		$text = get_field("form_training_register_text", "option");
		
		$mail = str_replace(array("%%headline%%", "%%text%%"), array($headline, $text), file_get_contents("templates/email/email-main.php"));
		echo wp_mail($email, $subject, $mail, $headers);
	}
}

?>