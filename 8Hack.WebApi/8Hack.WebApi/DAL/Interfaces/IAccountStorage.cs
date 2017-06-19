using System.Collections.Generic;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.DAL.Interfaces
{
    public interface IAccountStorage
    {
        AccountData GetAccount(string userId);
        IEnumerable<AccountData> AllAccounts { get; }
        bool UpdateSavedDestinations(string userId, SavedDestinations savedDestinations);
        bool AddAccount(AccountData newAccount);
    }
}