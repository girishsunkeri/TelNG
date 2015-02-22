using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TelNG.Models
{
    public class ItemRepository
    {
        TelEntities telEntities = new TelEntities();

        static Item[] items = new Item[]
        {
            new Item {RowID= 1, ItemName= "Fried rice", ItemDescription= "Colourfull fried rice", ItemPrice= 200, ImageUrl="/Content/Images/dish1.jpg"},
            new Item {RowID= 2, ItemName= "Veg rice", ItemDescription= "Colourfull veg rice", ItemPrice= 300, ImageUrl="/Content/Images/dish2.jpg"},
            new Item {RowID= 3, ItemName= "Chilly chicken", ItemDescription= "Very very spicy", ItemPrice= 400, ImageUrl="/Content/Images/dish3.jpg"},
            new Item {RowID= 4, ItemName= "Chicken 65", ItemDescription= "You won't get 65 pieces", ItemPrice= 500, ImageUrl="/Content/Images/dish4.jpg"}
        };

        public Item[] GetItems()
        {
            return items;
        }

        public void AddItem(Item item)
        {
            items = items.Concat(new[] { item }).ToArray();
        }
    }
}