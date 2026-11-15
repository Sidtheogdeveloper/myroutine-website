# MyRoutine website

The MyRoutine landing page is a static site. Run `python -m http.server 8000` in this folder and open `http://localhost:8000` for a local preview.

The site offers two signed Android APKs.

- 2.8.1 is served from `downloads/`. SHA-256 is `fce63d1cc9941e9cd1f2b624abc3b6a5062a7394ce74ab435f08b787ac2996b1`.
- 2.9.1 is a GitHub Release asset. SHA-256 is `7e96fb25feac8c0a0a4f5560c831fb06cc0d09075260847368410082a9fcadee`.

For future large APKs, upload the signed file to a GitHub Release and update its download link and version details in `index.html`. The optional Qwen model is downloaded within the Android app.
