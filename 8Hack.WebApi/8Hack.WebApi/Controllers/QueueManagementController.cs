using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using _8Hack.WebApi.DAL.Interfaces;
using _8Hack.WebApi.Models.Common;
using _8Hack.WebApi.Models.QueueManagement;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.Controllers
{
    [RoutePrefix("api/queues")]
    public class QueueManagementController : ApiController, IQueueManagementController
    {
        private IQueueStorage _queueStorage;
        private IDestinationsStorage _destinationsStorage;
        private IAccountStorage _accountStorage;

        public QueueManagementController(IQueueStorage queueStorage, IDestinationsStorage destinationsStorage, IAccountStorage accountStorage)
        {
            _queueStorage = queueStorage;
            _destinationsStorage = destinationsStorage;
            _accountStorage = accountStorage;
        }

        [HttpGet]
        [Route("All")]
        public IEnumerable<Destination> GetAllDestinations()
        {
            // Return all destinations
            var destinations = _destinationsStorage.Destinations;
            return destinations;
        }

        [HttpGet]
        [Route("Queue")]
        public int GetPlaceInQueue(string destinationId, string userId)
        {
            // Get destination queue according to destinationId
            var requestedDestination = _destinationsStorage.GetDestination(destinationId);
            var requestedQueue = _queueStorage.GetQueue(requestedDestination);
            var subscribersIds = requestedQueue.Subscribers.Select(details => details.Id).ToList();
            var placeInQueue = subscribersIds.IndexOf(userId);
            return placeInQueue + 1;
        }

        [HttpGet]
        [Route("FullQueue")]
        public IEnumerable<UserDetails> GetQueue(string destinationId)
        {
            // Get destination queue according to destinationId
            var requestedDestination = _destinationsStorage.GetDestination(destinationId);
            var requestedQueue = _queueStorage.GetQueue(requestedDestination).Subscribers;
            return requestedQueue;
        }

        [HttpPost]
        [Route("Queue")]
        public bool RegisterToQueue(string userId, string destinationId)
        {
            // Get UserDetails using destinationId, and register UserDetails to the destinationQueue using the destinationId
            var userToSubscribe = _accountStorage.GetAccount(userId);
            var destinationToSubscribeTo = _destinationsStorage.GetDestination(destinationId);
            var subscribers = _queueStorage.GetQueue(destinationToSubscribeTo).Subscribers;
            var userAlreadySubscribed = subscribers.Select(details => details.Id).ToList().Contains(userId);
            if (userAlreadySubscribed)
            {
                return true;
            }
            var successfulyRegisteredToQueue = _queueStorage.Subscribe(userToSubscribe.UserDetails, destinationToSubscribeTo);
            return successfulyRegisteredToQueue;
        }

        [HttpDelete]
        [Route("Unsubscribe")]
        public bool DeleteFromQueue([FromUri] string userId, [FromUri] string destinationId)
        {
            // Remove UserDetails from DestinationQueue
            var userToUnsubscribe = _accountStorage.GetAccount(userId);
            var destinationToUnsubscribeFrom = _destinationsStorage.GetDestination(destinationId);
            var successfulyUnsubscribedFromQueue = _queueStorage.Unsubscribe(userToUnsubscribe.UserDetails, destinationToUnsubscribeFrom);
            return successfulyUnsubscribedFromQueue;
        }

        [HttpDelete]
        [Route("UnsubscribeAll")]
        public bool DeleteUserFromAllQueues([FromUri] string userId)
        {
            // Remove UserDetails from all DestinationQueues
            var userToUnsubscribe = _accountStorage.GetAccount(userId);
            var destinationsToUnsubscribeFrom =
                _queueStorage
                    .Queues
                    .Where(q => q.Subscribers.Select(s => s.Id == userId).Any())
                    .Select(q => q.Destination);

            var allUnsubscriptionsSuccessful = true;
            foreach (var destination in destinationsToUnsubscribeFrom)
            {
                var unsubscriptionSuccessful = _queueStorage.Unsubscribe(userToUnsubscribe.UserDetails, destination);
                if (unsubscriptionSuccessful == false)
                    allUnsubscriptionsSuccessful = false;
            }
            return allUnsubscriptionsSuccessful;
        }
    }
}
