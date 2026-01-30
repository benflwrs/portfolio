# Project Content Section Types Reference

This document describes all available section types for project content markdown files.

## Text Sections

### Basic Text
```markdown
:::section{type="text" align="left"}
Your content here...
:::
```

**Alignment options:**
- `align="left"` - Left-aligned text
- `align="center"` - Centered text (max-width constrained)
- `align="right"` - Right-aligned text

---

## Text + Image/Video Sections

### Split View (Text and Media Side-by-Side)

The `text-image` section type supports both images and YouTube videos as media content.

**With Image:**
```markdown
## Section Title
:::section{type="text-image" align="right"}
![Image](/path/to/image.png)

Your text content here...
:::
```

**With Video:**
```markdown
## Watch the Trailer
:::section{type="text-image" align="left"}
::youtube{id="VIDEO_ID" title="Video Title"}

Your descriptive text about the video...
:::
```

**Alignment options:**
- `align="left"` - Media on left, text on right
- `align="right"` - Media on right, text on left

**Note:** Text is vertically centered relative to the media for a balanced appearance.

---

## Gallery Section

### Image Gallery with Lightbox
```markdown
### Gallery
:::section{type="gallery"}
:::gallery
![Screenshot 1](/path/to/image1.png)
![Screenshot 2](/path/to/image2.png)
![Screenshot 3](/path/to/image3.png)
:::
:::
```

Displays thumbnails in a grid. Clicking opens a lightbox with navigation.

---

## Separator Section

### Horizontal Divider
```markdown
:::section{type="separator"}
:::
```

Creates a horizontal gradient line to visually separate content sections.

---

## Space Section

### Vertical Spacing
```markdown
:::section{type="space" size="medium"}
:::
```

**Size options:**
- `size="small"` - 1rem (16px) spacing
- `size="medium"` - 2rem (32px) spacing
- `size="large"` - 4rem (64px) spacing
- `size="xlarge"` - 6rem (96px) spacing

---

## YouTube Embed

### Embedded Video
```markdown
::youtube{id="VIDEO_ID" title="Video Title"}
```

Example:
```markdown
::youtube{id="dQw4w9WgXcQ" title="Solar Leap Trailer"}
```

---

## Best Practices

### Headers Outside Sections
Headers placed directly before sections will automatically attach to them:

```markdown
## My Section Title
:::section{type="text-image" align="right"}
![Image](/path/to/image.png)

Content here...
:::
```

The header will have reduced spacing to the section below, creating a cohesive visual grouping.

### Combining Sections
```markdown
## Feature Overview
:::section{type="text-image" align="left"}
![Feature Image](/path/to/feature.png)

Description of the feature...
:::

:::section{type="space" size="large"}
:::

:::section{type="separator"}
:::

:::section{type="space" size="medium"}
:::

## Next Section
:::section{type="text" align="center"}
More content...
:::
```

---

## Tips

1. **Headers**: Place headers outside sections for better semantic structure
2. **Spacing**: Use space sections instead of multiple line breaks for consistent spacing
3. **Separators**: Use between major content blocks to improve readability
4. **Text-Image**: Text now aligns to the top, so it works better with headers above
5. **Gallery**: Nest the `:::gallery` directive inside a `:::section{type="gallery"}`
