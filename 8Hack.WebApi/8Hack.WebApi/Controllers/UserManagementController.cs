using System.Web.Http;

namespace _8Hack.WebApi.Controllers
{
    [RoutePrefix("/api/users")]
    public class UserManagementController : ApiController
    {
        [HttpGet]
        public bool Register(string username, string password)
        {
            // 
        }
    }
}
