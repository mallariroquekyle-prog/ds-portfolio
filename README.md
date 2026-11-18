**New laboratory exercise:** `labs/Lab_Image_Classification_Pretrained_Models.ipynb` evaluates five ImageNet-pretrained TorchVision models on PyTorch's Ants vs. Bees validation dataset. You must run and save this notebook locally to generate real scores, charts, and conclusions; internet is required once for the dataset and model weights. See `IMAGE_CLASSIFICATION_LAB_GUIDE.md`.

**Latest update:** Five Lab Tasks (2–6) are available in the `labs/` folder and in the website navigation. Lab Tasks 2–5 have run successfully. Lab Task 6 is a working example only because the assigned CNN diagram `figures/quick_draw.png` is missing. Read `LAB_SUBMISSION_GUIDE.md` before submitting.

# Bear's Data Den — Data Science Portfolio

## Navigation title fix (Previous / Next)

All eight notebooks now begin with an actual level-one Markdown heading. This gives
Jupyter Book/Sphinx a document title to display in the **Previous** and **Next**
navigation controls, instead of `<no title>`. All lesson code, plots, and saved
outputs are preserved.

After replacing the old project files, rebuild the site *fully*:

```cmd
jupyter-book clean .
jupyter-book build .
start _build\html\index.html
```

If publishing to an existing GitHub repository, keep its `.git` folder, then:

```cmd
git add -A
git commit -m "Fix Previous and Next notebook titles"
git push
ghp-import -n -p -f _build/html
```

---

**Owner:** Roque Kyle Mallari  
**Program:** Bachelor of Science in Data Science, fourth year (BSDS-4A)  
**Course:** DS Elective 4

This is a **cute cartoon bear-and-panda-themed** Jupyter Book portfolio with eight Deep Learning course notebooks. The homepage uses original, locally stored cartoon bear-and-panda illustrations, pastel-colored module cards, rounded buttons, and responsive CSS. All notebook source files are preserved.

## Folder contents

- `intro.md` — bear-themed homepage and links to every notebook.
- `_static/custom.css` — shared cute fonts, homepage/notebook styling, daytime bear and nighttime panda modes, and a single desktop search bar.
- `_static/bear-cartoon.png` and `panda-cartoon.png` — illustrated day/night mascots.
- `_static/bear-icon.svg` and `panda-icon.svg` — matching day/night icons throughout the homepage and browser tab.
- `_static/theme-mascot.js` — automatically changes the browser tab icon when you switch themes.

- `_toc.yml` and `_config.yml` — Jupyter Book v1 navigation and settings.
- `notebooks/` — eight original `.ipynb` files, unchanged.
- `reference_files/` — original `.ipynb.txt` text export, kept as reference.
- `.gitignore` and `requirements.txt` — setup files.

Five main lesson notebooks are highlighted on the homepage; three additional A/B/C lesson versions are available as reference notebooks. There are **no ARIMA/SARIMA notebooks or CSV files** in this version.

## 1. Install Jupyter Book v1

Open Windows Command Prompt:

```cmd
python -m pip install "jupyter-book<2" ghp-import
jupyter-book --version
```

The instructor's workflow is written for Jupyter Book 1.x; version 2 uses different files and commands.

## Day / night switch

Use the sun/moon theme button at the top-right of the Jupyter Book site. **Light** shows the illustrated daytime brown bear and bear icons; **Dark** shows the illustrated nighttime panda and panda icons, including the browser tab favicon. Only the sidebar search is displayed on desktop; the top search is retained on mobile. Fonts are Fredoka and Nunito (downloaded by the browser when online, with local fallbacks).

## 2. Build and preview on Windows

Extract the ZIP, open the extracted **`my-portfolio`** folder in File Explorer, click the folder address bar, type `cmd`, and press Enter. **Do not build from `C:\Windows\System32`.** Then run:

```cmd
jupyter-book build .
start _build\html\index.html
```

Jupyter Book will create `_build/html`. The `execute_notebooks: "off"` setting preserves the saved outputs without executing PyTorch notebooks again.

## 3. Publish with GitHub Pages

If the repository does **not** yet exist, create a new public repository named `ds-portfolio` at https://github.com/new without initializing a README. Run the following from `my-portfolio`:

```cmd
git init
git add .
git commit -m "Create bear-themed Data Science portfolio"
git branch -M main
git remote add origin https://github.com/mallariroquekyle-prog/ds-portfolio.git
git push -u origin main
ghp-import -n -p -f _build/html
```

Then go to **Repository → Settings → Pages** and select **Deploy from a branch**, branch `gh-pages`, folder `/(root)`.

Expected links after successful deployment:

- GitHub repository: https://github.com/mallariroquekyle-prog/ds-portfolio
- GitHub Pages site: https://mallariroquekyle-prog.github.io/ds-portfolio/

If you **already have the GitHub repository**, keep its `.git` directory and replace the existing source files with those from this version. Then run, inside that existing project folder:

```cmd
jupyter-book build .
git add -A
git commit -m "Switch to cute bear portfolio theme"
git push
ghp-import -n -p -f _build/html
```

## 4. Add more notebook projects

Place your new `.ipynb` files inside `notebooks/`, add each file path to `_toc.yml` without the `.ipynb` suffix, and optionally add a homepage card in `intro.md`. Build and publish again.

## Known notebook dependency caveat

Some notebooks reference original lesson images from a missing `figures/` folder (for example `figures/hagrid.jpg`). Those source assets were not among the uploaded files. If you have the original figures, copy them to `notebooks/figures/` and rebuild. Do not interpret missing figures as a theme error; it is separate from the homepage design.

This site is a student-made portfolio and is not a commercial product.
