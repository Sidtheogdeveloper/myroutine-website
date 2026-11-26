# MyRoutine website

The MyRoutine landing page is a static site. Run `python -m http.server 8000` in this folder and open `http://localhost:8000` for a local preview.

The site offers the latest signed Android APK, version 2.14.0, as a GitHub Release asset.

For future large APKs, upload the signed file to a GitHub Release and update its download link and version details in `index.html`. The optional Qwen model is downloaded within the Android app.
