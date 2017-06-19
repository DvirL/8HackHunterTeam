using System.Collections.Generic;

namespace _8Hack.WebApi.Models
{
    public class DestinationGroup
    {
        public string Name { get; set; }
        public IEnumerable<Destination> Destinations { get; set; }
    }
}