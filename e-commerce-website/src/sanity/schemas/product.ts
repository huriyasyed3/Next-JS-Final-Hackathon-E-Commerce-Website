import { defineType, defineField } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField(
            {
                name: 'category',
                title: 'Category',
                type: 'string',
                options: {
                  list: [
                    { title: 'Cutlery', value: 'cutlery' },
                    { title: 'Decoration Items', value: 'decoration-items' },
                    { title: 'Chairs', value: 'chairs' },
                    { title: 'Tableware', value: 'tableware' },
                    { title: 'Tables', value: 'tables' },
                    // Add more categories as needed
                  ],
                  layout: 'dropdown', // Ensures it's displayed as a dropdown
                },
              },
              

        //     {
        //     name:"category",
        //     title:"Category",
        //     type:"reference",
        //     to:[{
        //         type:"category"
        //     }],
            
        // }
        ),
        defineField({
            name: "name",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            validation: (rule) => rule.required(),
            type: "slug"
        }),
        defineField({
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        }),
        defineField({
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        }),
        defineField({
            name: "quantity",
            title: "Quantity",
            type: "number",
            validation: (rule) => rule.min(0),
          }),
        defineField({
            name: "tags",
            type: "array",
            title: "Tags",
            of:[{
                type: "string"
            }]
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Detailed description of the product',
          }),
          defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of key features of the product',
          }),
          defineField({
            name: 'dimensions',
            title: 'Dimensions',
            type: 'object',
            fields: [
              { name: 'height', title: 'Height', type: 'string' },
              { name: 'width', title: 'Width', type: 'string' },
              { name: 'depth', title: 'Depth', type: 'string' },
            ],
            description: 'Dimensions of the product',
          }),
    ]
})




