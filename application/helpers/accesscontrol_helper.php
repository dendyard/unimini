<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
function LoggedSystem()
{
	$CI =& get_instance();
 	$log = $CI->session->all_userdata();
 	$logged = $CI->session->userdata('userLogged');
 	
 	if(!$logged){
 		redirect("/login");
 	}
 	else
 		return true;
}

function tsm_api(){
	$CI =& get_instance();
	return $CI->config->item('tsm_api');
}

function tsmCurl($arr = null, $url, $method, $auth, $custom_cookie = false){
	if(!empty($auth))
        $httpheader[] = "TTD-Auth: ".$auth;

    $payload[CURLOPT_URL] = $url;
    $payload[CURLOPT_RETURNTRANSFER] = true;
    $payload[CURLOPT_ENCODING] = "";
    $payload[CURLOPT_MAXREDIRS] = 10;
    $payload[CURLOPT_TIMEOUT] = 120;
    $payload[CURLOPT_HTTP_VERSION] = CURL_HTTP_VERSION_1_1;
    $payload[CURLOPT_CUSTOMREQUEST] = $method;

    if(!empty($arr)){
        if(!empty($arr['postform_datafile'])){
            $payload[CURLOPT_FOLLOWLOCATION] = true;
            $payload[CURLOPT_POSTFIELDS] = $arr["postform_datafile"];
        }else{
            $httpheader[] = 'Content-type: application/json';
            $payload[CURLOPT_POSTFIELDS] = json_encode($arr);
        }
    }

    if(!empty($httpheader))
        $payload[CURLOPT_HTTPHEADER] = $httpheader;

    $curl = curl_init();
    curl_setopt_array($curl, $payload);

    $res = curl_exec($curl);
    $info = curl_getinfo($curl);
    curl_close($curl);
    $arr = json_decode($res);

    return array("res" => $arr, "info" => $info);
}

function smonth($m){
	switch ((int)$m) {
		case 1:
		  	$smonth = 'Jan';
		  	break;
		case 2:
			$smonth = 'Feb';
		  	break;
		case 3:
			$smonth = 'Mar';
			break;
		case 4:
			$smonth = 'Apr';
			break;
		case 5:
			$smonth = 'May';
			break;
		case 6:
			$smonth = 'June';
			break;
		case 7:
			$smonth = 'Jul';
			break;
		case 8:
			$smonth = 'Aug';
			break;
		case 9:
			$smonth = 'Sep';
			break;
		case 10:
			$smonth = 'Oct';
			break;
		case 11:
			$smonth = 'Nov';
			break;
		case 12:
			$smonth = 'Dec';
			break;
		default:
			$smonth = 'Jan';
	}

	return $smonth;
}

function eh_date($date){
	$ex_date = explode('-',$date);
	return $ex_date[2]. ' '.smonth($ex_date[1]).' '.substr($ex_date[0], -2);
}

function sh_date($date){
	$ex_date = explode('-',$date);
	return $ex_date[2];
}

function sess_mall(){
	$CI =& get_instance();
	$param_mall = "";
	if(!empty($CI->session->userdata('mallId'))){
		$param_mall = "&filter[mall][eq]=".$CI->session->userdata('mallId');
	}

	return $param_mall;
}

function check_browser(){
	$useragent=$_SERVER['HTTP_USER_AGENT'];
	if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4)))
		header('Location: https://transshoppingmall.com/');
}

