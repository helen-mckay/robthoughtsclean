# Rob Thoughts

A collaboration project with my writer friend, Rob. 

A constant work-in-progress. We will be adding new features as we think of them.

This repo has placeholder content. To see the live project, visit https://robthoughts.me.

## The idea

A blog site with an emphasis on randomness, surprise, and discovering unusual connections between seemingly unrelated ideas. 

Landing on the home page, the user is invited to view a random Thought (blog post) or a random Topic (post tag), allowing the user dive straight into the web of Rob's thoughts.

## How it was made

- Astro
- Tailwind
    - Tailwind Typography (styling Markdown)
- TinaCMS
- Vercel

## Lessons learned

- Tailwind is wonderful
- Tailwind Typography is super wonderful, allowing more control over how Markdown is rendered
- Single-document TinaCMS collections (with creation and deletion disabled) are great for making specific sections of a site editable
    - For example, the home page language and the about page are both editable thanks to this! Rob can log into his TinaCMS admin view and edit the language on his about page any time he wants.
- 'View a random post' buttons are fun

## Running the project

```
npm install
npm run dev
```

## Possible future features

- 'Previous' and 'Next' links on each Thought
- Video embed support
- Dark mode theme
- Comment section