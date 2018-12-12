<?php

// src/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

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


    /**
     * @Route("/get-days/{day}", name="getDays")
     */
    public function getDays($day = null)
    {
        if ($day == null) $day = date('Y-m-d');
        $jour = '';
        $days = [];

        for ($i = 0; $i < 7; $i++) {
            switch (date('l', strtotime($day))) {
                case 'Monday' : $jour = 'Lun. '; break;
                case 'Tuesday' : $jour = 'Mar. '; break;
                case 'Wednesday' : $jour = 'Mer. '; break;
                case 'Thursday' : $jour = 'Jeu. '; break;
                case 'Friday' : $jour = 'Ven. '; break;
                case 'Saturday' : $jour = 'Sam. '; break;
                case 'Sunday' : $jour = 'Dim. '; break;
            }

            $jour .= date('d-m', strtotime($day));

            array_push($days, $jour);

            $day = date('Y-m-d', strtotime($day .'+1 day'));
        }

        return new JsonResponse($days);
    }


    /**
     * @Route("/get-nb-res", name="getNbRes")
     */
    public function getNbRes($day = null)
    {
        $day = date('Y-m-d');
        $nbs = [];

        for ($i = 0; $i < 7; $i++) {
            array_push($nbs, rand(0, 20));
        }

        return new JsonResponse($nbs);
    }
}