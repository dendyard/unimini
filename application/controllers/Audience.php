<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Audience extends CI_Controller {

	private $container;

	public function __construct()
	{
		parent::__construct();
	}

    public function index()
	{
		
        $this->load->view('public/header');
        $this->load->view('public/audience');
        $this->load->view('public/footer');
	}
}