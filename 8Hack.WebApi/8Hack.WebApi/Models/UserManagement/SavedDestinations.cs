using System.Collections.Generic;

namespace _8Hack.WebApi.Models
{
    public class SavedDestinations
    {
        public DestinationGroup Home { get; set; }
        public IEnumerable<DestinationGroup> Favourites { get; set; }
    }
}