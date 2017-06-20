using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using _8Hack.WebApi.DAL.Interfaces;
using _8Hack.WebApi.Models.Common;
using _8Hack.WebApi.Models.QueueManagement;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.DAL.Implementations
{
    public class BasicQueueStorage : IQueueStorage
    {
        private IList<DestinationQueue> _queues;

        public BasicQueueStorage()
        {
            _queues = new List<DestinationQueue>();

            var marco = new UserDetails(){Id = "1234",Name = "מרקו"};
            var telAviv = new DestinationQueue(new Destination() {Id = "1", Name = "רכבת תל אביב האוניברסיטה"});
            var dan = new DestinationQueue(new Destination() {Id = "7", Name = "דן"});
            var eilat = new DestinationQueue(new Destination() {Id = "6", Name = "אילת"});
            telAviv.Subscribers.Add(marco);
            dan.Subscribers.Add(marco);
            eilat.Subscribers.Add(marco);
            _queues.Add(telAviv);
            _queues.Add(dan);
            _queues.Add(eilat);
        }



        public DestinationQueue GetQueue(Destination destination)
        {
            var requestedQueue = GetOrCreateAndAddDestinationQueue(destination);
            return requestedQueue;
        }

        public IEnumerable<DestinationQueue> Queues
        {
            get { return new List<DestinationQueue>(_queues); }
        }

        public bool Subscribe(UserDetails userDetails, Destination destination)
        {
            var queueToRegister = GetOrCreateAndAddDestinationQueue(destination);
            queueToRegister.Subscribers.Add(userDetails);
            return true;
        }

        public bool Unsubscribe(UserDetails userDetails, Destination destination)
        {
            var queueToRemoveFrom = GetOrCreateAndAddDestinationQueue(destination);
            var removeSuccessful = queueToRemoveFrom.Subscribers.Remove(userDetails);
            return removeSuccessful;
        }




        private DestinationQueue GetOrCreateAndAddDestinationQueue(Destination destination)
        {
            var requestedQueue = _queues.FirstOrDefault(q => q.Destination.Id == destination.Id);
            if (requestedQueue == null)
            {
                var newQueue = new DestinationQueue(destination);
                _queues.Add(newQueue);
                requestedQueue = newQueue;
            }
            return requestedQueue;
        }
    }
}