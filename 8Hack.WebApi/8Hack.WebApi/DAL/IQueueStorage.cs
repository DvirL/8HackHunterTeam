using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using _8Hack.WebApi.Models.QueueManagement;

namespace _8Hack.WebApi.DAL
{
    public interface IQueueStorage
    {
        DestinationQueue GetQueue(string destinationId);
        IEnumerable<DestinationQueue> Queues { get; }
        bool Subscribe(string userId, string destinationId);
        bool Unsubscribe(string userId, string destinationId);
    }
}