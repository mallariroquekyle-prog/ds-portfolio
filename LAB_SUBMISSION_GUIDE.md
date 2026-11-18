# Lab Tasks 2–6: Completion and submission guide

This package addresses the midterm remark that the instructor lesson notebook prompts were left unanswered.

## What was filled in

| Task | Source | New lab notebook | Result |
|---|---|---|---|
| 2 | `01_Understanding Deep Learning.ipynb` | `labs/Lab_Task_2_Forward_Pass.ipynb` | Forward pass; error 0.92 and squared error 0.8464 |
| 3 | `01_Understanding Deep Learning.ipynb` | `labs/Lab_Task_3_Backpropagation.ipynb` | NumPy one-step forward/backward propagation and weight updates |
| 4 | `01_Understanding Deep Learning.ipynb` | `labs/Lab_Task_4_PyTorch_Regression.ipynb` | Diabetes regression; MSE, 2 Linear layers, batch=8, SGD, epochs=1000 |
| 5 | `02_PyTorch Basics.ipynb` | `labs/Lab_Task_5_PyTorch_Tensors.ipynb` | All 10 requests, including reproducible random arrays and matrix multiplication |
| 6 | `E1 - CNN Implementation.ipynb` | `labs/Lab_Task_6_CNN_Example_Check_Diagram.ipynb` | Working CNN lecture-based example only; diagram missing |

Solutions were also inserted after the corresponding prompts in the original **main** lesson notebooks. The additional A/B/C course reference versions are retained unchanged.

## Task 6: **Important, not complete against the original diagram**

The original task asks you to translate `figures/quick_draw.png`. The uploaded notebook references this image, but no `figures/quick_draw.png` was provided in the package. Therefore the supplied model uses the MNIST example architecture in the instructor's lecture and **must be checked against the diagram before claiming full completion**. Obtain the image from your instructor and revise the provisional CNN accordingly.

## GitHub link and submission

Your midterm feedback also indicates **no GitHub page link**. These files are a local package, not yet published. After inspecting and customizing your notebook work, build and push your portfolio and GitHub Pages. In Command Prompt opened inside `my-portfolio`:

```cmd
python -m pip install "jupyter-book<2" ghp-import
jupyter-book clean .
jupyter-book build .
start _build\html\index.html
git add -A
git commit -m "Add Lab Tasks 2 to 6 solutions"
git push
ghp-import -n -p -f _build/html
```

First-time publishing requires `git init` and a GitHub remote: see the main README. In GitHub Settings → Pages, choose `gh-pages` branch `/ (root)`. After deployment, **check and submit both** the repository URL and public Pages URL. The published site cannot be verified from this ZIP alone.

## Environment notes

- For running the lab notebooks: `pip install numpy torch scikit-learn matplotlib jupyter`.
- Jupyter Book is configured with notebook execution turned **off** to preserve saved outputs; the five separate labs were executed in the preparation environment and their outputs have been retained.
- Avoid running the entire original `E1` instructor lesson if it expects missing external `figures` assets or downloads MNIST; use the standalone lab notebook first.
- **Do not represent the model in Lab 6 as matching the missing diagram until you have compared it.**
