---
# HOW TO ADD A PUBLICATION
# 1. Copy this file to _publications/YYYY-MM-DD-your-slug.md (no leading underscore;
#    files starting with "_" are ignored by Jekyll, which is why this template never shows up).
# 2. Fill in the keys below. Required: title, collection, permalink, date, authors, venue.
#    Every other key is optional: delete it or leave it empty if you do not need it.
# 3. Teaser images go in images/publications/ (e.g. images/publications/your-slug.png).
#    Until a teaser is set, the card shows a placeholder box with venue_short + year.
# 4. Anything written below the closing "---" becomes the abstract/summary on the
#    paper's detail page. Leave it empty if you have nothing to add.

# REQUIRED -------------------------------------------------------------------
title: "Full Paper Title: Quote It If It Contains a Colon"
collection: publications                 # always "publications"
permalink: /publications/your-slug/      # URL of the detail page; keep the slug unique
date: 2026-01-01                         # YYYY-MM-DD; sets the order (newest first) and the year shown
authors:                                 # in paper order, plain names; "Qiren Wang" is highlighted automatically
  - Qiren Wang
  - Co Author
  - Another Author
venue: "Full Venue Name (ABBR)"          # shown in italics, e.g. "IEEE Transactions on Intelligent Transportation Systems (TITS)"

# OPTIONAL -------------------------------------------------------------------
venue_short: "ABBR"                      # short name shown in the placeholder teaser, e.g. "TITS"
venue_url: "https://venue-homepage.example.org/"   # makes the venue name a link
location: "City, State, Country"         # conferences only; appended to the venue line
note: "Impact Factor: 9.1"               # small muted line under the venue (awards, IF, "Oral", ...)
teaser: "publications/your-slug.png"     # path relative to /images/; the file lives in images/publications/
links:                                   # pill buttons, shown in this order; the label is the button text
  - label: paper
    url: https://doi.org/10.xxxx/xxxxx
  - label: pdf
    url: https://example.org/preprint.pdf
  - label: code
    url: https://github.com/your-name/your-repo
  - label: slides
    url: https://example.org/slides.pdf
bibtex: |                                # shown behind the "bibtex" button and on the detail page; keep the 2-space indent
  @inproceedings{wang2026example,
    title     = {Full Paper Title},
    author    = {Wang, Qiren and Author, Co},
    booktitle = {Proceedings of the Example Conference (ABBR)},
    year      = {2026}
  }
---
Optional abstract or summary, written in Markdown. Delete this line if not needed.
