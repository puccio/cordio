// Implementare un servizio che ritorni un JSON contenente un array di immagini con le relative proprietà, esattamente come allImages.
// allImages dichiarato sotto , staticamente , è solo un esempio.

// Esempio per collegarsi al servizio e scaricare il JSON
// allImages = $.getJSON("http://urltest.com/api/getGallery", function(data) {
//     allImages = data;
// });

$( document ).ready(function() {

    allImages = {
        "numberOfimagesToShow": 8,                  // definisce quante immagini mostrare al caricamento della pagina
        "numberOfimagesToShowOnLoadmore": 8,        // definisce quante immagini mostrare al loadmore
        "text": 
            [
                 {
                    "description": "",
                    "category": "#all"
                 },
                 {
					"description": "Il cantiere emanava un’atmosfera ripetibile nel tempo, di rara bel lezza. Dopo secoli, il mio senso di attesa era rivolto all’uscio: ve der arrivare gli autori dei secoli passati, idecoratori, gli stucca tori, i pittori, il capomastro, allontanatisi per consumare la so litacolazione”. È Nino Cordio in persona a ricordare il suo “colpo di fulmine” con l’affresco, in un cantiere sul Palatino, a Roma, dove due restauratori sta vano lavorando alla ricerca e al la ricomposizione degli affre schi della Casa di Augusto. Edalle sue parole entusiastiche emergono anche le motivazioni profonde per una scelta così rara, una tecnica antica, impegnativa, faticosa. “Affronto una superficie grande, il paesaggio e la luce sono complici di questo entusiasmo, lavoro secondo laregola, dal levar del sole fino al calar della sera, preparando tempo prima l’arriccio e l’intonachino. Le sorprese e le perplessità giungono puntualmente l’indomani del lavoro pittorico: i colori schiariscono, l’unità stilistica e del tono mi sfuggono...”. Sorprese, perplessità: è il mistero della creazione che guida in ogni momento gli interessi dell’artista, la magia, l’alchimia di una patina che trasfigura un bronzo, di una morsura che esaspera i toni di un’acquaforte.L’incanto di un brano di intonaco affrescato, che asciugando restituisce colori insperati, studiate asperità, finanche fortuite incrinature. Ma l’affresco significa anchemettersi in una tradizione dal grande passato, far rivivere – fra i rarissimi artisti contemporanei – gesti che furono dei più grandi maestri della storia dell’arte. E poi contrapporre – con una determinazione che oggi potremmo leggere anche in chiave raffinatamente concettuale – una tecnica espressamente manuale, artigianale, esperta, alla deriva seriale, globale, spersonalizzante di tante recenti avanguardie.Agli affreschi Cordio si dedica dal 1985, nei lunghi periodi di permanenza nelle campagne umbre, che gli offrono un nuovo bagaglio tematico che si affianca alle suggestioni della terra natale. Piccole cose che si caricano di sensi profondissimi, si fanno portatrici di storie millenarie, nature morte a cui la materia arida, la superficie ruvida, le imprevedibili macchie e lacune danno un’affascinante scenografia. Dove i protagonisti sono un cesto con poche ciliegie, un piatto di uova o di pannocchie, qualche pane pronto per la festa.A volte la composizione si articola, come in “Ramo di melagrana II”, del 1985, dove la melagrana – che è un po’ una cifra per Cordio, quasi un“marchio di fabbrica” – si inserisce in un elegante viluppo di segni rapidi, una cornicedi impressioni grafiche di stampo orientaleggiante, che ne accentua il forte simbolismo. O come la più grande “Composizione paesaggio”, del 1992, dove inserisce l’artifizio, sempre vagamente teatrale, di memoria barocca, del “quadro nel quadro”. In altri casi Cordio riesce a forzare le possibilità dell’affresco fino a prove di marcato espressionismo, come in “Uccelli nel bosco” (1994), dove la figura perde quasi completamente i suoi connotati lasciando il campo alla suggestione. A volte l’eleganza dei toni e le scelte cromatiche rimandano a certe pitture pompeiane. Ma il “luogo” d’elezione di queste preziose composizioni, che a volte diventano quasi cammei, rimane legato al ripiegamento intimista, allo sguardo privato sull’oggetto. Al dramma pastorale che tutto disvela, che ha la sua summa nella grande “Pala laica”...",
                    "category": "#affreschi"
                 },
                 {
					"description": "Impegnato a sondare fin nel profondo le grandi possibilità espressive offerte dalla prediletta incisione, e più tardi anche dalla scultura, Nino Cordio affronteràraramente, nella sua parabola creativa, la pittura come tecnica della “sua” arte. Una scelta consapevole, confermata dal fatto che i dipinti che pure uscirono negli anni dalsuo studio, solo in rarissime occasioni vennero esposti al pubblico. Altre, più fisiche, più immediate, per certi versi più magiche erano le tecniche alle quali avrebbe affidato le sue pregnanti simbologie, le sue alchemiche trasparenze, l’improvvisa violenza di certi segni.Il suo incontro con la pittura risale agli anni dello studio all’istituto d’arte di Catania, ed è segnato – come egli ricorderà spesso – da una memorabile visita a una mostra di Antonello da Messina, allestita proprio a Messina nel 1953, una grande rivelazione, il primo contatto con la grande pittura universale. A Roma, dove giunge nel ‘57, l’artista riprende i pennelli, con lavori che si inseriscono nel clima dell’epoca – tardo­guttusiano, ancora con certi accenti neorealisti – ma che rimarcano le sue opzioni stilistiche già altrimenti palesate. “I suoi quadri – ha scritto Duilio Morosini, riferendosi proprio al periodo dell’esordio romano – ponevano, molto più delle acqueforti, l’accento sul marchio dei caratteri. Per la dilatazione delle immagini ed il piglio del segno: espressionistici, diciamo. Ma con una componente ritmica, nella impaginazione, tale da far pensare, vagamente, ai neri da vetrata dentro i quali il vecchio Rouault soleva chiudere la stravolta o ghignante “geografia” dei suoi volti di gente dagli insondabili sentimenti o condannabili perversità”.Anche nella pittura, per Cordio risulta assai incisivo il periodo trascorso a Parigi per una borsa di studio, nei primi anni Sessanta. In una serie di dipinti realizzati fra il ‘65 e il ‘66, paiono infatti evidenti certi incontri evidentemente favoriti dal clima francese, come il Matisse Nabis e orientaleggiante, influenze che rafforzano i caratteri espressionisti e fortemente simbolici nella pittura dell’artista, che rivede anche la suatavolozza, abbandonando i toni cupi degli esordi. Non affronta mai la figura umana, preferendo indagare i segreti delle piccole cose della natura, il gioco quasi metafisicodi un gruppo di nespole, o di un piatto di melagrane.Come intorno alla metà degli anni Ottanta, quando realizza una serie di olii piccoli e preziosi, una scelta di formato che tornerà presto anche negli affreschi. Per trovare un momento in cui la pittura torna protagonista nel mondo di Cordio, occorre giungere però agli ultimi anni della sua vita. Siamo in Umbria, e dallo studio immersofra gli ulivi escono grandi tele coloratissime, solo recentemente esposte al pubblico, e che ora campeggiano nelle sale centrali del museo. La pittura diventa adesso il mezzo dell’artista maturo per liberare tutti i freni, l’espressionismo perde i connotati storiografici per significare immedesimazione panica nella natura, gli squarci cromatici sono le parole impronunciabili di chi vorrebbe raccontare il sublime di una foglia, di un raggio di sole, di una lama di cielo. Sarebbe impresa vana cercare di dire questo, dopo che così ne ha scritto Andrea Camilleri: “Davanti alla potenza di quattro grandi olii, ho avuto come l’impressione che tutti noi corressimo il rischio di esplodere, ho avuto la sensazione che la cornice non riuscisse a contenere questa forza della natura, un’arte che riproduce e interpreta e inventa in qualche modo la natura stessa, ma con una forza talmente potente che i colori sembrano capaci di apparire all’improvviso e sfondare le pareti. Voglio dire, è tale la carica di ricreazione della Natura che per un momento hai una sensazione di sospensione, di vera paura come di fronte a un atto assoluto. <br> Rari sono i casi di artisti contemporanei che abbiano interpretato il disegno come mezzo espressivo autonomo e compiuto anche nella maturità. Per la gran parte dei contemporanei il disegno connota infatti precipuamente gli anni degli esordi, quando di presenta come un mezzo immediato ed efficace (e perché no, anche economico) per fissare sul foglio impressioni spontanee, suggestioni ambientali, esperienze plastiche.Non si distacca da questo schema Nino Cordio, i cui disegni conosciuti risalgono prevalentemente al finire degli anni cinquanta, periodo chiave in cui l’artista – ventenne – lascia la Sicilia per giungere a Roma. Non molti fogli, dai quali tuttavia riescono ad emergere tanti dei caratteri che l’artista ha già acquisito al proprio bagaglio visuale, e che poi ritorneranno in molta sua opera, dopo la virtuosa e pregnante cesura dell’esperienza parigina. Su tutto, la sicilianità. “La Sicilia continua a nutrire la vena ricca del Cordio romano – noterà anni dopo l’amico critico Guido Giuffrè –, una Sicilia meno tragica e più malinconica, meno cupa nel sapore acre del dramma quotidiano e più gonfia della nostalgia evocativa d’un destino mutato in mitoe in leggenda...”.Figure, perché l’attenzione del giovane disegnatore in questo momento di crescita si concentra sul mistero dell’uomo, dell’«altro», sulle infinite varianti di un carattere morfologico, di una disposizione psicologica. Figure come quella della “nonna dalla quale ha visto foggiare le prime forme nel pane che veniva lavorato nei modi tradizionali in occasioni di festa. Proprio lei che durante il terremoto si rammaricava al pensiero d’aver messo la pasta a lievitare e che sarebbe andata perduta”, come ricorda con Maria Vittoria Ronzini. O come quelle dei contadini che occupano le terrenella piana di Catania, visti nel 1956, nell’unico giorno in cui si allontana dall’amato Istituto d’Arte. Figure che riescono a comunicare la forza interiore, la fierezza, l’orgoglio, e la grande dignità del siciliano, figure che formalmente possono richiamare certe prove di Renato Guttuso, o di Giuseppe Migneco. Ma in cui Cordio riesce a sottrarsi a una radicazione di maniera, sublimandole nel clima di neorealismo espressionista ancora molto presente nell’ambiente romano, con venature di passione politica. Un’emancipazione consapevole, in cui l’artista èaccompagnato da importanti incontri, da quella necessità di contatto umano che lo accompagnerà per tutta la sua carriera. A partire dall’Istituto d’Arte di Catania, dove arriva dopo aver iniziato la sua formazione artistica fin dai dieci anni frequentando le botteghe artigiane di scultori e scalpellini, fra Santa Ninfa – dove era nato nel 1937 –e Mazara del Vallo.A Catania arriva nel 1951, ed i primi incontri sono con compagni che gli saranno amici per la vita, giovani di talento come Piero Guccione, o Franco Piruca. Incontri importanti, come quello con Carlo Levi, fra i primi ad aiutarlo e incoraggiarlo quando,nel 1957, si trasferisce a Roma, per frequentare l’Accademia di Belle Arti. Levi, scrittore vicino alla Sicilia tanto da dedicare ai problemi sociali dell’isola il libro «Le parole sono pietre», risultato di tre suoi viaggi in Sicilia, fra i primi a scrivere di Nino Cordio, presentando nel 1960 la sua prima mostra romana. Nella mostra Cordio espone le sue prime incisioni, i disegni rientrano nel cassetto, riposano quei profili decisi, quei nudi eleganti.",
                    "category": "#disegni"
                 },
                 {
					"description": "L’incisione “è” l’arte di Nino Cordio. È possibile affermare questo, senza con ciòdeprimere il valore di altre modalità espressive, la scultura in primis, che ne hanno fatto un artista a tutto tondo. Quando si giunge a muovere parole come quelle di Renato Guttuso, personaggio non certo facile alle lusinghe – “Nessuno come lui fa inItalia l’acquaforte a colori” – è evidente che ci troviamo di fronte ad una incontrovertibile affinità elettiva. Del resto fin dagli esordi Cordio si avvicina alle tecniche incisorie con un approccio sistematico e un’avidità conoscitiva che configura una sorta di predestinazione. Fin dal suo arrivo a Roma per gli studi accademici, l’incisione monopolizza l’attenzione del giovane artista, che nelle prime prove – “La Purfina”, 1959 – risente della regnante temperie neorealista identificabilenell’opera di Renzo Vespignani. Su cui Cordio innesta un’elaborata trama di segni, quell’intensa elaborazione emotiva che emerge in graffi , quasi gesti liberatorii che inqualche caso giungono a un cupo romanticismo. Il 1962 è un anno chiave nello sviluppo delle ricerche dell’artista, che giunge a Parigi grazie a una borsa di studio per approfondire le tecniche dell’incisione a colori. In una prima fase la sua attenzione è catturata dalle teorie di Stanley William Hayter, che nel suo Atelier 17 proponeva l’incisione realizzata con un’unica lastra incisa, inchiostrata con i diversi colori. Cordio realizza alcuni lavori con questa tecnica – “Pesce e fiori”, 1963 –, ma presto la accantona, individuandone i limiti nel fatto che le copie tirate in questa maniera risultano sostanzialmente tanti pezzi unici, monotipi, e questo contrasta con il principio che è alla base della calcografia, ovvero la serialità. La sua opzione cade dunque per una scuola che a Parigi contrastava il metodo Hayter, ovvero quella di Friedländer, che invece prevedeva la stampa di una lastra per ogni colore, col risultato di poter tirare tante copie identiche; questa sarà la sua scelta definitiva. Evidentemente da Parigi l’artista torna con prospettive rivoluzionate, in qualche casoanche a livello formale, come quando fanno la comparsa eleganti arabeschi tipici di un certo orientalismo di grande successo in Francia.E non tarda a farsi viva anche la comprensione delle istanze dell’informale, quando i fogli svelano superfici quasi astratte, in cui l’analisi della nuda materia e dell’innesto “fisico” di accenni figurali diventa assolutamente prevalente su esigenze narrative quisecondarie (“Fiore notturno” e “Alba sull’Etna”, entrambe del 1969). Con l’ingresso negli anni Settanta tuttavia si rafforza la tendenza a ricercare le risposte alle proprie crescenti istanze esistenziali nella insondabile grandezza della natura, ed in questa incomprimibile vocazione torna prepotentemente protagonista la Sicilia. Ecco fogli dove la padronanza ormai assoluta del colore si distende in stesure tonali di grande afflato poetico – “Mare notturno”, 1970, “Girasole a Santa Ninfa”, 1971 –, che paiono quasi contrapporsi a prove dove è la luce a farsi parte attiva, disegnando squarci di vita da sottoboschi cupi e intricati – “Arance cadute”, 1977, o la grande “Ultimo raggio di sole”, 1985.Ora l’incisione è per Nino Cordio quasi un mantra, un esercizio spirituale che accompagna ogni minuto del giorno, ogni stagione della vita, l’occhio di un artista sicuro su un mondo che non richiede più la sua presenza fisica.Ora che è difficile dire oltre, ci possono soccorrere solo le parole di un poeta. Le parole di un grande artista, prese a prestito da un poeta come Raffaele Carrieri. “E ora ascoltate le meravigliose parole del grande Hokusai che a settantacinque anni si firmava Gwakio Rojiu, che significa pazzo del disegno: Dall’età di sei anni avevo la mania di disegnare la forma degli oggetti. Verso i cinquant’anni avevo fatto un’infinitàdi disegni, ma tutto quello che feci prima del mio settantesimo anno non merita di essere considerato. A settantatre anni capii approssimativamente la vera struttura degli animali, delle erbe, degli uccelli e degli insetti. Così, a ottantanni, avrò potuto fare nuovi progressi, a novanta penetrerò il mistero delle cose, a cent’anni sarògiunto a un mondo meraviglioso, e quando avrò centodieci anni tutto quello che farò,un punto, una linea, tutto sarà vivente. Io domando a quanti vivranno finché io vivròdi vedere se avrò mantenuto la parola. Cordio ha scritto queste corolle e queste foglie come lettere d’amore. Se invece che telegrammi cifrati arrivasse fino a noi il gusto delle indagini reali, arriveremmo agli archivi della polizia segreta di qualche isola del Mediterraneo”.",
                    "category": "#incisioni"
                 },
                 {
					"description": "Sono nato a Santa Ninfa, tra Segesta e Selinunte...”. Questa decisa rivendicazione identitaria ha sempre accompagnato i discorsi di Nino Cordio, divenendo anche una sorta di dichiarazione poetica. E la dice lunga – nella sua icasticità – sull’attaccamento dell’artista alle sue profonde radici siciliane. E soprattutto sull’evidenza “plastica” a cui questo radicamento si àncora, su quelle forme, su quel magico occupare lo spazio a cui l’immaginario di Cordio affida la sua memoria. Forse anche un indiretto omaggio alla scultura ellenistica, a quell’abbandono degli ideali di bellezza e perfezione fisica del periodo classico su una via molto piùnaturalistica, che segnerà anche le scelte del Cordio scultore. Non a caso è la scultura il primo “medium” incontrato nella sua formazione, e rimarrà l’ambito in cui lascerà alcune delle sue prove più convincenti. Nel 1947 la famiglia si trasferisce da Santa Ninfa a Mazara del Vallo, ed è qui che avvengono, come ricorda Maria VittoriaRonzini, “i primi contatti con le botteghe. Prima lavora presso uno scultore del marmo, poi, a Trapani, da Don Diego intaglia il legno per i mobili. Si tratta di una scultura artigianale, ma è qui che impara la manualità e a padroneggiare la materia”.Con le prime opere compiute siamo nel 1957, l’anno dell’arrivo a Roma, ma soprattutto anni di studio, in cui le opere risentono in parte degli insegnamenti accademici. Come il “Ritratto di bambina”, terracotta di grande rigore formale e di linee classicheggianti, nella cui compostezza pare notarsi uno sguardo ad Aristide Maillol, modello molto in voga in quel periodo in ambito accademico. O magari al siciliano Francesco Messina, che nella figura umana ha saputo rinnovare gli stilemi in una modernissima classicità. Si cominciano a delineare comunque alcuni aspetti che poi saranno caratterizzanti nell’artista, come una certa tendenza al non finito, segno chiaro di insofferenza già presente per la politezza accademica, e che ricorre – fin da queste prime prove – nell’occhio. Quasi che la ricerca nell’introspezione psicologica delle figure, nell’intima malinconia esistenziale, rendesse secondaria la definitezza dell’occhio, eludibile elemento di proiezione esterna.Il periodo di approfondimento delle tecniche incisorie, con il soggiorno parigino, segna per l’artista un momentaneo accantonamento della ricerca scultorea, che torna protagonista verso la metà degli anni Sessanta. La crescita culturale, e del bagaglio visuale, ha nel frattempo “lavorato” anche sulle sue convinzioni circa la scultura, che infatti ora presenta soluzioni decise, e di marcata personalità. Come la grande libertà espressiva dei tanti bronzetti, il cui vigoroso espressionismo percorre una strada calcata anche da un grande come Pericle Fazzini, che il giovane Cordio potrebbe aver conosciuto nei primi anni romani, nella personale del ’58 alla Galleria Alibert, o in occasione dell’ottava Quadriennale, nel 1960. “I più terrestri bronzetti, dove un corpo macilento, un gesto, oppongono alla calibrata, mirabile evasione favolistica, riferimenti più umanamente puntuali”, come scrive più tardi Guido Giuffrè.Che dedica notazioni interessanti e poetiche alla scultura, anche a quella in legno con cui l’artista recupera le prime esperienze giovanili, alla fanciulla­dea (probabilmente si riferisce a “Ricordo della sposa”, del 1968, oggi esposto al Municipio di Santa Ninfa) “che tiene il campo assisa su un’invisibile onda, trasportataagile dalla ventata del mito, dove la levigata, eburnea politezza del viso e delle mani contrasta con la fuga moltiplicata dei panneggi”. Modi ora sicuri, con una grande consapevolezza dell’occupazione dello spazio, dell’espressività del gesto, del dialogo con la luce. Che resistono alle lusinghe delle mode – pop su tutte –, per consolidare un’oggettivazione del reale che, lungi dall’assecondare tendenze didascaliche, si muove semmai sul terreno dell’evocazione.",
                    "category": "#sculture"
                 }
            ],
        "images":
            [
                {
                    "src_low": "img/gallery/IN_59_Periferia-romana.jpg",
                    "src_high": "img/gallery/IN_59_Periferia-romana_high.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Periferia romana",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": "Il regalo che mi fece Giulietta Simionato per il mio matrimonio era una stampa rappresentante il Mar Mediterraneo, di un azzurro che al solo guardarlo risvegliava. Ciò che mi diede, dicendomi: “Ho scelto questo, perché la carta da parati del tuo appartamento è azzurra”, era un quadro di circa trenta centimetri per lato sul cui retro era stato annotato il titolo “Fiori a Selinunte” e in esso il mare, al centro di una grande cornice rettangolare bianca che lo circondava, esisteva come un universo interrotto. In una spiaggia che faceva percepire l'infinito, dei fiori gialli e viola che sembrava profumassero, erano illuminati dalla luce e risplendevano."
                },
                {
                    "src_low": "img/gallery/AF_94_Primavera.jpg",
                    "src_high": "img/gallery/AF_94_Primavera.jpg",
                    "src_audio": "",
                    "title": "Primavera",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_high": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Uccelli nel bosco",
                    "category": "#disegni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_high": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Pesce e fioria",
                    "category": "#disegni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_high": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Cielo azzurro",
                    "category": "#incisioni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_high": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Composizione verde Somlia",
                    "category": "#incisioni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_high": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "La casa del poeta",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_59_Periferia-romana.jpg",
                    "src_high": "img/gallery/IN_59_Periferia-romana.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Periferia romana",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": "Il regalo che mi fece Giulietta Simionato per il mio matrimonio era una stampa rappresentante il Mar Mediterraneo, di un azzurro che al solo guardarlo risvegliava. Ciò che mi diede, dicendomi: “Ho scelto questo, perché la carta da parati del tuo appartamento è azzurra”, era un quadro di circa trenta centimetri per lato sul cui retro era stato annotato il titolo “Fiori a Selinunte” e in esso il mare, al centro di una grande cornice rettangolare bianca che lo circondava, esisteva come un universo interrotto. In una spiaggia che faceva percepire l'infinito, dei fiori gialli e viola che sembrava profumassero, erano illuminati dalla luce e risplendevano."
                },
                {
                    "src_low": "img/gallery/AF_94_Primavera.jpg",
                    "src_high": "img/gallery/AF_94_Primavera.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Primavera",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_high": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Uccelli nel bosco",
                    "category": "#disegni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_high": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Pesce e fioria",
                    "category": "#disegni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_high": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Cielo azzurro",
                    "category": "#incisioni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_high": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Composizione verde Somlia",
                    "category": "#incisioni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_high": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "La casa del poeta",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_59_Periferia-romana.jpg",
                    "src_high": "img/gallery/IN_59_Periferia-romana.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Periferia romana",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/AF_94_Primavera.jpg",
                    "src_high": "img/gallery/AF_94_Primavera.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Primavera",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_high": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Uccelli nel bosco",
                    "category": "#disegni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_high": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Pesce e fioria",
                    "category": "#disegni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_high": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Cielo azzurro",
                    "category": "#incisioni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_high": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Composizione verde Somlia",
                    "category": "#incisioni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_high": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "La casa del poeta",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_59_Periferia-romana.jpg",
                    "src_high": "img/gallery/IN_59_Periferia-romana.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Periferia romana",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/AF_94_Primavera.jpg",
                    "src_high": "img/gallery/AF_94_Primavera.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Primavera",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_high": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Uccelli nel bosco",
                    "category": "#disegni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_high": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Pesce e fioria",
                    "category": "#disegni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_high": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Cielo azzurro",
                    "category": "#incisioni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_high": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Composizione verde Somlia",
                    "category": "#incisioni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_high": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "La casa del poeta",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_high": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Uccelli nel bosco",
                    "category": "#disegni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_high": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Pesce e fioria",
                    "category": "#disegni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_high": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Cielo azzurro",
                    "category": "#incisioni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_high": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Composizione verde Somlia",
                    "category": "#incisioni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_high": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "La casa del poeta",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_high": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Uccelli nel bosco",
                    "category": "#disegni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_high": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Pesce e fioria",
                    "category": "#disegni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_high": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Cielo azzurro",
                    "category": "#incisioni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_high": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Composizione verde Somlia",
                    "category": "#incisioni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_high": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "La casa del poeta",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
            ]
    };

    // rappresenta il numero di immagini presenti in gallery
    numberOfImagesShowed = 0;

    var htmlImagesGallery = "";

    if( !location.pathname.includes("index.html") ) {
        $.each(allImages.images, function(i, image) {

            if(numberOfImagesShowed == allImages.numberOfimagesToShow) 
                return;

            htmlImagesGallery += '\
                <div class="col-6 col-md-4 col-lg-3 painting-container">\
                    <div class="row painting-content">\
                        <div class="col-md-12 painting-container-img">\
                            <a href="' + image.src_high + '" data-toggle="lightbox" data-gallery="example-gallery" data-footer="<div class=modal-painting-container-title>' + image.title + '</div>\
                                <div class=modal-painting-container-year>' + image.year + '</div>';

                                if (image.src_audio !== "") {
                                    htmlImagesGallery += '<div class=modal-painting-container-audio><audio controls><source src=' + image.src_audio + ' type=audio/mpeg></audio></div>';
                                }
                                
                                htmlImagesGallery += '\
                                <div class=modal-painting-container-desc><p>' + image.description + '</p></div>">\
                                <img class="painting-container-img" src="' + image.src_low + '">\
                            </a>\
                        </div>\
                        <div class="col-md-12 painting-container-title">' + image.title + '</div>\
                        <div class="col-md-12 painting-container-year">' + image.year + '</div>\
                    </div>\
                </div>';

            numberOfImagesShowed++;
        })
    }

    // populate the gallery
    $("#gallery").prepend( htmlImagesGallery );

    $("#gallery-page .showmore").on('click', function() {

        // active anchor
        var clickedAnchor = $('.anchor.active').attr("href");

        // tutte le immagini della categoria cliccata
        var allImagesTemp = getImagesFromCategory(clickedAnchor);

        // il numero di immagini da mostrare
        var numberOfimagesToShowOnLoadmoreTemp = allImages.numberOfimagesToShowOnLoadmore;

        for(var i = numberOfImagesShowed; i < allImagesTemp.length && numberOfimagesToShowOnLoadmoreTemp > 0; i++, numberOfimagesToShowOnLoadmoreTemp--) {
            
            var newImages = '\
                <div class="col-6 col-md-4 col-lg-3 painting-container">\
                    <div class="row painting-content">\
                        <div class="col-md-12 painting-container-img">\
                            <a href="' + allImagesTemp[i].src_high + '" data-toggle="lightbox" data-gallery="example-gallery" data-footer="<div class=modal-painting-container-title>' + allImagesTemp[i].title + '</div>\
                                <div class=modal-painting-container-year>' + allImagesTemp[i].year + '</div>';

                                if (allImagesTemp[i].src_audio !== "") {
                                    newImages += '<div class=modal-painting-container-audio><audio controls><source src=' + allImagesTemp[i].src_audio + ' type=audio/mpeg></audio></div>';
                                }
                                
                                newImages += '\
                                <div class=modal-painting-container-desc><p>' + allImagesTemp[i].description + '</p></div>">\
                                <img class="painting-container-img" src="' + allImagesTemp[i].src_low + '">\
                            </a>\
                        </div>\
                        <div class="col-md-12 painting-container-title">' + allImagesTemp[i].title + '</div>\
                        <div class="col-md-12 painting-container-year">' + allImagesTemp[i].year + '</div>\
                    </div>\
                </div>';
            
            // appending new images
            $("#gallery .painting-container").last().after( newImages );

            // update the field
            numberOfImagesShowed++;
        }

        // if all images are showed, I can hide the button showmore
        if( numberOfImagesShowed == allImagesTemp.length ) {
            $('.showmore').hide();
        }

        return false;
    });

    $("#gallery-page .anchors .anchor").click(function() {

        // clicked anchor
        var clickedAnchor = $(this).attr("href");

        // clicked anchor
        var activeAnchor = $("#gallery-page .anchors .anchor.active").attr("href");

        // if anchor clicked is different to the current
        if(activeAnchor !== clickedAnchor) {

            // show showmore button
            $('.showmore').show();

            // hide collapsed text
            $('#gallery-page .accordion').css("display", "block");
            $('.accordion .collapse').collapse("hide");
            $('.accordion svg').css("transform", "initial");

            // all images of the gallery
            // var oldImages = $('.grid-item');
            var oldImages = $('#gallery .painting-container');

            // disabled all anchors link filters
            $("#gallery-page .anchors .anchor").removeClass("active");

            // set active anchor clicked
            $(this).addClass("active");

            // tutte le immagini della categoria cliccata
            var allImagesTemp = getImagesFromCategory(clickedAnchor);

            // il numero di immagini da mostrare
            var numberOfimagesToShow = allImages.numberOfimagesToShow;

            // initializing
            numberOfImagesShowed = 0;

            for(var i = 0; i < allImagesTemp.length && i < numberOfimagesToShow; i++) {

                var newImages = '\
                    <div class="col-6 col-md-4 col-lg-3 painting-container">\
                        <div class="row painting-content">\
                            <div class="col-md-12 painting-container-img">\
                                <a href="' + allImagesTemp[i].src_high + '" data-toggle="lightbox" data-gallery="example-gallery" data-footer="<div class=modal-painting-container-title>' + allImagesTemp[i].title + '</div>\
                                    <div class=modal-painting-container-year>' + allImagesTemp[i].year + '</div>';

                                    if (allImagesTemp[i].src_audio !== "") {
                                        newImages += '<div class=modal-painting-container-audio><audio controls><source src=' + allImagesTemp[i].src_audio + ' type=audio/mpeg></audio></div>';
                                    }
                                    
                                    newImages += '\
                                    <div class=modal-painting-container-desc><p>' + allImagesTemp[i].description + '</p></div>">\
                                    <img class="painting-container-img" src="' + allImagesTemp[i].src_low + '">\
                                </a>\
                            </div>\
                            <div class="col-md-12 painting-container-title">' + allImagesTemp[i].title + '</div>\
                            <div class="col-md-12 painting-container-year">' + allImagesTemp[i].year + '</div>\
                        </div>\
                    </div>';

                // appending new images
                $("#gallery .painting-container").last().after( newImages );

                // update the field
                numberOfImagesShowed++;
            }

            // removing old images
            oldImages.remove();

            // if all images are showed
            if( numberOfImagesShowed == allImagesTemp.length ) {
                $('.showmore').hide();
            }

            // show collapsed description if exist
            $('.card-body').text(getTextFromCategory(clickedAnchor));

            if(clickedAnchor === "#all") {
                $('#gallery-page .accordion').css("display", "none");
            }

        }

        return false;
    });

    if( window.location.hash && document.getElementById("gallery-page") ) {
        if( $("#gallery-page .anchors .anchor:not('.active')") && $("#gallery-page .anchors .anchor").length > 0 ) {
            $("#gallery-page .anchors .anchor[href='" + window.location.hash + "']").click();
        }
    }

    // return an array that contains the images of category passed
    function getImagesFromCategory(clickedAnchor) {
        var allImagesFromCategory = [];

        for(var i = 0; i < allImages.images.length; i++) {
            if( clickedAnchor === "#all" ) {
                allImagesFromCategory = allImages.images;
                break;
            } else if (allImages.images[i].category === clickedAnchor) {
                allImagesFromCategory.push(allImages.images[i]);
            }
        }

        return allImagesFromCategory;
    }

    // return text of category passed
    function getTextFromCategory(clickedAnchor) {
        for(var i = 0; i < allImages.text.length; i++) {
            if (allImages.text[i].category === clickedAnchor) {
                return allImages.text[i].description;
            }
        }
    }

    // lightbox configuration: http://ashleydw.github.io/lightbox/
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();

        $(this).ekkoLightbox({
            alwaysShowClose: true,
            showArrows: false
        });

    });

    $('#accordionExample .card button').on('click', function () {
        var flag = false;
        if($(this).children('svg').css("transform") != "none") {
            flag = true;
        }
        $('svg').css("transform", "initial");
        
        if(!flag) {
            $(this).children('svg').css("transform", "rotate(180deg)");
        }
    })

});
