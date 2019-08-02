const { forwardTo } = require("prisma-binding");

const Query = {
  datas: forwardTo("db"),
  async bankNotes(parent, args, ctx, info) {
    const { date, balance, titles } = args;
    if (balance === "both") {
      const bankNotes = await ctx.db.query.datas(
        {
          where: {
            description_in: [...titles],
            date_gte: date[0],
            date_lt: date[1]
          }
        },
        info
      );
      return bankNotes;
    } else {
      const b = balance === "min" ? true : false;
      const bankNotes = await ctx.db.query.datas(
        {
          where: {
            balance: b,
            description_in: [...titles],
            date_gte: date[0],
            date_lt: date[1]
          }
        },
        info
      );
      return bankNotes;
    }
  }
};

module.exports = Query;
