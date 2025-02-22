# Gilded Rose

This is the Gilded Rose kata in TypeScript.

## Considerations while refactoring

- The "Aged Brie" actually increases in quality double as fast when the sellIn value reaches 0. There is no mention of the exact behaviour of "Aged Brie" in the requirements so I will assume this is correct.

- While refactoring the update logic with strategies I first wanted to add a `strategy` field to the `Item` class. When the snapshot test failed I remembered that there is some goblin around who is very protective of this class. I don't particulary agree with the goblin but I don't want that discussion to block this PR for ages. I will manage the strategies from the `GildedRose` class instead and revert the changes to the `Item` class. This way there should be no objections from the goblin and, who knows, if we can convince him to open the `Item` class the refactor will be minimal.

## Getting started

Install dependencies

```sh
pnpm install
```

## Run the unit tests from the Command-Line

```sh
pnpm test
```

To run the Text test

```sh
pnpm test:text
```

To run all tests in watch mode

```sh
pnpm test:watch
```

## Format the code with Prettier

```sh
pnpm format
```
