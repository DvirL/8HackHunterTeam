using System.Collections.Generic;
using System.Web.Http;
using _8Hack.WebApi.Models.Common;
using _8Hack.WebApi.Models.QueueManagement;

namespace _8Hack.WebApi.Controllers
{
    public interface IQueueManagementController
    {
        IEnumerable<Destination> GetAllDestinations();
        DestinationQueue GetDestinationsQueue([FromUri] string destinationId);
        bool RegisterToQueue(string userId, string destinationId);
        bool DeleteFromQueue([FromUri] string userId, [FromUri] string destinationId);
        bool DeleteUserFromAllQueues([FromUri] string userId);
    }
}