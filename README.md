# T3 Gallery

An image gallery made with [T3 Stack](https://create.t3.gg/) (TNext.js, Typescript, Tailwind, TDrizzle, Treact Tserver Tactions). Wait why was it even called a T3 stack?

Reference video: [From 0 to Production - The Modern React Tutorial (RSCs, Next.js, Shadui, Drizzle, TS and more)](https://www.youtube.com/watch?v=d5x0JCZbAJs)

## TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic ui with mock data
- [x] Tidy up build process
- [x] Actually set up a database (vercel postgres)
- [x] Attach database to UI
- [x] Add authentication (w/ clerk)
- [x] Add image upload
- [x] "taint" (server-only). [Explanation](https://www.youtube.com/watch?v=JrKBinrMGR4)
- [x] Use Next/Image component
- [x] Error management (w/ Sentry)
- [x] Routing/image page (parallel route)
- [x] Update upload button to be less cringe
- [x] ShadUIify (specifically toasts)
- [x] Analytics (posthog)
- [x] Delete button (w/ Server Actions)
- [x] Ratelimiting (upstash)

## A challenge for me

- [] Fix the page layout for images of different resolutions
- [] "Selecting" images on the gallery page
- [] "infinite scroll"
- [] Folders/albums

## Dev Logs
1. Near the end of the tutorial, I just realized I forgot to dev log this time. Missed the opportunity to document my journey doing this project 😩. But better late than never right?

2. Overall deploying to Vercel was a breeze. The first time I used vercel a few years ago, I remembered that for free account it limits to 3 deployable projects. Now the limits was kinda removed?

3. Got a vercel deployment error: ` ERR_PNPM_BAD_PM_VERSION  This project is configured to use v9.0.6 of pnpm. Your current pnpm is v9.0.4`. Workoround was to downgrade from `pnpm@9.0.6` to `pnpm@9.0.4`. This was a [known bug](https://github.com/pnpm/pnpm/issues/8087) by the pnpm team.

4. Vercel provides free Postgres database which is awesome for hobbyist developer. Drizzle is a good ORM. The autocompletes alongside with Typescript provides a good developer experice. Btw, Theo talks about the table naming prefix. I wonder what's that for...

5. Clerk makes authentication so easy. It reminds me of Laravel's auth. Except Cleck isn't free LOL. Everything needs to be SaaS nowadays right? Easy way to make money. Subscription FTW!... 😔

6. What's Theo's image upload video without UploadThing right? I think the reason why he made an images gallery Next.js tutorial was because he wanted to promote his product. Smart move right there. But when he said he doesn't recommend PlanetScale when promoting his T3 stack shows his honesty. _Fyi, PlanetScale was no longer free_.

7. React taint. Sounds stupid. Period.

8. Ok I signed up to Sentry without realizing it was a trial. Didn't manage to explore this one a lot. But my app has no errors, so sentry had nothing to logs anyways.

9. Next.js parallel routes was confusing. And the use case was also pretty niche. Maybe will come in handy one day.

10. [shadcn/ui](https://ui.shadcn.com/) is a chad. 😎

11. Posthogs's free teir was very very generous. It also makes creating custom events and keep tracks all of it a piece of cake. This will be useful when an app need to be audited yearly. And may also help to replicate user's action to reproduce certain bugs.

