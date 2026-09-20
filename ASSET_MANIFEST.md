# Integrated game assets

The project now includes the uploaded asset packs under `web/public/assets/packs/`.

Playable demo:
- `web/public/sunny-land/` — SunnyLand Phaser project and its required maps, sprites, atlas, sound and Phaser runtime.

Additional packs:
- `grotto-escape`
- `kenney-ui-pack`
- `mr-platformer`
- `pixel-platformer-art`

A small Kenney UI subset is also exposed at `web/public/assets/ui/`.

The Game page is wired to load the SunnyLand Phaser game inside the platform, so the supplied game assets are actually used rather than merely copied into the repository.
