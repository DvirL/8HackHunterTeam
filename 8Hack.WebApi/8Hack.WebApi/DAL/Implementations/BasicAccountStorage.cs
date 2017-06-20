using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Ajax.Utilities;
using _8Hack.WebApi.DAL.Interfaces;
using _8Hack.WebApi.Models.Common;
using _8Hack.WebApi.Models.UserManagement;

namespace _8Hack.WebApi.DAL.Implementations
{
    public class BasicAccountStorage : IAccountStorage
    {
        private IList<AccountData> _accounts;

        public BasicAccountStorage()
        {
            _accounts = new List<AccountData>();

            _accounts.Add(new AccountData()
            {
                UserDetails = new UserDetails()
                {
                    Id = "1234",
                    Name = "מרקו"
                },
                SavedDestinations = new SavedDestinations()
                {
                    Home = new DestinationGroup(),
                    Favourites = new List<DestinationGroup>()
                    {
                        new DestinationGroup()
                        {
                            Name = "אמא",
                            Destinations = new List<Destination>()
                            {
                                new Destination() { Id = "7", Name = "דן" },
                                new Destination() { Id = "6", Name = "אילת" },
                                new Destination() {Id = "1", Name = "רכבת תל אביב האוניברסיטה"}
                            }
                        }
                    }
                }
            });
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

        public bool UpdateSavedDestinations(string userId, SavedDestinations savedDestinations)
        {
            var account = _accounts.FirstOrDefault(ac => ac.UserDetails.Id == userId);
            if (account == null)
            {
                return false;
            }

            account.SavedDestinations = savedDestinations;
            return true;
        }

        public bool AddAccount(AccountData newAccount)
        {
            _accounts.Add(newAccount);
            return true;
        }
    }
}