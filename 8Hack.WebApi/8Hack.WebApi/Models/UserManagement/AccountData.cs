using _8Hack.WebApi.Models.Common;

namespace _8Hack.WebApi.Models.UserManagement
{
    public class AccountData
    {
        public UserDetails User { get; set; }
        public SavedDestinations SavedDestinations { get; set; }
    }
}