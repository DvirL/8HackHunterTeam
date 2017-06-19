using System.Collections.Generic;
using _8Hack.WebApi.Models.Common;

namespace _8Hack.WebApi.Models.UserManagement
{
    public class DestinationGroup
    {
        public string Name { get; set; }
        public IEnumerable<Destination> Destinations { get; set; }
    }
}