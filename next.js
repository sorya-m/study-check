
npx create-next-app@latest

or

npm install next@latest react@latest react-dom@latest


Pages
Routing:

pages/index.js
pages/blog.js

Nested Routing:

pages/blog/first.js
pages/blog/second.js

Dynamic Route:

pages/product/[prodid].js


Nested dynamic Routes:

pages/product/[prodid]/review/[reviewid].js

Catch all routes:

pages/docs/[...params] -> pages/docs/feature1/concept1 (values stored in array)
pages/docs/[[...params]] -> optional catch all routes




