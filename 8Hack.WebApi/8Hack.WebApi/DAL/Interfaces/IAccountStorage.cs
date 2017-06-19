using System.Collections.Generic;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.DAL.Interfaces
{
    public interface IAccountStorage
    {
        AccountData GetAccount(string userId);
        IEnumerable<AccountData> AllAccounts { get; }
        bool UpdateAccount(string userId, AccountData newAccount);
        bool AddAccount(AccountData newAccount);
    }
}