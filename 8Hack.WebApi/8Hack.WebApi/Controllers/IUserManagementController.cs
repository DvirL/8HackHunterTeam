using System.Web.Http;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.Controllers
{
    public interface IUserManagementController
    {
        AccountData Register(string name);
        AccountData GetAccountData([FromUri] string userId);
        bool UpdateSavedDestinations(string userId, SavedDestinations savedDestinations);
    }
}