# MyRoutine website

The MyRoutine landing page is a static site. Run `python -m http.server 8000` in this folder and open `http://localhost:8000` for a local preview.

The download is the signed Android APK, version 2.8.1. Its SHA-256 is `fce63d1cc9941e9cd1f2b624abc3b6a5062a7394ce74ab435f08b787ac2996b1`.

When publishing a release, add the new APK under `downloads/`, update both download links and the release labels in `index.html`, and set the new attachment path and filename in `vercel.json`.
