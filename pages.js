var pages =
    [
        {
            page: 1,
            texte: "Vous êtes devant une grotte. Que faites vous ?",
            choix:
                [
                    { page: 2, texte: "Je vais chercher du renfort" },
                    { page: 3, texte: "Je fonce dedans" },
                    { page: 4, texte: "Je rentre me coucher" },
                    { page: 5, texte: "Je mange un bout" }
                ]
        },
        {
            page: 2,
            texte: "Vous allez chercher du renfort. Vous tombez et vous vous tuez. FIN.",
            choix:
                [
                ]
        },
        {
            page: 3,
            texte: "Vous foncez dedans. Vous vous faites manger par un ours. FIN",
            choix:
                [
                ]
        },
        {
            page: 4,
            texte: "Vous rentrer vous coucher. Le lendemain, vous retournez devant la grotte. Que faites vous ?",
            choix:
                [
                    { page: 2, texte: "Je vais chercher du renfort" },
                    { page: 3, texte: "Je fonce dedans" },
                    { page: 5, texte: "Je mange un bout" }
                ]
        },
        {
            page: 5,
            texte: "Vous décidez de manger un bout. Vous êtes satisfait et repu. Vous avez gagné, bravo !",
            choix:
                [
                ]
        }
    ]