using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Ajax.Utilities;
using _8Hack.WebApi.DAL.Interfaces;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.DAL.Implementations
{
    public class BasicAccountStorage : IAccountStorage
    {
        private IList<AccountData> _accounts;

        public BasicAccountStorage()
        {
            _accounts = new List<AccountData>();
        }

        public AccountData GetAccount(string userId)
        {
            var requestedAccount = _accounts.FirstOrDefault(account => account.UserDetails.Id == userId);
            return requestedAccount;
        }

        public IEnumerable<AccountData> AllAccounts
        {
            get { return new List<AccountData>(_accounts); }
        }

        public bool UpdateAccount(string userId, AccountData newAccount)
        {
            var account = _accounts.FirstOrDefault(ac => ac.UserDetails.Id == userId);
            if (account == null)
            {
                return false;
            }

            account.UserDetails.Name = newAccount.UserDetails.Name;
            account.SavedDestinations = newAccount.SavedDestinations;
            return true;
        }

        public bool AddAccount(AccountData newAccount)
        {
            _accounts.Add(newAccount);
            return true;
        }
    }
}