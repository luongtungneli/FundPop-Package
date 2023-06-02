# Add your FundPop Campaign to your Hydrogen storefront

### Step1: Install package

-   Using npm

```shell
$ npm i fundpop-app
```

-   Using yarn

```shell
$ yarn add fundpop-app
```

### Step2: Go to your product page file on Hydrogen project

-   For Demo Template, go to:
    `app/routes/($locale).products.$productHandle.tsx`

### Step3: Import FundPop Component

```javascript
import { FundPop } from "fundpop-app-blocks";
```

### Step4: Add FundPop Component to somewhere you like

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
            {title}
          </Heading>
          <ProductForm />
          <FundPop productID={id}/>
        </div>
      <Section>
    </>
  )
}
```

## NOTE:

The format of parameter **_productID_** is something like this: "**gid://shopify/Product/6923088920642**"
