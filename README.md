## Prerequisites:

- `Node.js` 16+
- `Yarn` 3

### Local dev setup

1. Clone the repo

```bash
$ git clone https://github.com/vuestorefront/storefront-nuxt3-boilerplate.git
```

2. Set `npmAuthToken` value in the `.yarnrc.yml` ([How to get npmAuthToken?](#How-to-get-npmAuthToken))

3. Install all dependencies

```bash
$ yarn install
```

4. Run development server. App will be served with hot reload at [localhost:3000](http://localhost:3000/)

```bash
$ yarn dev
```


### How to get npmAuthToken?

If you're already logged in, you can find the token in the `~/.npmrc`file. Otherwise, generate new token using the following command:

```bash
$ npm login --registry https://registrynpm.storefrontcloud.io --scope @vsf-enterprise
```
