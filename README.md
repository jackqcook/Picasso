

# Picasso — AI art with StyleGAN2-ADA




I fine-tuned **StyleGAN2-ADA** (the [NVlabs StyleGAN2-ADA PyTorch](https://github.com/NVlabs/stylegan2-ada-pytorch) implementation) on a curated set of artwork images. StyleGAN2-ADA is well suited to smaller or domain-specific image collections because its adaptive discriminator augmentation reduces overfitting while training.

After training, we analyzed **W-space** (the intermediate latent space of the generator), embedded latent codes with **UMAP**, grouped them with **KMeans**, and constructed smooth **latent walks** that move through the learned manifold—particularly paths that respect the discovered clusters. Those walks drive frame-by-frame generation, which we assembled into a video and lightly post-processed for temporal continuity.

The full runnable workflow lives in **`AI_art.ipynb`**.

## Sample output

The final latent walk is included in the repository as **[`supervised_output-2.mp4`](./supervised_output-2.mp4)** (full export). A smaller **[`supervised_output-2_readme.mp4`](./supervised_output-2_readme.mp4)** copy is also included so it stays under GitHub’s **10 MB** limit for README/issue video uploads—drag that file into the README editor on **github.com** if you want an inline player on the repo home page. GitHub does not inline-play normal repo-relative `.mp4` links; the attachment upload uses the `user-attachments` URL GitHub inserts after a successful drop.

## Where we ran it

The experiment was executed in **Google Colab**, using a **CUDA** GPU runtime. Checkpoints, packaged datasets, training runs, intermediate frames, and the final video were stored under **Google Drive** so work persisted across Colab sessions (the notebook mounts Drive and writes outputs to a dedicated folder there).

## Dataset

Training images come from the **ArtWiki** dataset: a wiki-based collection of artwork images (organized with metadata such as style or movement). In our pipeline those images were prepared for StyleGAN’s tooling by resizing and **center-cropping** to a fixed resolution (256×256 in the notebook), then packaged into the ZIP format expected by `dataset_tool.py` before calling the official `train.py` entry point.

If you reuse this project, place your ArtWiki-derived image folder where the notebook expects it (or update the paths in the configuration cell) before packaging and training.

## Repository contents

| Item | Purpose |
|------|---------|
| `AI_art.ipynb` | End-to-end Colab-oriented notebook: environment setup, StyleGAN repo clone and small compatibility patches, dataset packaging, training, latent analysis, and video export. |
| `supervised_output-2.mp4` | Example output video (latent walk) produced by the notebook pipeline. |

## Acknowledgments

- [StyleGAN2-ADA (PyTorch)](https://github.com/NVlabs/stylegan2-ada-pytorch) — NVIDIA Research  
- **ArtWiki** — source of the training images  

Refer to ArtWiki’s own terms and citation guidance if you publish or redistribute derived work.
