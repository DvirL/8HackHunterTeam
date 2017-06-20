using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Results;
using _8Hack.WebApi.DAL.Interfaces;
using _8Hack.WebApi.Models.Common;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.Controllers
{
    [RoutePrefix("api/users")]
    public class UserManagementController : ApiController, IUserManagementController
    {
        private IAccountStorage _accountsStorage;

        public UserManagementController(IAccountStorage accountsStorage)
        {
            _accountsStorage = accountsStorage;
        }

        [HttpPost]
        [Route("Register")]
        public AccountData Register(string name)
        {
            var newUserDetails = new UserDetails()
            {
                Id = Guid.NewGuid().ToString(),
                Name = name
            };
            var newAccount = new AccountData()
            {
                UserDetails = newUserDetails,
                SavedDestinations = new SavedDestinations()
                {
                    Home = new DestinationGroup()
                    {
                        Name = "Home",
                        Destinations = new List<Destination>()
                    },
                    Favourites = new List<DestinationGroup>()
                }
            };
            _accountsStorage.AddAccount(newAccount);
            return newAccount;
        }

        [HttpGet]
        [Route("User")]
        public AccountData GetAccountData([FromUri] string userId)
        {
            var savedDestinations = _accountsStorage.GetAccount(userId);
            return savedDestinations;
        }

        [HttpPost]
        [Route("SavedDestinations")]
        public bool UpdateSavedDestinations(string userId, SavedDestinations savedDestinations)
        {
            var isUpdateSuccessful = _accountsStorage.UpdateSavedDestinations(userId, savedDestinations);
            return isUpdateSuccessful;

        }
    }
}
