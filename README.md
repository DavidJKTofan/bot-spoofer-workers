# Bot Spoofer

Conditional redirect based on [Bot Score](https://developers.cloudflare.com/bots/concepts/bot-score), essentially spoofing bot agents and serving fake content.

## Get Started

Set up [GitHub Action](https://github.com/marketplace/actions/deploy-to-cloudflare-workers-with-wrangler) to automate deployment to Cloudflare Workers with Wrangler.

Furthermore, use GitHub Secrets like `CF_ACCOUNT_ID` for your Cloudflare Account ID and `CF_API_TOKEN` for your Cloudflare Workers API Token Key, which can then be used in the GitHub Action.

Finally, in the config file [wrangler.toml](wrangler.toml) add the `route` to the zone where also Cloudflare Enterprise Bot Management is active. 
In this case, we added the route `https://www.cf-testing.com/bot-spoofer*`.

## Usage

Use the following cURL terminal command to check if the redirect works:

`curl -L https://www.cf-testing.com/bot-spoofer.html`

## DevDocs

Check out the [Wrangler Config](https://developers.cloudflare.com/workers/wrangler/configuration/) file.

Learn more on [how Workers works](https://developers.cloudflare.com/workers/learning/how-workers-works/).

## Curious?

Curious about your own Bot Score? 

Visit [https://cf-testing.com/bm-demo](https://cf-testing.com/bm-demo) or use cURL in terminal:

`curl https://cf-testing.com/bm-demo`

* * * * *

# Disclaimer

Educational purposes only.

This repo does not reflect the opinions of, and is not affiliated with Cloudflare.
