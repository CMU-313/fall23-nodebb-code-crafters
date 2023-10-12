// Assuming the module '../public/src/modules/slugify' has a known structure,
// define that structure as a TypeScript type or interface
interface ISlugify {
    // Your module's types go here, e.g.,
    makeSlug: (input: string) => string;
}

// Import the module with a safe assignment, by asserting its type
// eslint-disable-next-line
const slugify: ISlugify = require('../public/src/modules/slugify');

// Export the typed module
export = slugify;
