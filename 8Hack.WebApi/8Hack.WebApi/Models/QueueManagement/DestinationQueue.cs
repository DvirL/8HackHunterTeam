using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using _8Hack.WebApi.Models.Common;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.Models.QueueManagement
{
    public class DestinationQueue
    {
        public Destination Destination { get; set; }
        public IEnumerable<UserDetails> Subscribers { get; set; }
    }
}