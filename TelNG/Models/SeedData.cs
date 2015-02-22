using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace TelNG.Models
{
    public class SeedData: DropCreateDatabaseAlways<TelEntities>
    {
        protected override void Seed(TelEntities context)
        {
            new List<Item>
             {
                 new Item {RowID= 1, ItemName= "Fried rice", ItemDescription= "Colourfull fried rice", ItemPrice= 200},
                 new Item {RowID= 2, ItemName= "Veg rice", ItemDescription= "Colourfull veg rice", ItemPrice= 300},
                 new Item {RowID= 3, ItemName= "Chilly chicken", ItemDescription= "Very very spicy", ItemPrice= 400},
                 new Item {RowID= 4, ItemName= "Chicken 65", ItemDescription= "You won't get 65 pieces", ItemPrice= 500}
             }.ForEach(i => context.Items.Add(i));
        }
    }
}