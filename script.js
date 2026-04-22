
// --- ZENTRALES GLOSSAR-REGISTER ---
// WICHTIG: Dieses Glossar darf KEINE Hinweise in Aufgabenstellungen geben.
// Die data-definition wird nur für Sätze im Fließtext genutzt.
const glossaryDictionary = {
    "Defizitorientiert": "Eine Sichtweise (Medizinisches Modell), die den Fokus primär auf die Fehler, Schwächen oder Diagnosen eines Individuums legt.",
    "Bedarfsorientiert": "Eine Sichtweise (Soziales Modell), die den Fokus auf die Umgebungsbarrieren und den daraus resultierenden Unterstützungsbedarf legt.",
    "NTA": "Nachteilsausgleich: Eine reaktive, oft stigmatisierende Maßnahme, um individuelle Nachteile aufgrund von Diagnosen auszugleichen (z.B. Zeitzugabe).",
    "UDL": "Universal Design for Learning: Ein präventives Konzept, das Lernumgebungen von vornherein so flexibel gestaltet, dass sie für die größtmögliche Vielfalt zugänglich sind.",
    "Assistierte Freiheit": "Das Konzept, dass Freiheit und Autonomie durch soziale Unterstützung und Assistenz erst ermöglicht und nicht eingeschränkt werden.",
    "Barrierefreiheit": "Die proaktive Gestaltung von Umwelt und Lehre, sodass diese von allen Menschen ohne zusätzliche Hilfen oder Sonderlösungen genutzt werden können.",
    "Belonging": "Enhanced sense of belonging: Ein vertieftes, dauerhaftes Zugehörigkeitsgefühl in einer Gemeinschaft, das weit über das bloße körperliche 'Dabeisein' hinausgeht.",
    "Konstruktivismus": "Die erziehungswissenschaftliche Annahme, dass Merkmale wie 'Leistungsschwäche' nicht naturgegeben sind, sondern durch soziale Normen und Bewertungspraktiken der Schule erst erschaffen werden.",
    "Naturalistisch": "Ein Differenzverständnis, das Eigenschaften wie 'Behinderung' als medizinisch vorgängige, im Individuum verankerte Naturtatsache ansieht.",
    "Othering": "Der Prozess, durch den Individuen oder Gruppen als 'die Anderen' markiert und von einer als 'normal' definierten Mehrheit abgegrenzt werden.",
    "Doing Difference": "Soziale Praktiken und Handlungen (z.B. durch Lehrkräfte), die Differenzen und Abweichungen der Lernenden aktiv betonen, dramatisieren oder stigmatisieren.",
    "Undoing Difference": "Pädagogisches Handeln, das Differenzen entdramatisiert und präventiv Mechanismen der Exklusion und Stigmatisierung abbaut.",
    "Meritokratie": "Ein Gesellschaftssystem, in dem soziale Positionen und Lebenschancen primär durch individuelle Leistung legitimiert und vergeben werden.",
    "meritokratische Leistungsprinzip": "Die gesellschaftliche Norm, nach der Status und Belohnung ausschließlich auf individueller, messbarer Leistung basieren, was oft im Widerspruch zu inklusiven Werten steht.",
    "Antinomie": "Ein grundlegender, unauflösbarer Widerspruch. Hier: Die Schule muss nach Leistung selektieren, soll aber gleichzeitig alle bedingungslos inkludieren.",
    "Paradoxon": "Das meritokratische Paradoxon beschreibt den systemischen Konflikt, dass Inklusion Hierarchien abbauen will, während das Gymnasium historisch auf Leistungshierarchien aufbaut.",
    "Mainstreaming": "Eine integrationspädagogische Praxis der 90er Jahre, bei der Kinder mit Beeinträchtigungen nur dann in Regelschulen platziert wurden, wenn sie sich an die bestehende Norm anpassen konnten.",
    "Kaskadenmodell": "Ein System abgestufter sonderpädagogischer Einrichtungen, durch das Kinder je nach 'Abweichung' geschleust werden.",
    "UN-BRK": "UN-Behindertenrechtskonvention: Ein völkerrechtlich bindender Vertrag der Vereinten Nationen von 2006, der die Rechte von Menschen mit Beeinträchtigungen schützt und ein inklusives Bildungssystem fordert.",
    "Subsidiär": "Unterstützend oder nachrangig eingreifend. Ein Verfahren darf erst eingeleitet werden, wenn alle primären, präventiven Maßnahmen der Regelschule ausgeschöpft sind.",
    "Ressourcenvorbehalt": "Eine gesetzliche Klausel, die es der Schulaufsicht erlaubt, den Elternwillen auf Inklusion abzulehnen, wenn es der Regelschule massiv an personellen oder räumlichen Mitteln fehlt.",
    "Trennungsgebot": "Der Grundsatz, dass Diagnostik nicht durch Lehrkräfte der eigenen Schule durchgeführt werden soll, um interessensgeleitete Zuweisungen (z.B. das 'Abschieben' von Kindern) zu verhindern.",
    "Ressourcen-Etikettierungs-Dilemma": "Der Systemwiderspruch, dass ein Kind erst formell mit einem Defizit etikettiert (diagnostiziert) werden muss, bevor es die benötigten Förderressourcen erhält.",
    "Theorie sozialer Vergleichsprozesse": "Ein sozialpsychologischer Ansatz (Festinger), der besagt, dass Menschen sich bevorzugt mit einer ihnen ähnlichen Bezugsgruppe vergleichen, um ihren Selbstwert positiv zu evaluieren.",
    "Theorie integrativer Prozesse": "Ein Ansatz, der postuliert, dass ein extrem hohes Maß an Diversität und Heterogenität Ausgrenzungen verhindert, da Abweichungen in der Vielzahl an Unterschieden nicht mehr auffallen.",
    "Formatives Assessment": "Lernbegleitende, diagnostische Überprüfung des Leistungsstandes mit dem Ziel, den weiteren Lernprozess durch Anpassung der Lehrmethoden optimal zu steuern.",
    "Summatives Assessment": "Zusammenfassende, bilanzierende Bewertung am Ende eines Lernabschnitts (z. B. durch Notenzeugnisse), die oft der Selektion dient.",
    "Kybernetik": "Die Wissenschaft der Steuerung und Regelung von Systemen. In der Pädagogik: Der Prozess, durch Feedback Kurskorrekturen beim Lernen vorzunehmen.",
    "Hattie-Studie": "Eine weltweite, groß angelegte Meta-Analyse von John Hattie, die die Wirksamkeit (Effektstärke d) unterschiedlicher pädagogischer Maßnahmen auf den Schulerfolg vergleicht."
};

// --- GLOBALE TOOLTIP STEUERUNG (verhindert das Abschneiden in Modals) ---
function createGlobalTooltip() {
    let tt = document.getElementById('global-tooltip');
    if (!tt) {
        tt = document.createElement('div');
        tt.id = 'global-tooltip';
        tt.className = 'global-tooltip';
        tt.setAttribute('role', 'tooltip');
        tt.setAttribute('aria-live', 'polite');
        document.body.appendChild(tt);
    }
    return tt;
}

function showTooltip(event, text) {
    const tt = createGlobalTooltip();
    tt.innerText = text;
    tt.classList.add('show');
    
    // Position des Wortes auf dem Bildschirm auslesen
    const rect = event.target.getBoundingClientRect();
    
    // Grundposition berechnen (mittig über dem Wort)
    let top = rect.top - tt.offsetHeight - 10;
    let left = rect.left + (rect.width / 2) - (tt.offsetWidth / 2);
    
    // Kollisionsprüfung mit dem oberen Bildschirmrand
    if (top < 10) {
        top = rect.bottom + 10; // Wenn oben kein Platz, zeige es unterhalb an
    }
    
    // Kollisionsprüfung mit dem linken und rechten Bildschirmrand (Löst das Problem auf deinem Screenshot!)
    if (left < 10) {
        left = 10; // Mindestens 10px vom linken Rand entfernt bleiben
    } else if (left + tt.offsetWidth > window.innerWidth - 10) {
        left = window.innerWidth - tt.offsetWidth - 10; // Mindestens 10px vom rechten Rand entfernt bleiben
    }
    
    tt.style.top = top + 'px';
    tt.style.left = left + 'px';
}

function hideTooltip() {
    const tt = document.getElementById('global-tooltip');
    if (tt) tt.classList.remove('show');
}

function initGlossary() {
    createGlobalTooltip(); // Tooltip unsichtbar ins DOM laden
    
    // Sucht Glossar-Begriffe im Fließtext UND nun auch gezielt in den Modals
    document.querySelectorAll('main p .glossary-term, main li .glossary-term, .modal-content .glossary-term').forEach(term => {
        const key = term.getAttribute('data-key') || term.innerText.trim();
        
        if (glossaryDictionary[key]) {
            term.setAttribute('data-definition', glossaryDictionary[key]);
            term.setAttribute('tabindex', '0'); 
            term.setAttribute('role', 'button');
            term.setAttribute('aria-expanded', 'false');
            
            // Neue Event-Listener rufen das intelligente Tooltip auf
            term.addEventListener('mouseenter', (e) => showTooltip(e, glossaryDictionary[key]));
            term.addEventListener('mouseleave', hideTooltip);
            term.addEventListener('focus', (e) => showTooltip(e, glossaryDictionary[key]));
            term.addEventListener('blur', hideTooltip);
        }
    });
}

// Hell/Dunkel Modus umschalten
function toggleTheme(forcedTheme = null) {
    const body = document.body;
    const currentTheme = body.dataset.theme;
    const newTheme = forcedTheme || (currentTheme === 'dark' ? 'light' : 'dark');
    
    body.dataset.theme = newTheme;
    const themeSelect = document.getElementById('set-theme');
    if (themeSelect) themeSelect.value = newTheme;
}

// Barrierefreiheitseinstellungen anwenden
function updateAccessibility(type, value) {
    const root = document.documentElement;
    switch(type) {
        case 'fontSize':
            root.style.fontSize = value;
            break;
        case 'fontFamily':
            document.body.style.fontFamily = value;
            break;
        case 'glossaryColor':
            root.style.setProperty('--glossary-bg', value);
            document.querySelectorAll('.glossary-term').forEach(el => {
                el.style.borderBottomColor = value;
            });
            break;
    }
}

// Ansichten wechseln mit Reset der Sprachausgabe
function showView(viewId) {
    // Sicherheitscheck: Verhindert den Aufruf gesperrter Sitzungen (notwendig für Iframe-Umgebungen wie OPAL)
    if (viewId !== 'home' && seminarConfig[viewId] && seminarConfig[viewId].active === false) {
        return; // Abbruch, wenn die Sitzung in der Konfiguration gesperrt ist
    }

    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const targetView = document.getElementById('view-' + viewId);
    if (targetView) {
        targetView.classList.add('active');
    }
    stopTTS(); // Sprachausgabe sofort stoppen
    window.scrollTo(0, 0);
}

// Modals oeffnen und schliessen (inklusive OPAL iframe Fix)
function openModal(event, modalId) {
    if (event) event.stopPropagation();
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    
    const modalContent = modal.querySelector('.modal-content');
    
    // OPAL iframe Fix: Berechne den oberen Bildschirmrand unabhängig vom Parent-Scroll
    if (event && event.pageY && event.clientY) {
        // pageY: Klick-Position im gesamten Dokument
        // clientY: Klick-Position im aktuell sichtbaren Fenster
        // Die Differenz ergibt exakt den Bereich, der nach oben weggescrollt wurde
        let scrollOffset = event.pageY - event.clientY;
        let topPos = scrollOffset + 60; // 60px Abstand vom oberen Rand für eine saubere Optik
        
        if (topPos < 20) topPos = 20;
        modalContent.style.marginTop = topPos + 'px';
    } else {
        // Fallback, falls kein Event-Objekt übergeben wurde
        modalContent.style.marginTop = (window.scrollY + 60) + 'px';
    }
    
    modal.style.height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) + 'px';
    initGlossary(); // Glossar im Modal initialisieren
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    stopTTS(); // Stoppt die Sprachausgabe (TTS) sofort beim Schließen des Popups
}

// --- LOGIK SITZUNG 1 ---

// Schaltet die erste Aufgabe nach Bestätigung des Lesens frei
function unlockFirstTaskS1() {
    const firstTask = document.getElementById('s1-concept1-box');
    if (firstTask) {
        unlockBox(firstTask);
    }
}

// --- Auswertung Thesen-Check ---
let thesisAnswers = { 's1-t1': null, 's1-t2': null, 's1-t3': null };

function toggleThesis(btn, group, value) {
    // Farbe aller Buttons dieser Gruppe zurücksetzen
    document.querySelectorAll('.' + group).forEach(el => {
        el.style.backgroundColor = 'var(--card-bg)';
        el.style.color = 'var(--accent-color)';
    });
    // Aktiven Button hervorheben
    btn.style.backgroundColor = 'var(--accent-color)';
    btn.style.color = '#ffffff';
    thesisAnswers[group] = value;
}

function checkS1Theses() {
    const feedback = document.getElementById('s1-theses-feedback');
    const nextBox = document.getElementById('s1-slider-box');

    feedback.style.display = 'block';

    if (!thesisAnswers['s1-t1'] || !thesisAnswers['s1-t2'] || !thesisAnswers['s1-t3']) {
        setFeedback(feedback, 'warn', 'Hinweis: Bitte bewerten Sie zunächst alle drei Thesen.');
        return;
    }

    if (thesisAnswers['s1-t1'] === 'inkorrekt' && thesisAnswers['s1-t2'] === 'korrekt' && thesisAnswers['s1-t3'] === 'inkorrekt') {
        setFeedback(feedback, 'success', '<strong>Hervorragend!</strong><br>Sie haben die Thesen korrekt nach Bielefeldt bewertet: Autonomie benötigt <em>Assistenz</em> (These 1 inkorrekt), Gleichheit fordert proaktive <em>Barrierefreiheit</em> (These 2 korrekt) und Brüderlichkeit zielt auf tiefe <em>gesellschaftliche Inklusion</em> ab, weit über physisches Dabeisein hinaus (These 3 inkorrekt).');
        unlockBox(nextBox);
    } else {
        setFeedback(feedback, 'error', '<strong>Noch nicht ganz korrekt.</strong><br>Tipp: Autonomie bedeutet nach Bielefeldt "Assistierte Freiheit"[cite: 80]. Zudem ist das Ziel der Inklusion mehr als nur physisches "Dabeisein" (Integration)[cite: 97, 98].');
    }
}

// --- Live-Feedback interaktiver Slider (Von Exklusion zu Inklusion) ---
function updateSliderFeedback() {
    const sliderVal = document.getElementById('s1-slider').value;
    const feedbackBox = document.getElementById('s1-slider-live-feedback');
    const btn = document.getElementById('s1-slider-btn');

    let feedbackText = "";
    let isCorrect = false;

    switch(sliderVal) {
        case "1":
            feedbackText = "<strong>Exklusion:</strong> Das Kind wäre komplett vom Schulsystem oder der Regelschule ausgeschlossen[cite: 97]. Passt dies auf die beschriebene Situation?";
            break;
        case "2":
            feedbackText = "<strong>Separation (Korrekt!):</strong> Das Kind besucht zwar die gleiche Schule (Gebäude), wird aber in den Kernfächern isoliert im Nebenraum unterrichtet[cite: 64]. Dies ist eine klassische räumliche Separation im Kaskadenmodell.";
            isCorrect = true;
            break;
        case "3":
            feedbackText = "<strong>Integration:</strong> Das Kind wäre im selben Raum und müsste sich an die vorgegebenen Normen anpassen (Mainstreaming)[cite: 52, 64]. Im beschriebenen Fall wird es jedoch räumlich getrennt.";
            break;
        case "4":
            feedbackText = "<strong>Inklusion:</strong> Das System hätte sich angepasst (z.B. durch UDL), sodass alle gemeinsam bedarfsgerecht am selben Lerngegenstand arbeiten können[cite: 59, 110]. Das ist hier nicht der Fall.";
            break;
    }

    feedbackBox.innerHTML = feedbackText;
    
    // Visuelles Feedback je nach Richtigkeit
    if(isCorrect) {
        feedbackBox.style.backgroundColor = '#d4edda'; 
        feedbackBox.style.color = '#155724'; 
        feedbackBox.style.border = '1px solid #c3e6cb';
        btn.style.display = 'block'; // Weiter-Button anzeigen
    } else {
        feedbackBox.style.backgroundColor = '#f8d7da'; 
        feedbackBox.style.color = '#721c24'; 
        feedbackBox.style.border = '1px solid #f5c6cb';
        btn.style.display = 'none';
    }
}

function unlockNextFromSlider() {
    const nextBox = document.getElementById('s1-flip-box');
    if (nextBox) {
        unlockBox(nextBox);
    }
}

// --- Live-Feedback interaktiver Slider (Von Exklusion zu Inklusion) ---
function updateSliderFeedback() {
    const sliderVal = document.getElementById('s1-slider').value;
    const feedbackBox = document.getElementById('s1-slider-live-feedback');
    const btn = document.getElementById('s1-slider-btn');

    let feedbackText = "";
    let isCorrect = false;

    switch(sliderVal) {
        case "1":
            feedbackText = "<strong>Exklusion:</strong> Das Kind wäre komplett vom Schulsystem oder der Regelschule ausgeschlossen. Passt dies auf die beschriebene Situation?";
            break;
        case "2":
            feedbackText = "<strong>Separation (Korrekt!):</strong> Das Kind besucht zwar die gleiche Schule (Gebäude), wird aber in den Kernfächern isoliert im Nebenraum unterrichtet. Dies ist eine klassische räumliche Separation.";
            isCorrect = true;
            break;
        case "3":
            feedbackText = "<strong>Integration:</strong> Das Kind wäre im selben Raum und müsste sich an die vorgegebenen Normen anpassen. Im beschriebenen Fall wird es jedoch separiert.";
            break;
        case "4":
            feedbackText = "<strong>Inklusion:</strong> Das System hätte sich angepasst (z.B. durch UDL), sodass alle gemeinsam bedarfsgerecht am selben Lerngegenstand arbeiten können. Das ist hier nicht der Fall.";
            break;
    }

    feedbackBox.innerHTML = feedbackText;
    
    // Visuelles Feedback je nach Richtigkeit
    if(isCorrect) {
        feedbackBox.style.backgroundColor = '#d4edda'; 
        feedbackBox.style.color = '#155724'; 
        feedbackBox.style.border = '1px solid #c3e6cb';
        btn.style.display = 'block'; // Weiter-Button freischalten
    } else {
        feedbackBox.style.backgroundColor = '#f8d7da'; 
        feedbackBox.style.color = '#721c24'; 
        feedbackBox.style.border = '1px solid #f5c6cb';
        btn.style.display = 'none';
    }
}

function unlockNextFromSlider() {
    const nextBox = document.getElementById('s1-flip-box');
    unlockBox(nextBox);
}

// Freischaltung der finalen Reflexion nach den Flip-Cards
function unlockFirstTaskS1Final() {
    const transferBox = document.getElementById('s1-transfer-box');
    if (transferBox) {
        unlockBox(transferBox);
        // Setzt den Fokus barrierefrei direkt in das Textfeld
        setTimeout(() => document.getElementById('ans-s1-reflection').focus(), 600);
    }
}

// --- LOGIK SITZUNG 2 ---

// Schaltet die erste Aufgabe (Konzept-Check I) nach Bestätigung des Lesens frei
function unlockFirstTaskS2() {
    const firstTask = document.getElementById('s2-concept1-box');
    if (firstTask) {
        unlockBox(firstTask);
    }
}

// Konzept-Check I: Die Differenzverständnisse
function checkS2Concept1() {
    const q1 = document.querySelector('input[name="s2_concept_1"]:checked');
    const q2 = document.querySelector('input[name="s2_concept_2"]:checked');
    const feedback = document.getElementById('s2-concept1-feedback');
    const nextBox = document.getElementById('s2-concept2-box');

    feedback.style.display = 'block';

    if (!q1 || !q2) {
        setFeedback(feedback, 'warn', 'Hinweis: Bitte ordnen Sie beide Aussagen zu, um das Feedback freizuschalten.');
        return;
    }

    if (q1.value === 'konstruktivistisch' && q2.value === 'naturalistisch') {
        setFeedback(feedback, 'success', '<strong>Hervorragend!</strong><br>Sie haben die Diskurse nach Bräu korrekt erfasst. Ein naturalistisches Verständnis sieht das "Defizit" als Naturgegebenheit. Das konstruktivistische Verständnis hingegen erkennt, dass die Schule diese Differenzen durch ihre normativen Anforderungen erst erschafft.');
        unlockBox(nextBox);
    } else {
        setFeedback(feedback, 'error', '<strong>Noch nicht ganz korrekt.</strong><br>Tipp: Welche Perspektive sieht das Problem systemisch (als sozial konstruiert) und welche Perspektive sucht das Problem biologisch im Menschen (Natur)?');
    }
}

// Bias-Simulator (Ersatz für Konzept-Check II) - Meritokratie
function updateS2Bias() {
    const fachVal = parseInt(document.getElementById('s2-slider-fach').value);
    const habitusVal = parseInt(document.getElementById('s2-slider-habitus').value);
    
    const meter = document.getElementById('s2-bias-meter');
    const status = document.getElementById('s2-bias-status');
    
    // Logik: Der Habitus wirkt wie ein Filter/Bias auf die Fachleistung.
    // Eine hohe Fachleistung wird abgewertet, wenn der Habitus nicht der Schulnorm entspricht.
    const perceivedPerformance = (fachVal * 0.6) + (habitusVal * 0.4);
    
    meter.style.width = perceivedPerformance + '%';
    
    if (perceivedPerformance > 80) {
        meter.style.backgroundColor = 'var(--success-color)';
        status.innerText = "Note: Sehr Gut (1)";
        status.style.color = 'var(--success-color)';
    } else if (perceivedPerformance > 60) {
        meter.style.backgroundColor = 'var(--success-color)';
        status.innerText = "Note: Gut (2)";
        status.style.color = 'var(--success-color)';
    } else if (perceivedPerformance > 40) {
        meter.style.backgroundColor = 'var(--accent-color)';
        status.innerText = "Note: Befriedigend (3)";
        status.style.color = 'var(--accent-color)';
    } else if (perceivedPerformance > 20) {
        meter.style.backgroundColor = '#ffc107'; // Warn-Gelb
        status.innerText = "Note: Ausreichend (4)";
        status.style.color = '#856404';
    } else {
        meter.style.backgroundColor = '#dc3545'; // Error-Rot
        status.innerText = "Note: Mangelhaft (5) - Versetzungsgefahr";
        status.style.color = '#dc3545';
    }
}

function evaluateS2Bias() {
    const feedback = document.getElementById('s2-concept2-feedback');
    const nextBox = document.getElementById('s2-dilemma-box');

    feedback.style.display = 'block';
    
    setFeedback(feedback, 'success', 'Haben Sie bemerkt, dass Sie bei maximaler Fachkompetenz keine "1" erreichen konnten, wenn der kulturelle Habitus niedrig eingestellt war? Genau das kritisiert Bräu: Das Schulsystem reproduziert soziale Ungleichheiten, indem es unbewusst angepasstes Verhalten und den familiären Hintergrund mitbenotet. Wirkliche Inklusion erfordert es, diese Bewertungsmuster offenzulegen und zu dekonstruieren.');
    
    unlockBox(nextBox);
}

// Chat-Dilemma Steuerungsfunktionen
function revealChatPart2() {
    const part2 = document.getElementById('chat-part-2');
    if (part2 && part2.style.display === 'none') {
        part2.style.display = 'block';
        setTimeout(() => part2.classList.add('visible'), 50);
    }
}

function revealChatPart3() {
    const part3 = document.getElementById('chat-part-3');
    if (part3 && part3.style.display === 'none') {
        part3.style.display = 'block';
        setTimeout(() => part3.classList.add('visible'), 50);
    }
}

function revealChatSubmit() {
    const submitBtn = document.getElementById('chat-submit-btn');
    if (submitBtn && submitBtn.style.display === 'none') {
        submitBtn.style.display = 'block';
        setTimeout(() => submitBtn.style.opacity = '1', 50);
    }
}

// Lehrerzimmer-Dilemma Auswertung
function checkS2Dilemma() {
    const d1 = document.querySelector('input[name="s2_dilemma_1"]:checked');
    const d2 = document.querySelector('input[name="s2_dilemma_2"]:checked');
    const d3 = document.querySelector('input[name="s2_dilemma_3"]:checked');
    const feedback = document.getElementById('s2-dilemma-feedback');
    const nextBox = document.getElementById('s2-fallanalyse-box');

    feedback.style.display = 'block';

    if (!d1 || !d2 || !d3) {
        setFeedback(feedback, 'warn', 'Hinweis: Bitte wählen Sie für alle drei Aussagen eine passende theoriegeleitete Erwiderung aus.');
        return;
    }

    if (d1.value === 'correct' && d2.value === 'correct' && d3.value === 'correct') {
        setFeedback(feedback, 'success', '<strong>Exzellente Argumentation!</strong><br>Sie haben das meritokratische Prinzip erfolgreich dekonstruiert, den Konflikt sachlich als unauflösbare Antinomie benannt und mit dem Ansatz der "Entdramatisierung" (Undoing Difference) einen theoriegeleiteten, präventiven Ausweg für die Schulpraxis formuliert.');
        unlockBox(nextBox);
    } else {
        setFeedback(feedback, 'error', '<strong>Noch nicht ganz auf dem wissenschaftlichen Punkt.</strong><br>Vermeiden Sie utopische Extreme (wie eine Notenabschaffung) ebenso wie defizitorientierte Maßnahmen, die Lernende separieren oder öffentlich kennzeichnen (Othering/Doing Difference). Orientieren Sie sich an der sozialen Konstruktion von Leistung, der strukturellen Antinomie und an präventiven, entdramatisierenden Konzepten (Undoing Difference).');
    }
}

// Fallanalyse Auswertung
function checkS2Cases() {
    const fallA = document.querySelector('input[name="s2_fall_a"]:checked');
    const fallB = document.querySelector('input[name="s2_fall_b"]:checked');
    const fallC = document.querySelector('input[name="s2_fall_c"]:checked');
    const feedback = document.getElementById('s2-feedback');
    const transferBox = document.getElementById('s2-transfer-box');

    feedback.style.display = 'block';

    if (!fallA || !fallB || !fallC) {
        setFeedback(feedback, 'warn', 'Hinweis: Bitte ordnen Sie alle drei Unterrichtssituationen theoriegeleitet ein.');
        return;
    }

    if (fallA.value === 'doing' && fallB.value === 'undoing' && fallC.value === 'doing') {
        setFeedback(feedback, 'success', '<strong>Ausgezeichnet analysiert!</strong><br>Fall A beschämt öffentlich, Fall C separiert extrem (Othering) – beides sind Beispiele für "Doing Difference". Fall B ist präventiv (UDL) und baut Differenzen ab ("Undoing Difference").');
        unlockBox(transferBox);
        setTimeout(() => document.getElementById('ans-s2-reflection').focus(), 600);
    } else {
        setFeedback(feedback, 'error', '<strong>Das ist noch nicht korrekt.</strong><br>Tipp: Maßnahmen, die Lernende separieren, beschämen oder ihre Defizite öffentlich betonen, entsprechen dem Konzept "Doing Difference". Präventive Maßnahmen für alle entsprechen "Undoing Difference".');
    }
}

// Hilfsfunktionen für Feedback und Freischaltung
function setFeedback(el, type, text) {
    el.innerHTML = text;
    el.className = ''; // Reset classes
    if (type === 'success') {
        el.style.backgroundColor = '#d4edda'; el.style.color = '#155724'; el.style.border = '1px solid #c3e6cb';
    } else if (type === 'error') {
        el.style.backgroundColor = '#f8d7da'; el.style.color = '#721c24'; el.style.border = '1px solid #f5c6cb';
    } else {
        el.style.backgroundColor = '#fff3cd'; el.style.color = '#856404'; el.style.border = '1px solid #ffeeba';
    }
}

function unlockBox(el) {
    el.style.opacity = '1';
    el.style.pointerEvents = 'auto';
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- LOGIK SITZUNG 3 ---

function unlockFirstTaskS3() {
    const box = document.getElementById('s3-task1-box');
    if (box) unlockBox(box);
}

function s3TreeAnswer(step, isCorrect) {
    const feedback = document.getElementById('s3-tree-feedback');
    
    // Buttons der aktuellen Ebene visuell deselektieren
    const currentStepDiv = document.getElementById('s3-tree-step' + step);
    const buttons = currentStepDiv.querySelectorAll('button');
    buttons.forEach(b => {
        b.style.backgroundColor = 'var(--container-bg)';
        b.style.color = 'var(--accent-color)';
    });

    // Aktuell geklickten Button markieren (Workaround über event.target)
    if(event && event.target) {
        event.target.style.backgroundColor = 'var(--accent-color)';
        event.target.style.color = '#ffffff';
    }
    
    if (!isCorrect) {
        feedback.style.display = 'block';
        setFeedback(feedback, 'error', '<strong>Nicht ganz richtig.</strong> Bitte rekapitulieren Sie die rechtlichen Vorgaben aus dem Text (Subsidiaritätsprinzip und Trennungsgebot). Versuchen Sie es noch einmal!');
        return;
    }

    feedback.style.display = 'none';

    if (step === 1) {
        const next = document.getElementById('s3-tree-step2');
        next.style.display = 'block';
        next.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (step === 2) {
        const next = document.getElementById('s3-tree-step3');
        next.style.display = 'block';
        next.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (step === 3) {
        feedback.style.display = 'block';
        setFeedback(feedback, 'success', '<strong>Exzellent gelöst!</strong> Sie haben die Prinzipien der Subsidiarität (Prävention vor Feststellung) und das Trennungsgebot (zur Vermeidung von interessensgeleiteter Diagnostik) korrekt angewandt.');
        document.getElementById('s3-tree-next').style.display = 'block';
    }
}

function unlockSecondTaskS3() {
    const box = document.getElementById('s3-task2-box');
    if (box) unlockBox(box);
}

function checkS3Simulator() {
    const c1 = document.getElementById('s3_chk_1').checked;
    const c2 = document.getElementById('s3_chk_2').checked;
    const c3 = document.getElementById('s3_chk_3').checked;
    const c4 = document.getElementById('s3_chk_4').checked;
    
    const feedback = document.getElementById('s3-simulator-feedback');
    const transferBox = document.getElementById('s3-transfer-box');

    feedback.style.display = 'block';

    if (c1 && c2 && !c3 && !c4) {
        setFeedback(feedback, 'success', '<strong>Juristisch präzise geurteilt!</strong> Ein harter Mangel an personellen/räumlichen Ressourcen sowie eine akute Gefährdung der Unterrichtsfunktion sind die legalen Hebel der Schulaufsicht ("Ressourcenvorbehalt"), um den Elternwillen abzulehnen. Das subjektive Qualifikationsempfinden von Lehrkräften oder unflexible Lehrpläne sind hingegen keine gesetzlich zulässigen Ablehnungsgründe.');
        unlockBox(transferBox);
        setTimeout(() => document.getElementById('ans-s3-reflection').focus(), 600);
    } else {
        setFeedback(feedback, 'error', '<strong>Noch nicht ganz konform mit der Rechtslage.</strong> Bedenken Sie: Der Gesetzgeber erkennt nur harte, strukturelle Grenzen an (wie gravierender Personalmangel oder tatsächliche Gefährdung). Subjektive Befindlichkeiten des Kollegiums oder das starre Festhalten an Lehrplänen genügen nicht, um das Menschenrecht auf Inklusion auszuhebeln.');
    }
}

// --- LOGIK SITZUNG 4 ---

// Universelle Freischaltungs-Funktion für S4
function unlockTaskS4(boxId) {
    const box = document.getElementById(boxId);
    if (box) {
        unlockBox(box);
        if(boxId === 's4-transfer-box') {
            setTimeout(() => document.getElementById('ans-s4-reflection').focus(), 600);
        }
    }
}

// 2. Theorie-Sorter
const s4TheoryCards = [
    { text: '"Personen evaluieren ihre eigenen Fähigkeiten bevorzugt durch den Vergleich mit ähnlichen Personen (Ähnlichkeitshypothese)."', correct: 'vergleich' },
    { text: '"Je heterogener und vielfältiger eine Lerngruppe bezüglich ihrer Merkmale ist, desto weniger Ausgrenzungsprozesse sind zu erwarten."', correct: 'integrativ' },
    { text: '"Wenn eine Person durchgängig negativen Leistungsvergleichen in einer hochleistenden Umgebung ausgesetzt ist, entsteht Ausgrenzungsdruck."', correct: 'vergleich' }
];

let s4TheoryIndex = 0;

function checkS4Theory(answer) {
    const feedback = document.getElementById('s4-theory-feedback');
    const cardText = document.getElementById('s4-theory-card-text');
    const progressText = document.getElementById('s4-theory-progress');

    feedback.style.display = 'block';

    if (answer === s4TheoryCards[s4TheoryIndex].correct) {
        s4TheoryIndex++;
        setFeedback(feedback, 'success', '<strong>Korrekt zugeordnet!</strong> Die Aussage passt zur gewählten Theorie.');
        
        if (s4TheoryIndex < s4TheoryCards.length) {
            setTimeout(() => {
                feedback.style.display = 'none';
                cardText.style.opacity = '0';
                setTimeout(() => {
                    cardText.innerText = s4TheoryCards[s4TheoryIndex].text;
                    progressText.innerText = s4TheoryIndex + 1;
                    cardText.style.opacity = '1';
                }, 300);
            }, 1200);
        } else {
            setFeedback(feedback, 'success', '<strong>Theorie-Check bestanden!</strong> Sie haben die Grundlagen nach Kohrt et al. korrekt verortet. Nun prüfen wir, wie sich diese Theorien unter Einfluss echter Parameter verhalten.');
            unlockTaskS4('s4-task2-box');
        }
    } else {
        setFeedback(feedback, 'error', '<strong>Nicht ganz zutreffend.</strong> Überlegen Sie: Basiert die Aussage auf dem Vergleich mit Ähnlichen (Vergleichsprozesse) oder auf dem Schutzmechanismus durch extreme Vielfalt (integrative Prozesse)?');
    }
}

// 3. Interaktives Klassenraum-Labor
function updateS4Lab() {
    const valLeistung = parseInt(document.getElementById('s4-slider-leistung').value);
    const meter = document.getElementById('s4-lab-meter');
    const status = document.getElementById('s4-lab-status');
    
    // Wissenschaftliche Logik nach Kohrt et al.: 
    // Leistungskontext korreliert NEGATIV mit der Integration (Big-Fish-Little-Pond / Vergleichsprozesse)
    // Heterogenität (Varianz) hat KEINEN signifikanten Effekt.
    
    // Die Berechnung der Balken-Breite ist also invers zur Leistung. Heterogenität wird ignoriert.
    let integrationPercent = 100 - (valLeistung * 0.8); // Skaliert, damit es nicht komplett auf 0 fällt
    
    meter.style.width = integrationPercent + '%';
    
    // Visuelle und textuelle Anpassung
    if (integrationPercent > 70) {
        meter.style.backgroundColor = 'var(--success-color)';
        status.innerText = "Hoch integriert (Wenig Ausgrenzungsdruck)";
        status.style.color = 'var(--success-color)';
    } else if (integrationPercent > 40) {
        meter.style.backgroundColor = 'var(--accent-color)';
        status.innerText = "Mittelmäßig integriert";
        status.style.color = 'var(--accent-color)';
    } else {
        meter.style.backgroundColor = '#dc3545'; // Standard Rot für Warnungen in Web
        status.innerText = "Gering integriert (Hohes Ausgrenzungsrisiko)";
        status.style.color = '#dc3545';
    }
}

function evaluateS4Lab() {
    const feedback = document.getElementById('s4-lab-feedback');
    feedback.style.display = 'block';
    
    // Auswertungstext basierend auf der Studie
    setFeedback(feedback, 'success', '<strong>Auswertung des Labors:</strong><br><br>Haben Sie bemerkt, was beim Verschieben passiert ist?<br><ul><li>Wenn das durchschnittliche <strong>Leistungsniveau der Klasse steigt</strong>, sinkt die soziale Integration des SPF-Kindes rapide. Dies stützt die Theorie sozialer Vergleichsprozesse: Negative Aufwärtsvergleiche erzeugen Ausgrenzungsdruck.</li><li>Wenn Sie die <strong>Heterogenität verschoben haben, passierte absolut nichts</strong>. Dies entspricht den Regressionsmodellen von Kohrt et al.: Eine hohe Vielfalt in der Klasse federt den Ausgrenzungsdruck <em>nicht</em> ab. Die Theorie integrativer Prozesse wird hier empirisch nicht bestätigt.</li></ul>');
    
    unlockTaskS4('s4-task3-box');
}

// 4. Interaktive Hypothesen-Waage
function resolveS4Waage() {
    const userGuess = parseInt(document.getElementById('s4-slider-waage').value);
    const slider = document.getElementById('s4-slider-waage');
    const btn = document.getElementById('s4-btn-waage');
    const resultArea = document.getElementById('s4-waage-result');
    const barAllg = document.getElementById('s4-bar-allg');
    const barFoer = document.getElementById('s4-bar-foer');
    const valAllg = document.getElementById('s4-val-allg');
    const valFoer = document.getElementById('s4-val-foer');
    const feedback = document.getElementById('s4-waage-feedback');
    
    // UI sperren
    slider.disabled = true;
    btn.style.display = 'none';
    resultArea.style.display = 'block';

    // Animation der realen Werte triggern
    setTimeout(() => {
        barAllg.style.width = '66.75%'; // 2.67 von 4.00
        barFoer.style.width = '74.25%'; // 2.97 von 4.00
        
        let cAllg = 0; let cFoer = 0;
        const interval = setInterval(() => {
            if (cAllg < 2.67) cAllg += 0.05;
            if (cFoer < 2.97) cFoer += 0.05;
            valAllg.innerText = Math.min(cAllg, 2.67).toFixed(2);
            valFoer.innerText = Math.min(cFoer, 2.97).toFixed(2);
            
            // Slider automatisch auf den wissenschaftlichen Real-Wert ziehen (Richtung Förderschule, ca. -30%)
            slider.value = Math.max(-30, slider.value - 2); 
            
            if (cAllg >= 2.67 && cFoer >= 2.97) clearInterval(interval);
        }, 30);
    }, 200);

    // Feedback basierend auf der initialen Schätzung des Users generieren
    if (userGuess < -15) {
        setFeedback(feedback, 'success', '<strong>Hervorragend eingeschätzt!</strong> Sie lagen völlig richtig. Kinder mit Förderbedarf im Bereich LSE fühlen sich an separierten Förderschulen im Mittel signifikant besser integriert (M=2.97) als in inklusiven Settings an allgemeinen Schulen (M=2.67).');
    } else if (userGuess > 15) {
        setFeedback(feedback, 'error', '<strong>Eine logische, aber empirisch falsche Hoffnung.</strong> Bildungspolitisch soll die allgemeine Schule die Inklusion fördern. Die Realität zeigt jedoch: Kinder fühlen sich an Förderschulen (M=2.97) signifikant besser integriert als an allgemeinen Schulen (M=2.67).');
    } else {
        setFeedback(feedback, 'warn', '<strong>Fast!</strong> Sie gingen von einem Gleichstand aus. Tatsächlich besteht aber ein signifikanter Unterschied zugunsten der Förderschulen (M=2.97) gegenüber den allgemeinen Schulen (M=2.67).');
    }
}

// --- LOGIK SITZUNG 5 ---

function unlockFirstTaskS5() {
    const box = document.getElementById('s5-formula-box');
    if (box) unlockBox(box);
}

function unlockTaskS5(boxId) {
    const box = document.getElementById(boxId);
    if (box) {
        unlockBox(box);
        if(boxId === 's5-transfer-box') {
            setTimeout(() => document.getElementById('ans-s5-reflection').focus(), 600);
        }
    }
}

// Task 2: Praxis-Simulator (Schulprofil / Magic Formula) UI Logic
let s5ConfigState = { v: null, p: null, a5: null, s: null, r: null, l: null };

function selectS5Config(category, value, btn) {
    s5ConfigState[category] = value;
    
    document.querySelectorAll('.s5-btn-' + category).forEach(b => {
        b.style.backgroundColor = 'var(--card-bg)';
        b.style.color = 'var(--text-color)';
        b.style.borderColor = 'var(--border-color)';
        b.style.fontWeight = 'normal';
    });
    
    btn.style.backgroundColor = 'var(--accent-color)';
    btn.style.color = '#ffffff';
    btn.style.borderColor = 'var(--accent-color)';
    btn.style.fontWeight = '600';

    evaluateS5Config();
}

function evaluateS5Config() {
    const statusObj = document.getElementById('s5-formula-status');
    const feedbackObj = document.getElementById('s5-formula-feedback');
    const nextBtn = document.getElementById('btn-s5-formula-next');

    const values = Object.values(s5ConfigState);
    if (values.includes(null)) {
        statusObj.innerText = "System-Diagnose: Ausstehend";
        statusObj.style.color = "var(--text-color)";
        feedbackObj.innerText = "Bitte wählen Sie in allen 6 Bereichen eine theoriegeleitete Strategie aus.";
        nextBtn.style.display = 'none';
        return;
    }

    const correctCount = values.filter(v => v === 'correct').length;

    if (correctCount === 6) {
        statusObj.innerText = "Diagnose: Evidenzbasierte Inklusion (100%)";
        statusObj.style.color = "var(--success-color)";
        feedbackObj.innerHTML = "<strong>Exzellent analysiert!</strong> Sie haben die 'mega-strategy' der inklusiven Bildung etabliert. Alle Parameter sind wissenschaftlich validiert und vermeiden strukturelle Mikro-Exklusion.";
        nextBtn.style.display = 'block';
    } 
    else if (s5ConfigState.p === 'wrong1') {
        statusObj.innerText = "Diagnose: Mikro-Exklusion (Räumlich)";
        statusObj.style.color = "#dc3545";
        feedbackObj.innerHTML = "<strong>Achtung Pull-Out-Praxis:</strong> Die Nutzung spezieller 'Förderräume' in Kernfächern entzieht das Kind seiner Bezugsgruppe. Dies erzeugt Stigmatisierung und bricht mit dem bedingungslosen Placement-Prinzip.";
        nextBtn.style.display = 'none';
    }
    else if (s5ConfigState.s === 'wrong2') {
        statusObj.innerText = "Diagnose: Klettverschluss-Assistenz (Velcro Aide)";
        statusObj.style.color = "#ffc107";
        feedbackObj.innerHTML = "<strong>Abhängigkeit statt Support:</strong> Eine feste 1:1 Schulbegleitung isoliert das Kind oft im Klassenraum und hindert die Regellehrkraft daran, Verantwortung zu übernehmen. Gefordert ist Co-Teaching.";
        nextBtn.style.display = 'none';
    }
    else if (s5ConfigState.a5 === 'wrong2') {
        statusObj.innerText = "Diagnose: Defizitorientiertes Mainstreaming";
        statusObj.style.color = "#ffc107";
        feedbackObj.innerHTML = "<strong>Falscher Lehrplanansatz:</strong> Ein starrer Lehrplan, der nur durch 'Nachteilsausgleiche' (wie Zeitzugaben) geflickt wird, ist keine Inklusion. Gefordert ist proaktive Barrierefreiheit (UDL) für alle.";
        nextBtn.style.display = 'none';
    }
    else if (s5ConfigState.r === 'wrong1' || s5ConfigState.v === 'wrong2') {
        statusObj.innerText = "Diagnose: Medizinisches Defizitmodell";
        statusObj.style.color = "#dc3545";
        feedbackObj.innerHTML = "<strong>Etikettierungs-Falle:</strong> Wenn Ressourcen oder Visionen an formelle medizinische Diagnosen geknüpft sind, verharren Sie im defizitorientierten Modell. Inklusion muss präventiv und bedarfsorientiert fließen.";
        nextBtn.style.display = 'none';
    }
    else {
        statusObj.innerText = "Diagnose: System unvollständig / Defizitär";
        statusObj.style.color = "var(--accent-color)";
        feedbackObj.innerHTML = "Einige Ihrer Entscheidungen (z.B. Delegation an Fachkräfte statt Leadership) wirken im Alltag gut gemeint, zementieren theoriegeleitet jedoch alte Defizite. Optimieren Sie das System strikt nach Mitchell & Sutherland.";
        nextBtn.style.display = 'none';
    }
}

// Task 3: Neuro-Feedback Live-Synthesizer (Side-by-Side Optimiert)
function updateS5Neuro() {
    const focus = parseInt(document.getElementById('s5-slide-focus').value);
    const norm = parseInt(document.getElementById('s5-slide-norm').value);
    const action = parseInt(document.getElementById('s5-slide-action').value);

    // Text-Generierung
    const t1 = document.getElementById('s5-fb-text-1');
    if(focus < 33) {
        t1.innerText = "Du bist in Mathe einfach unfähig,";
        t1.style.color = "#dc3545"; 
    } else if(focus < 66) {
        t1.innerText = "Deine Lösung ist schon wieder komplett falsch,";
        t1.style.color = "var(--accent-color)"; 
    } else {
        t1.innerText = "Dein Ansatz für die Gleichung ist richtig gewählt,";
        t1.style.color = "var(--success-color)"; 
    }

    const t2 = document.getElementById('s5-fb-text-2');
    if(norm < 33) {
        t2.innerText = "und alle anderen waren viel schneller fertig als du.";
        t2.style.color = "#dc3545"; 
    } else if(norm < 66) {
        t2.innerText = "aber du hast dir ja zumindest große Mühe gegeben.";
        t2.style.color = "var(--accent-color)"; 
    } else {
        t2.innerText = "aber in Schritt 2 hast du die Vorzeichenfolge verdreht.";
        t2.style.color = "var(--success-color)"; 
    }

    const t3 = document.getElementById('s5-fb-text-3');
    if(action < 33) {
        t3.innerText = "Streng dich gefälligst mehr an!";
        t3.style.color = "#dc3545"; 
    } else if(action < 66) {
        t3.innerText = "Vielleicht klappt es beim nächsten Mal besser.";
        t3.style.color = "var(--accent-color)"; 
    } else {
        t3.innerText = "Gleiche die Vorzeichenregel nochmal mit der Checkliste ab.";
        t3.style.color = "var(--success-color)"; 
    }

    // Box Styling
    const box = document.getElementById('s5-fb-sentence-box');
    if (focus > 66 && norm > 66 && action > 66) box.style.borderLeftColor = "var(--success-color)";
    else if (focus < 33 || norm < 33 || action < 33) box.style.borderLeftColor = "#dc3545";
    else box.style.borderLeftColor = "var(--accent-color)";

    // Neurobiologie
    let cortisolLevel = ((100 - focus) * 0.4) + ((100 - norm) * 0.4) + ((100 - action) * 0.2);
    let dopaminLevel = (focus * 0.4) + (norm * 0.4) + (action * 0.2);

    const barCortisol = document.getElementById('s5-bar-cortisol');
    const barDopamin = document.getElementById('s5-bar-dopamin');
    const feedbackText = document.getElementById('s5-neuro-feedback-text');
    const nextBtn = document.getElementById('btn-s5-neuro-next');

    barCortisol.style.width = Math.min(Math.max(cortisolLevel, 5), 100) + '%';
    barDopamin.style.width = Math.min(Math.max(dopaminLevel, 5), 100) + '%';

    if (cortisolLevel > 60) {
        feedbackText.style.color = '#dc3545';
        feedbackText.innerHTML = "<strong>Akute Bedrohung:</strong> Ihr aktuelles Feedback greift die Person an. Das Gehirn schüttet Cortisol aus. Lernen blockiert.";
        nextBtn.style.display = 'none';
    } else if (dopaminLevel > 80 && cortisolLevel < 40) {
        feedbackText.style.color = 'var(--success-color)';
        feedbackText.innerHTML = "<strong>Kybernetischer Erfolg:</strong> Exzellent! Das Feedback ist instruktiv und schließt die Lücke. Das Dopaminlevel steigt – das Kind ist lernbereit.";
        nextBtn.style.display = 'block';
    } else {
        feedbackText.style.color = 'var(--accent-color)';
        feedbackText.innerHTML = "<strong>Diffuse Reaktion:</strong> Gemischte Signale. Entweder fehlt die klare Strategieanweisung oder es ist nur reines Anstrengungslob.";
        nextBtn.style.display = 'none';
    }
}

// Task 4: Hattie Effektstärken (mit Live-Update und ohne Sperre)
document.getElementById('s5-slider-effect').addEventListener('input', function() {
    document.getElementById('s5-live-guess').innerText = "d = " + (parseInt(this.value) / 100).toFixed(2);
});

function resolveS5Effect() {
    const slider = document.getElementById('s5-slider-effect');
    const userGuess = parseInt(slider.value) / 100;
    
    const btn = document.getElementById('btn-s5-effect');
    const resultArea = document.getElementById('s5-effect-result');
    const barForm = document.getElementById('s5-bar-formative');
    const barFeed = document.getElementById('s5-bar-feedback');
    const valForm = document.getElementById('s5-val-formative');
    const valFeed = document.getElementById('s5-val-feedback');
    const feedbackBox = document.getElementById('s5-effect-feedback-text');
    
    btn.style.display = 'none';
    resultArea.style.display = 'block';
    feedbackBox.style.display = 'block';

    setTimeout(() => {
        barForm.style.width = '78.5%'; 
        barFeed.style.width = '66.4%';
        
        let cForm = -0.20; let cFeed = -0.20;
        const interval = setInterval(() => {
            if (cForm < 0.90) cForm += 0.03;
            if (cFeed < 0.73) cFeed += 0.03;
            valForm.innerText = 'd = ' + Math.min(cForm, 0.90).toFixed(2);
            valFeed.innerText = 'd = ' + Math.min(cFeed, 0.73).toFixed(2);
            
            if (cForm >= 0.90 && cFeed >= 0.73) clearInterval(interval);
        }, 30);
    }, 200);

    const updateFeedbackText = () => {
        const currentVal = parseInt(slider.value) / 100;
        if (currentVal >= 0.65 && currentVal <= 1.0) {
            setFeedback(feedbackBox, 'success', `<strong>Exzellent!</strong> Im Bereich von d = ${currentVal.toFixed(2)} sind Sie sehr präzise. Formatives Assessment (d = 0.90) und Feedback (d = 0.73) gehören empirisch zu den absoluten Spitzenreitern der Unterrichtsforschung.`);
        } else if (currentVal < 0.65) {
            setFeedback(feedbackBox, 'warn', `<strong>Achtung Unterschätzung:</strong> Formatives Assessment (d = 0.90) und qualitatives Feedback (d = 0.73) liegen weit über dem von Ihnen gewählten Bereich (d = ${currentVal.toFixed(2)}). Sie sind essenziell für schulischen Erfolg.`);
        } else {
            setFeedback(feedbackBox, 'success', `<strong>Sehr optimistisch!</strong> Sie haben die Wirkung extrem hoch angesetzt (d = ${currentVal.toFixed(2)}). Sie liegen tendenziell richtig: Formatives Assessment und Feedback besitzen eine massive empirische Durchschlagskraft in der Lehr-Lern-Forschung.`);
        }
    };
    
    // Initiales Text-Update
    updateFeedbackText();

    // Ermöglicht es dem Studenten, den Text dynamisch durch weiteres Schieben zu verändern
    slider.addEventListener('input', updateFeedbackText);
    
    unlockTaskS5('s5-transfer-box');
}

// --- TEXT-TO-SPEECH STEUERUNG ---
let ttsQueue = [];
let currentContainer = null;
let ttsState = 'stopped'; // 'playing', 'paused', 'stopped'
let currentUtterance = null;

function getBestGermanVoice() {
    const voices = window.speechSynthesis.getVoices();
    const germanVoices = voices.filter(v => v.lang.startsWith('de'));
    return germanVoices.find(v => 
        v.name.includes('Premium') || v.name.includes('Google') || v.name.includes('Natural')
    ) || germanVoices[0] || null;
}

function playTTS(container) {
    stopTTS(); // Alte Prozesse rigoros killen
    currentContainer = container;
    ttsState = 'playing';
    updateTTSButtons('playing');

    let fullText = "";
    const elements = container.querySelectorAll('h2, h3, h4, p, li');
    elements.forEach(el => {
        if (!el.closest('.tts-controls') && !el.closest('.no-print') && !el.closest('fieldset')) {
 fullText += el.innerText + " ";
        }
    });

    ttsQueue = fullText.match(/[^.!?]+[.!?]+/g) || [fullText];
    playNextChunk();
}

function playNextChunk() {
    if (ttsQueue.length === 0 || ttsState === 'stopped') {
        stopTTS();
        return;
    }
    if (ttsState === 'paused') return;

    const textChunk = ttsQueue.shift().trim();
    if (!textChunk) {
        playNextChunk();
        return;
    }

    currentUtterance = new SpeechSynthesisUtterance(textChunk);
    currentUtterance.lang = 'de-DE';
    currentUtterance.rate = 0.95;
    const bestVoice = getBestGermanVoice();
    if (bestVoice) currentUtterance.voice = bestVoice;

    currentUtterance.onend = () => {
        if (ttsState === 'playing') playNextChunk();
    };

    currentUtterance.onerror = (e) => {
        if (e.error !== 'canceled' && e.error !== 'interrupted' && ttsState === 'playing') playNextChunk();
    };

    window.speechSynthesis.speak(currentUtterance);
}

function pauseTTS() {
    if (ttsState === 'playing') {
        window.speechSynthesis.pause();
        ttsState = 'paused';
        updateTTSButtons('paused');
    } else if (ttsState === 'paused') {
        window.speechSynthesis.resume();
        ttsState = 'playing';
        updateTTSButtons('playing');
    }
}

function stopTTS() {
    ttsState = 'stopped';
    ttsQueue = [];
    window.speechSynthesis.cancel();
    updateTTSButtons('stopped');
}

function updateTTSButtons(state) {
    document.querySelectorAll('.tts-pause').forEach(btn => {
        btn.disabled = true;
        btn.innerText = "Pause";
    });
    document.querySelectorAll('.tts-stop').forEach(btn => btn.disabled = true);

    if (!currentContainer) return;
    const pauseBtn = currentContainer.querySelector('.tts-pause');
    const stopBtn = currentContainer.querySelector('.tts-stop');

    if (state === 'playing') {
        if (pauseBtn) { pauseBtn.disabled = false; pauseBtn.innerText = "Pause"; }
        if (stopBtn) stopBtn.disabled = false;
    } else if (state === 'paused') {
        if (pauseBtn) { pauseBtn.disabled = false; pauseBtn.innerText = "Weiter"; }
        if (stopBtn) stopBtn.disabled = false;
    }
}

// --- ZENTRALE STEUERUNG DER FREISCHALTUNG ---
// Bei Änderungen in diesem Bereich auch Anpassungen in "<script src="script.js?v=" und  "<link rel="stylesheet" href="style.css?v=" notwendig.
// Diese Änderungen (Anfang und Ende der html) müssen nur vorgenommen werden, wenn die Datei auf Opal hochgeladen werden soll, um Caching vorzubeugen.
const seminarConfig = {
    s1:    { active: true,  summary: true },
    s2:    { active: true,  summary: true }, 
    s3:    { active: true,  summary: true },
    s4:    { active: true,  summary: true },
    s5:    { active: true,  summary: true }, // derzeit in Arbeit
    self1: { active: true,  summary: true }, // Selbstarbeit I
    self2: { active: true,  summary: true }, // Selbstarbeit II
    s6:    { active: true,  summary: true },
    s7:    { active: true,  summary: true },
    s8:    { active: true,  summary: true },
    s9:    { active: true,  summary: true },
    s10:   { active: true,  summary: true },
    s11:   { active: true,  summary: true }
};

function applySeminarConfig() {
    Object.keys(seminarConfig).forEach(key => {
        const config = seminarConfig[key];
        const tile = document.getElementById(`tile-${key}`);
        const btn = document.getElementById(`btn-${key}`);

        // Kachel (Sitzung) sperren/entsperren (inklusive Barrierefreiheits-Attribute)
        if (tile) {
            if (config.active) {
                tile.classList.remove('locked');
                tile.setAttribute('tabindex', '0');
                tile.setAttribute('aria-disabled', 'false');
            } else {
                tile.classList.add('locked');
                tile.removeAttribute('tabindex');
                tile.setAttribute('aria-disabled', 'true');
            }
        }

        // Button (Zusammenfassung) sperren/entsperren - OHNE Datum
        if (btn) {
            if (config.summary) {
                btn.disabled = false;
                btn.classList.remove('locked-btn');
                btn.innerText = "Zusammenfassung lesen";
            } else {
                btn.disabled = true;
                btn.classList.add('locked-btn');
                btn.innerText = "Zusammenfassung nach Sitzung verfügbar"; // Angepasster Text für klare UX
            }
        }
    });
}

// Initialisierung bei Seitenstart
document.addEventListener('DOMContentLoaded', () => {
    initGlossary();
    applySeminarConfig(); // Wendet deine manuellen Einstellungen aus der Liste an
    if (typeof window.speechSynthesis !== 'undefined') {
        window.speechSynthesis.getVoices(); 
        window.speechSynthesis.cancel();
    }
});

// --- SPEZIELLE DRUCKFUNKTION FÜR MODALS (Zusammenfassungen exklusiv drucken) ---
function printModalContent() {
    // 1. Dem Body eine temporäre Klasse zuweisen, die alle störenden Elemente über CSS ausblendet
    document.body.classList.add('print-modal-active');
    
    // 2. Den Druckdialog aufrufen (Der Browser nutzt nun die isolierte Ansicht des Modals)
    window.print();
    
    // 3. Nach dem Drucken / Abbrechen die Klasse wieder entfernen, um die Plattform wiederherzustellen
    setTimeout(() => {
        document.body.classList.remove('print-modal-active');
    }, 500);
}
