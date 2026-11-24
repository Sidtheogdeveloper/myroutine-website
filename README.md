# MyRoutine website

The MyRoutine landing page is a static site. Run `python -m http.server 8000` in this folder and open `http://localhost:8000` for a local preview.

The site offers three signed Android APKs, with 2.10.0 as the latest release.

- 2.8.1 is served from `downloads/`. SHA-256 is `fce63d1cc9941e9cd1f2b624abc3b6a5062a7394ce74ab435f08b787ac2996b1`.
- 2.9.1 is a GitHub Release asset. SHA-256 is `7e96fb25feac8c0a0a4f5560c831fb06cc0d09075260847368410082a9fcadee`.
- 2.10.0 is a GitHub Release asset. SHA-256 is `8767427bbdb06babc485c3ff5f7c53e7a7cba3451c158e6b9c335660191a7816`.

For future large APKs, upload the signed file to a GitHub Release and update its download link and version details in `index.html`. The optional Qwen model is downloaded within the Android app.
