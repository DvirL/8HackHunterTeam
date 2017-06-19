using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using _8Hack.WebApi.DAL.Interfaces;
using _8Hack.WebApi.Models.Common;
using _8Hack.WebApi.Models.QueueManagement;

namespace _8Hack.WebApi.DAL.Implementations
{
    public class BasicQueueStorage : IQueueStorage
    {
        private IList<DestinationQueue> _queues;

        public DestinationQueue GetQueue(Destination destination)
        {
            var requestedQueue = _queues.FirstOrDefault(q => q.Destination.Id == destination.Id);
            return requestedQueue;
        }

        public IEnumerable<DestinationQueue> Queues
        {
            get { return new List<DestinationQueue>(_queues); }
        }

        public bool Subscribe(UserDetails userDetails, Destination destination)
        {
            var queueToRegister = _queues.FirstOrDefault(q => q.Destination.Id == destination.Id);
            if (queueToRegister == null)
            {
                return false;
            }
            queueToRegister.Subscribers.Add(userDetails);
            return true;
        }

        public bool Unsubscribe(UserDetails userDetails, Destination destination)
        {
            var queueToRemoveFrom = _queues.FirstOrDefault(q => q.Destination.Id == destination.Id);
            if (queueToRemoveFrom == null)
            {
                return false;
            }
            var removeSuccessful = queueToRemoveFrom.Subscribers.Remove(userDetails);
            return removeSuccessful;
        }
    }
}