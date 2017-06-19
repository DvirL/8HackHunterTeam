using System.Collections.Generic;
using _8Hack.WebApi.Models.Common;

namespace _8Hack.WebApi.Models.QueueManagement
{
    public class DestinationQueue
    {
        public Destination Destination { get; set; }
        public IList<UserDetails> Subscribers { get; set; }
    }
}