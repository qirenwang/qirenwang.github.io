# Publication figures and videos

Each paper has its own folder here, named after the last part of its permalink:

| Paper | Folder |
| --- | --- |
| AlpaSafe | `alpasafe/` |
| BEVCast | `bevcast/` |
| iFLOW | `iflow/` |
| Edge-Assisted Object Perception | `edge-object-perception/` |
| Voice Controlled Indoor Robot Kit | `voice-robot-kit/` |
| VeCBench | `vecbench/` |
| Edge anomaly detection poster | `edge-anomaly-detection-poster/` |

Drop files into the folder with these names. Nothing else needs editing.

| File name | Where it shows |
| --- | --- |
| `teaser.png` (or `.jpg`, `.jpeg`, `.webp`, `.gif`) | Card image on the Publications list. Every paper should have one. |
| `detail-1.png`, `detail-2.mp4`, ... | Detail page, top to bottom in file-name order. Images and videos can be mixed. |
| `detail-2-poster.jpg` (video name + `-poster`) | Still shown in the video box until it plays. Without one, Safari shows a black box. Usually the video's first frame. |

- If a paper has no `detail-*` files, its detail page shows `teaser` instead.
- If a paper has no `teaser`, its card shows a grey placeholder with the venue and year.
- Card images sit in a 16:10 box, so 1600 x 1000 px fits best. Other shapes are letterboxed, not cropped.
- Videos: `.mp4` (H.264) plays in every browser. `.webm` also works. Keep each file well under 100 MB, the GitHub file limit.
- Use lowercase names and keep the hyphen in `detail-1`. Use `detail-1` to `detail-9`; past nine, name them `detail-01`, `detail-02`, ... so they stay in order.

A new paper's folder is its permalink slug: `permalink: /publications/my-paper/` uses `images/publications/my-paper/`.
