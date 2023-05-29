# CarHub

A car showcase application using Next.js 13

### Things to Provide

- assets
- tailwind config - contains some configuration related to fontFamily, colors, etc.
- globals.css - contains custom tailwind classes created using the [@apply directive](https://tailwindcss.com/docs/functions-and-directives#apply)
- favicon
- constants - contains fuel, years, manufacturer data

### Setup

Create a Next.js 13 project using,

```bash
npx create-next-app@latest
```

- What is your project named? **_carhub_**
- Would you like to add TypeScript with this project? **_Yes_**
- Would you like to use ESLint with this project? **_No_**
- Would you like to use Tailwind CSS with this project? **_Yes_**
- Would you like to use the `src/ directory` with this project? **_No_**
- What import alias would you like configured? **_@\*_**

### Packages

We're using the [headlessui](https://headlessui.com/) to create combobox and dropdowns. To download the package, 
```bash
npm install @headlessui/react
```

### APIs

We're using two APIs:
1. Rapid API
   - Doc Link - [Cars API by API Ninjas](https://rapidapi.com/apininjas/api/cars-by-api-ninjas)
3. Imagin Studio
   - Sign up Link - [Imagin SignUp](https://www.imagin.studio/subscriptions/pricing)
   - Doc Link - [Imagin Docs](https://docs.imagin.studio/)
     From the Menu, you can select ["CDN Data Points"](https://docs.imagin.studio/cdnDatapoints) to see all the params the API accepts.
   
**⚠️ Issue with Imagin - It doesn't seem to allow creating an account using normal email address. For it to work, it has to be a business account. I tried [TempMail](https://temp-mail.org/en/) and it works. But no normal gmail accounts are working.**   
   


### Things to know

To enable the functionality of dynamic images, we need to inform Next.js explicitly that we anticipate receiving dynamic image URLs from a particular source. This can be achieved by adjusting the configuration of Next.js as follows:

```javascript
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
};
```

### Notes

We have the option to perform data fetching in two ways: on the client side or on the server side. As demonstrated in the Next.js crash course, implementing server-side rendering offers numerous benefits, including improved performance, SEO optimization, efficient data fetching, and reduced complexity on the client side.

In our application, we could have easily fetched the data on the client side using states and useEffect. However, we have chosen to implement server-side rendering instead. So, how do we go about it?

**The first step is to break down the components into smaller, focused units. We can create separate components for elements that require client-side interactions, such as filters, search functionality, and pagination.**

By doing this, our main/home page will consist of these smaller client-side components nested within a server-side component. This approach allows us to maintain the benefits of server-side rendering while still incorporating client-side functionality where necessary.

Now, let's discuss how we handle the logic. Since we have divided the functionality into different components, we need a way to communicate the data to our main/home page where the logic will be performed. There are a couple of approaches we can take:

1. Local state in the main/home page: We can manage the state locally within the main/home page component. However, this would essentially turn the main/home page into a client-side component, which goes against our goal of utilizing server-side rendering.

2. Global state management: We can explore options such as using the Context API or a state management library like Redux Toolkit (RTK). However, implementing these approaches would still involve making the home or main page a client-side component.

So, what's the solution? Take a moment to visit popular websites like Amazon and observe how they handle searching, filtering, and pagination. Pay close attention to the URL bar.

Each time you perform an action, such as searching, filtering, or pagination, you'll notice that the URL gets updated with relevant information in the form of parameters. These URL parameters capture the specific details of your action.

If you were to copy that URL and open it in another tab, you would see the exact same results. The filtering, searching, and pagination all depend on the values present in the URL.

In our application, we will follow a similar approach. **For each filter item value, search query, or pagination, we will create corresponding URL parameters and update the URL accordingly.** This will trigger the data fetch action on the server side. It's a simple yet effective way to ensure that our server-side rendering is driven by the values in the URL, enabling dynamic and responsive data retrieval.
