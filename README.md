# Site web — Installation SOAITRAV

Site statique bilingue **FR / AR** pour télécharger l'installeur et lire le guide.

## Repo

https://github.com/meziania/installer_moqawil

Installeur (GitHub Release) :

https://github.com/meziania/installer_moqawil/releases/download/v1.0.0/SOAITRAV-Setup-1.0.0.exe

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

## Republier l'installeur

```powershell
npm run dist:desktop
npm run sync:installer-site
gh release upload v1.0.0 instaler_moqawil/downloads/SOAITRAV-Setup-1.0.0.exe --clobber --repo meziania/installer_moqawil
```

## Vercel

Import du repo `meziania/installer_moqawil` — Framework: Other — Deploy.
