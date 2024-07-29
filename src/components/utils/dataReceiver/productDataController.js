// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::cheburek.cheburek', ({ strapi }) => ({
//   async find(ctx) {
//     const { data, meta } = await super.find(ctx);

//     const transformedData = data.map(item => {
//       return {
//         id: item.id,
//         createdAt: item.attributes.createdAt,
//         updatedAt: item.attributes.updatedAt,
//         publishedAt: item.attributes.publishedAt,
//         price: item.attributes.price,
//         title: item.attributes.title,
//         category: item.attributes.category,
//         image_url: item.attributes.image.data ? item.attributes.image.data.attributes.url : null,
//       };
//     });

//     return { data: transformedData, meta };
//   },
// }));
