# React + Vite

E-Commerce SPA Template v0

Live Preview Link: 
Figma Design Link:
Assets Link: 

Frontend Stack (vite: 7.1.7, react: 19.1.1)  
  1. tailwindcss: 4.1.14
  2. @tailwindcss/vite: 4.1.14
  3. react-router: 7.9.4
  4. react-hot-toast: 2.6.0
  5. react-use: 17.6.0

Packages:
  npm install tailwindcss @tailwindcss/vite react-router react-hot-toast react-use

Entities:
  1. Admin
  2. Product
  3. User (cart, favorites)
  4. Address
  5. Order

Store:
  -

Pages:
  1. / - Layout
  2. / index - Home
  3. /category/:slug-id - CategoryProducts
  4. /search?query={query} - SearchProducts
  5. /product/:slug-id - ProductDetails
  6. /favorites - Favorites
  7. /cart - Cart

  Private User Routes
  
  8. /checkout?items=[{"id":product_id, "amount":1}] - Checkout
  9. /user - UserLayout
  10. user/profile index - Profile
  11. user/orders - Orders
