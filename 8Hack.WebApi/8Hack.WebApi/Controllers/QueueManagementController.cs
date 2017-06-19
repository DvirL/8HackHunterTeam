using System;
using System.Collections;
using System.Collections.Generic;
using System.Web.Http;
using _8Hack.WebApi.Models.Common;
using _8Hack.WebApi.Models.QueueManagement;

namespace _8Hack.WebApi.Controllers
{
    [RoutePrefix("/api/queues")]
    public class QueueManagementController : ApiController
    {
        [HttpGet]
        [Route("/all")]
        public IEnumerable<Destination> GetAllDestinations()
        {
            // Return all destinations
            throw new NotImplementedException();
        }

        [HttpGet]
        public DestinationQueue GetDestinationsQueue([FromUri] string queueId)
        {
            // Get destination queue according to queueId
            throw new NotImplementedException();
        }

        [HttpPost]
        public IHttpActionResult RegisterToQueue(string userId, string queueId)
        {
            // Get UserDetails using queueId, and register UserDetails to the destinationQueue using the queueId
            throw new NotImplementedException();
        }

        [HttpDelete]
        public IHttpActionResult DeleteFromQueue([FromUri] string userId, [FromUri] string queueId)
        {
            // Remove UserDetails from DestinationQueue
            throw new NotImplementedException();
        }

        [HttpDelete]
        public IHttpActionResult DeleteUserFromAllQueues([FromUri] string userId)
        {
            // Remove UserDetails from all DestinationQueues
            throw new NotImplementedException();
        }
    }
}
