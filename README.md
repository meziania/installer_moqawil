# Site web — Installation SOAITRAV

Site statique bilingue **FR / AR** pour télécharger l'installeur et lire le guide.

## Repo

https://github.com/meziania/installer_moqawil

Installeur (GitHub Release) :

https://github.com/meziania/installer_moqawil/releases/download/v1.1.0/SOAITRAV-Setup-1.1.0.exe

## Contenu

```
instaler_moqawil/
  index.html
  assets/
  downloads/
  vercel.json
  README.md
```

Aucun identifiant de connexion n'est publié sur ce site.
Les accès sont communiqués séparément par SOAITRAV.

## Republier l'installeur (+ auto-update)

```powershell
# 1) Bumper la version dans apps/desktop/package.json si besoin
# 2) Build
npm run dist:desktop

# 3) Copie locale + upload Release (exe + blockmap + latest.yml)
npm run sync:installer-site
npm run publish:installer-release

# 4) Mettre à jour les liens du site (version) puis push instaler_moqawil
```

L'app desktop vérifie GitHub Releases au démarrage et propose d'installer la mise à jour.
Les données client (`%APPDATA%\SOAITRAV`) sont conservées.

## Vercel

Import du repo `meziania/installer_moqawil` — Framework: Other — Deploy.
