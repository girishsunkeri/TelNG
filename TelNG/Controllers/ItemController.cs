using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TelNG.Models;
using System.Web;

namespace TelNG.Controllers
{
    public class ItemController : ApiController
    {
        ItemRepository itemRepository = new ItemRepository();

        // GET api/item
        [Authorize]
        public IEnumerable<Item> GetAllItems()
        {
            return itemRepository.GetItems();
        }

        // GET api/item/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/item
        public void Post(Item item)
        {
            itemRepository.AddItem(item);
        }

        // PUT api/item/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/item/5
        public void Delete(int id)
        {
        }
    }
}
