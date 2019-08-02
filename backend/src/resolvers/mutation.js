const Mutations = {
  async CreateData(parent, args, ctx, info) {
    // if (
    //   typeof args.price != "number" ||
    //   typeof args.description != "string" ||
    //   typeof args.balance != "boolean"
    // )
    //   throw new Error("the data is incorrect");

    const price = args.price;
    const balance = price > 0 ? true : false;
    const data = await ctx.db.mutation.createData(
      {
        data: {
          ...args,
          balance
        }
      },
      info
    );
    return data;
  },
  async UpdateData(parent, args, ctx, info) {
    // description
    const { description, date, price } = await ctx.db.query.data({
      where: { id: args.id }
    });

    if (!price) {
      throw new Error("no data here");
    }
    if (description) console.log(description, date, price, "here");

    const newDescription = args.description ? args.description : description;
    const newDate = args.date ? args.date : date;
    const newPrice = args.price ? args.price : price;
    const balance = newPrice > 0 ? true : false;
    const updateData = await ctx.db.mutation.updateData(
      {
        data: {
          description: newDescription,
          date: newDate,
          price: newPrice,
          balance
        },
        where: {
          id: args.id
        }
      },
      info
    );
    return updateData;
  }
};

module.exports = Mutations;
