import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
}
export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Cães',
            background: 'banner_dog.jpg'
        }
    });
    //res.render('pages/page');
}
export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });    //res.render('pages/page');
}
export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });    //res.render('pages/page');
}