# Visual references / temporary site assets

No AI-generated images are used by the site build.

The current build uses downloaded temporary editorial/performance/studio/city images while the final image set is being curated. The site references local files under `assets/images/` to avoid broken hotlinks in production.

## Current image files
- `assets/images/performance-editorial.jpg`
  - Original source: Visit Stockholm performance/editorial reference
  - Original URL: `https://www.visitstockholm.com/media/images/little-concert-goteborgsoperans-danskompani.width-1440.jpg`
- `assets/images/studio-editorial.webp`
  - Original source: Squarespace CDN studio/editorial reference
  - Original URL: `https://images.squarespace-cdn.com/content/v1/58c075f1d482e9c2772debf3/1490656676703-DSTP82S4HLPSOIACBS59/17_0321_65%2BColor.jpg?format=2500w`
- `assets/images/song-camp.jpg`
  - Original source: Unsplash music/studio reference
  - Original URL: `https://images.unsplash.com/photo-1502665607786-eaa3cd100809?fm=jpg&ixlib=rb-4.1.0&q=75&w=2200`
- `assets/images/content-visual.jpg`
  - Original source: Unsplash content/visual reference
  - Original URL: `https://images.unsplash.com/photo-1650229382504-b0eb3f9e8386?fm=jpg&ixlib=rb-4.1.0&q=75&w=2200`
- `assets/images/urban-visual.jpg`
  - Original source: Unsplash urban/visual reference
  - Original URL: `https://images.unsplash.com/photo-1691073123397-d93b4e3b9991?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=75&w=2200`

## Design interaction references
- Wave Seoul — high-impact entertainment landing / compact entry structure
- Contemporary fullscreen portfolio navigation patterns
- Editorial fashion/music sites using cursor labels, image-follow hover previews, large display type, and chapter transitions

## Final asset rule
Do not hotlink final production visuals. Download approved source files, store them under `assets/images/`, and update CSS/`data-img`/`data-preview` values to local paths.
