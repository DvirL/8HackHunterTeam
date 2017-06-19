using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.DAL
{
    public interface IAccountStorage
    {
        AccountData GetAccount(string userId);
        IEnumerable<AccountData> AllAccounts { get; }
        bool AddOrUpdateAccount(string userId, AccountData newAccount);
    }
}