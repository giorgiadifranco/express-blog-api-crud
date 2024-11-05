
# 04/11/2024

Usando l'array dei post fornito con le relative immagini:

1. creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
    -->Tutte le risposte saranno in json.

2. All'interno creare le seguenti rotte:

    a. / - index: ritornerà un html con una ul che stamperà la lista dei post

    b. /:slug - show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post


3. Scrivere tutte le funzioni delle rotte nel controller dedicato

4. Registrare il router dentro app.js con il prefisso posts/.



## Bonus
Creare inoltre un filtro in querystring per tag, che ritorna in formato json tutti i post che hanno quei tag
Aggiungi il metodo store per la creazione di un nuovo post


## 05/11/2024

Per il nostro blog, concentriamoci sul creare una rotta:

a. la rotta dovrá rispondere al verbo POST e delegare un metodo store del controller dei posts per effettuare le operazioni di creazione della risorsa.

b. Questa dovrà riceve i dati in formato json e dovrà restituire l'elenco dei posts in formato json incluso il nuovo elemento appena creato

c. Tutte le funzioni delle rotte dovranno essere scritte nel controller dedicato.

d. Testare le rotte tramite Postman.


-->Bonus<--

e. modificate la rotta index creata ieri (commentala via) e ricreala restituendo un JSON con la lista dei posts invece di un ul.

f. persistenza: come visto in classe usa il modulo fs per salvare la nuova array nel file dopo aver inserito un nuovo elemento grazie alla rotta store creata

g. e se volessi aggiornare un post? sapresti implementare la rotta update per aggiornare una risorsa esistente?