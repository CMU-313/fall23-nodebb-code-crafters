# User Guide for Topic Resolution Feature

## Usage

The resolve option is available in the post bar for each post.

To mark a topic resolved:

- Navigate to the topic view
- Expand the post bar for the first post
- Click the "Mark Resolved" button

<center>![Visualization](https://github.com/CMU-313/fall23-nodebb-code-crafters/assets/22648562/7fbe54db-eff7-4865-b86d-5472b4ac063e)</center>


Creating a post in a support forum is as easy as creating a post in any forum. Creating a support forum requires you to just create a category with the word "Support" in the name. The rest is handled for you automatically.

This will mark the topic resolved without deleting it. Only users with the permission to resolve things should be able to resolve them.

To unresolve, repeat the same steps on the resolved topic.

## Source Code Changes

The main changes are in:

- `src/topics` - Backend logic for marking topics resolved
  - We took advantage of the fact that deleted posts are implicitly in some sense resolved to pun the deleterUid and deleted field in an elegant way, which also let us leverage deletion checks.
- `src/privileges/topics.js` - Permission checks
- `themes/*/templates/*` - Frontend display changes
- `public/src/*` - Added resolve buttons and related client code
- `test/topics.js` - Testing

## Icon Changes

Independent of our permission system (i.e., we enforce permissions regardless of the button visibility, so malicious users can't send API requests to (un)resolve others' posts), we also hide the icon and button based on permission availability.

When a post is marked resolved, the resolution button icon changes to:

- An empty circle when it can be unmarked as resolved
- A check when it can be marked resolved

This quickly shows who marked the topic resolved vs who did not.

<center>![Viz6](https://github.com/CMU-313/fall23-nodebb-code-crafters/assets/22648562/9d7604ad-9688-45c8-8045-6b0ad51738b3)</center>

## CSS Changes

Resolved posts' resolution status now has a light green color on the topics list to visually indicate their status.

## Private Topics

For private topics, the resolve option only shows for topic creators and staff/mods with access. These apply to any category with "Support" in the name.

<center>![graphviz (4)](https://github.com/CMU-313/fall23-nodebb-code-crafters/assets/22648562/3aa4a9f2-d4f3-4e8f-90a6-e89abc8465c8)</center>



## Testing Justification

Our process, at least as we attempted to follow it.:

<center>![Viz2](https://github.com/CMU-313/fall23-nodebb-code-crafters/assets/22648562/b879a915-be5d-4f09-82fc-ec6b7d92d7d7)</center>


Automated tests in `test/categories.js` specifically cover (and improve upon) existing tests regarding topic title testing.

Automated tests in `test/topics.js` specifically cover:

- `should resolve the topic` - Verifies resolving topics
- `should unresolve the topic` - Verifies unresolving topics

These directly test the core functionality of resolving and unresolving.

In addition, the existing tests for topic deletion provide coverage for some resolve behavior:

For instance,

- `should delete the topic` - Deletes leverage the same code as resolving under the hood
- `should restore the topic` - Restoring topics is tested here, leverages the same code as unresolving posts.

If you look at the deletion tests, you'll see that because we were as wonderful and clever as we were, our code changes still get amazing coverage. The tests we added more or less cover everything that the deletion tests didn't.

Furthermore, we've conducted manual tests. Video of said test has been uploaded to this repository [here](https://github.com/CMU-313/fall23-nodebb-code-crafters/assets/22648562/ff2a6466-5f6d-4ea9-856e-9101f16d5662). Proof of our success was required for our code to get merged, so even when no automated tests were added, thorough manual tests were conducted and we subjected each other to lots of scrutiny.
