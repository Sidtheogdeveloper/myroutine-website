# MyRoutine website

The MyRoutine landing page is a static site. Run `python -m http.server 8000` in this folder and open `http://localhost:8000` for a local preview.

The site offers two signed Android APKs, with 2.11.0 as the latest release.

- 2.11.0 is a GitHub Release asset. SHA-256 is `15202069595a8015ed0ecc53a41dff9afbd67e4fb02e038f3bf126d9e087daad`.
- 2.10.0 is a GitHub Release asset. SHA-256 is `8767427bbdb06babc485c3ff5f7c53e7a7cba3451c158e6b9c335660191a7816`.

For future large APKs, upload the signed file to a GitHub Release and update its download link and version details in `index.html`. The optional Qwen model is downloaded within the Android app.
