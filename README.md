# Colors Challenge

## Description

You've been working on a number of projects withing a company across a few teams, and you've found that the teams have a shared requirement for easily rendering "color swatches" using different color spaces. We'd like to produce a toolkit that could be easily used, and also easily extended, by all the teams in the company. The toolkit should provide a React widget that can render an array of five colors, each of which could be represented in a different color space. Some features we'd like of the color swatch widget: 

* It should have a button that can be clicked to refresh the colors from the server.
* It should allow the user to select a color.
* It should show the value of the color always in RGB representation.

We have provided some endpoints that will deliver colors of various kinds, please find their descriptions in appendix A. In delivering your solution, please consider us as one of the teams you are making the toolkit for. Also keep in mind that this toolkit will need to be worked on and maintained by multiple other teams in the future.

### Stage 1

We know for sure that we will be using RGB and HSL color spaces, and that users of the toolkit will want to be able to convert HSL to RGB in their code. Please implement something to facilitate this conversion. Note that while there are numerous third-party libraries that can do this, we'd like you to implement the conversion yourself.

### Stage 2

Now we need to be able to fetch a list of colors from the server and render them in the swatch. Please implement the color swatch widget to render colors to the user as outlined in the description. Please keep in mind that we are interested in extensibility (stage 3 focusses on this).

### Stage 3

After we delivered the solution to stage 2 to the teams, we found that one of the teams uses a strange representation of the RGB color space, BRGB. BRGB stores the red, green, and blue components as values between 0 and 10000 (inclusive). The team has asked about how they can easily extend your implementation to include the BRGB color space. Imagine you're a member of the team using BRGB and implement the extension.

## Notes 

* Usage of external libraries is entirely up to you,

# Appendices

## Appendix A - API endpoints

All API endpoints are reached at the host `https://challenge.structrs.com`. Please find below the set of data types used in the API represented as TypeScript types. Below that, there are descriptions of the two available endpoints for retrieving lists of colors for stages 2 and 3 of the challenge.

### Data types

```
type RgbColor {
  red: number,    // [0, 255]
  green: number,  // [0, 255]
  blue: number    // [0, 255]
}

type HslColor {
  hue: number,         // [0, 360] degrees
  saturation: number,  // [0, 100] percentage
  lightness: number    // [0, 100] percentage
}

type BrgbColor {
  red: number,    // [0, 10000]
  green: number,  // [0, 10000]
  blue: number    // [0, 10000]
}

type ColorListItem {
  kind: string,  // One of "rgb", or "hsl"
  components: RgbColor | HslColor
}

type ColorList ColorListItem[]

type ExtendedColorListItem {
  kind: string,  // One of "rgb", "hsl", or "brgb"
  components: RgbColor | HslColor | BrgbColor
}

type ExtendedColorList ExtendedColorListItem[]
```

### Get list of random colors for stage 2

Path: `/rest/colors/list`
Method: `GET`
Response: `ColorList`

### Get list of random extended colors for stage 3

Path: `/rest/colors/list-extended`
Method: `GET`
Response: `ExtendedColorList`
