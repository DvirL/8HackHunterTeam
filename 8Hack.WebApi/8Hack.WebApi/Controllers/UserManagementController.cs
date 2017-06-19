using System;
using System.Web.Http;
using System.Web.Http.Results;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.Controllers
{
    [RoutePrefix("api/users")]
    public class UserManagementController : ApiController
    {
        [Route("Register")]
        [HttpPost]
        public AccountData Register(string username, string password)
        {
            // Save user logic
            throw new NotImplementedException();
        }

        [HttpGet]
        [Route("SavedDestinations")]
        public SavedDestinations GetSavedDestinations([FromUri] string userId)
        {
            // Get saved destinations according to user by guid
            throw new NotImplementedException();
        }

        [HttpPost]
        [Route("SavedDestinations")]
        public bool UpdateSavedDestinations(string userId, SavedDestinations savedDestinations)
        {
            // Overwrite the saved destinatinos
            throw new NotImplementedException();
        }
    }
}
