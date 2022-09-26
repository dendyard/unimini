<?php defined('BASEPATH') OR exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| Use SSL
|--------------------------------------------------------------------------
|
| Run this over HTTP or HTTPS. HTTPS (SSL) is more secure but can cause problems
| on incorrectly configured servers.
|
*/

$config['protocol']     = 'smtp';
$config['smtp_host']    = 'smtp.gmail.com';
$config['smtp_user']    = '';
$config['smtp_pass']    = '';
$config['smtp_port']    = 587;
