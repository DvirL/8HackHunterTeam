using System.Collections.Generic;
using _8Hack.WebApi.Models.Common;
using _8Hack.WebApi.Models.QueueManagement;

namespace _8Hack.WebApi.DAL.Interfaces
{
    public interface IQueueStorage
    {
        DestinationQueue GetQueue(Destination destination);
        IEnumerable<DestinationQueue> Queues { get; }
        bool Subscribe(UserDetails userDetails, Destination destination);
        bool Unsubscribe(UserDetails userDetails, Destination destination);
    }
}