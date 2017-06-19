using System.Collections.Generic;
using _8Hack.WebApi.Models.Common;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.Models.QueueManagement
{
    public class DestinationQueue
    {
        public DestinationQueue(Destination destination)
        {
            Destination = destination;
            Subscribers = new List<UserDetails>();
        }
        public Destination Destination { get; set; }
        public IList<UserDetails> Subscribers { get; set; }
    }
}