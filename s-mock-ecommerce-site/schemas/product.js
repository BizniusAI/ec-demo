export default { // export schema as a basic javascript object
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }], // sanity docs array of images 
        options: {
          hotspot: true, // Enables the user interface for selecting what areas of an image should always be cropped
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug', // Unique link to the product
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 100,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      }
    ]
  }

  // search sanity docs for more data 