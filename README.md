# Site web — Installation Moqawil (SOAITRAV)

Site statique bilingue **FR / AR** pour :

- télécharger l'installeur Windows ;
- lire le guide d'utilisation.

## Contenu

```
instaler_moqawil/
  index.html
  assets/
  downloads/          ← placer Moqawil-Setup-1.0.0.exe ici
  README.md
```

## Repo GitHub

https://github.com/meziania/installer_moqawil

L'installeur Windows (~150 Mo) est publié en **GitHub Release** (limite Git 100 Mo) :

https://github.com/meziania/installer_moqawil/releases/download/v1.0.0/Moqawil-Setup-1.0.0.exe

## Préparer / republier le .exe

```powershell
npm run dist:desktop
npm run sync:installer-site
gh release upload v1.0.0 instaler_moqawil/downloads/Moqawil-Setup-1.0.0.exe --clobber --repo meziania/installer_moqawil
```

## Prévisualiser en local

```powershell
npx --yes serve instaler_moqawil -p 4173
```

Ouvrir : http://localhost:4173

## GitHub Pages

Settings → Pages → Deploy from branch `main` / root (ou `/docs` si besoin).

## Langues

Boutons **FR** / **AR** en haut à droite. L'arabe active le mode RTL.
