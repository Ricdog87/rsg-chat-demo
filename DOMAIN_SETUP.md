# Domain-Einrichtung für Juicy Fruits

Diese Anleitung beschreibt, wie du Juicy Fruits auf deiner eigenen Domain einrichtest.

## 1. Supabase-Konfiguration

### 1.1 URL-Konfiguration

1. Gehe zu deinem Supabase-Projekt-Dashboard
2. Navigiere zu "Authentication" > "URL Configuration"
3. Füge deine Domain als "Site URL" hinzu: `https://deine-domain.de`
4. Füge die folgenden Redirect-URLs hinzu:
   - `https://deine-domain.de/auth/callback`
   - `https://deine-domain.de/reset-password`

### 1.2 OAuth-Provider (Google)

1. Gehe zu "Authentication" > "Providers" > "Google"
2. Stelle sicher, dass der Provider aktiviert ist
3. Aktualisiere die "Authorized redirect URI" in der Google Cloud Console:
   - `https://deine-domain.de/auth/callback`

## 2. Umgebungsvariablen

Stelle sicher, dass die folgenden Umgebungsvariablen in deiner Hosting-Umgebung (z.B. Vercel) gesetzt sind:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=https://deine-supabase-projekt-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-supabase-anon-key
NEXT_PUBLIC_SITE_URL=https://deine-domain.de
NEXT_PUBLIC_SITE_NAME=Juicy Fruits
\`\`\`

## 3. Domain-Einrichtung

### 3.1 Vercel (empfohlen)

1. Gehe zu deinem Vercel-Projekt-Dashboard
2. Navigiere zu "Settings" > "Domains"
3. Füge deine Domain hinzu: `deine-domain.de`
4. Folge den Anweisungen, um die DNS-Einträge zu konfigurieren

### 3.2 Andere Hosting-Anbieter

1. Stelle sicher, dass dein Hosting-Anbieter HTTPS unterstützt
2. Konfiguriere die DNS-Einträge entsprechend den Anweisungen deines Hosting-Anbieters
3. Setze die Umgebungsvariablen wie oben beschrieben

## 4. Überprüfung

Nach der Einrichtung solltest du folgende Funktionen testen:

1. Registrierung und Anmeldung mit E-Mail/Passwort
2. Anmeldung mit Google
3. Passwort-Zurücksetzung
4. Profilbearbeitung

Bei Problemen überprüfe die Konsole auf Fehler und stelle sicher, dass alle Umgebungsvariablen korrekt gesetzt sind.
