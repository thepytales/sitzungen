
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
    "Hattie-Studie": "Eine weltweite, groß angelegte Meta-Analyse von John Hattie, die die Wirksamkeit (Effektstärke d) unterschiedlicher pädagogischer Maßnahmen auf den Schulerfolg vergleicht.",
    "Neurodiversität": "Ein Paradigma, das neurologische Unterschiede (wie Autismus oder ADHS) als natürliche menschliche Variationen betrachtet, nicht als Defekte, die repariert werden müssen.",
    "Exekutive Funktionen": "Die übergeordneten kognitiven Kontrollprozesse im Gehirn, die für die Planung, Steuerung und Überwachung zielgerichteten Verhaltens zuständig sind.",
    "Reizfilter": "Die neuronale Funktion, mit der das Gehirn unwichtige Sinnesreize ausblendet. Bei neurodiversen Menschen ist diese Filterfunktion oft beeinträchtigt, was zu Überlastung führt.",
    "Klassenmanagement": "Alle proaktiven und reaktiven Maßnahmen einer Lehrkraft, um eine störungsarme, sichere und lernförderliche Umgebung zu etablieren (nach Kounin präferiert proaktiv)."
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
function showView(viewId, skipHistory = false) {
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

    // History-API Integration
    if (!skipHistory) {
        window.history.pushState({ viewId: viewId }, '', '#' + viewId);
    }
}

// History-API Event Listener für Zurück-Button des Browsers
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.viewId) {
        showView(event.state.viewId, true);
    } else {
        showView('home', true);
    }
});

// Modals oeffnen und schliessen (inklusive OPAL iframe Fix und Focus-Trapping)
let previousFocus = null;
let activeModalId = null;

function handleModalKeydown(e) {
    if (e.key === 'Tab') {
        const modal = document.getElementById(activeModalId);
        if (!modal) return;
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    } else if (e.key === 'Escape') {
        closeModal(activeModalId);
    }
}

function openModal(event, modalId) {
    if (event) event.stopPropagation();
    previousFocus = document.activeElement; // Speichert das fokussierte Element vor dem Öffnen
    activeModalId = modalId;

    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    
    const modalContent = modal.querySelector('.modal-content');
    
    // OPAL iframe Fix: Berechne den oberen Bildschirmrand unabhängig vom Parent-Scroll
    if (event && event.pageY && event.clientY) {
        let scrollOffset = event.pageY - event.clientY;
        let topPos = scrollOffset + 60; 
        
        if (topPos < 20) topPos = 20;
        modalContent.style.marginTop = topPos + 'px';
    } else {
        modalContent.style.marginTop = (window.scrollY + 60) + 'px';
    }
    
    modal.style.height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) + 'px';
    initGlossary(); // Glossar im Modal initialisieren

    // Fokus auf das erste interaktive Element im Modal setzen
    setTimeout(() => {
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length) focusableElements[0].focus();
    }, 50);

    document.addEventListener('keydown', handleModalKeydown);
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    stopTTS(); // Stoppt die Sprachausgabe (TTS) sofort beim Schließen des Popups
    activeModalId = null;
    document.removeEventListener('keydown', handleModalKeydown);
    
    if (previousFocus) {
        previousFocus.focus(); // Fokus zurück auf das aufrufende Element setzen
    }
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
        setFeedback(feedback, 'success', 'Sie haben die Thesen korrekt nach Bielefeldt bewertet: Autonomie benötigt <em>Assistenz</em> (These 1 inkorrekt), Gleichheit fordert proaktive <em>Barrierefreiheit</em> (These 2 korrekt) und Brüderlichkeit zielt auf tiefe <em>gesellschaftliche Inklusion</em> ab, weit über physisches Dabeisein hinaus (These 3 inkorrekt).');
        unlockBox(nextBox);
    } else {
        setFeedback(feedback, 'error', '<strong>Eine spannende Einordnung.</strong> Einige Ihrer Thesen weichen noch von Bielefeldts radikaler Neuinterpretation ab. Überlegen Sie für den Diskurs im Seminar: Warum tun wir uns im Schulalltag so schwer damit, "Freiheit" als "abhängig von Assistenz" zu denken? Passen Sie Ihre Auswahl theoriegeleitet an, um weiterzugehen.');
    }
}

// --- Live-Feedback interaktiver Slider (Von Exklusion zu Inklusion) ---
function updateSliderFeedback() {
    const sliderVal = document.getElementById('s1-slider').value;
    const feedbackBox = document.getElementById('s1-slider-live-feedback');
    const btn = document.getElementById('s1-slider-btn');

    let feedbackText = "";
    let state = 'error';

    switch(sliderVal) {
        case "1":
            feedbackText = "<strong>Exklusion:</strong> Das Kind wäre komplett vom Schulsystem oder der Regelschule ausgeschlossen. Passt dies auf die beschriebene Situation?";
            state = 'warn'; // Gelbe Hervorhebung
            break;
        case "2":
            feedbackText = "<strong>Separation (Korrekt!):</strong> Das Kind besucht zwar die gleiche Schule (Gebäude), wird aber in den Kernfächern isoliert im Nebenraum unterrichtet. Dies ist eine klassische räumliche Separation im Kaskadenmodell.";
            state = 'success';
            break;
        case "3":
            feedbackText = "<strong>Integration:</strong> Das Kind wäre im selben Raum und müsste sich an die vorgegebenen Normen anpassen (Mainstreaming). Im beschriebenen Fall wird es jedoch räumlich getrennt.";
            state = 'error';
            break;
        case "4":
            feedbackText = "<strong>Inklusion:</strong> Das System hätte sich angepasst (z.B. durch UDL), sodass alle gemeinsam bedarfsgerecht am selben Lerngegenstand arbeiten können. Das ist hier nicht der Fall.";
            state = 'error';
            break;
    }

    setFeedback(feedbackBox, state, feedbackText);
    
    if(state === 'success') {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

function unlockNextFromSlider() {
    const nextBox = document.getElementById('s1-flip-box');
    if (nextBox) {
        unlockBox(nextBox);
    }
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
        setFeedback(feedback, 'success', 'Sie haben die Diskurse nach Bräu korrekt erfasst. Ein naturalistisches Verständnis sieht das "Defizit" als Naturgegebenheit. Das konstruktivistische Verständnis hingegen erkennt, dass die Schule diese Differenzen durch ihre normativen Anforderungen erst erschafft.');
        unlockBox(nextBox);
    } else {
        setFeedback(feedback, 'error', '<strong>Lassen Sie uns die Perspektive wechseln.</strong> Die gewählte Zuordnung spiegelt eher unser defizitorientiertes "Bauchgefühl" wider. Bräu fordert jedoch einen systemischen Blick: Wer "macht" eigentlich die Differenz? Bitte justieren Sie die Aussagen entsprechend der Lektüre.');
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
    
    setFeedback(feedback, 'success', 'Haben Sie bemerkt, dass Sie bei maximaler Fachkompetenz keine "Note 1" erreichen konnten, wenn der kulturelle Habitus niedrig eingestellt war? Genau das kritisiert Bräu: Das Schulsystem reproduziert soziale Ungleichheiten, indem es unbewusst angepasstes Verhalten und den familiären Hintergrund mitbenotet. Wirkliche Inklusion erfordert es, diese Bewertungsmuster offenzulegen und zu dekonstruieren.');
    
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
        setFeedback(feedback, 'success', 'Sie haben das meritokratische Prinzip erfolgreich dekonstruiert, den Konflikt sachlich als unauflösbare Antinomie benannt und mit dem Ansatz der "Entdramatisierung" (Undoing Difference) einen theoriegeleiteten, präventiven Ausweg für die Schulpraxis formuliert.');
        unlockBox(nextBox);
    } else {
        setFeedback(feedback, 'error', '<strong>Ein sehr verständlicher Impuls.</strong> Utopische Extreme (Noten einfach abschaffen) oder klassische Separierung lösen dieses Dilemma in der Schulpraxis jedoch nicht auf. Nehmen Sie diese Frustration mit ins Seminar: Wie können wir die Antinomie "aushalten", ohne sofort in Exklusion zurückzufallen? Bitte passen Sie Ihre Antworten an die Lektüre an.');
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
        setFeedback(feedback, 'error', '<strong>Eine interessante Interpretation.</strong> Oft sind vermeintlich "gute" Fördermaßnahmen (wie in Fall C) in Wahrheit ausgrenzend. Diskutieren Sie im Plenum: Ab wann wird eine "besondere Förderung" zum stigmatisierenden "Othering"? Bitte korrigieren Sie die Zuordnung für den methodischen Fortschritt.');
    }
}

// Hilfsfunktionen für Feedback und Freischaltung
function setFeedback(el, type, text) {
    el.innerHTML = text;
    el.className = ''; 
    if (type === 'success') {
        el.style.backgroundColor = '#d4edda'; 
        el.style.color = '#155724'; 
        el.style.border = '1px solid #c3e6cb';
    } else if (type === 'error') {
        /* Aus 'error' wird ein neutraler 'explore' Status für die Reflexion */
        el.style.backgroundColor = '#e2e3e5'; 
        el.style.color = '#383d41'; 
        el.style.border = '1px solid #d6d8db';
    } else {
        /* Warnungen werden zu Hinweisen */
        el.style.backgroundColor = '#e8f4f8'; 
        el.style.color = '#0c5460'; 
        el.style.border = '1px solid #bee5eb';
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
        setFeedback(feedback, 'error', '<strong>Rechtlich ein heikler Schritt.</strong> Auch wenn dieser Impuls pädagogisch verständlich ist, um dem Kind schnell zu helfen, greifen hier formale Hürden (wie das Trennungsgebot oder Subsidiarität). Eine gute Frage für das Seminar: Warum verleitet unser System oft zu solch voreiligen Diagnosen? Versuchen Sie den anderen Weg.');
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
        setFeedback(feedback, 'success', 'Sie haben die Prinzipien der Subsidiarität (Prävention vor Feststellung) und das Trennungsgebot (zur Vermeidung von interessensgeleiteter Diagnostik) korrekt angewandt.');
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
        setFeedback(feedback, 'error', '<strong>Eine häufige Fehleinschätzung in der Praxis.</strong> Subjektive Überforderung im Kollegium oder unflexible Lehrpläne sind juristisch kein legitimer Grund, Inklusion abzulehnen. Diskutieren Sie später: Was macht es mit einem Kollegium, wenn Inklusion rechtlich erzwungen, aber gefühlt nicht leistbar ist?');
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
        setFeedback(feedback, 'success', 'Sie lagen völlig richtig. Kinder mit Förderbedarf im Bereich LSE fühlen sich an separierten Förderschulen im Mittel signifikant besser integriert (M=2.97) als in inklusiven Settings an allgemeinen Schulen (M=2.67).');
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
        feedbackObj.innerHTML = "Sie haben die 'mega-strategy' der inklusiven Bildung etabliert. Alle Parameter sind wissenschaftlich validiert und vermeiden strukturelle Mikro-Exklusion.";
        nextBtn.style.display = 'block';
    } 
    else if (s5ConfigState.p === 'wrong1') {
        statusObj.innerText = "Impuls: Separation";
        statusObj.style.color = "var(--text-color)";
        feedbackObj.innerHTML = "<strong>Ein klassischer 'Pull-Out'-Ansatz.</strong> Dies entzieht das Kind seiner Bezugsgruppe. Diskussionspunkt: Warum halten wir an Gymnasien so stark an isolierten Förderräumen fest?";
        nextBtn.style.display = 'none';
    }
    else if (s5ConfigState.s === 'wrong2') {
        statusObj.innerText = "Impuls: Abhängigkeit";
        statusObj.style.color = "var(--text-color)";
        feedbackObj.innerHTML = "<strong>Das 'Klettverschluss'-Phänomen.</strong> Eine 1:1 Begleitung isoliert oft unbewusst. Diskutieren Sie im Seminar: Wie können wir Schulbegleitungen einsetzen, ohne dass sie eine Barriere zu den Peers bilden?";
        nextBtn.style.display = 'none';
    }
    else if (s5ConfigState.a5 === 'wrong2') {
        statusObj.innerText = "Impuls: Mainstreaming";
        statusObj.style.color = "var(--text-color)";
        feedbackObj.innerHTML = "<strong>Das ist defizitorientiertes Mainstreaming.</strong> 'Nachteilsausgleiche' flicken nur ein unpassendes System. Wie sähe stattdessen ein proaktiver, flexibler Lehrplan aus?";
        nextBtn.style.display = 'none';
    }
    else if (s5ConfigState.r === 'wrong1' || s5ConfigState.v === 'wrong2') {
        statusObj.innerText = "Impuls: Defizitorientierung";
        statusObj.style.color = "var(--text-color)";
        feedbackObj.innerHTML = "<strong>Die Ressourcen-Etikettierungs-Falle.</strong> Eine Kernfrage für das Seminar: Wie können wir personelle Unterstützung im System legitimieren, ohne Kinder vorher medizinisch 'etikettieren' zu müssen?";
        nextBtn.style.display = 'none';
    }
    else {
        statusObj.innerText = "Impuls: System justieren";
        statusObj.style.color = "var(--text-color)";
        feedbackObj.innerHTML = "Viele dieser Entscheidungen wirken im Alltag gut gemeint, zementieren aber alte Defizite. Reflektieren Sie Ihre Wahl noch einmal vor dem Hintergrund von Mitchell & Sutherland.";
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
    if(focus === 1) {
        t1.innerText = "Du bist in Mathe einfach unfähig,";
        t1.style.color = "#dc3545"; 
    } else if(focus === 2) {
        t1.innerText = "Deine Lösung ist schon wieder komplett falsch,";
        t1.style.color = "var(--accent-color)"; 
    } else {
        t1.innerText = "Dein Ansatz für die Gleichung ist richtig gewählt,";
        t1.style.color = "var(--success-color)"; 
    }

    const t2 = document.getElementById('s5-fb-text-2');
    if(norm === 1) {
        t2.innerText = "und alle anderen waren viel schneller fertig als du.";
        t2.style.color = "#dc3545"; 
    } else if(norm === 2) {
        t2.innerText = "aber du hast dir ja zumindest große Mühe gegeben.";
        t2.style.color = "var(--accent-color)"; 
    } else {
        t2.innerText = "aber in Schritt 2 hast du die Vorzeichenfolge verdreht.";
        t2.style.color = "var(--success-color)"; 
    }

    const t3 = document.getElementById('s5-fb-text-3');
    if(action === 1) {
        t3.innerText = "Streng dich gefälligst mehr an!";
        t3.style.color = "#dc3545"; 
    } else if(action === 2) {
        t3.innerText = "Vielleicht klappt es beim nächsten Mal besser.";
        t3.style.color = "var(--accent-color)"; 
    } else {
        t3.innerText = "Gleiche die Vorzeichenregel nochmal mit der Checkliste ab.";
        t3.style.color = "var(--success-color)"; 
    }

    // Box Styling
    const box = document.getElementById('s5-fb-sentence-box');
    if (focus === 3 && norm === 3 && action === 3) box.style.borderLeftColor = "var(--success-color)";
    else if (focus === 1 || norm === 1 || action === 1) box.style.borderLeftColor = "#dc3545";
    else box.style.borderLeftColor = "var(--accent-color)";

    // Neurobiologie
    let cortisolLevel = ((3 - focus) * 20) + ((3 - norm) * 20) + ((3 - action) * 10);
    let dopaminLevel = ((focus - 1) * 20) + ((norm - 1) * 20) + ((action - 1) * 10);

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
        feedbackText.innerHTML = "<strong>Kybernetischer Erfolg:</strong> Super! Das Feedback ist instruktiv und schließt die Lücke. Das Dopaminlevel steigt – das Kind ist lernbereit.";
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
            setFeedback(feedbackBox, 'success', `Im Bereich von d = ${currentVal.toFixed(2)} sind Sie sehr präzise. Formatives Assessment (d = 0.90) und Feedback (d = 0.73) gehören empirisch zu den absoluten Spitzenreitern der Unterrichtsforschung.`);
        } else if (currentVal < 0.65) {
            setFeedback(feedbackBox, 'warn', `<strong>Achtung Unterschätzung:</strong> Formatives Assessment (d = 0.90) und qualitatives Feedback (d = 0.73) liegen weit über dem von Ihnen gewählten Bereich (d = ${currentVal.toFixed(2)}). Sie sind essenziell für schulischen Erfolg.`);
        } else {
            setFeedback(feedbackBox, 'warn', `<strong>Sehr optimistisch!</strong> Sie haben die Wirkung extrem hoch angesetzt (d = ${currentVal.toFixed(2)}). Sie liegen tendenziell richtig: Formatives Assessment und Feedback besitzen eine massive empirische Durchschlagskraft in der Lehr-Lern-Forschung.`);
        }
    };
    
    // Initiales Text-Update
    updateFeedbackText();

    // Ermöglicht es dem Studenten, den Text dynamisch durch weiteres Schieben zu verändern
    slider.addEventListener('input', updateFeedbackText);
    
    unlockTaskS5('s5-transfer-box');
}

// --- LOGIK SELBSTARBEIT 1 ---

function unlockTaskSelf1(boxId) {
    const box = document.getElementById(boxId);
    if (box) {
        unlockBox(box);
    }
}

function updateSelf1Overload() {
    const slider = document.getElementById('self1-slider-structure');
    const val = parseInt(slider.value);
    document.getElementById('self1-slider-val').innerText = val;
    
    const textEl = document.getElementById('self1-simulator-text');
    const feedback = document.getElementById('self1-simulator-feedback');
    const btn = document.getElementById('btn-self1-next1');
    
    if (val === 1) {
        textEl.style.fontSize = '0.75rem';
        textEl.style.lineHeight = '0.9';
        textEl.style.letterSpacing = '-1.5px';
        textEl.style.wordSpacing = '-3px';
        textEl.style.fontFamily = "'Times New Roman', Times, serif";
        textEl.innerHTML = "DiePhotosyntheseistderProzessdurchdendiePflanzenLichtenergieinchemischeEnergieumwandelnDiesgeschiehtindenChloroplastenderZellenwobeiKohlenstoffdioxidundWasserzuGlucoseundSauerstoffreagierenFürdiesenVorgangistdasChlorophyllentscheidendwelchesdasLichtabsorbiertDieserProzessistdieGrundlagefürdasLebenaufderErdedaerSauerstoffproduziertderfürdieZellatmungderMeistenLebewesenbenötigtwirdZusätzlichstelltGlucoseeineWichtigeEnergiequelleDar.";
        feedback.style.display = 'none';
        btn.style.display = 'none';
    } else if (val === 2) {
        textEl.style.fontSize = '0.9rem';
        textEl.style.lineHeight = '1.4';
        textEl.style.letterSpacing = 'normal';
        textEl.style.wordSpacing = 'normal';
        textEl.style.fontFamily = "'Times New Roman', Times, serif";
        textEl.innerHTML = "Die Photosynthese ist der Prozess durch den die Pflanzen Lichtenergie in chemische Energie umwandeln Dies geschieht in den Chloroplasten der Zellen wobei Kohlenstoffdioxid und Wasser zu Glucose und Sauerstoff reagieren Für diesen Vorgang ist das Chlorophyll entscheidend welches das Licht absorbiert Dieser Prozess ist die Grundlage für das Leben auf der Erde da er Sauerstoff produziert der für die Zellatmung der Meisten Lebewesen benötigt wird Zusätzlich stellt Glucose eine Wichtige Energiequelle Dar.";
        feedback.style.display = 'none';
        btn.style.display = 'none';
    } else if (val === 3) {
        textEl.style.fontSize = '1rem';
        textEl.style.lineHeight = '1.6';
        textEl.style.letterSpacing = 'normal';
        textEl.style.wordSpacing = 'normal';
        textEl.style.fontFamily = "var(--font-family, 'Poppins', sans-serif)";
        textEl.innerHTML = "<strong>Die Photosynthese</strong> ist der Prozess, durch den Pflanzen Lichtenergie in chemische Energie umwandeln.<br><br>Dies geschieht in den <strong>Chloroplasten</strong> der Zellen. Dabei reagieren Kohlenstoffdioxid und Wasser zu Glucose und Sauerstoff.<br><br>Für diesen Vorgang ist das <strong>Chlorophyll</strong> entscheidend, welches das Licht absorbiert. Dieser Prozess produziert Sauerstoff für die Zellatmung und Glucose als Energiequelle.";
        feedback.style.display = 'none';
        btn.style.display = 'none';
    } else if (val === 4) {
        textEl.style.fontSize = '1rem';
        textEl.style.lineHeight = '1.6';
        textEl.style.letterSpacing = 'normal';
        textEl.style.wordSpacing = 'normal';
        textEl.style.fontFamily = "var(--font-family, 'Poppins', sans-serif)";
        // Reale UDL-Strukturierung: Visuelle Blöcke, Listen, Tooltips
        textEl.innerHTML = `
            <div style="background-color: var(--container-bg); padding: 1.5rem; border-left: 5px solid var(--accent-color); border-radius: 6px;">
                <h4 style="margin-top: 0; margin-bottom: 1rem; color: var(--heading-color); font-size: 1.2rem;">Kernkonzept: Photosynthese</h4>
                <p style="margin-bottom: 0.5rem;">Pflanzen wandeln Licht in Energie um. Dafür benötigen sie drei Elemente:</p>
                <ul style="margin-bottom: 1rem; padding-left: 1.5rem; list-style-type: square;">
                    <li style="margin-bottom: 0.5rem;"><strong>Lichtenergie</strong> (wird vom <em style="border-bottom: 1px dotted var(--text-color); cursor: help;" title="Grüner Farbstoff in Pflanzenzellen, der Sonnenlicht aufnimmt">Chlorophyll</em> aufgenommen)</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Kohlenstoffdioxid</strong> (aus der Luft)</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Wasser</strong> (aus dem Boden)</li>
                </ul>
                <div style="background-color: var(--bg-color); padding: 1rem; border-radius: 4px; border: 1px solid var(--border-color);">
                    <strong>Fazit:</strong> Es entstehen <strong>Sauerstoff</strong> (zum Atmen) und <strong>Glucose</strong> (Zucker als Energiequelle für die Pflanze).
                </div>
            </div>
        `;
        feedback.style.display = 'block';
        btn.style.display = 'block';
    }
}

// Auswertung der erweiterten Exekutiven Funktionen (6 Situationen)
function checkSelf1Case() {
    const s = [
        document.getElementById('self1-sel-1').value,
        document.getElementById('self1-sel-2').value,
        document.getElementById('self1-sel-3').value,
        document.getElementById('self1-sel-4').value,
        document.getElementById('self1-sel-5').value,
        document.getElementById('self1-sel-6').value
    ];
    
    const feedback = document.getElementById('self1-matrix-feedback');
    feedback.style.display = 'block';

    if (s.includes("")) {
        setFeedback(feedback, 'warn', 'Hinweis: Bitte ordnen Sie alle sechs Situationen theoriegeleitet ein.');
        return;
    }

    // Korrekte Lösungskette
    const correct = (s[0] === 'memory' && s[1] === 'flexibility' && s[2] === 'inhibition' && 
                     s[3] === 'flexibility' && s[4] === 'inhibition' && s[5] === 'memory');

    if (correct) {
        setFeedback(feedback, 'success', 'Sie haben sowohl die offensichtlichen als auch die subtilen Barrieren (z.B. Starre bei Planänderung oder motorische Inhibition) korrekt identifiziert. Dies ist die Basis für adaptive Unterstützung.');
        unlockTaskSelf1('self1-task3-box');
    } else {
        setFeedback(feedback, 'error', '<strong>Eine anspruchsvolle Differenzierung.</strong> Solches Verhalten wird oft als "Faulheit" fehlinterpretiert. Diskutieren Sie in der Präsenz: Wie können wir im stressigen Schulalltag erkennen, ob ein Kind provoziert oder exekutiv überlastet ist? Passen Sie Ihre Zuordnung an, um fortzufahren.');
    }
}

// --- LIVE LOGIK FÜR INTERAKTIVES UDL-MISCHPULT ---
let udlState = {
    tools: {
        tts: false,
        reduce: false,
        choice: false,
        glossary: false,
        assist: false,
        structure: false,
        buddy: false,
        time: false
    }
};

const toolComments = {
    tts: {
        vision: "Audioausgabe kompensiert die visuelle Barriere vollständig (+60%).",
        adhd: "Bietet einen alternativen Sinneskanal, hilft leicht bei der Fokussierung (+10%).",
        daz: "Hören und Mitlesen verbessert das Sprachverständnis spürbar (+20%)."
    },
    reduce: {
        vision: "Ändert nichts an der Lesehürde – Text bleibt schwer zugänglich (+10%).",
        adhd: "Reduziert Überlastung, schließt aber von wichtigen Inhalten aus (+30%).",
        daz: "Weniger Text hilft kurzfristig, verhindert aber tieferen Fachsprachenerwerb (+30%)."
    },
    choice: {
        vision: "Alternative Formate (z.B. Podcast) umgehen die reine Text-Barriere (+10%).",
        adhd: "Autonomie und Formatwechsel steigern die intrinsische Motivation enorm (+50%).",
        daz: "Alternative Ausdrucksweisen nehmen den Druck der reinen Textproduktion (+20%)."
    },
    glossary: {
        vision: "Hilft beim Verständnis, erfordert aber weiterhin Hilfsmittel (+10%).",
        adhd: "Klärt Begriffe, ohne den Lesefluss durch langes Suchen zu stören (+10%).",
        daz: "Essenziell: Fachbegriffe werden sofort entlastet und verständlich gemacht (+50%)."
    },
    assist: {
        vision: "Sichert den Informationszugang, macht aber abhängig von der Lehrkraft (+40%).",
        adhd: "Erzwungenes passives Zuhören stresst und führt häufig zum Abschalten (-20%).",
        daz: "Frontales Vorlesen ist oft zu schnell für die kognitive Simultanverarbeitung (+0%)."
    },
    structure: {
        vision: "Gute Vorstrukturierung erleichtert die Navigation mit Screenreadern (+10%).",
        adhd: "Checklisten fungieren als externes Arbeitsgedächtnis (Gamechanger!) (+40%).",
        daz: "Teilziele machen komplexe Leseaufgaben viel überschaubarer (+20%)."
    },
    buddy: {
        vision: "Hilft zwar beim Lesen, degradiert das Kind aber zum passiven Empfänger (+20%).",
        adhd: "Kann anregen, lenkt aber oft durch ungefilterte soziale Interaktion vom Text ab (+10%).",
        daz: "Gut gemeint, führt aber oft zu einem Schamgefühl und Abhängigkeit vom 'Buddy' (+10%)."
    },
    time: {
        vision: "Die visuelle Hürde bleibt bestehen – mehr Zeit löst das Leseproblem nicht (+0%).",
        adhd: "Verlängert die Qual: Noch länger fokussieren führt oft zu mehr Frustration (-10%).",
        daz: "Hilft minimal beim Entschlüsseln, ändert aber nichts an fehlendem Wortschatz (+10%)."
    }
};

function toggleUDLTool(btn) {
    const tool = btn.getAttribute('data-tool');
    udlState.tools[tool] = !udlState.tools[tool];
    const isActive = udlState.tools[tool];
    
    // Visuelles Feedback am Button
    if (isActive) {
        btn.style.borderColor = "var(--accent-color)";
        btn.style.backgroundColor = "var(--accent-color)";
        btn.style.color = "#ffffff";
    } else {
        btn.style.borderColor = "var(--border-color)";
        btn.style.backgroundColor = "var(--bg-color)";
        btn.style.color = "var(--text-color)";
    }
    
    updateUDLDashboard(tool, isActive);
}

function updateUDLDashboard(lastTool = null, isActive = false) {
    let vision = 10, adhd = 10, daz = 10;
    const t = udlState.tools;

    // Simulation der didaktischen Wirkungen auf verschiedene Profile
    if (t.tts) { vision += 60; daz += 20; adhd += 10; }
    if (t.reduce) { adhd += 30; daz += 30; vision += 10; } 
    if (t.choice) { adhd += 50; daz += 20; vision += 10; }
    if (t.glossary) { daz += 50; adhd += 10; vision += 10; }
    if (t.assist) { vision += 40; adhd -= 20; } 
    if (t.structure) { adhd += 40; daz += 20; vision += 10; }
    if (t.buddy) { vision += 20; adhd += 10; daz += 10; }
    if (t.time) { adhd -= 10; daz += 10; }

    // Werte zwischen 0 und 100 begrenzen
    vision = Math.min(100, Math.max(0, vision));
    adhd = Math.min(100, Math.max(0, adhd));
    daz = Math.min(100, Math.max(0, daz));

    updateBarUI('vision', vision);
    updateBarUI('adhd', adhd);
    updateBarUI('daz', daz);

    // Live-Kommentare aktualisieren
    if (lastTool) {
        const commentVision = document.getElementById('comment-vision');
        const commentAdhd = document.getElementById('comment-adhd');
        const commentDaz = document.getElementById('comment-daz');

        // Bessere visuelle Formatierung der Kommentare (abgesetzte Box)
        const formatComment = (text) => `<span style="display:block; margin-bottom:0.4rem; color: var(--heading-color); font-weight:700; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.5px;">Auswirkung:</span><span style="display:block;">${text}</span>`;

        if (isActive) {
            // Zeige den spezifischen Kommentar für das gewählte Werkzeug
            commentVision.innerHTML = formatComment(toolComments[lastTool].vision);
            commentAdhd.innerHTML = formatComment(toolComments[lastTool].adhd);
            commentDaz.innerHTML = formatComment(toolComments[lastTool].daz);
        } else {
            // Bei Deaktivierung neutralen Text zeigen
            const toolNames = { tts: "Text-to-Speech", reduce: "Inhalt kürzen", choice: "Formate-Wahl", glossary: "Klick-Glossar", assist: "Frontal vorlesen", structure: "Struktur-Hilfen", buddy: "Buddy-System", time: "Zeitzugabe (NTA)" };
            const name = toolNames[lastTool];
            commentVision.innerHTML = `<em>Werkzeug "${name}" wurde deaktiviert.</em>`;
            commentAdhd.innerHTML = `<em>Werkzeug "${name}" wurde deaktiviert.</em>`;
            commentDaz.innerHTML = `<em>Werkzeug "${name}" wurde deaktiviert.</em>`;
        }
    }
}

function updateBarUI(student, val) {
    const bar = document.getElementById('bar-' + student);
    const text = document.getElementById('text-' + student);
    
    bar.style.width = val + '%';
    
    if (val >= 90) {
        bar.style.background = 'var(--success-color)';
        text.innerText = val + '% - Integriert & Aktiv';
    } else if (val >= 50) {
        bar.style.background = '#fd7e14';
        text.innerText = val + '% - Teilweise beteiligt';
    } else {
        bar.style.background = '#dc3545';
        text.innerText = val + '% - Barrieren blockieren';
    }
}

function evaluateUDLInteractive() {
    const feedback = document.getElementById('udl-interactive-feedback');
    feedback.style.display = 'block';
    
    const t = udlState.tools;
    
    // Zähle UDL-Werkzeuge (proaktiv/präventiv)
    let udlCount = 0;
    if (t.tts) udlCount++;
    if (t.choice) udlCount++;
    if (t.glossary) udlCount++;
    if (t.structure) udlCount++;

    // Zähle reaktive/defizitorientierte Werkzeuge
    let ntaCount = 0;
    if (t.reduce) ntaCount++;
    if (t.assist) ntaCount++;
    if (t.buddy) ntaCount++;
    if (t.time) ntaCount++;

    // Szenario 1: Der theoriegeleitete UDL-Idealzustand (Wie bisher)
    if (udlCount === 4 && ntaCount === 0) {
        setFeedback(feedback, 'success', '<strong>Perfektes Inklusives Design (UDL)!</strong> Sie haben das Lernumfeld proaktiv so flexibel gestaltet, dass alle Lernenden selbstständig arbeiten können. Niemand braucht eine defizitäre Sonderbehandlung. Das ist der theoriegeleitete Idealzustand.');
    } 
    // Szenario 2: NEU - Der praxisnahe Kompromiss (Grauzone)
    else if (udlCount >= 2 && ntaCount > 0 && !t.reduce && !t.assist) {
        setFeedback(feedback, 'success', '<strong>Ein solider, praxisnaher Kompromiss!</strong> Sie nutzen bereits starke UDL-Elemente (z. B. Strukturhilfen oder Glossar), greifen aber pragmatisch noch auf Hilfen wie das Buddy-System oder Zeitzugaben zurück. In einem unperfekten Schulsystem ist das oft die Realität. Reflektieren Sie im Seminar: Wann werden diese "Krücken" perspektivisch überflüssig?');
    }
    // Szenario 3: Die Reaktiv-Falle (Zu viele defizitorientierte Maßnahmen)
    else if (ntaCount > udlCount || t.reduce || t.assist) {
        setFeedback(feedback, 'warn', '<strong>Vorsicht: Reaktiv-Falle!</strong> Sie stützen sich stark auf klassische Sonderlösungen (z. B. Inhalt massiv kürzen, Frontal vorlesen). Das hilft kurzfristig, stigmatisiert aber und macht Lernende abhängig. Versuchen Sie, mehr präventive Werkzeuge (UDL) hinzuzuschalten, um die Umgebung anstatt das Kind anzupassen.');
    } 
    // Szenario 4: Einfach noch zu wenig ausgewählt
    else {
        setFeedback(feedback, 'warn', '<strong>Guter Anfang, aber es reicht noch nicht für alle.</strong> Beobachten Sie die Balken: Fehlt jemandem noch sprachliche Entlastung oder exekutive Führung? Kombinieren Sie weiter.');
    }
}

// --- LOGIK SELBSTARBEIT 2 ---

function unlockTaskSelf2(boxId) {
    const box = document.getElementById(boxId);
    if (box) {
        unlockBox(box);
    }
}

function updateSelf2Room() {
    const checkboxes = document.querySelectorAll('input[onchange="updateSelf2Room()"]:checked');
    
    let totalScore = 20; // Basiswert

    checkboxes.forEach(cb => {
        totalScore += parseInt(cb.value);
    });

    // Sicherheit: Wert zwischen 0 und 100 halten
    if (totalScore > 100) totalScore = 100;
    if (totalScore < 0) totalScore = 0;
    
    const bar = document.getElementById('self2-room-bar');
    const scoreText = document.getElementById('self2-room-score');
    const feedback = document.getElementById('self2-room-feedback');
    const nextBtn = document.getElementById('btn-self2-next1');

    bar.style.width = totalScore + '%';
    
    // Szenario 1: Der perfekte Raum
    if (totalScore === 100) {
        scoreText.innerText = "100% (Ideal barrierefrei)";
        scoreText.style.color = "var(--success-color)";
        bar.style.backgroundColor = "var(--success-color)";
        feedback.innerHTML = "<strong>Optimal:</strong> Sie haben alle förderlichen Raumaspekte aktiviert und defizitäre Distraktoren gemieden. Der Raum unterstützt nun präventiv wie ein 'dritter Pädagoge'.";
        feedback.style.display = 'block';
        nextBtn.style.display = 'block'; // Weitergehen erlaubt
    } 
    // Szenario 2: NEU - Der praxisnahe Raum (60% bis 80%)
    else if (totalScore >= 60) {
        scoreText.innerText = totalScore + "% (Praxisnaher Kompromiss)";
        scoreText.style.color = "var(--accent-color)";
        bar.style.backgroundColor = "var(--accent-color)";
        feedback.innerHTML = "<strong>Ein guter Mittelweg:</strong> In der Realität können wir Klassenräume oft nicht komplett umbauen (z. B. fehlendes Budget für Akustik). Ihr Raum bietet bereits gute Zonen und Struktur, hat aber noch Reibungspunkte. Das ist ein realistischer Startpunkt für echte Inklusion!";
        feedback.style.display = 'block'; // Text wird jetzt angezeigt!
        nextBtn.style.display = 'block';  // Weitergehen ist jetzt auch hier erlaubt!
    } 
    // Szenario 3: Exkludierender Raum
    else {
        scoreText.innerText = totalScore + "% (Exkludierend / Defizitär)";
        scoreText.style.color = "#dc3545";
        bar.style.backgroundColor = "#dc3545";
        feedback.innerHTML = "<strong>Achtung, Barrieren:</strong> Sie haben Maßnahmen ausgewählt, die zu Reizüberflutung führen oder neurodiverse Lernende massiv einschränken (z. B. bunte Deko überall oder starre Frontalsituationen). Bitte überdenken Sie die Struktur.";
        
        // Feedback bei sehr niedrigen Werten anzeigen, Button bleibt gesperrt
        if(totalScore <= 40) {
            feedback.style.display = 'block';
        } else {
            feedback.style.display = 'none';
        }
        nextBtn.style.display = 'none'; // Hier bleibt es gesperrt
    }
}

function checkSelf2Kounin() {
    const s1 = document.getElementById('self2-kounin-1').value;
    const s2 = document.getElementById('self2-kounin-2').value;
    const s3 = document.getElementById('self2-kounin-3').value;
    const s4 = document.getElementById('self2-kounin-4').value;
    
    const feedback = document.getElementById('self2-kounin-feedback');

    feedback.style.display = 'block';

    if (!s1 || !s2 || !s3 || !s4) {
        setFeedback(feedback, 'warn', 'Hinweis: Bitte ordnen Sie alle vier schulischen Situationen einer Management-Dimension zu.');
        return;
    }

    if (s1 === 'withitness' && s2 === 'overlapping' && s3 === 'alerting' && s4 === 'smoothness') {
        setFeedback(feedback, 'success', 'Aktion A demonstriert "Allgegenwärtigkeit" (Die Lehrkraft sieht alles). Aktion B ist die typische "Überlappung" (Multitasking ohne Stress). Aktion C "mobilisiert die Gruppe", da jeder aufgerufen werden könnte. Aktion D sichert "Reibungslosigkeit", indem Übergänge durch Timer entlastet werden.');
        unlockTaskSelf2('self2-task3-box');
    } else {
        setFeedback(feedback, 'error', '<strong>Noch nicht ganz korrekt.</strong><br>Tipp: Das Zeigen von Präsenz im Raum ist "Withitness". Das gleichzeitige Management zweier Themen ist "Überlappung". Zufallsaufrufe dienen der "Gruppenmobilisierung". Der Timer verhindert harte Brüche in der "Reibungslosigkeit".');
    }
}

let selectedRoutines = 0;

function toggleRoutine(btn, type) {
    if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
        btn.style.backgroundColor = "var(--container-bg)";
        btn.style.color = "var(--text-color)";
        btn.style.borderColor = "var(--border-color)";
        btn.style.fontWeight = "normal";
        selectedRoutines--;
    } else {
        if (selectedRoutines >= 3) return; // Maximal 3 erlauben
        btn.classList.add('selected');
        btn.setAttribute('data-type', type);
        btn.style.backgroundColor = "var(--accent-color)";
        btn.style.color = "#ffffff";
        btn.style.borderColor = "var(--accent-color)";
        btn.style.fontWeight = "600";
        selectedRoutines++;
    }
    document.getElementById('routine-counter').innerText = selectedRoutines;
}

function checkSelf2Routine() {
    const feedback = document.getElementById('self2-routine-feedback');
    const selectedButtons = document.querySelectorAll('.routine-btn.selected');

    feedback.style.display = 'block';

    if (selectedRoutines !== 3) {
        setFeedback(feedback, 'warn', 'Hinweis: Bitte wählen Sie exakt 3 Handlungsoptionen aus, um die Routine zu überprüfen.');
        return;
    }

    let correctCount = 0;
    selectedButtons.forEach(btn => {
        if (btn.getAttribute('data-type') === 'correct') correctCount++;
    });

    if (correctCount === 3) {
        setFeedback(feedback, 'success', '<strong>Ein starker, präventiver Ansatz!</strong> Sie setzen auf nonverbale Signale, visuelle Orientierung und klare Materialzuordnung. Nehmen Sie diese Überlegung mit in die Präsenzsitzung: Wie könnten wir solche stark strukturierenden Routinen am Gymnasium etablieren, ohne dass sie für ältere Lernende bevormundend wirken?');
    } else {
        /* Nutzt den 'error'-Parameter, der nun durch unsere vorherige CSS-Änderung neutral grau statt rot dargestellt wird */
        setFeedback(feedback, 'error', '<strong>Interessante Auswahl – lassen Sie uns das systemisch betrachten.</strong> Einige der gewählten Elemente (wie unstrukturierte Phasen oder unangekündigtes Abfragen) können bei Lernenden mit exekutiven Schwierigkeiten akuten Stress (Cortisol) auslösen. Diskutieren Sie später im Plenum: Warum greifen wir im Schulalltag dennoch so oft unbewusst auf diese Muster zurück?');
    }
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

    const liveRegion = document.getElementById('tts-live-region');

    if (!currentContainer) return;
    const pauseBtn = currentContainer.querySelector('.tts-pause');
    const stopBtn = currentContainer.querySelector('.tts-stop');

    if (state === 'playing') {
        if (pauseBtn) { pauseBtn.disabled = false; pauseBtn.innerText = "Pause"; }
        if (stopBtn) stopBtn.disabled = false;
        if (liveRegion) liveRegion.innerText = "Sprachausgabe gestartet.";
    } else if (state === 'paused') {
        if (pauseBtn) { pauseBtn.disabled = false; pauseBtn.innerText = "Weiter"; }
        if (stopBtn) stopBtn.disabled = false;
        if (liveRegion) liveRegion.innerText = "Sprachausgabe pausiert.";
    } else if (state === 'stopped') {
        if (liveRegion) liveRegion.innerText = "Sprachausgabe gestoppt.";
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

    // --- PHASE 1: ARIA-Live-Region für TTS-Status ---
    const ttsLiveRegion = document.createElement('div');
    ttsLiveRegion.id = 'tts-live-region';
    ttsLiveRegion.className = 'sr-only';
    ttsLiveRegion.setAttribute('aria-live', 'polite');
    document.body.appendChild(ttsLiveRegion);

    // --- PHASE 1: Screenreader-Hinweis für TTS ---
    const srNote = document.createElement('div');
    srNote.className = 'sr-only';
    srNote.innerText = 'Hinweis für Screenreader-Nutzer:innen: Diese Vorlesefunktion dient primär der kognitiven Entlastung für Sehende und sollte bei aktiven Screenreadern ignoriert werden.';
    document.querySelectorAll('.tts-controls').forEach(control => {
        control.prepend(srNote.cloneNode(true));
    });

    // --- PHASE 1: Alternative Eingaben für Range-Slider ---
    document.querySelectorAll('input[type="range"]').forEach(slider => {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.alignItems = 'center';
        wrapper.style.gap = '1rem';
        wrapper.style.marginTop = '0.5rem';

        const label = document.createElement('label');
        label.innerText = 'Direkteingabe:';
        label.style.fontSize = '0.85rem';
        label.style.fontWeight = '600';
        const numId = slider.id + '-number-input';
        label.setAttribute('for', numId);

        const numInput = document.createElement('input');
        numInput.type = 'number';
        numInput.id = numId;
        numInput.min = slider.min;
        numInput.max = slider.max;
        numInput.step = slider.step || '1';
        numInput.value = slider.value;
        numInput.className = 'settings-control';
        numInput.style.width = '80px';
        numInput.style.padding = '0.3rem';

        // Synchronisation Range -> Number
        slider.addEventListener('input', () => {
            numInput.value = slider.value;
        });

        // Synchronisation Number -> Range
        numInput.addEventListener('input', () => {
            let val = parseFloat(numInput.value);
            let min = parseFloat(slider.min);
            let max = parseFloat(slider.max);
            if (val < min) val = min;
            if (val > max) val = max;
            slider.value = val;
            
            // Manuelles Auslösen des Input-Events am Range-Slider
            const event = new Event('input', { bubbles: true });
            slider.dispatchEvent(event);
        });

        wrapper.appendChild(label);
        wrapper.appendChild(numInput);
        
        // Intelligente Platzierung: Verhindert die Zerstörung von komplexen Custom-Slider-Layouts
        const parent = slider.parentElement;
        if (parent && parent.style.position === 'relative') {
            // Slider liegt in einer Custom-Track-UI (wie bei s1-slider). Wrapper nach dem Container einfügen!
            parent.parentElement.insertBefore(wrapper, parent.nextSibling);
        } else {
            // Standard-Slider: Einfach direkt neben/unter den Input packen.
            slider.parentNode.insertBefore(wrapper, slider.nextSibling);
        }
    });

    // Initiale History-State für SPA-Routing setzen
    window.history.replaceState({ viewId: 'home' }, '', '#home');
});

// --- PHASE 2: MULTIMODALE REFLEXION (TEMPLATES) ---
const reflectionTemplates = {
    s1: {
        bullets: "• Beispiele für defizitorientierte Praktiken am Gymnasium:\n• Konkrete UDL-Alternativen dazu:\n• Wie schaffe ich echtes 'Belonging':",
        structure: "1. Status Quo: Wo erlebe ich aktuell Separation oder Mainstreaming am Gymnasium?\n\n2. Barriereabbau: Wie müsste sich der Unterricht grundlegend ändern?\n\n3. Zugehörigkeit: Wie schaffe ich proaktiv ein 'Enhanced sense of belonging'?"
    },
    s2: {
        bullets: "• Eigene Erfahrungen mit Leistungsdruck/Selektion:\n• Beobachtete Beispiele für 'Doing Difference':\n• Meine Ideen für 'Undoing Difference':",
        structure: "1. Das Dilemma: Wie erlebe ich die Antinomie (Selektion vs. Inklusion) in meinem Fach?\n\n2. Habitus-Falle: Wo bewerte ich eventuell unbewusst Anpassung statt reiner Leistung?\n\n3. Lösungsansatz: Wie kann ich Differenzen im Alltag 'entdramatisieren'?"
    },
    s3: {
        bullets: "• Kritikpunkte am 'Etikettieren':\n• Alternative Ideen zur Ressourcenverteilung:\n• Präventive UDL-Ansätze für mein Fach:",
        structure: "1. Das Dilemma: Warum zwingt uns das aktuelle System zur defizitorientierten Etikettierung?\n\n2. Systemvision: Wie ließen sich personelle Unterstützungen ohne vorherige Diagnosen organisieren?\n\n3. Eigene Praxis: Wie kann ich präventiv handeln, ohne auf formelle Ressourcen zu warten?"
    },
    s4: {
        bullets: "• Was mich am Studienergebnis überrascht hat:\n• Gefahren von öffentlichen Leistungsvergleichen:\n• Konkrete Maßnahmen zur Beziehungsgestaltung:",
        structure: "1. Die Erkenntnis: Warum scheitert soziale Integration oft gerade an leistungsstarken Gymnasien?\n\n2. Die Gefahr: An welchen Stellen befeuere ich als Lehrkraft (unbewusst) negative soziale Vergleiche?\n\n3. Die Intervention: Welche didaktischen Maßnahmen (UDL) stärken gezielt die Beziehungen in der Klasse?"
    },
    s5: {
        bullets: "• Warum Noten (summativ) den Alltag dominieren:\n• Analyse meiner bisherigen Feedback-Kultur:\n• Erste Schritte hin zu formativem Assessment:",
        structure: "1. Der Widerspruch: Warum nutzen wir so selten formatives Assessment, obwohl die Evidenz so erdrückend ist?\n\n2. Die Wirkung: Wie wandle ich normatives (stressendes) Feedback in instruktives Feedback um?\n\n3. Der Transfer: Wie integriere ich kybernetisches Feedback pragmatisch in meinen Alltag?"
    },
    fallback: {
        bullets: "• Kernpunkt 1:\n• Kernpunkt 2:\n• Offene Frage/Zweifel:\n• Transfer für mein Fach:",
        structure: "1. Beobachtung (Was ist mir aufgefallen?):\n\n2. Theoretische Verknüpfung (Welches Konzept passt?):\n\n3. Didaktische Konsequenz (Was bedeutet das für meinen Unterricht?):"
    }
};

function loadReflectionTemplate(textareaId, type) {
    const textarea = document.getElementById(textareaId);
    if (!textarea) return;

    // Extrahiere die Sitzungs-ID aus der textareaId (z.B. aus "ans-s1-reflection" wird "s1")
    const sessionId = textareaId.split('-')[1];
    
    // Prüfe, ob es ein spezifisches Template für diese Sitzung gibt, ansonsten nutze das Fallback
    const templates = reflectionTemplates[sessionId] || reflectionTemplates['fallback'];
    const textToInsert = templates[type];

    if (textarea.value.trim() !== "" && !confirm("Möchten Sie das aktuelle Feld überschreiben? Ihre Notizen gehen verloren.")) {
        return;
    }
    
    textarea.value = textToInsert;
    textarea.focus();
}
