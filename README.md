# Add your Fundpop Campaign to your Hydrogen storefront

### Step1: Install package

-   Using npm

```shell
$ npm i fundpop-app
```

-   Using yarn

```shell
$ yarn add fundpop-app
```

### Step2: Go to your Product Page file on Hydrogen project

-   For Demo Template, go to:
    `app/routes/($locale).products.$productHandle.tsx`

### Step3: Import Fundpop Component

```javascript
import { Fundpop } from "fundpop-app";
```

### Step4: Add Fundpop Component to somewhere you like in Product Page

-   **Example for Demo Template**

```javascript
export default function Product() {
  const {product, shop, recommended} = useLoaderData<typeof loader>();
  const {media, title, vendor, descriptionHtml, id} = product;
  const {shippingPolicy, refundPolicy} = shop;

  return (
    <>
      <Section>
        <div>
          <ProductGallery
            media={media.nodes}
          />
          <Heading as="h1" className="whitespace-normal">
            { title }
          </Heading>
          <ProductForm />
          <Fundpop productId={ id }/>
        </div>
      <Section>
    </>
  )
}
```
