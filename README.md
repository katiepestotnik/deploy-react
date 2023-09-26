# Deploy React Frontend
## [Live Link](https://missy-klondike.netlify.app/)

1. Sign up for a Netlify account here [Netlify](https://www.netlify.com/)
2. Sign up using GitHub - personal GitHub NOT enterprise ![github](./assests/use-github.png)
3. Authorize Netlify to access your GitHub repos ![authorize](./assests/authorize.png)
4. Configure personal info on Netlify and continue to deploy ![config](./assests/config.png)
5. Select deploy with GitHub ![deploy GitHub](./assests/deploy-github.png)
6. Authorize Netlify to use GitHub<br> ![auth-netlify](./assests/auth-netlify.png)
7. Select all repositories and install<br> ![install](./assests/install.png)
8. Select your project repo ![select-repo](./assests/select-repo.png)
9. Deploy repo!<br> ![deploy](./assests/deploy-repo.png)
10. Add a netlify.toml at the top level (where package.json lives) to handle redirect errors when user refreshes the page<br> ![netlify.toml](./assests/netlify-toml.png)
11. Go to deploy settting to change the domain management to change domain name ![domain name](./assests/domain-name.png)
12. Add your live link to your README
<br><br><br>

## Want to use a Favicon?

[Find a favicon here!](https://favicon.io/)
- Find an icon and download
- Open zip file and select favicon.ico
- Drag and replace react favicon with your own
- That's it! Test that it is working :smile:
    - You must have the manifest.json ![manifest](./assests/manifest.png)
    - Keep these two lines in public/index.html
        - ![link tags](./assests/link-tags.png)
- If your favicon isn't working compare this repo to yours and make sure you have all of the above