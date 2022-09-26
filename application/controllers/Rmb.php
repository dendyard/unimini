<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Rmb extends CI_Controller {
	private $container;

	public function __construct()
	{
		parent::__construct();
	}

    public function index()
	{
        //session_destroy();

        $this->load->view('public/header');
        $this->load->view('public/rmb');
        $this->load->view('public/footer');
	}
    
	
}