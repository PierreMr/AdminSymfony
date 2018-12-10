<?php

// src/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{
    /**
     * @Route("/home", name="home")
     */
    public function home()
    {
        $this->addFlash(
            'success',
            'Your changes were saved!'
        );
        $this->addFlash(
            'warning',
            'Your changes were partially saved!'
        );
        $this->addFlash(
            'danger',
            'Your changes could not be saved!'
        );

        return $this->render('home.html.twig');
    }
}