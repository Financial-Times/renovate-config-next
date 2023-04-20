# renovate-config-next

[![CircleCI](https://circleci.com/gh/Financial-Times/renovate-config-next.svg?style=svg)](https://circleci.com/gh/Financial-Times/renovate-config-next)

> Shared [Renovate](https://renovatebot.com/) configuration for FT.com.
## Our Configuration

We have a custom set of rules for FT.com repositories. We are generally...

* Letting Renovate decide how to [modify or update existing ranges](https://renovatebot.com/docs/configuration-options/#rangestrategy) on Financial Times owned `dependencies`

* Using semver ranges for all other `dependencies` (including [`n-ui`](https://github.com/Financial-Times/n-ui)), only opening pull requests for major version updates

* Grouping updates for the following monorepos into a single pull request
  * [x-dash](https://github.com/Financial-Times/x-dash)
  * [Page Kit](https://github.com/Financial-Times/dotcom-page-kit)
  * [Tool Kit](https://github.com/Financial-Times/dotcom-tool-kit)
  * [Reliability Kit](https://github.com/Financial-Times/dotcom-reliability-kit)
  * [Ads](https://github.com/Financial-Times/ads)
  * [Privacy](https://github.com/Financial-Times/privacy)

* [Upgrading Node.js to LTS versions](https://renovatebot.com/docs/node/#configuring-support-policy), including any under their maintenance period.

* Tracking major updates of `devDependencies` and [Origami](https://registry.origami.ft.com/components) components (`o-*` packages) in the Renovate master issue, but **we're not** opening pull requests automatically for them

* All external dependencies updates will be managed in the [Dependency Dashboard](https://docs.renovatebot.com/configuration-options/#dependencydashboard)

Read more about [how we're using Renovate on its wiki page](https://github.com/Financial-Times/next/wiki/Renovate).

## Usage

Reference the shared configuration in your repository's own `renovate.json` like so:

```json
{
  "extends": [
    "github>financial-times/renovate-config-next"
  ]
}
```

## Development

Our shared configuration is defined in [`renovate-config.json5`](renovate-config.json5). This file is transpiled on a pre-commit hook into the [`renovate.json`](renovate.json) file. Modifying the [`renovate.json`](renovate.json) won't allow you to commit, so make sure all of your modifications go on the `json5` version. If for some reason there are untracked changes on your `renovate.json` file, make sure to delete the file to be able to commit.
