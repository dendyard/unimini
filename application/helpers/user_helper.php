<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('uploadImage'))
{
    function uploadImage($name, $path) 
    {
        $CI =& get_instance();

        $config = array();
        $config['upload_path'] = $path;
        $config['allowed_types'] = 'jpg|png|jpeg|PNG|GIF|gif';
        $config['max_size']  = '2048';
        $config['remove_space'] = TRUE;
        $config['encrypt_name'] = TRUE;
        $config['overwrite']     = FALSE;
        
        $CI->load->library('upload', $config);
        if($CI->upload->do_upload($name)){ 
            $return = array('result' => 'success', 'file' => $CI->upload->data(), 'error' => '');
            return $return;
        }else{
            $return = array('result' => 'failed', 'file' => '', 'error' => $CI->upload->display_errors());
            return $return;
        }
    }
}

if ( ! function_exists('templateForm'))
{
    function templateForm($id) 
    {
        switch ($id) {
            case '1':
                $form = 'Wuling';
              break;
            case '2':
                $form = 'Social Ads';
              break;
            case '3':
                $form = 'Page';
              break;
            default:
                $form = '';
          }

          return $form;
    }
}

if ( ! function_exists('impServed'))
{
    function impServed($total_imp) 
    {
        if($total_imp < 1000){
            $imp = $total_imp;
        }elseif($total_imp >= 1000 && $total_imp < 1000000){
            $imp = round(($total_imp/1000),1)."<span style='font-size:15px;'>K</span>";
        }elseif($total_imp >= 1000000){
            $imp = round(($total_imp/1000000),1)."<span style='font-size:15px;'>M</span>";
        }

        return $imp;
    }
}

if ( ! function_exists('curlIgGet'))
{
    function curlIgGet($params){
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $params['url'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => $params['header'],
            // CURLOPT_HTTPHEADER => array( 'Cookie:sessionid=47730895757:hjeKOQRFezrn7i:8;'),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return json_decode($response);
    }
}

if ( ! function_exists('uploadByUrl'))
{
    function uploadByUrl($url){
        $filename = uniqid().'.'.explode('/',get_headers($url, 1)["Content-Type"])[1];
		file_put_contents('./assets/upload/'.$filename, file_get_contents($url));
        
        return $filename;
    }
}

if ( ! function_exists('uploadByBase64'))
{
    function uploadByBase64($base64){
        $filename = uniqid().'.'.explode(';',explode('/',explode(':', $base64)[1])[1])[0];;
		file_put_contents('./assets/upload/'.$filename, file_get_contents($base64));
        
        return $filename;
    }
}

if ( ! function_exists('convertToBase64'))
{
    function convertToBase64($url){
        $url = htmlspecialchars_decode($url);
        $base64 = 'data:'.get_headers($url, 1)["Content-Type"]. ';base64,' . base64_encode(file_get_contents($url));
        
        return $base64;
    }
}

if ( ! function_exists('uuidV4'))
{
    function uuidV4() {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',

        // 32 bits for "time_low"
        mt_rand(0, 0xffff), mt_rand(0, 0xffff),

        // 16 bits for "time_mid"
        mt_rand(0, 0xffff),

        // 16 bits for "time_hi_and_version",
        // four most significant bits holds version number 4
        mt_rand(0, 0x0fff) | 0x4000,

        // 16 bits, 8 bits for "clk_seq_hi_res",
        // 8 bits for "clk_seq_low",
        // two most significant bits holds zero and one for variant DCE1.1
        mt_rand(0, 0x3fff) | 0x8000,

        // 48 bits for "node"
        mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
        );
    }
}

if ( ! function_exists('makeFriendly'))
{
    function makeFriendly($num) {
        if ($num >= 1000000)
            return round($num / 1000000, 1).'M';
        if ($num >= 1000)
            return round($num / 1000, 1).'K';
        return $num;
    }
}

if ( ! function_exists('getDataFb'))
{
    function getDataFb($url) {
        $opts = array(
            'http'=>array(
              'header'=>"User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6;iPhone; CPU iPhone OS 10_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53\r\n"
            )
          );
       

        $context = stream_context_create($opts);
        $html = file_get_html($url, false, $context);

        echo $html; die;

        $data['post_url'] = $html->find('div._57-q')[0]->{'data-full-size-href'};
        $data['profile'] = $html->find('img._1-yc')[0]->src;
        $ex = explode(" - ",$html->find('title')[0]->plaintext);
        $data['username'] = $ex[0];
        $data['caption']  = str_replace(' | Facebook', ' ', $ex[1]);

        return $data;
    }
}

// if ( ! function_exists('getDataFb'))
// {
//     function getDataFb($url) {
//         $opts = array(
//             'http'=>array(
//               'header'=>"User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6;iPhone; CPU iPhone OS 10_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53\r\n"
//             )
//           );
        
//         $context = stream_context_create($opts);
//         $html = file_get_html($url, false, $context);

//         $data['post_url'] = $html->find('div._57-q')[0]->{'data-full-size-href'};
//         $data['profile'] = $html->find('img._1-yc')[0]->src;
//         $ex = explode(" - ",$html->find('title')[0]->plaintext);
//         $data['username'] = $ex[0];
//         $data['caption']  = str_replace(' | Facebook', ' ', $ex[1]);

//         return $data;
//     }
// }
