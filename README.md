<div align="center" id="top">

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[![Version][version-shield]][version-url]
[![Issues][issues-shield]][issues-url]
[![Pulls][pulls-shield]][pulls-url]
[![Codecov][codecov-shield]][codecov-url]
[![MIT License][license-shield]][license-url]

</div>

<br />
<div align="center">

![header-light](https://github.com/JarvisPrestidge/payload-cloud-storage-vercel-adapter/assets/6669336/b06bd7cb-e9e0-405c-872d-92ecbf86ec63)

  <p align="center">
    A stop-gap solution for using Vercel Blob Storage with Payload CMS v3 
    <br />
    <br />
    <a href="https://github.com/JarvisPrestidge/payload-cloud-storage-vercel-adapter/issues">Report Bug</a>
    ·
    <a href="https://github.com/JarvisPrestidge/payload-cloud-storage-vercel-adapter/issues">Request Feature</a>
  </p>
</div>

<div align="center">

  <a href="https://www.typescriptlang.org/">
    <img src="https://user-images.githubusercontent.com/6669336/169691369-e95c9e02-f33a-40f6-89e4-3709d16440d5.svg" alt="Made with TypeScript">
  </a>

</div>

<br />

> [!IMPORTANT]
> Only for use with Payload CMS v3 (currently in alpha).
>
> This package will be deprecated once the official Vercel Blob Storage adapter is released.

<br/>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#api">API</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## 💾 Installation

```bash
$ npm install payload-cloud-storage-vercel-adapter
```

```bash
$ yarn add payload-cloud-storage-vercel-adapter
```

```bash
$ yarn add payload-cloud-storage-vercel-adapter
```

<p align="right">(<a href="#top">back to top</a>)</p>

## 🔨 Usage

> [!NOTE]
> Requirements:
>
> -   Payload v3

Add the plugin within your Payload config as follows, passing in your Vercel Blob Storage token and storeId, and optionally any upload options.

```typescript
import path from "path";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { vercelBlobAdapter } from "payload-cloud-storage-vercel-adapter";
import { buildConfig } from "payload/config";

export default buildConfig({
    plugins: [
        cloudStorage({
            collections: {
                [Media.slug]: {
                    adapter: vercelBlobAdapter({
                        token: process.env.BLOB_READ_WRITE_TOKEN || "",
                        storeId: process.env.BLOB_STORE_ID || ""
                    }),
                    disableLocalStorage: true,
                    disablePayloadAccessControl: true
                }
            }
        })
    ]
    // The rest of your config goes here
});
```

## ⚙️ Plugin Configuration

This plugin allows for the following configuration options to be passed to the vercel package:

| Name                               | Type    | Required | Description                                                                                     |
| ---------------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------- |
| `token`                            | string  | Yes      | Your Vercel API token.                                                                          |
| `storeId`                          | string  | Yes      | The identifier of your Vercel storage.                                                          |
| `uploadOptions`                    | object  | No       | An object specifying options for uploads.                                                       |
| `uploadOptions.access`             | string  | No       | Determines the access level for uploaded items. Default: `public`.                              |
| `uploadOptions.addRandomSuffix`    | boolean | No       | Indicates whether to add a random suffix to uploaded filenames. Default: `false`.               |
| `uploadOptions.cacheControlMaxAge` | number  | No       | Specifies the maximum age for cache control headers (in seconds). Default: `31536000` (1 year). |

## ❤️ Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request.
Don't forget to give the project a star! Thanks again!

### Tooling

-   [Changeset](https://github.com/atlassian/changesets) for changes to documentation, changelog generation, and release management.

### Making a Pull Request

1. Fork the project and clone your fork:

```bash
gh repo fork --clone
```

2. Create your feature branch:

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes:

```bash
git commit -m 'Add some AmazingFeature'
```

4. Use the changeset cli to create a detailed description of your changes.

```bash
yarn changeset
```

> This will be used to generate a changelog when we publish an update. [Learn more about Changeset](https://github.com/atlassian/changesets/tree/master/packages/cli).

5. Push branch and open a Pull Request

```bash
gh pr create
```

<p align="right">(<a href="#top">back to top</a>)</p>

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

## 📫 Contact

Jarvis Prestidge - jarvisprestidge@gmail.com

Project Link: [https://github.com/jarvisprestidge/payload-cloud-storage-vercel-adapter](https://github.com/jarvisprestidge/payload-cloud-storage-vercel-adapter)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[typescript-shield]: https://img.shields.io/badge/made%20with-typescript-%23007ACC?style=for-the-badge&link=https://www.typescriptlang.org "TypeScript (External Link)"
[issues-shield]: https://img.shields.io/github/issues/JarvisPrestidge/payload-cloud-storage-vercel-adapter.svg?style=for-the-badge
[issues-url]: https://github.com/JarvisPrestidge/payload-cloud-storage-vercel-adapter/issues
[pulls-shield]: https://img.shields.io/github/issues-pr/JarvisPrestidge/payload-cloud-storage-vercel-adapter.svg?style=for-the-badge
[pulls-url]: https://github.com/JarvisPrestidge/payload-cloud-storage-vercel-adapter/pulls
[license-shield]: https://img.shields.io/github/license/JarvisPrestidge/payload-cloud-storage-vercel-adapter.svg?style=for-the-badge
[license-url]: https://github.com/JarvisPrestidge/payload-cloud-storage-vercel-adapter/blob/master/LICENSE.txt
[codecov-shield]: https://img.shields.io/codecov/c/gh/JarvisPrestidge/payload-cloud-storage-vercel-adapter?style=for-the-badge
[codecov-url]: https://app.codecov.io/gh/JarvisPrestidge/payload-cloud-storage-vercel-adapter
[version-shield]: https://img.shields.io/github/package-json/v/jarvisprestidge/payload-cloud-storage-vercel-adapter?style=for-the-badge
[version-url]: https://www.npmjs.com/package/payload-cloud-storage-vercel-adapter
[check-icon]: https://github.com/bjss/eng-blocks-frontend-exemplar/assets/6669336/5c41ecfa-51c8-475f-964d-af733eb70d51
