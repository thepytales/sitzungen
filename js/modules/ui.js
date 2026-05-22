// === js/modules/ui.js ===

// 1. XSS-Schutz (Säubert Nutzereingaben, bevor sie ins DOM gerendert werden)
export function escapeHTML(str) {
    if (!str) return "";
    return str.replace(/[&<>'"]/g, function(tag) {
        const charsToReplace = {
            '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
        };
        return charsToReplace[tag] || tag;
    });
}

// 2. Globale Lade-Animation
export function toggleLoader(show, text) {
    const el = document.getElementById("loader");
    const txt = document.getElementById("loading-text");
    if(el) {
        if(show) { 
            if(txt && text) txt.innerText = text; 
            el.classList.add("active"); 
        } else { 
            el.classList.remove("active"); 
        }
    }
}

// 3. Modals (Popups)
export function showModal(title, htmlContent) {
    document.getElementById('modal-title').innerText = title;
    const closeBtn = '<div style="margin-top:20px; text-align:right;"><button class="primary" onclick="document.getElementById(\'modal-overlay\').classList.remove(\'active\')">Schließen</button></div>';
    document.getElementById('modal-content').innerHTML = htmlContent + closeBtn;
    document.getElementById('modal-overlay').classList.add('active');
}

// 4. Benachrichtigungen (Toast Notifications)
export function showNotification(msg) {
    const el = document.getElementById("notification");
    el.innerText = escapeHTML(msg); // Direkt mit XSS-Schutz
    el.classList.add("visible");
    setTimeout(() => el.classList.remove("visible"), 3000);
}

// 5. Initialisierung & Container-Updates
export function initRightSidebar() {
    console.log("UI Modul geladen: Globale UI-Komponenten bereit.");
}

export function updateAnalysisUI(containerId, htmlContent) {
    const container = document.getElementById(containerId);
    if(container) {
        container.innerHTML = htmlContent;
    }
}