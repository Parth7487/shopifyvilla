# VillaBella Shopify Theme

A highly customizable Shopify theme built with Liquid, featuring modern design and full customization options for all sections.

## 🚀 Features

- **Fully Customizable Sections**: Every section has extensive customization options in the Shopify theme editor
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Modern UI**: Clean, elegant design matching the VillaBella brand
- **Performance Optimized**: Fast loading with optimized assets
- **GitHub Integration Ready**: Ready to connect directly to Shopify via GitHub

## 📁 Theme Structure

```
shopify-theme/
├── assets/          # CSS, JS, and image files
├── config/          # Theme configuration
├── layout/          # Theme layouts
│   └── theme.liquid # Main layout file
├── sections/        # Customizable sections
│   ├── hero-section.liquid
│   ├── product-collection.liquid
│   ├── trust-badges.liquid
│   ├── newsletter.liquid
│   ├── artist-feature.liquid
│   ├── cta-section.liquid
│   ├── header.liquid
│   └── footer.liquid
├── snippets/        # Reusable components
│   ├── header.liquid
│   ├── footer.liquid
│   ├── product-card.liquid
│   ├── newsletter-content.liquid
│   ├── newsletter-image.liquid
│   └── artist-feature-content.liquid
└── templates/       # Page templates
    └── index.liquid
```

## 🎨 Available Sections

### 1. Hero Section
- Video or image background
- Customizable text, colors, and buttons
- Overlay controls
- Responsive height settings

### 2. Product Collection
- Display products from any collection
- Customizable grid layout
- Bundle offer section
- Full text and color customization

### 3. Trust Badges
- Multiple badge blocks
- Custom icons or images
- Flexible grid layout
- Individual badge customization

### 4. Newsletter
- Two-column layout
- Customizable form styling
- GDPR checkbox
- Image support

### 5. Artist Feature
- Two-column layout (image left/right)
- Quote support
- CTA button
- Full text customization

### 6. CTA Section
- Gradient backgrounds
- Primary and secondary buttons
- Centered layout
- Full customization

## 🔧 Customization Options

Each section includes extensive customization options:

- **Colors**: Background, text, buttons, borders
- **Typography**: Font sizes, weights, alignment
- **Layout**: Grid columns, spacing, padding
- **Content**: Text, images, links
- **Styling**: Borders, shadows, gradients

## 📦 Installation via GitHub

### Step 1: Connect GitHub to Shopify

1. Go to your Shopify admin
2. Navigate to **Online Store > Themes**
3. Click **Add theme > Add from GitHub**
4. Authorize Shopify to access your GitHub account
5. Select the repository: `Parth7487/shopifyvilla`
6. Select the branch: `master` (or `main`)
7. Click **Connect**

### Step 2: Deploy the Theme

1. After connecting, Shopify will show your theme files
2. Click **Publish** to make it live
3. Or click **Preview** to test first

### Step 3: Customize

1. Go to **Online Store > Themes**
2. Click **Customize** on your theme
3. Use the theme editor to customize all sections
4. All sections are fully customizable with live preview

## 🎯 Setup Instructions

### 1. Create Collections

1. Go to **Products > Collections**
2. Create collections for your products
3. Add products to collections
4. Use collection handles in section settings

### 2. Set Up Navigation

1. Go to **Online Store > Navigation**
2. Create a main menu
3. Add links to your pages
4. The menu handle should match the header section setting

### 3. Upload Assets

1. Go to **Content > Files**
2. Upload your logo, images, and other assets
3. Use these in section settings

### 4. Configure Sections

1. Go to **Online Store > Themes > Customize**
2. Add sections to your homepage
3. Customize each section's settings
4. All changes are saved automatically

## 📝 Section Configuration Examples

### Hero Section
- Set background image or video
- Customize heading and subheading
- Set button text and link
- Adjust colors and spacing

### Product Collection
- Select a collection to display
- Set products per row
- Customize bundle offer
- Adjust grid spacing

### Trust Badges
- Add badge blocks
- Choose icons or upload custom images
- Set titles and descriptions
- Customize colors per badge

## 🔄 Updating the Theme

When you push changes to GitHub:

1. Shopify automatically detects changes
2. Go to **Online Store > Themes**
3. Click **Update** on your theme
4. Review changes in preview
5. Publish when ready

## 🐛 Troubleshooting

### Theme not appearing in GitHub
- Ensure repository is public or Shopify has access
- Check branch name matches
- Verify file structure is correct

### Sections not showing
- Check section files are in `sections/` folder
- Verify schema is valid JSON
- Check for Liquid syntax errors

### Customization not saving
- Clear browser cache
- Check Shopify admin permissions
- Verify theme is not locked

## 📚 Resources

- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Documentation](https://shopify.dev/api/liquid)
- [Theme Sections](https://shopify.dev/themes/architecture/sections)

## 🆘 Support

For issues or questions:
1. Check Shopify theme documentation
2. Review Liquid syntax
3. Test in theme editor preview mode

## 📄 License

This theme is created for VillaBella. All rights reserved.

---

**Ready to go live!** 🎉

Connect your GitHub repository to Shopify and start customizing your store today.

