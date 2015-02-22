using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace TelNG.Models
{
    public class TelEntities: DbContext
    {
        public DbSet<Item> Items { get; set; }
    }
}