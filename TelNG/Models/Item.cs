using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TelNG.Models
{
    public class Item
    {
        public int RowID { get; set; }
        public string ItemName { get; set; }
        public string ItemDescription { get; set; }
        public decimal ItemPrice { get; set; }
        public string ImageUrl { get; set; }
    }
}