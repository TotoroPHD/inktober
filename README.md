# inktober
Inktober 2022 (Liste de Marie Boiseau)

Pour m'amuser un peu, j'ai décidé d'utiliser la liste Inktober de Marie Boiseau (https://www.twitch.tv/marieboiseau / https://www.instagram.com/marieboiseau/) pour coder chaque jour (si je le peux) une mini page web à intégrer comme Browser Source à OBS pour les streameuses et streamer. 

## HOW TO : 
Chaque jour une page en rapport au mot du jour. Pour récupérez la page chez vous : Faites un fichier texte quelque part, copier/coller le contenu de la page que vous voulez, remplacez "totorophd" par votre nom de chaîne Twitch, puis sauvegardez le fichier en format .html !

# Jour 28 : Pluie

Oh non, un dégât des eaux sur votre stream ! 
Est-ce que vos viewers sont loyaux ou chaotiques ? 
!pluie pour faire pleuvoir et monter le niveau des eaux (Jusqu'à ne plus rien voir)
!seau pour écoper un peu le stream et retrouver un peu de visibilité !
Récupérez la page [28.html](28.html) et intégrez là en 1920x1080.

https://user-images.githubusercontent.com/64203596/198679241-b9ccc117-8a02-4464-9c3a-05cd7ace7a8a.mp4

# Jour 27 : Souvenir

Cette page garde en mémoire tout ce que vos viewers disent ! 
Si un viewer tapes "!souvenir", il pourra revoir un de ses vieux messages réapparaître à l'écran.
Récupérez la page [27.html](27.html) et intégrez là en 1920x1080.

Par sécurité il y a une limite à 2000 messages en mémoire, mais vous pouvez l'augmenter, c'est tout en bas du code. 
Attention par contre, les messages modérés restent en mémoire tels quels.

https://user-images.githubusercontent.com/64203596/198410057-dcdfa532-233e-4bb6-9ddc-ad7f321cac5a.mp4

# Jour 26 : Nocturne

Affichez la carte du ciel du jour sur votre stream ! Vos viewers peuvent changer la date et l'heure de la carte eux-même 
Récupérez la page [26.html](26.html) et intégrez là en 1920x1080.

!constellation ou !constellations pour afficher ou non les lignes des constellations

!jour DD/MM/YYYY pour changer la date de la carte (exemple : !jour 25/08/1980)

!heure XX (entre 0 et 23) pour changer l'heure de la carte. 

https://user-images.githubusercontent.com/64203596/198044716-1083215f-43a4-49bb-9791-19eed2b64ae6.mp4

# Jour 25 : Corps

On rejoue avec matter.js, et une revisite du jour 18, avec ce coup ci une ragdoll qui se balade à l'écran. 
Tout le monde peut taper  "!corps" pour envoyer valser le corps à travers l'écran
Récupérez la page [25.html](25.html) et intégrez là en 1920x1080.

https://user-images.githubusercontent.com/64203596/197803424-51dc4680-770a-46f6-8f96-7f0a09561b25.mp4

# Jour 24 : Cabane

Aujourd'hui, un petit quiz ciné, avec 10 images de film avec une cabane dedans !
Récupérez la page [24.html](24.html) et intégrez là en 1920x1080.
Tapez "!quiz" ou "!cabane" pour lancer le quiz. Quand un viewer donne la bonne réponse, le titre s'affiche, le nom du viewer aussi, puis le quiz s'en va. 
Seul vous pouvez lancer le quiz, pas les viewers. 
Si personne trouve, vous pouvez taper "!stop" pour donner le titre et arrêter la question.

Bien sûr, le thème du jour est juste un pretexte pour vous fournir clé en main un outil qui vous permet de faire vos propres quiz maison en peu de temps ! 
Le jeu prend en compte une tolérance orthographique (il faut que le titre soit bien écrit à 80%) et vous pouvez choisir plusieurs orthographes possibles pour les réponses (pratique pour accepter les titres anglais et français par exemple)

La seule chose à faire, c'est rajouter des films à la liste en respectant cette syntaxe : 

```
            {
                "names": ["Orthographe acceptée 1", "Orthographe acceptée 2 (facultative)", "Orthographe acceptée 3 (facultative)"],
                "url": "url de votre image sur le net"
            },

```

Have fun !

https://user-images.githubusercontent.com/64203596/197613605-73f98db9-281a-4335-b3aa-6b42318ba42f.mp4

# Jour 23 : Peur

BOUH ! 
Aujourd'hui, un projet un peu plus customisable pour vous que d'habitude. En tapant "!peur" ou "!bouh", vous ferez pop une image au hasard parmis plusieurs que vous aurez choisi ! J'en ai mis quelques unes pour l'exemple. Il suffit de rajouter des URLs d'image à la variable images dans le code !
L'image popera au hasard entre 8 positions prédéfinies. Donc projet réadaptable à l'infini...
Récupérez la page [23.html](23.html) et intégrez là en 1920x1080.

https://user-images.githubusercontent.com/64203596/197408690-d5a92444-78b8-4aa5-8bba-0a4894e624c0.mp4

# Jour 22 : Château

C'est jour de tournoi ! 
Affrontez le meilleur viewer (en commencant par le streameur / la streameuse).
Tapez "!chateau" pour défier le tenant du titre en cours, et essayez de prendre sa place ! 
Le tenant du titre part de la gauche, le challenger part de la droite !
Récupérez la page [22.html](22.html) et intégrez là en 1920x1080.

https://user-images.githubusercontent.com/64203596/197344755-dc586286-d021-4655-a748-d62cc066788c.mp4

# Jour 21 : Câlin

Oh non, le gif de câlin le plus connu du net est triste :(
Remplissez sa jauge de câlin avec la commande !calin !
Attention, il finira toujours par vous en redemander. 
Récupérez la page [21.html](21.html) et intégrez là en 500x500.

https://user-images.githubusercontent.com/64203596/197203543-91b9644e-e6e0-403e-aa88-390e123ae08f.mp4

# Jour 20 : Foule

Chaque viewer peut avoir son propre emoji qui se balade en bas de l'écran ! Il suffit de taper "!foule + un emoji" (exemple : "!foule 😍" et le viewer aura son petit 😍 qui se balade)
Un emoji par viewer, il peut changer quand il veut avec la même commande et un autre emoji.

Le streamer / La streameuse peut rajouter de son côté soit son propre emoji aussi, soit X emoji d'un coup pour peupler un peu la foule, en tapant "!foule X" (X allant de 1 à 100 max à chaque fois)

Récupérez la page [20.html](20.html) et intégrez là en 1920x1080.

https://user-images.githubusercontent.com/64203596/197043582-25c26958-8844-4f00-b36b-0ed48cc064f6.mp4

# Jour 19 : Concentré

Il faut rendre à Wall-E ce qui appartient à César... En tapant "!concentré", vos viewers seront compressés et Wall-E s'en débarrasera ! 
Récupérez la page [19.html](19.html) et intégrez là en 1920x1080.

https://user-images.githubusercontent.com/64203596/196722842-21bd23d7-5ddf-4dee-b44d-4cb2e4902d77.mp4

# JOUR 18 : Fragile

Vos viewers vont pouvoir se prendre pour des livreurs chronopost aujourd'hui : En tapant "!fragile", le colis est très gentiment traité avec amour et délicatesse !
Récupérez la page [18.html](18.html) et intégrez là en 1920x1080.

https://user-images.githubusercontent.com/64203596/196501774-5555dc7e-b482-415e-9bd4-e72c18648a05.mp4

# JOUR 17 : Pont

Parce qu'en tant que streamer on est quand même pas grand chose sans notre communauté pour nous soutenir, aujourd'hui les viewers nous soutiennent au sens litteral ! 
Quand un viewer tapes "!pont", ça créé un pont du nom du viewer pour faire passer le train de la hype
Récupérez la page [17.html](17.html) et intégrez là en 1920x1080.

https://user-images.githubusercontent.com/64203596/196159217-91c3f3a9-6062-4375-a391-b3af07b4605d.mp4

# JOUR 16 : Espace

Parce qu'on a pas tous les jours le temps, le projet du jour m'a vraiment pas pris longtemps, mais au final c'est ptêtre le premier que je vais vraiment utiliser en live !
Tapez "!espace" pour changer l'image de fond par une random image en 1920x1080 sur le thème de l'espace. 
Ca passe plutôt bien pour un fond de stream ! 
Récupérez la page [16.html](16.html) et intégrez là en 1920x1080.

https://user-images.githubusercontent.com/64203596/196155176-9864f12c-fec0-48cc-8e40-cf123107e099.mp4

# JOUR 15 : Pic-Nic

Petit jeu simple aujourd'hui : Quand un viewer tapes "!picnic", ça fait tomber un emoji à emporter dans le panier ! Si ça tombe dedans, alors le viewer marque un point. En tant que streamer/streameuse, vous pouvez afficher ou non le score avec la commande "!score".
Récupérez la page [15.html](15.html) et intégrez là en 1920x1080.

https://user-images.githubusercontent.com/64203596/195992721-1a29463a-e456-4a6c-9f5e-0ddfc5cde73f.mp4

# JOUR 14 : Lumière

Petit hommage aux Monty Python aujourd'hui !
Récupérez la page [14.html](14.html) et intégrez là en 1920x1080.

Un monstre a enlevé la lumière ! Il faut qu'un viewer tapes "!lumière" pour rallumer ! Mais attention, le monstre finira par revenir.
Vous pouvez régler vous même la fréquence à laquelle le monstre revient en tapant "!monstre durée_en_seconde" (Exemple : "!monstre 60" le monstre reviendra toutes les minutes.)

https://user-images.githubusercontent.com/64203596/195850829-05c03558-c6e8-47ed-be67-e1243b4515e1.mp4

# JOUR 13 : Baignade

Quand un viewer tapes "!baignade", son pseudo s'avance sur un plongeoir et saute dans une piscine. 
2 animations possibles au hasard, "je plonge" ou "j'ai peur". 
Je voulais faire plus d'animation des pseudos, notamment en rotation, mais j'ai pas réussi faute de temps et de compréhension du CSS.
Je suis parti trop loin, j'ai voulu faire trop de trucs, résultat le final est pas aussi bien que ce que je voulais. Tant pis, c'est le jeu, je ferai plus simple demain !
Récupérez la page [13.html](13.html) et intégrez là en 1920x1080

https://user-images.githubusercontent.com/64203596/195716696-0d572680-937f-4e51-9eff-fd9f086e384a.mp4

# JOUR 12 : Nuages

On joue un peu avec l'aléatoire aujourd'hui ! Si un viewer tapes !nuage, ça rajoute un nuage, à vitesse aléatoire mais plus ou moins rapide selon sa distance, et positionnement aléatoire. Si vous, en tant que streamer, vous tapez "!meteo beau", ça fait pop quelques nuages par minute en boucle. "!meteo moche", et là ça va envoyer la tempête ! "!meteo stop" pour arrêter.
Récupérez la page [12.html](12.html) et intégrez là à la taille que vous voulez. 

https://user-images.githubusercontent.com/64203596/195551970-618d754f-fbc2-4506-b783-10fa1a126598.mp4

# JOUR 11 : Transport
Peut être celui où je me suis le plus amusé avec les lasers ! Mais du coup je me suis laissé un peu emporté par mon élan et j'ai un peu de retard 🙂 
Chaque fois qu'un viewer tapes "!transport", ça fait pop un emoji de transport avec son animation dédiée ! C'est aléatoire, et il y en a 15 en tout.
Récupérez la page [11.html](11.html) et intégrez là à la taille que vous voulez ! 

https://user-images.githubusercontent.com/64203596/195309971-0a3f1049-8179-47dd-9006-e0c9b1160c9c.mp4

# JOUR 10 : Motif
Une page au motif évolutif : Chaque lettre tapée dans le chat fait changer les cases, à chaque lettre sa couleur et sa forme. Donc vous pouvez théoriquement relire le chat en décryptant les formes et les couleurs !
Récupérez la page [10.html](10.html) et intégrez là à la taille que vous voulez ! 
Vous pouvez aussi taper !random ou !fill ou !remplir pour remplir l'intégralité des formes avec une forme et une couleur au hasard !

https://user-images.githubusercontent.com/64203596/194961531-52bb9cf5-1614-4387-8291-597cda8a57d7.mp4

# JOUR 09 : Soirée
ET C'EST PARTI POUR LA GROSSE SOIREEEEEE ATTRAPE LES LASERS MAN C'EST TROP SUR 
Récupérez la page [09.html](09.html), intégrez là en 1920x1080 
Plein de petites variantes pour aujourd'hui : 
Si un viewer tapes "!laser", ça rajoute un laser d'une couleur random.
Si un viewer tapes "!laser couleur", couleur pouvant valoir un nom de couleur en anglais, ou un code hexa, ça rajoute un laser de la couleur demandée.
Il y a une limite de 30 lasers max dans la scène. 

Niveau streamer maintenant : 
!clear supprimes tous les lasers
!lasershow lance un LASER SHOW AVEC 40 LASERS MULTICOLORES pendant 30 secondes
!lasershow + une durée en secondes = lasershow qui dure X secondes.

https://user-images.githubusercontent.com/64203596/194782008-e3c93528-21c3-4c61-a648-3f451891792f.mp4


# JOUR 08 : Légumes
Faites tomber un légume dans la soupe, elle prendra lentement la couleur du légume qui vient de tomber ! 
Récupérez la page [08.html](08.html), intégrez là en 1920x1080 puis redimensionnez là comme vous le souhaitez.

https://user-images.githubusercontent.com/64203596/194729384-6e6bdb88-98ed-42c7-9de0-6dd118727374.mp4

# JOUR 07 : Paysage
Plus paisble aujourd'hui, rajoutez simplement une fenêtre sur un joli paysage aléatoire issu de la librairie libre de droit Unsplash. Des milliers de possibilités ! 
Vos viewers peuvent taper "!paysage" pour changer de paysage. Récupérez la page [07.html](07.html), intégrez là en 1920x1080 puis redimensionnez là comme vous le souhaitez.

https://user-images.githubusercontent.com/64203596/194549288-81a84b99-af98-4b5d-9ba4-3b360bfc424f.mp4

# JOUR 06 : Gigantesque
Oh non, Mario prend toute la place sur le stream ! Demandez à vos viewers de l'aide en tapant "!carapace" pour le faire réduire de moitié ! 
Récupérez la page [06.html](06.html) et intégrez là en full screen sur le live
Vous pouvez choisir la durée de remplissage complet de Mario en changeant la variable "tempsPourMarioMaxEnSeconde" (défaut : 60 secondes)

https://user-images.githubusercontent.com/64203596/194279179-0f0db70d-2ba2-4153-94b5-ad94521e5e1f.mp4

# JOUR 05 : Sac à Dos
Jour 5 : Sac à dos
Sac à dos, Sac à dos ! 
Il y a tout dans le sac à dos de Dora ! Tapez !sacados pour faire pop un Emoji random de la liste entière des Emojis !
Récupérez la page [05.html](05.html) et intégrez là, et placez là où vous voulez, dans un ptit coin ou en grand !

https://user-images.githubusercontent.com/64203596/194069566-1745aa17-7b17-4ff9-adc5-a408316754ca.mp4

# JOUR 04 : Fenêtre

Il faut aérer un peu le stream ! Il se remplit de poussière au fur et à mesure. Tant que personne ne tape !fenetre, ça s'accumule ! 
Vous pouvez changer la durée avant remplissement total avec la variable rempliEnXSecondes. Valeur par défaut 60, donc rempli en 1 minute.
Récupérez la page [04.html](04.html) et intégrez là en full screen

https://user-images.githubusercontent.com/64203596/193740784-d51ee892-8154-499e-ba16-a8bcb7c63cd8.mp4

# JOUR 03 : Pot de Fleur

Rajoutez un pot de fleur sur votre stream ! Récupérez la page [03.html](03.html), intégrez là en full screen (vous pouvez crop/resize après)
Les viewers faire grandir la plante en tapant "arroser", ou en commencer une nouvelle en tapant "couper"
Chaque arbre est unique.
Vous pouvez changer les couleurs des feuilles dans le code en changeant les valeurs de _LEAFCOLOR. Vous pouvez en rajouter, en enlever. 

Le système de génération d'arbre a été grandement inspiré par les travaux de https://github.com/simondevyoutube/LSystems_JavaScript

https://user-images.githubusercontent.com/64203596/193544444-52083aa8-34b9-4e40-b5c0-e00c1f71b22c.mp4


# JOUR 02 : Lit

C'est l'heure de dormir ! Récupérez la page [02.html](02.html), intégrez là en full screen (ou non) : Chaque fois qu'un utilisateur tapera le mot "jour", il fera jour. "Nuit", il fera nuit. 

![jour02gif](https://i.gyazo.com/dc724417fa78b1fc1e9beda81d3a4315.gif)

# JOUR 01 : Forêt

Récupérez la page [01.html](01.html), intégrez là en full screen (ou non) : Chaque fois qu'un utilisateur tapera le mot "Forêt" (ou toute déclinaison avec ou sans accent / avec ou sans majuscule : forêt, FoReT, etc), un émoji forestier s'affichera à l'écran, à un endroit et une taille random !



![jour01gif](https://i.gyazo.com/cb2067c406d25a5b3d0cb8a01c678cde.gif)
