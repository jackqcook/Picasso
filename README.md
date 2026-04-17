

# Picasso — AI art with StyleGAN2-ADA

This repository documents a project that learns a generative model of paintings and explores its latent space to produce synthetic imagery and video.


I fine-tuned **StyleGAN2-ADA** (the [NVlabs StyleGAN2-ADA PyTorch](https://github.com/NVlabs/stylegan2-ada-pytorch) implementation) on a curated set of artwork images. StyleGAN2-ADA is well suited to smaller or domain-specific image collections because its adaptive discriminator augmentation reduces overfitting while training.

After training, we analyzed **W-space** (the intermediate latent space of the generator), embedded latent codes with **UMAP**, grouped them with **KMeans**, and constructed smooth **latent walks** that move through the learned manifold—particularly paths that respect the discovered clusters. Those walks drive frame-by-frame generation, which we assembled into a video and lightly post-processed for temporal continuity.

The full runnable workflow lives in **`AI_art.ipynb`**.

## Sample output

The final latent walk is included in the repository as **[`supervised_output-2.mp4`](./supervised_output-2.mp4)**. On GitHub, use that link (or open the file from the repo root) to stream or download the video. GitHub’s README renderer does not reliably inline-play `.mp4` files the way notebooks do, so the file is linked here rather than embedded as HTML.

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
