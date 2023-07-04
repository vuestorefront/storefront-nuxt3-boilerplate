## Prerequisites:

- `Node.js` 16+
- `Yarn` 3

### Local dev setup

1. Clone the repository.

```bash
$ git clone https://github.com/vuestorefront/storefront-nuxt3-boilerplate.git
```

2. Set `NPM_AUTH_TOKEN` env variable (read here [how to get NPM_AUTH_TOKEN?](#How-to-get-NPM_AUTH_TOKEN)).

3. Install all dependencies.

```bash
$ yarn install
```

4. Run the development server. The app will be served with hot reload at [localhost:3000](http://localhost:3000/).

```bash
$ yarn dev
```


### How to get NPM_AUTH_TOKEN?

If you're already logged in, you can find the token in the `~/.npmrc` file. Otherwise, generate a new token using the following command:

```bash
$ npm login --registry https://registrynpm.storefrontcloud.io --scope @vsf-enterprise
```
