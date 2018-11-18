# ![GalleryView](https://user-images.githubusercontent.com/44801418/48128406-f9f14a80-e2b8-11e8-9b19-f860d268f37a.png) GalleryView

[![npm package][npm-badge]][npm]

Used for displaying records as individual cards in a gallery.	

![GalleryView](https://user-images.githubusercontent.com/44947294/48402064-40cdbd00-e75d-11e8-9633-e52fd0217636.gif)
## Getting started

````
npm install @cmds/gallery-view --save
````

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this view |
| cardCount | Role | ✓ | The amount of cards to be rendered |
| cardHeight | Number | ✓ | Height of the cards |
| cardWidth | Number | | Width of the cards. Defaults to `240` |
| cardRenderer | Function |  | Callback invoked whenever one of the cards get's rendered: `({index: number}): jsx` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/gallery-view.svg
[npm]: https://www.npmjs.org/package/@cmds/gallery-view

