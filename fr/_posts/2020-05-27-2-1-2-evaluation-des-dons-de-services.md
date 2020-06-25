---
layout: post
title: 2.1.2. Évaluation des dons de services
lang: fr
lang-ref: 2-1-2
permalink: "/fr/guide/2_1_2-dons-de-services/"
section: 2

---
###

### Travail de bureau ou de gestion exécuté gratuitement par un professionnel :

Demander au donateur un document indiquant la valeur marchande des biens donnés ou des services rendus à titre gracieux, soit le prix qu’il facture habituellement pour ces biens ou services.

### Service de transport, de placement médias, ou autres fournisseurs de services:

Que le donateur soit un commerçant ou un OBNL, demander une facture indiquant le prix de détail et le montant du don (ou rabais). (Voir onglet _Modèles_ : facture_don_1, facture_don_2)

### Service de bénévoles

Généralement, le bénévolat n’est pas constaté dans les revenus et dépenses de l’organisme pour deux raisons, soit parce que l’évaluation de la juste valeur est trop difficile, ou parce que l’organisme n’a pas la capacité financière d’acheter ces services, donc la troisième condition voulant que, n’eût été ce don, il ait quand même acheté ces services, n’est pas remplie. Cependant, cette information peut être inscrite par voie de notes aux états financiers.

{% include accordion_example.html
example_text="**Services bénévoles non comptabilisés :** Les bénévoles consacrent environ 500 heures (750 en 20X0) par année à aider l’organisme ABC à assurer la prestation de ses services. En raison de la difficulté de déterminer la juste valeur des apports reçus sous forme de services, ceux-ci ne sont pas constatés dans les états financiers.

Dans le cas où l’organisme conclurait qu’il respecte également le critère voulant qu’il ait dû acheter ces services, il y aurait lieu de documenter la base d’évaluation choisie. Par exemple, en obtenant d’un fournisseur de services une estimation d’un taux horaire pour des services similaires, ou encore, en utilisant une politique salariale existante ou barème de salaires. (Voir onglet Barèmes)
Pour pouvoir divulguer ces informations aux états financiers, qu’ils soient constatés dans les produits de l’organisme ou par voie de notes, il faut que l’organisme mette sur pied un système lui permettant de collecter l’information. Par exemple, créer un registre (voir onglet Modèles: lien vers registre_bénévoles) dans lequel il est inscrit le nom du bénévole, la date à laquelle il a fait des heures de bénévolat et l’événement pour lequel il a fait du bénévolat.
"
%}

{% include yes_no.html
question="La juste valeur établie du don est-elle suffisamment fiable ?"
answer = 1
yes = ""
no = "Aucune constatation dans les états financiers. (also marks end of workflow - send them to an ending page)"
%}

{% include yes_no.html
question="Les biens ou services reçus sont-ils utilisés dans le cadre du fonctionnement courant ?"
answer = 1
yes = ""
no = "Aucune constatation dans les états financiers. (also marks end of workflow - send them to an ending page)"
%}

{% include yes_no.html
question="L'organisme aurait-il dû autrement les acheter?"
answer = 1
yes = "go to 2.2"
no = "Aucune constatation dans les états financiers. (also marks end of workflow - send them to an ending page)"
%}
