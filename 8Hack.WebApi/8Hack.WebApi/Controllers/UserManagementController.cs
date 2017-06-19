using System;
using System.Web.Http;
using System.Web.Http.Results;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.Controllers
{
    [RoutePrefix("/api/users")]
    public class UserManagementController : ApiController
    {
        // TODO:
        [Route("register")]
        [HttpGet]
        public bool Register(string username, string password)
        {
            // Save user logic
            throw new NotImplementedException();
        }

        [HttpGet]
        [Route("SavedDestinations")]
        public SavedDestinations GetSavedDestinations(Guid userGuid)
        {
            // Get saved destinations according to user by guid
            throw new NotImplementedException();
        }

        [HttpPost]
        [Route("SavedDestinations")]
        public bool UpdateSavedDestinations(Guid userGuid, SavedDestinations savedDestinations)
        {
            // Overwrite the saved destinatinos
            throw new NotImplementedException();
        }
    }
}
